pragma solidity >=0.6.0 <0.7.0;

struct IndexValue {
    // unique identifier for the entry
    uint keyIndex;

    // bounty price offered
    uint price;

    address payable lowest_bidder;
    address payable next_lowest_bidder;

    // the currently-funded balance
    uint balance;

    // the address that asked for the bounty
    address payable poster;

    bool claimed;
    bool accepted;
    bool paid;

    // what the bounty is looking for
    string title;
    string description;
}

struct KeyFlag { uint key; bool deleted; }

struct itmap {
    mapping(uint => IndexValue) data;
    KeyFlag[] keys;
    uint size;
}

// IterableMapping library from the solidity docs.
library IterableMapping {
    function insert(itmap storage self, uint key, uint price, address payable poster, address payable lowest_bidder, address payable next_lowest_bidder, string memory title, string memory description, bool claimed, bool accepted, bool paid) internal returns (bool replaced) {
        uint keyIndex = self.data[key].keyIndex;
        self.data[key].price = price;
        self.data[key].lowest_bidder = lowest_bidder;
        self.data[key].next_lowest_bidder = next_lowest_bidder;
        self.data[key].balance = 0;
        self.data[key].poster = poster;
        self.data[key].title = title;
        self.data[key].description = description;
        self.data[key].claimed = claimed;
        self.data[key].accepted = accepted;
        self.data[key].paid = paid;
        if (keyIndex > 0)
            return true;
        else {
            self.keys.push();
            keyIndex = self.keys.length;
            self.data[key].keyIndex = keyIndex + 1;
            self.keys[keyIndex].key = key;
            self.size++;
            return false;
        }
    }

    function remove(itmap storage self, uint key) internal returns (bool success) {
        uint keyIndex = self.data[key].keyIndex;
        if (keyIndex == 0)
            return false;
        delete self.data[key];
        self.keys[keyIndex - 1].deleted = true;
        self.size--;
    }

    function contains(itmap storage self, uint key) internal view returns (bool) {
        return self.data[key].keyIndex > 0;
    }

    function iterate_start(itmap storage self) internal view returns (uint keyIndex) {
        return iterate_next(self, uint(-1));
    }

    function iterate_valid(itmap storage self, uint keyIndex) internal view returns (bool) {
        return keyIndex < self.keys.length;
    }

    function iterate_next(itmap storage self, uint keyIndex) internal view returns (uint r_keyIndex) {
        keyIndex++;
        while (keyIndex < self.keys.length && self.keys[keyIndex].deleted)
            keyIndex++;
        return keyIndex;
    }

    function iterate_get(itmap storage self, uint keyIndex) internal view returns (IndexValue memory value) {
        uint key = self.keys[keyIndex].key;
        uint price = self.data[key].price;
        address payable lowest_bidder = self.data[key].lowest_bidder;
        address payable next_lowest_bidder = self.data[key].next_lowest_bidder;
        uint balance = self.data[key].balance;
        address payable poster = self.data[key].poster;
        string memory title = self.data[key].title;
        string memory description = self.data[key].description;
        bool claimed = self.data[key].claimed;
        bool accepted = self.data[key].accepted;
        bool paid = self.data[key].paid;
        return IndexValue(key, price, lowest_bidder, next_lowest_bidder, balance, poster, claimed, accepted, paid, title, description);
    }
}

contract SupplyMesh {
    itmap data;
    using IterableMapping for itmap;

    uint max_key;

    function getAllRequests() public view returns (string memory) {
        string memory request_list;
        for (uint i = data.iterate_start(); data.iterate_valid(i); i = data.iterate_next(i)) {
            request_list = strConcat(request_list, getSingleRequestByKey(i), " ");
        }
        return request_list;
    }

    function getSingleRequestByKey(uint key) public view returns (string memory) {
        return serializeRequestObject(data.iterate_get(key));
    }

    function serializeRequestObject(IndexValue memory value) internal view returns (string memory) {

    }

    // Place a bid on a particular bounty
    function placeBidOnBounty(uint key, uint price) public returns (bool) {
        IndexValue memory bountyEntry = data.iterate_get(key);
        if (!bountyEntry.claimed && !bountyEntry.accepted && (price >=  bountyEntry.price)) {
            data.insert(max_key, price, bountyEntry.poster, msg.sender, bountyEntry.lowest_bidder, bountyEntry.title, bountyEntry.description, true, bountyEntry.accepted, bountyEntry.paid);
            return true;
        } else return false;
    }

    // Allows a receiving entity to accept a bid placed by an individual
    // Takes a bounty key number as an argument
    function acceptBidOnBounty(uint key) public returns (bool) {
        IndexValue memory bountyEntry = data.iterate_get(key);
        if (bountyEntry.claimed) {
            data.insert(max_key, bountyEntry.price, bountyEntry.poster, bountyEntry.lowest_bidder, bountyEntry.next_lowest_bidder, bountyEntry.title, bountyEntry.description, bountyEntry.claimed, true, bountyEntry.paid);
            return true;
        } else return false;
    }

    function rejectBidOnBounty(uint key) public returns (bool) {
        IndexValue memory bountyEntry = data.iterate_get(key);
        if (bountyEntry.claimed) {
            data.insert(max_key, bountyEntry.price, bountyEntry.poster, bountyEntry.next_lowest_bidder, bountyEntry.next_lowest_bidder, bountyEntry.title, bountyEntry.description, bountyEntry.claimed, false, bountyEntry.paid);
            return true;
        } else return false;
    }

    // The owner of a specific entity adds bounties to their list through this function.
    function addBountyForEntity(uint price, string memory title, string memory description) public returns (bool) {
        data.insert(max_key, price, msg.sender, msg.sender, msg.sender, title, description, false, false, false);
        max_key++;
        return true;
    }

    // Pays out the bounty to the accepted bid
    // Takes an address and a bounty key number as arguments
    function payBountyForEntity(uint key) public returns (bool) {
        IndexValue memory bountyEntry = data.iterate_get(key);
        if (!bountyEntry.paid && bountyEntry.claimed && bountyEntry.accepted) {
            bountyEntry.lowest_bidder.transfer(bountyEntry.price);
            return true;
        } else return false;
    }

    // Another individual can foot the bill for someone else's bounty
    // Takes an entity address and a volume of Ether as arguments
    function fundBountyForEntity(uint volume, uint key) public payable returns (bool) {
        IndexValue memory bountyEntry = data.iterate_get(key);
        if (bountyEntry.paid) {
            if (bountyEntry.balance + volume > bountyEntry.price) {
                bountyEntry.poster.transfer((bountyEntry.balance + volume) - bountyEntry.price);
                data.insert(max_key, bountyEntry.price, bountyEntry.poster, bountyEntry.lowest_bidder, bountyEntry.next_lowest_bidder, bountyEntry.title, bountyEntry.description, bountyEntry.claimed, bountyEntry.accepted, true);
                return true;
            } else {
                bountyEntry.poster.transfer(volume);
                return true;
            }
        } else return false;
    }

    function strConcat(string memory _a, string memory _b, string memory _c) internal pure returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        string memory abc = new string(_ba.length + _bb.length + _bc.length);
        bytes memory babcde = bytes(abc);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        for (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
        for (uint i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
        return string(babcde);
    }
}
