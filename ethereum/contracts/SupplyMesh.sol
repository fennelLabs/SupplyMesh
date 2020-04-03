pragma solidity >=0.6.0 <0.7.0;

struct IndexValue {
    // unique identifier for the entry
    uint keyIndex;

    // bounty price offered
    uint price;

    // the currently-funded balance
    uint balance;

    // the address that asked for the bounty
    address poster;

    // what the bounty is looking for
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
    function insert(itmap storage self, uint key, uint price, string storage description) internal returns (bool replaced) {
        uint keyIndex = self.data[key].keyIndex;
        self.data[key].price = price;
        self.data[key].balance = 0;
        self.data[key].poster = msg.sender;
        self.data[key].description = description;
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
        self.size --;
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

    function iterate_get(itmap storage self, uint keyIndex) internal view returns (uint key, uint price, uint balance, address poster, string storage description) {
        key = self.keys[keyIndex].key;
        price = self.data[key].price;
        balance = self.data[key].balance;
        poster = self.data[key].poster;
        description = self.data[key].description;
    }
}

contract SupplyMesh {
    itmap data;
    using IterableMapping for itmap;

    // Apply a bid for a particular bounty
    // Takes a bounty key number as an argument
    function markBidOnBounty(uint key) public returns (bool) {

    }

    // Allows a receiving entity to accept a bid placed by an individual
    // Takes a bounty key number as an argument
    function acceptBidOnBounty(uint key) public returns (bool) {

    }

    // The owner of a specific entity adds bounties to their list through this function.
    function addBountyForEntity(uint price, string memory description) public returns (bool) {

    }

    // Pays out the bounty to the accepted bid
    // Takes an address and a bounty key number as arguments
    function payBountyForEntity(address poster, uint key) public returns (bool) {

    }

    // Another individual can foot the bill for someone else's bounty
    // Takes an entity address and a volume of Ether as arguments
    function fundBountyForEntity(address poster, uint volume) public payable returns (bool) {

    }
}
