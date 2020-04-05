var address = '0x9E5662bEBd2102Ff803f0bf5D4a9F00b49C2C671'
var ABI = [
	{
		"contractName": "SupplyMesh",
		"abi": [
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "key",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"name": "placeBidOnBounty",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "key",
						"type": "uint256"
					}
				],
				"name": "acceptBidOnBounty",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "key",
						"type": "uint256"
					}
				],
				"name": "rejectBidOnBounty",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					}
				],
				"name": "addBountyForEntity",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "key",
						"type": "uint256"
					}
				],
				"name": "payBountyForEntity",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "volume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "key",
						"type": "uint256"
					}
				],
				"name": "fundBountyForEntity",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "payable",
				"type": "function"
			}
		],
		"metadata": "{\"compiler\":{\"version\":\"0.6.4+commit.1dca32f3\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"acceptBidOnBounty\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"}],\"name\":\"addBountyForEntity\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"volume\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"fundBountyForEntity\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"payBountyForEntity\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"key\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"placeBidOnBounty\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"key\",\"type\":\"uint256\"}],\"name\":\"rejectBidOnBounty\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/sean/Documents/engine/SupplyMesh/ethereum/contracts/SupplyMesh.sol\":\"SupplyMesh\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/sean/Documents/engine/SupplyMesh/ethereum/contracts/SupplyMesh.sol\":{\"keccak256\":\"0x4224706f4f96fddd91f9e5711da922cfbcf46a731d0ee552c4734175e63b986b\",\"urls\":[\"bzz-raw://8f067bc8baaa7acf01a326cb4281f51fde4033a94c5081cab17d4da913d01c75\",\"dweb:/ipfs/QmSSJAZBUcWGutR7X45Jrg8eEy9s2ihFQyup1Lo2eXrenW\"]}},\"version\":1}",
		"bytecode": "0x608060405234801561001057600080fd5b50610f98806100206000396000f3fe6080604052600436106100555760003560e01c806313d6a6f31461005a57806320ae5a62146100ad5780632996c5661461022e578063599c716a1461027e578063b4c81b7e146102d1578063dcd94dee1461032e575b600080fd5b34801561006657600080fd5b506100936004803603602081101561007d57600080fd5b8101908080359060200190929190505050610381565b604051808215151515815260200191505060405180910390f35b3480156100b957600080fd5b50610214600480360360608110156100d057600080fd5b8101908080359060200190929190803590602001906401000000008111156100f757600080fd5b82018360208201111561010957600080fd5b8035906020019184600183028401116401000000008311171561012b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561018e57600080fd5b8201836020820111156101a057600080fd5b803590602001918460018302840111640100000000831117156101c257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061042b565b604051808215151515815260200191505060405180910390f35b6102646004803603604081101561024457600080fd5b810190808035906020019092919080359060200190929190505050610474565b604051808215151515815260200191505060405180910390f35b34801561028a57600080fd5b506102b7600480360360208110156102a157600080fd5b81019080803590602001909291905050506105bf565b604051808215151515815260200191505060405180910390f35b3480156102dd57600080fd5b50610314600480360360408110156102f457600080fd5b81019080803590602001909291908035906020019092919050505061064b565b604051808215151515815260200191505060405180910390f35b34801561033a57600080fd5b506103676004803603602081101561035157600080fd5b81019080803590602001909291905050506106ef565b604051808215151515815260200191505060405180910390f35b600061038b610e1b565b61039f83600061077b90919063ffffffff16565b90508061010001511580156103b557508060c001515b80156103c257508060e001515b1561042057806040015173ffffffffffffffffffffffffffffffffffffffff166108fc82602001519081150290604051600060405180830381858888f19350505050158015610415573d6000803e3d6000fd5b506001915050610426565b60009150505b919050565b6000610456600354853333338888600080600080610b28909a9998979695949392919063ffffffff16565b50600360008154809291906001019190505550600190509392505050565b600061047e610e1b565b61049283600061077b90919063ffffffff16565b9050806101000151156105b357806020015184826080015101111561055e578060a0015173ffffffffffffffffffffffffffffffffffffffff166108fc826020015186846080015101039081150290604051600060405180830381858888f19350505050158015610507573d6000803e3d6000fd5b5061055360035482602001518360a00151846040015185606001518661012001518761014001518860c001518960e0015160016000610b28909a9998979695949392919063ffffffff16565b5060019150506105b9565b8060a0015173ffffffffffffffffffffffffffffffffffffffff166108fc859081150290604051600060405180830381858888f193505050501580156105a8573d6000803e3d6000fd5b5060019150506105b9565b60009150505b92915050565b60006105c9610e1b565b6105dd83600061077b90919063ffffffff16565b90508060c00151156106405761063560035482602001518360a00151846060015185606001518661012001518761014001518860c0015160008a61010001516000610b28909a9998979695949392919063ffffffff16565b506001915050610646565b60009150505b919050565b6000610655610e1b565b61066984600061077b90919063ffffffff16565b90508060c0015115801561067f57508060e00151155b801561068f575080602001518310155b156106e3576106d8600354848360a0015133856040015186610120015187610140015160018960e001518a61010001516000610b28909a9998979695949392919063ffffffff16565b5060019150506106e9565b60009150505b92915050565b60006106f9610e1b565b61070d83600061077b90919063ffffffff16565b90508060c00151156107705761076560035482602001518360a00151846040015185606001518661012001518761014001518860c0015160018a61010001516000610b28909a9998979695949392919063ffffffff16565b506001915050610776565b60009150505b919050565b610783610e1b565b600083600101838154811061079457fe5b90600052602060002090600202016000015490506000846000016000838152602001908152602001600020600101549050600085600001600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600086600001600085815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000876000016000868152602001908152602001600020600401549050600088600001600087815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060608960000160008881526020019081526020016000206006018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109475780601f1061091c57610100808354040283529160200191610947565b820191906000526020600020905b81548152906001019060200180831161092a57829003601f168201915b5050505050905060608a60000160008981526020019081526020016000206007018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109fc5780601f106109d1576101008083540402835291602001916109fc565b820191906000526020600020905b8154815290600101906020018083116109df57829003601f168201915b5050505050905060008b60000160008a815260200190815260200160002060050160149054906101000a900460ff16905060008c60000160008b815260200190815260200160002060050160159054906101000a900460ff16905060008d60000160008c815260200190815260200160002060050160169054906101000a900460ff1690506040518061016001604052808c81526020018b81526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001841515815260200183151581526020018215158152602001868152602001858152509b50505050505050505050505092915050565b6000808c60000160008d81526020019081526020016000206000015490508a8d60000160008e815260200190815260200160002060010181905550888d60000160008e815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550878d60000160008e815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008d60000160008e815260200190815260200160002060040181905550898d60000160008e815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550868d60000160008e81526020019081526020016000206006019080519060200190610cb2929190610ebd565b50858d60000160008e81526020019081526020016000206007019080519060200190610cdf929190610ebd565b50848d60000160008e815260200190815260200160002060050160146101000a81548160ff021916908315150217905550838d60000160008e815260200190815260200160002060050160156101000a81548160ff021916908315150217905550828d60000160008e815260200190815260200160002060050160166101000a81548160ff0219169083151502179055506000811115610d83576001915050610e0c565b8c600101600181600181540180825580915050039060005260206000209050508c600101805490509050600181018d60000160008e8152602001908152602001600020600001819055508b8d6001018281548110610ddd57fe5b9060005260206000209060020201600001819055508c6002016000815480929190600101919050555060009150505b9b9a5050505050505050505050565b6040518061016001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200160001515815260200160001515815260200160608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610efe57805160ff1916838001178555610f2c565b82800160010185558215610f2c579182015b82811115610f2b578251825591602001919060010190610f10565b5b509050610f399190610f3d565b5090565b610f5f91905b80821115610f5b576000816000905550600101610f43565b5090565b9056fea2646970667358221220d62011c851ca4dca3dbe3c41a19b724baba57c3155e6c020a9903387ac08097664736f6c63430006040033",
		"deployedBytecode": "0x6080604052600436106100555760003560e01c806313d6a6f31461005a57806320ae5a62146100ad5780632996c5661461022e578063599c716a1461027e578063b4c81b7e146102d1578063dcd94dee1461032e575b600080fd5b34801561006657600080fd5b506100936004803603602081101561007d57600080fd5b8101908080359060200190929190505050610381565b604051808215151515815260200191505060405180910390f35b3480156100b957600080fd5b50610214600480360360608110156100d057600080fd5b8101908080359060200190929190803590602001906401000000008111156100f757600080fd5b82018360208201111561010957600080fd5b8035906020019184600183028401116401000000008311171561012b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561018e57600080fd5b8201836020820111156101a057600080fd5b803590602001918460018302840111640100000000831117156101c257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061042b565b604051808215151515815260200191505060405180910390f35b6102646004803603604081101561024457600080fd5b810190808035906020019092919080359060200190929190505050610474565b604051808215151515815260200191505060405180910390f35b34801561028a57600080fd5b506102b7600480360360208110156102a157600080fd5b81019080803590602001909291905050506105bf565b604051808215151515815260200191505060405180910390f35b3480156102dd57600080fd5b50610314600480360360408110156102f457600080fd5b81019080803590602001909291908035906020019092919050505061064b565b604051808215151515815260200191505060405180910390f35b34801561033a57600080fd5b506103676004803603602081101561035157600080fd5b81019080803590602001909291905050506106ef565b604051808215151515815260200191505060405180910390f35b600061038b610e1b565b61039f83600061077b90919063ffffffff16565b90508061010001511580156103b557508060c001515b80156103c257508060e001515b1561042057806040015173ffffffffffffffffffffffffffffffffffffffff166108fc82602001519081150290604051600060405180830381858888f19350505050158015610415573d6000803e3d6000fd5b506001915050610426565b60009150505b919050565b6000610456600354853333338888600080600080610b28909a9998979695949392919063ffffffff16565b50600360008154809291906001019190505550600190509392505050565b600061047e610e1b565b61049283600061077b90919063ffffffff16565b9050806101000151156105b357806020015184826080015101111561055e578060a0015173ffffffffffffffffffffffffffffffffffffffff166108fc826020015186846080015101039081150290604051600060405180830381858888f19350505050158015610507573d6000803e3d6000fd5b5061055360035482602001518360a00151846040015185606001518661012001518761014001518860c001518960e0015160016000610b28909a9998979695949392919063ffffffff16565b5060019150506105b9565b8060a0015173ffffffffffffffffffffffffffffffffffffffff166108fc859081150290604051600060405180830381858888f193505050501580156105a8573d6000803e3d6000fd5b5060019150506105b9565b60009150505b92915050565b60006105c9610e1b565b6105dd83600061077b90919063ffffffff16565b90508060c00151156106405761063560035482602001518360a00151846060015185606001518661012001518761014001518860c0015160008a61010001516000610b28909a9998979695949392919063ffffffff16565b506001915050610646565b60009150505b919050565b6000610655610e1b565b61066984600061077b90919063ffffffff16565b90508060c0015115801561067f57508060e00151155b801561068f575080602001518310155b156106e3576106d8600354848360a0015133856040015186610120015187610140015160018960e001518a61010001516000610b28909a9998979695949392919063ffffffff16565b5060019150506106e9565b60009150505b92915050565b60006106f9610e1b565b61070d83600061077b90919063ffffffff16565b90508060c00151156107705761076560035482602001518360a00151846040015185606001518661012001518761014001518860c0015160018a61010001516000610b28909a9998979695949392919063ffffffff16565b506001915050610776565b60009150505b919050565b610783610e1b565b600083600101838154811061079457fe5b90600052602060002090600202016000015490506000846000016000838152602001908152602001600020600101549050600085600001600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600086600001600085815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000876000016000868152602001908152602001600020600401549050600088600001600087815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060608960000160008881526020019081526020016000206006018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109475780601f1061091c57610100808354040283529160200191610947565b820191906000526020600020905b81548152906001019060200180831161092a57829003601f168201915b5050505050905060608a60000160008981526020019081526020016000206007018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109fc5780601f106109d1576101008083540402835291602001916109fc565b820191906000526020600020905b8154815290600101906020018083116109df57829003601f168201915b5050505050905060008b60000160008a815260200190815260200160002060050160149054906101000a900460ff16905060008c60000160008b815260200190815260200160002060050160159054906101000a900460ff16905060008d60000160008c815260200190815260200160002060050160169054906101000a900460ff1690506040518061016001604052808c81526020018b81526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001841515815260200183151581526020018215158152602001868152602001858152509b50505050505050505050505092915050565b6000808c60000160008d81526020019081526020016000206000015490508a8d60000160008e815260200190815260200160002060010181905550888d60000160008e815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550878d60000160008e815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008d60000160008e815260200190815260200160002060040181905550898d60000160008e815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550868d60000160008e81526020019081526020016000206006019080519060200190610cb2929190610ebd565b50858d60000160008e81526020019081526020016000206007019080519060200190610cdf929190610ebd565b50848d60000160008e815260200190815260200160002060050160146101000a81548160ff021916908315150217905550838d60000160008e815260200190815260200160002060050160156101000a81548160ff021916908315150217905550828d60000160008e815260200190815260200160002060050160166101000a81548160ff0219169083151502179055506000811115610d83576001915050610e0c565b8c600101600181600181540180825580915050039060005260206000209050508c600101805490509050600181018d60000160008e8152602001908152602001600020600001819055508b8d6001018281548110610ddd57fe5b9060005260206000209060020201600001819055508c6002016000815480929190600101919050555060009150505b9b9a5050505050505050505050565b6040518061016001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815260200160001515815260200160001515815260200160608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610efe57805160ff1916838001178555610f2c565b82800160010185558215610f2c579182015b82811115610f2b578251825591602001919060010190610f10565b5b509050610f399190610f3d565b5090565b610f5f91905b80821115610f5b576000816000905550600101610f43565b5090565b9056fea2646970667358221220d62011c851ca4dca3dbe3c41a19b724baba57c3155e6c020a9903387ac08097664736f6c63430006040033",
		"sourceMap": "3589:3344:1:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3589:3344:1;;;;;;;",
		"deployedSourceMap": "3589:3344:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;5705:331:1;;5:9:-1;2:2;;;27:1;24;17:12;2:2;5705:331:1;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5705:331:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5320:271;;5:9:-1;2:2;;;27:1;24;17:12;2:2;5320:271:1;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5320:271:1;;;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;5320:271:1;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;5320:271:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5320:271:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;5320:271:1;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;5320:271:1;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;5320:271:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5320:271:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;5320:271:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6178:753;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;6178:753:1;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4780:445;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4780:445:1;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4780:445:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3730:478;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3730:478:1;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3730:478:1;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4335:439;;5:9:-1;2:2;;;27:1;24;17:12;2:2;4335:439:1;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4335:439:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5705:331;5759:4;5775:29;;:::i;:::-;5807:21;5824:3;5807:4;:16;;:21;;;;:::i;:::-;5775:53;;5843:11;:16;;;5842:17;:40;;;;;5863:11;:19;;;5842:40;:64;;;;;5886:11;:20;;;5842:64;5838:191;;;5922:11;:25;;;:34;;:53;5957:11;:17;;;5922:53;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5922:53:1;5996:4;5989:11;;;;;5838:191;6024:5;6017:12;;;5705:331;;;;:::o;5320:271::-;5424:4;5440:104;5452:7;;5461:5;5468:10;5480;5492;5504:5;5511:11;5524:5;5531;5538;5440:4;:11;;:104;;;;;;;;;;;;;:::i;:::-;;5554:7;;:9;;;;;;;;;;;;;5580:4;5573:11;;5320:271;;;;;:::o;6178:753::-;6254:4;6270:29;;:::i;:::-;6302:21;6319:3;6302:4;:16;;:21;;;;:::i;:::-;6270:53;;6337:11;:16;;;6333:591;;;6404:11;:17;;;6395:6;6373:11;:19;;;:28;:48;6369:527;;;6441:11;:18;;;:27;;:79;6502:11;:17;;;6492:6;6470:11;:19;;;:28;6469:50;6441:79;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6441:79:1;6538:211;6550:7;;6559:11;:17;;;6578:11;:18;;;6598:11;:25;;;6625:11;:30;;;6657:11;:17;;;6676:11;:23;;;6701:11;:19;;;6722:11;:20;;;6744:4;6538;:11;;:211;;;;;;;;;;;;;:::i;:::-;;6774:4;6767:11;;;;;6369:527;6817:11;:18;;;:27;;:35;6845:6;6817:35;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6817:35:1;6877:4;6870:11;;;;;6333:591;6919:5;6912:12;;;6178:753;;;;;:::o;4780:445::-;4833:4;4849:29;;:::i;:::-;4881:21;4898:3;4881:4;:16;;:21;;;;:::i;:::-;4849:53;;4916:11;:19;;;4912:306;;;4951:213;4963:7;;4972:11;:17;;;4991:11;:18;;;5011:11;:30;;;5043:11;:30;;;5075:11;:17;;;5094:11;:23;;;5119:11;:19;;;5140:5;5147:11;:16;;;4951:4;:11;;:213;;;;;;;;;;;;;:::i;:::-;;5185:4;5178:11;;;;;4912:306;5213:5;5206:12;;;4780:445;;;;:::o;3730:478::-;3794:4;3810:29;;:::i;:::-;3842:21;3859:3;3842:4;:16;;:21;;;;:::i;:::-;3810:53;;3878:11;:19;;;3877:20;:45;;;;;3902:11;:20;;;3901:21;3877:45;:78;;;;;3937:11;:17;;;3927:5;:27;;3877:78;3873:328;;;3971:176;3983:7;;3992:5;3999:11;:18;;;4019:10;4031:11;:25;;;4058:11;:17;;;4077:11;:23;;;4102:4;4108:11;:20;;;4130:11;:16;;;3971:4;:11;;:176;;;;;;;;;;;;;:::i;:::-;;4168:4;4161:11;;;;;3873:328;4196:5;4189:12;;;3730:478;;;;;:::o;4335:439::-;4388:4;4404:29;;:::i;:::-;4436:21;4453:3;4436:4;:16;;:21;;;;:::i;:::-;4404:53;;4471:11;:19;;;4467:300;;;4506:207;4518:7;;4527:11;:17;;;4546:11;:18;;;4566:11;:25;;;4593:11;:30;;;4625:11;:17;;;4644:11;:23;;;4669:11;:19;;;4690:4;4696:11;:16;;;4506:4;:11;;:207;;;;;;;;;;;;;:::i;:::-;;4734:4;4727:11;;;;;4467:300;4762:5;4755:12;;;4335:439;;;;:::o;2745:840::-;2824:23;;:::i;:::-;2859:8;2870:4;:9;;2880:8;2870:19;;;;;;;;;;;;;;;;;;:23;;;2859:34;;2903:10;2916:4;:9;;:14;2926:3;2916:14;;;;;;;;;;;:20;;;2903:33;;2946:29;2978:4;:9;;:14;2988:3;2978:14;;;;;;;;;;;:28;;;;;;;;;;;;2946:60;;3016:34;3053:4;:9;;:14;3063:3;3053:14;;;;;;;;;;;:33;;;;;;;;;;;;3016:70;;3096:12;3111:4;:9;;:14;3121:3;3111:14;;;;;;;;;;;:22;;;3096:37;;3143:22;3168:4;:9;;:14;3178:3;3168:14;;;;;;;;;;;:21;;;;;;;;;;;;3143:46;;3199:19;3221:4;:9;;:14;3231:3;3221:14;;;;;;;;;;;:20;;3199:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3251:25;3279:4;:9;;:14;3289:3;3279:14;;;;;;;;;;;:26;;3251:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3315:12;3330:4;:9;;:14;3340:3;3330:14;;;;;;;;;;;:22;;;;;;;;;;;;3315:37;;3362:13;3378:4;:9;;:14;3388:3;3378:14;;;;;;;;;;;:23;;;;;;;;;;;;3362:39;;3411:9;3423:4;:9;;:14;3433:3;3423:14;;;;;;;;;;;:19;;;;;;;;;;;;3411:31;;3459:119;;;;;;;;3470:3;3459:119;;;;3475:5;3459:119;;;;3482:13;3459:119;;;;;;3497:18;3459:119;;;;;;3517:7;3459:119;;;;3526:6;3459:119;;;;;;3534:7;3459:119;;;;;;3543:8;3459:119;;;;;;3553:4;3459:119;;;;;;3559:5;3459:119;;;;3566:11;3459:119;;;3452:126;;;;;;;;;;;;;2745:840;;;;:::o;714:1061::-;969:13;994;1010:4;:9;;:14;1020:3;1010:14;;;;;;;;;;;:23;;;994:39;;1066:5;1043:4;:9;;:14;1053:3;1043:14;;;;;;;;;;;:20;;:28;;;;1112:13;1081:4;:9;;:14;1091:3;1081:14;;;;;;;;;;;:28;;;:44;;;;;;;;;;;;;;;;;;1171:18;1135:4;:9;;:14;1145:3;1135:14;;;;;;;;;;;:33;;;:54;;;;;;;;;;;;;;;;;;1224:1;1199:4;:9;;:14;1209:3;1199:14;;;;;;;;;;;:22;;:26;;;;1259:6;1235:4;:9;;:14;1245:3;1235:14;;;;;;;;;;;:21;;;:30;;;;;;;;;;;;;;;;;;1298:5;1275:4;:9;;:14;1285:3;1275:14;;;;;;;;;;;:20;;:28;;;;;;;;;;;;:::i;:::-;;1342:11;1313:4;:9;;:14;1323:3;1313:14;;;;;;;;;;;:26;;:40;;;;;;;;;;;;:::i;:::-;;1388:7;1363:4;:9;;:14;1373:3;1363:14;;;;;;;;;;;:22;;;:32;;;;;;;;;;;;;;;;;;1431:8;1405:4;:9;;:14;1415:3;1405:14;;;;;;;;;;;:23;;;:34;;;;;;;;;;;;;;;;;;1471:4;1449;:9;;:14;1459:3;1449:14;;;;;;;;;;;:19;;;:26;;;;;;;;;;;;;;;;;;1500:1;1489:8;:12;1485:284;;;1522:4;1515:11;;;;;1485:284;1555:4;:9;;:16;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1555:16:1;;;;;;;;;;1596:4;:9;;:16;;;;1585:27;;1663:1;1652:8;:12;1626:4;:9;;:14;1636:3;1626:14;;;;;;;;;;;:23;;:38;;;;1704:3;1678:4;:9;;1688:8;1678:19;;;;;;;;;;;;;;;;;;:23;;:29;;;;1721:4;:9;;;:11;;;;;;;;;;;;;1753:5;1746:12;;;714:1061;;;;;;;;;;;;;;:::o;3589:3344::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
		"source": "pragma solidity >=0.6.0 <0.7.0;\n\nstruct IndexValue {\n    // unique identifier for the entry\n    uint keyIndex;\n\n    // bounty price offered\n    uint price;\n\n    address payable lowest_bidder;\n    address payable next_lowest_bidder;\n\n    // the currently-funded balance\n    uint balance;\n\n    // the address that asked for the bounty\n    address payable poster;\n\n    bool claimed;\n    bool accepted;\n    bool paid;\n\n    // what the bounty is looking for\n    string title;\n    string description;\n}\n\nstruct KeyFlag { uint key; bool deleted; }\n\nstruct itmap {\n    mapping(uint => IndexValue) data;\n    KeyFlag[] keys;\n    uint size;\n}\n\n// IterableMapping library from the solidity docs.\nlibrary IterableMapping {\n    function insert(itmap storage self, uint key, uint price, address payable poster, address payable lowest_bidder, address payable next_lowest_bidder, string memory title, string memory description, bool claimed, bool accepted, bool paid) internal returns (bool replaced) {\n        uint keyIndex = self.data[key].keyIndex;\n        self.data[key].price = price;\n        self.data[key].lowest_bidder = lowest_bidder;\n        self.data[key].next_lowest_bidder = next_lowest_bidder;\n        self.data[key].balance = 0;\n        self.data[key].poster = poster;\n        self.data[key].title = title;\n        self.data[key].description = description;\n        self.data[key].claimed = claimed;\n        self.data[key].accepted = accepted;\n        self.data[key].paid = paid;\n        if (keyIndex > 0)\n            return true;\n        else {\n            self.keys.push();\n            keyIndex = self.keys.length;\n            self.data[key].keyIndex = keyIndex + 1;\n            self.keys[keyIndex].key = key;\n            self.size++;\n            return false;\n        }\n    }\n\n    function remove(itmap storage self, uint key) internal returns (bool success) {\n        uint keyIndex = self.data[key].keyIndex;\n        if (keyIndex == 0)\n            return false;\n        delete self.data[key];\n        self.keys[keyIndex - 1].deleted = true;\n        self.size--;\n    }\n\n    function contains(itmap storage self, uint key) internal view returns (bool) {\n        return self.data[key].keyIndex > 0;\n    }\n\n    function iterate_start(itmap storage self) internal view returns (uint keyIndex) {\n        return iterate_next(self, uint(-1));\n    }\n\n    function iterate_valid(itmap storage self, uint keyIndex) internal view returns (bool) {\n        return keyIndex < self.keys.length;\n    }\n\n    function iterate_next(itmap storage self, uint keyIndex) internal view returns (uint r_keyIndex) {\n        keyIndex++;\n        while (keyIndex < self.keys.length && self.keys[keyIndex].deleted)\n            keyIndex++;\n        return keyIndex;\n    }\n\n    function iterate_get(itmap storage self, uint keyIndex) internal view returns (IndexValue memory value) {\n        uint key = self.keys[keyIndex].key;\n        uint price = self.data[key].price;\n        address payable lowest_bidder = self.data[key].lowest_bidder;\n        address payable next_lowest_bidder = self.data[key].next_lowest_bidder;\n        uint balance = self.data[key].balance;\n        address payable poster = self.data[key].poster;\n        string memory title = self.data[key].title;\n        string memory description = self.data[key].description;\n        bool claimed = self.data[key].claimed;\n        bool accepted = self.data[key].accepted;\n        bool paid = self.data[key].paid;\n        return IndexValue(key, price, lowest_bidder, next_lowest_bidder, balance, poster, claimed, accepted, paid, title, description);\n    }\n}\n\ncontract SupplyMesh {\n    itmap data;\n    using IterableMapping for itmap;\n\n    uint max_key;\n\n    // Place a bid on a particular bounty\n    function placeBidOnBounty(uint key, uint price) public returns (bool) {\n        IndexValue memory bountyEntry = data.iterate_get(key);\n        if (!bountyEntry.claimed && !bountyEntry.accepted && (price >=  bountyEntry.price)) {\n            data.insert(max_key, price, bountyEntry.poster, msg.sender, bountyEntry.lowest_bidder, bountyEntry.title, bountyEntry.description, true, bountyEntry.accepted, bountyEntry.paid);\n            return true;\n        } else return false;\n    }\n\n    // Allows a receiving entity to accept a bid placed by an individual\n    // Takes a bounty key number as an argument\n    function acceptBidOnBounty(uint key) public returns (bool) {\n        IndexValue memory bountyEntry = data.iterate_get(key);\n        if (bountyEntry.claimed) {\n            data.insert(max_key, bountyEntry.price, bountyEntry.poster, bountyEntry.lowest_bidder, bountyEntry.next_lowest_bidder, bountyEntry.title, bountyEntry.description, bountyEntry.claimed, true, bountyEntry.paid);\n            return true;\n        } else return false;\n    }\n\n    function rejectBidOnBounty(uint key) public returns (bool) {\n        IndexValue memory bountyEntry = data.iterate_get(key);\n        if (bountyEntry.claimed) {\n            data.insert(max_key, bountyEntry.price, bountyEntry.poster, bountyEntry.next_lowest_bidder, bountyEntry.next_lowest_bidder, bountyEntry.title, bountyEntry.description, bountyEntry.claimed, false, bountyEntry.paid);\n            return true;\n        } else return false;\n    }\n\n    // The owner of a specific entity adds bounties to their list through this function.\n    function addBountyForEntity(uint price, string memory title, string memory description) public returns (bool) {\n        data.insert(max_key, price, msg.sender, msg.sender, msg.sender, title, description, false, false, false);\n        max_key++;\n        return true;\n    }\n\n    // Pays out the bounty to the accepted bid\n    // Takes an address and a bounty key number as arguments\n    function payBountyForEntity(uint key) public returns (bool) {\n        IndexValue memory bountyEntry = data.iterate_get(key);\n        if (!bountyEntry.paid && bountyEntry.claimed && bountyEntry.accepted) {\n            bountyEntry.lowest_bidder.transfer(bountyEntry.price);\n            return true;\n        } else return false;\n    }\n\n    // Another individual can foot the bill for someone else's bounty\n    // Takes an entity address and a volume of Ether as arguments\n    function fundBountyForEntity(uint volume, uint key) public payable returns (bool) {\n        IndexValue memory bountyEntry = data.iterate_get(key);\n        if (bountyEntry.paid) {\n            if (bountyEntry.balance + volume > bountyEntry.price) {\n                bountyEntry.poster.transfer((bountyEntry.balance + volume) - bountyEntry.price);\n                data.insert(max_key, bountyEntry.price, bountyEntry.poster, bountyEntry.lowest_bidder, bountyEntry.next_lowest_bidder, bountyEntry.title, bountyEntry.description, bountyEntry.claimed, bountyEntry.accepted, true);\n                return true;\n            } else {\n                bountyEntry.poster.transfer(volume);\n                return true;\n            }\n        } else return false;\n    }\n}\n",
		"sourcePath": "/home/sean/Documents/engine/SupplyMesh/ethereum/contracts/SupplyMesh.sol",
		"ast": {
			"absolutePath": "/home/sean/Documents/engine/SupplyMesh/ethereum/contracts/SupplyMesh.sol",
			"exportedSymbols": {
				"IndexValue": [
					61
				],
				"IterableMapping": [
					489
				],
				"KeyFlag": [
					66
				],
				"SupplyMesh": [
					804
				],
				"itmap": [
					76
				]
			},
			"id": 805,
			"nodeType": "SourceUnit",
			"nodes": [
				{
					"id": 38,
					"literals": [
						"solidity",
						">=",
						"0.6",
						".0",
						"<",
						"0.7",
						".0"
					],
					"nodeType": "PragmaDirective",
					"src": "0:31:1"
				},
				{
					"canonicalName": "IndexValue",
					"id": 61,
					"members": [
						{
							"constant": false,
							"id": 40,
							"name": "keyIndex",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "96:13:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 39,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "96:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 42,
							"name": "price",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "144:10:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 41,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "144:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 44,
							"name": "lowest_bidder",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "161:29:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							},
							"typeName": {
								"id": 43,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "161:15:1",
								"stateMutability": "payable",
								"typeDescriptions": {
									"typeIdentifier": "t_address_payable",
									"typeString": "address payable"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 46,
							"name": "next_lowest_bidder",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "196:34:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							},
							"typeName": {
								"id": 45,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "196:15:1",
								"stateMutability": "payable",
								"typeDescriptions": {
									"typeIdentifier": "t_address_payable",
									"typeString": "address payable"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 48,
							"name": "balance",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "273:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 47,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "273:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 50,
							"name": "poster",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "337:22:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							},
							"typeName": {
								"id": 49,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "337:15:1",
								"stateMutability": "payable",
								"typeDescriptions": {
									"typeIdentifier": "t_address_payable",
									"typeString": "address payable"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 52,
							"name": "claimed",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "366:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 51,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "366:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 54,
							"name": "accepted",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "384:13:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 53,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "384:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 56,
							"name": "paid",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "403:9:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 55,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "403:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 58,
							"name": "title",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "457:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_string_storage_ptr",
								"typeString": "string"
							},
							"typeName": {
								"id": 57,
								"name": "string",
								"nodeType": "ElementaryTypeName",
								"src": "457:6:1",
								"typeDescriptions": {
									"typeIdentifier": "t_string_storage_ptr",
									"typeString": "string"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 60,
							"name": "description",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "475:18:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_string_storage_ptr",
								"typeString": "string"
							},
							"typeName": {
								"id": 59,
								"name": "string",
								"nodeType": "ElementaryTypeName",
								"src": "475:6:1",
								"typeDescriptions": {
									"typeIdentifier": "t_string_storage_ptr",
									"typeString": "string"
								}
							},
							"value": null,
							"visibility": "internal"
						}
					],
					"name": "IndexValue",
					"nodeType": "StructDefinition",
					"scope": 805,
					"src": "33:463:1",
					"visibility": "public"
				},
				{
					"canonicalName": "KeyFlag",
					"id": 66,
					"members": [
						{
							"constant": false,
							"id": 63,
							"name": "key",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 66,
							"src": "515:8:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 62,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "515:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 65,
							"name": "deleted",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 66,
							"src": "525:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 64,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "525:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						}
					],
					"name": "KeyFlag",
					"nodeType": "StructDefinition",
					"scope": 805,
					"src": "498:42:1",
					"visibility": "public"
				},
				{
					"canonicalName": "itmap",
					"id": 76,
					"members": [
						{
							"constant": false,
							"id": 70,
							"name": "data",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 76,
							"src": "561:32:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
								"typeString": "mapping(uint256 => struct IndexValue)"
							},
							"typeName": {
								"id": 69,
								"keyType": {
									"id": 67,
									"name": "uint",
									"nodeType": "ElementaryTypeName",
									"src": "569:4:1",
									"typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									}
								},
								"nodeType": "Mapping",
								"src": "561:27:1",
								"typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
									"typeString": "mapping(uint256 => struct IndexValue)"
								},
								"valueType": {
									"contractScope": null,
									"id": 68,
									"name": "IndexValue",
									"nodeType": "UserDefinedTypeName",
									"referencedDeclaration": 61,
									"src": "577:10:1",
									"typeDescriptions": {
										"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
										"typeString": "struct IndexValue"
									}
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 73,
							"name": "keys",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 76,
							"src": "599:14:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage_ptr",
								"typeString": "struct KeyFlag[]"
							},
							"typeName": {
								"baseType": {
									"contractScope": null,
									"id": 71,
									"name": "KeyFlag",
									"nodeType": "UserDefinedTypeName",
									"referencedDeclaration": 66,
									"src": "599:7:1",
									"typeDescriptions": {
										"typeIdentifier": "t_struct$_KeyFlag_$66_storage_ptr",
										"typeString": "struct KeyFlag"
									}
								},
								"id": 72,
								"length": null,
								"nodeType": "ArrayTypeName",
								"src": "599:9:1",
								"typeDescriptions": {
									"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage_ptr",
									"typeString": "struct KeyFlag[]"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 75,
							"name": "size",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 76,
							"src": "619:9:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 74,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "619:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						}
					],
					"name": "itmap",
					"nodeType": "StructDefinition",
					"scope": 805,
					"src": "542:89:1",
					"visibility": "public"
				},
				{
					"abstract": false,
					"baseContracts": [],
					"contractDependencies": [],
					"contractKind": "library",
					"documentation": null,
					"fullyImplemented": true,
					"id": 489,
					"linearizedBaseContracts": [
						489
					],
					"name": "IterableMapping",
					"nodeType": "ContractDefinition",
					"nodes": [
						{
							"body": {
								"id": 248,
								"nodeType": "Block",
								"src": "984:791:1",
								"statements": [
									{
										"assignments": [
											104
										],
										"declarations": [
											{
												"constant": false,
												"id": 104,
												"name": "keyIndex",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 248,
												"src": "994:13:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 103,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "994:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 110,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 105,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 78,
														"src": "1010:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 106,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "1010:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 108,
												"indexExpression": {
													"argumentTypes": null,
													"id": 107,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 80,
													"src": "1020:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "1010:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 109,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "keyIndex",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 40,
											"src": "1010:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "994:39:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 118,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 111,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1043:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 114,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1043:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 115,
													"indexExpression": {
														"argumentTypes": null,
														"id": 113,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1053:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1043:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 116,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "price",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 42,
												"src": "1043:20:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 117,
												"name": "price",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 82,
												"src": "1066:5:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"src": "1043:28:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 119,
										"nodeType": "ExpressionStatement",
										"src": "1043:28:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 127,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 120,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1081:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 123,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1081:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 124,
													"indexExpression": {
														"argumentTypes": null,
														"id": 122,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1091:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1081:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 125,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "lowest_bidder",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 44,
												"src": "1081:28:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 126,
												"name": "lowest_bidder",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 86,
												"src": "1112:13:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"src": "1081:44:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"id": 128,
										"nodeType": "ExpressionStatement",
										"src": "1081:44:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 136,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 129,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1135:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 132,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1135:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 133,
													"indexExpression": {
														"argumentTypes": null,
														"id": 131,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1145:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1135:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 134,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "next_lowest_bidder",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 46,
												"src": "1135:33:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 135,
												"name": "next_lowest_bidder",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 88,
												"src": "1171:18:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"src": "1135:54:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"id": 137,
										"nodeType": "ExpressionStatement",
										"src": "1135:54:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 145,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 138,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1199:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 141,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1199:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 142,
													"indexExpression": {
														"argumentTypes": null,
														"id": 140,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1209:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1199:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 143,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "balance",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 48,
												"src": "1199:22:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 144,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1224:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "1199:26:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 146,
										"nodeType": "ExpressionStatement",
										"src": "1199:26:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 154,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 147,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1235:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 150,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1235:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 151,
													"indexExpression": {
														"argumentTypes": null,
														"id": 149,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1245:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1235:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 152,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "poster",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 50,
												"src": "1235:21:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 153,
												"name": "poster",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 84,
												"src": "1259:6:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"src": "1235:30:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"id": 155,
										"nodeType": "ExpressionStatement",
										"src": "1235:30:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 163,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 156,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1275:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 159,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1275:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 160,
													"indexExpression": {
														"argumentTypes": null,
														"id": 158,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1285:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1275:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 161,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "title",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 58,
												"src": "1275:20:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_storage",
													"typeString": "string storage ref"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 162,
												"name": "title",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 90,
												"src": "1298:5:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string memory"
												}
											},
											"src": "1275:28:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"id": 164,
										"nodeType": "ExpressionStatement",
										"src": "1275:28:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 172,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 165,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1313:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 168,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1313:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 169,
													"indexExpression": {
														"argumentTypes": null,
														"id": 167,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1323:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1313:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 170,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "description",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 60,
												"src": "1313:26:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_storage",
													"typeString": "string storage ref"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 171,
												"name": "description",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 92,
												"src": "1342:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string memory"
												}
											},
											"src": "1313:40:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"id": 173,
										"nodeType": "ExpressionStatement",
										"src": "1313:40:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 181,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 174,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1363:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 177,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1363:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 178,
													"indexExpression": {
														"argumentTypes": null,
														"id": 176,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1373:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1363:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 179,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "claimed",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 52,
												"src": "1363:22:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 180,
												"name": "claimed",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 94,
												"src": "1388:7:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "1363:32:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 182,
										"nodeType": "ExpressionStatement",
										"src": "1363:32:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 190,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 183,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1405:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 186,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1405:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 187,
													"indexExpression": {
														"argumentTypes": null,
														"id": 185,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1415:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1405:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 188,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "accepted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 54,
												"src": "1405:23:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 189,
												"name": "accepted",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 96,
												"src": "1431:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "1405:34:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 191,
										"nodeType": "ExpressionStatement",
										"src": "1405:34:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 199,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 192,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1449:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 195,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1449:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 196,
													"indexExpression": {
														"argumentTypes": null,
														"id": 194,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1459:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1449:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 197,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "paid",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 56,
												"src": "1449:19:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 198,
												"name": "paid",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 98,
												"src": "1471:4:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "1449:26:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 200,
										"nodeType": "ExpressionStatement",
										"src": "1449:26:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 203,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"id": 201,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 104,
												"src": "1489:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": ">",
											"rightExpression": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 202,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1500:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "1489:12:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"id": 246,
											"nodeType": "Block",
											"src": "1541:228:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [],
														"expression": {
															"argumentTypes": [],
															"expression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 206,
																	"name": "self",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 78,
																	"src": "1555:4:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																		"typeString": "struct itmap storage pointer"
																	}
																},
																"id": 209,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "keys",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 73,
																"src": "1555:9:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
																	"typeString": "struct KeyFlag storage ref[] storage ref"
																}
															},
															"id": 210,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "push",
															"nodeType": "MemberAccess",
															"referencedDeclaration": null,
															"src": "1555:14:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_arraypush_nonpayable$__$returns$_t_struct$_KeyFlag_$66_storage_$",
																"typeString": "function () returns (struct KeyFlag storage ref)"
															}
														},
														"id": 211,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "1555:16:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
															"typeString": "struct KeyFlag storage ref"
														}
													},
													"id": 212,
													"nodeType": "ExpressionStatement",
													"src": "1555:16:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 217,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftHandSide": {
															"argumentTypes": null,
															"id": 213,
															"name": "keyIndex",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 104,
															"src": "1585:8:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "Assignment",
														"operator": "=",
														"rightHandSide": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 214,
																	"name": "self",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 78,
																	"src": "1596:4:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																		"typeString": "struct itmap storage pointer"
																	}
																},
																"id": 215,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "keys",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 73,
																"src": "1596:9:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
																	"typeString": "struct KeyFlag storage ref[] storage ref"
																}
															},
															"id": 216,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "length",
															"nodeType": "MemberAccess",
															"referencedDeclaration": null,
															"src": "1596:16:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "1585:27:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 218,
													"nodeType": "ExpressionStatement",
													"src": "1585:27:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 228,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftHandSide": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"baseExpression": {
																	"argumentTypes": null,
																	"expression": {
																		"argumentTypes": null,
																		"id": 219,
																		"name": "self",
																		"nodeType": "Identifier",
																		"overloadedDeclarations": [],
																		"referencedDeclaration": 78,
																		"src": "1626:4:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																			"typeString": "struct itmap storage pointer"
																		}
																	},
																	"id": 222,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"memberName": "data",
																	"nodeType": "MemberAccess",
																	"referencedDeclaration": 70,
																	"src": "1626:9:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
																		"typeString": "mapping(uint256 => struct IndexValue storage ref)"
																	}
																},
																"id": 223,
																"indexExpression": {
																	"argumentTypes": null,
																	"id": 221,
																	"name": "key",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 80,
																	"src": "1636:3:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_uint256",
																		"typeString": "uint256"
																	}
																},
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"nodeType": "IndexAccess",
																"src": "1626:14:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_IndexValue_$61_storage",
																	"typeString": "struct IndexValue storage ref"
																}
															},
															"id": 224,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"memberName": "keyIndex",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 40,
															"src": "1626:23:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "Assignment",
														"operator": "=",
														"rightHandSide": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															},
															"id": 227,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"leftExpression": {
																"argumentTypes": null,
																"id": 225,
																"name": "keyIndex",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 104,
																"src": "1652:8:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															"nodeType": "BinaryOperation",
															"operator": "+",
															"rightExpression": {
																"argumentTypes": null,
																"hexValue": "31",
																"id": 226,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "number",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "1663:1:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_rational_1_by_1",
																	"typeString": "int_const 1"
																},
																"value": "1"
															},
															"src": "1652:12:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "1626:38:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 229,
													"nodeType": "ExpressionStatement",
													"src": "1626:38:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 237,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftHandSide": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"baseExpression": {
																	"argumentTypes": null,
																	"expression": {
																		"argumentTypes": null,
																		"id": 230,
																		"name": "self",
																		"nodeType": "Identifier",
																		"overloadedDeclarations": [],
																		"referencedDeclaration": 78,
																		"src": "1678:4:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																			"typeString": "struct itmap storage pointer"
																		}
																	},
																	"id": 233,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"memberName": "keys",
																	"nodeType": "MemberAccess",
																	"referencedDeclaration": 73,
																	"src": "1678:9:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
																		"typeString": "struct KeyFlag storage ref[] storage ref"
																	}
																},
																"id": 234,
																"indexExpression": {
																	"argumentTypes": null,
																	"id": 232,
																	"name": "keyIndex",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 104,
																	"src": "1688:8:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_uint256",
																		"typeString": "uint256"
																	}
																},
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"nodeType": "IndexAccess",
																"src": "1678:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
																	"typeString": "struct KeyFlag storage ref"
																}
															},
															"id": 235,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"memberName": "key",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 63,
															"src": "1678:23:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "Assignment",
														"operator": "=",
														"rightHandSide": {
															"argumentTypes": null,
															"id": 236,
															"name": "key",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 80,
															"src": "1704:3:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "1678:29:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 238,
													"nodeType": "ExpressionStatement",
													"src": "1678:29:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 242,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"nodeType": "UnaryOperation",
														"operator": "++",
														"prefix": false,
														"src": "1721:11:1",
														"subExpression": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"id": 239,
																"name": "self",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 78,
																"src": "1721:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																	"typeString": "struct itmap storage pointer"
																}
															},
															"id": 241,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"memberName": "size",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 75,
															"src": "1721:9:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 243,
													"nodeType": "ExpressionStatement",
													"src": "1721:11:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "66616c7365",
														"id": 244,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "1753:5:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "false"
													},
													"functionReturnParameters": 102,
													"id": 245,
													"nodeType": "Return",
													"src": "1746:12:1"
												}
											]
										},
										"id": 247,
										"nodeType": "IfStatement",
										"src": "1485:284:1",
										"trueBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "74727565",
												"id": 204,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1522:4:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "true"
											},
											"functionReturnParameters": 102,
											"id": 205,
											"nodeType": "Return",
											"src": "1515:11:1"
										}
									}
								]
							},
							"documentation": null,
							"id": 249,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "insert",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 99,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 78,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "730:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 77,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "730:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 80,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "750:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 79,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "750:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 82,
										"name": "price",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "760:10:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 81,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "760:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 84,
										"name": "poster",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "772:22:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_address_payable",
											"typeString": "address payable"
										},
										"typeName": {
											"id": 83,
											"name": "address",
											"nodeType": "ElementaryTypeName",
											"src": "772:15:1",
											"stateMutability": "payable",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 86,
										"name": "lowest_bidder",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "796:29:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_address_payable",
											"typeString": "address payable"
										},
										"typeName": {
											"id": 85,
											"name": "address",
											"nodeType": "ElementaryTypeName",
											"src": "796:15:1",
											"stateMutability": "payable",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 88,
										"name": "next_lowest_bidder",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "827:34:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_address_payable",
											"typeString": "address payable"
										},
										"typeName": {
											"id": 87,
											"name": "address",
											"nodeType": "ElementaryTypeName",
											"src": "827:15:1",
											"stateMutability": "payable",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 90,
										"name": "title",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "863:19:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 89,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "863:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 92,
										"name": "description",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "884:25:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 91,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "884:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 94,
										"name": "claimed",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "911:12:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 93,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "911:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 96,
										"name": "accepted",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "925:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 95,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "925:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 98,
										"name": "paid",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "940:9:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 97,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "940:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "729:221:1"
							},
							"returnParameters": {
								"id": 102,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 101,
										"name": "replaced",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "969:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 100,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "969:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "968:15:1"
							},
							"scope": 489,
							"src": "714:1061:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 294,
								"nodeType": "Block",
								"src": "1859:209:1",
								"statements": [
									{
										"assignments": [
											259
										],
										"declarations": [
											{
												"constant": false,
												"id": 259,
												"name": "keyIndex",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 294,
												"src": "1869:13:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 258,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "1869:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 265,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 260,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 251,
														"src": "1885:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 261,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "1885:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 263,
												"indexExpression": {
													"argumentTypes": null,
													"id": 262,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 253,
													"src": "1895:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "1885:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 264,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "keyIndex",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 40,
											"src": "1885:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "1869:39:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 268,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"id": 266,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 259,
												"src": "1922:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "==",
											"rightExpression": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 267,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1934:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "1922:13:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": null,
										"id": 271,
										"nodeType": "IfStatement",
										"src": "1918:43:1",
										"trueBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 269,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1956:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 257,
											"id": 270,
											"nodeType": "Return",
											"src": "1949:12:1"
										}
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 276,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "delete",
											"prefix": true,
											"src": "1971:21:1",
											"subExpression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 272,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 251,
														"src": "1978:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 273,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "1978:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 275,
												"indexExpression": {
													"argumentTypes": null,
													"id": 274,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 253,
													"src": "1988:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"nodeType": "IndexAccess",
												"src": "1978:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_tuple$__$",
												"typeString": "tuple()"
											}
										},
										"id": 277,
										"nodeType": "ExpressionStatement",
										"src": "1971:21:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 287,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 278,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 251,
															"src": "2002:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 283,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "keys",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 73,
														"src": "2002:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
															"typeString": "struct KeyFlag storage ref[] storage ref"
														}
													},
													"id": 284,
													"indexExpression": {
														"argumentTypes": null,
														"commonType": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														},
														"id": 282,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftExpression": {
															"argumentTypes": null,
															"id": 280,
															"name": "keyIndex",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 259,
															"src": "2012:8:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "BinaryOperation",
														"operator": "-",
														"rightExpression": {
															"argumentTypes": null,
															"hexValue": "31",
															"id": 281,
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"kind": "number",
															"lValueRequested": false,
															"nodeType": "Literal",
															"src": "2023:1:1",
															"subdenomination": null,
															"typeDescriptions": {
																"typeIdentifier": "t_rational_1_by_1",
																"typeString": "int_const 1"
															},
															"value": "1"
														},
														"src": "2012:12:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "2002:23:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
														"typeString": "struct KeyFlag storage ref"
													}
												},
												"id": 285,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "deleted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 65,
												"src": "2002:31:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"hexValue": "74727565",
												"id": 286,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "2036:4:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "true"
											},
											"src": "2002:38:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 288,
										"nodeType": "ExpressionStatement",
										"src": "2002:38:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 292,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "--",
											"prefix": false,
											"src": "2050:11:1",
											"subExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"id": 289,
													"name": "self",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 251,
													"src": "2050:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
														"typeString": "struct itmap storage pointer"
													}
												},
												"id": 291,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "size",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 75,
												"src": "2050:9:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 293,
										"nodeType": "ExpressionStatement",
										"src": "2050:11:1"
									}
								]
							},
							"documentation": null,
							"id": 295,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "remove",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 254,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 251,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 295,
										"src": "1797:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 250,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "1797:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 253,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 295,
										"src": "1817:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 252,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "1817:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "1796:30:1"
							},
							"returnParameters": {
								"id": 257,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 256,
										"name": "success",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 295,
										"src": "1845:12:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 255,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "1845:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "1844:14:1"
							},
							"scope": 489,
							"src": "1781:287:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 312,
								"nodeType": "Block",
								"src": "2151:51:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 310,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 304,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 297,
															"src": "2168:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 305,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "2168:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 307,
													"indexExpression": {
														"argumentTypes": null,
														"id": 306,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 299,
														"src": "2178:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "2168:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 308,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "keyIndex",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 40,
												"src": "2168:23:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": ">",
											"rightExpression": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 309,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "2194:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "2168:27:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"functionReturnParameters": 303,
										"id": 311,
										"nodeType": "Return",
										"src": "2161:34:1"
									}
								]
							},
							"documentation": null,
							"id": 313,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "contains",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 300,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 297,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 313,
										"src": "2092:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 296,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2092:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 299,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 313,
										"src": "2112:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 298,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2112:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2091:30:1"
							},
							"returnParameters": {
								"id": 303,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 302,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 313,
										"src": "2145:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 301,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "2145:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2144:6:1"
							},
							"scope": 489,
							"src": "2074:128:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 329,
								"nodeType": "Block",
								"src": "2289:52:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 321,
													"name": "self",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 315,
													"src": "2319:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
														"typeString": "struct itmap storage pointer"
													}
												},
												{
													"argumentTypes": null,
													"arguments": [
														{
															"argumentTypes": null,
															"id": 325,
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"lValueRequested": false,
															"nodeType": "UnaryOperation",
															"operator": "-",
															"prefix": true,
															"src": "2330:2:1",
															"subExpression": {
																"argumentTypes": null,
																"hexValue": "31",
																"id": 324,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "number",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "2331:1:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_rational_1_by_1",
																	"typeString": "int_const 1"
																},
																"value": "1"
															},
															"typeDescriptions": {
																"typeIdentifier": "t_rational_minus_1_by_1",
																"typeString": "int_const -1"
															}
														}
													],
													"expression": {
														"argumentTypes": [
															{
																"typeIdentifier": "t_rational_minus_1_by_1",
																"typeString": "int_const -1"
															}
														],
														"id": 323,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"lValueRequested": false,
														"nodeType": "ElementaryTypeNameExpression",
														"src": "2325:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_type$_t_uint256_$",
															"typeString": "type(uint256)"
														},
														"typeName": {
															"id": 322,
															"name": "uint",
															"nodeType": "ElementaryTypeName",
															"src": "2325:4:1",
															"typeDescriptions": {
																"typeIdentifier": null,
																"typeString": null
															}
														}
													},
													"id": 326,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "typeConversion",
													"lValueRequested": false,
													"names": [],
													"nodeType": "FunctionCall",
													"src": "2325:8:1",
													"tryCall": false,
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
														"typeString": "struct itmap storage pointer"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"id": 320,
												"name": "iterate_next",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 376,
												"src": "2306:12:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_uint256_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (uint256)"
												}
											},
											"id": 327,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "2306:28:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"functionReturnParameters": 319,
										"id": 328,
										"nodeType": "Return",
										"src": "2299:35:1"
									}
								]
							},
							"documentation": null,
							"id": 330,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_start",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 316,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 315,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 330,
										"src": "2231:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 314,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2231:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2230:20:1"
							},
							"returnParameters": {
								"id": 319,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 318,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 330,
										"src": "2274:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 317,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2274:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2273:15:1"
							},
							"scope": 489,
							"src": "2208:133:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 345,
								"nodeType": "Block",
								"src": "2434:51:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 343,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"id": 339,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 334,
												"src": "2451:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "<",
											"rightExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 340,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 332,
														"src": "2462:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 341,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "keys",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 73,
													"src": "2462:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
														"typeString": "struct KeyFlag storage ref[] storage ref"
													}
												},
												"id": 342,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "length",
												"nodeType": "MemberAccess",
												"referencedDeclaration": null,
												"src": "2462:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"src": "2451:27:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"functionReturnParameters": 338,
										"id": 344,
										"nodeType": "Return",
										"src": "2444:34:1"
									}
								]
							},
							"documentation": null,
							"id": 346,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_valid",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 335,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 332,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 346,
										"src": "2370:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 331,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2370:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 334,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 346,
										"src": "2390:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 333,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2390:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2369:35:1"
							},
							"returnParameters": {
								"id": 338,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 337,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 346,
										"src": "2428:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 336,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "2428:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2427:6:1"
							},
							"scope": 489,
							"src": "2347:138:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 375,
								"nodeType": "Block",
								"src": "2588:151:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"id": 356,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "++",
											"prefix": false,
											"src": "2598:10:1",
											"subExpression": {
												"argumentTypes": null,
												"id": 355,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 350,
												"src": "2598:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 357,
										"nodeType": "ExpressionStatement",
										"src": "2598:10:1"
									},
									{
										"body": {
											"expression": {
												"argumentTypes": null,
												"id": 370,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "UnaryOperation",
												"operator": "++",
												"prefix": false,
												"src": "2697:10:1",
												"subExpression": {
													"argumentTypes": null,
													"id": 369,
													"name": "keyIndex",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 350,
													"src": "2697:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"id": 371,
											"nodeType": "ExpressionStatement",
											"src": "2697:10:1"
										},
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"id": 368,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"commonType": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"id": 362,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"leftExpression": {
													"argumentTypes": null,
													"id": 358,
													"name": "keyIndex",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 350,
													"src": "2625:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"nodeType": "BinaryOperation",
												"operator": "<",
												"rightExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 359,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 348,
															"src": "2636:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 360,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "keys",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 73,
														"src": "2636:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
															"typeString": "struct KeyFlag storage ref[] storage ref"
														}
													},
													"id": 361,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "length",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "2636:16:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"src": "2625:27:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "&&",
											"rightExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 363,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 348,
															"src": "2656:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 364,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "keys",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 73,
														"src": "2656:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
															"typeString": "struct KeyFlag storage ref[] storage ref"
														}
													},
													"id": 366,
													"indexExpression": {
														"argumentTypes": null,
														"id": 365,
														"name": "keyIndex",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 350,
														"src": "2666:8:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "2656:19:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
														"typeString": "struct KeyFlag storage ref"
													}
												},
												"id": 367,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "deleted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 65,
												"src": "2656:27:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "2625:58:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 372,
										"nodeType": "WhileStatement",
										"src": "2618:89:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 373,
											"name": "keyIndex",
											"nodeType": "Identifier",
											"overloadedDeclarations": [],
											"referencedDeclaration": 350,
											"src": "2724:8:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"functionReturnParameters": 354,
										"id": 374,
										"nodeType": "Return",
										"src": "2717:15:1"
									}
								]
							},
							"documentation": null,
							"id": 376,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_next",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 351,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 348,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 376,
										"src": "2513:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 347,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2513:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 350,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 376,
										"src": "2533:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 349,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2533:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2512:35:1"
							},
							"returnParameters": {
								"id": 354,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 353,
										"name": "r_keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 376,
										"src": "2571:15:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 352,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2571:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2570:17:1"
							},
							"scope": 489,
							"src": "2491:248:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 487,
								"nodeType": "Block",
								"src": "2849:736:1",
								"statements": [
									{
										"assignments": [
											386
										],
										"declarations": [
											{
												"constant": false,
												"id": 386,
												"name": "key",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "2859:8:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 385,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "2859:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 392,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 387,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "2870:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 388,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "keys",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 73,
													"src": "2870:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
														"typeString": "struct KeyFlag storage ref[] storage ref"
													}
												},
												"id": 390,
												"indexExpression": {
													"argumentTypes": null,
													"id": 389,
													"name": "keyIndex",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 380,
													"src": "2880:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "2870:19:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
													"typeString": "struct KeyFlag storage ref"
												}
											},
											"id": 391,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "key",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 63,
											"src": "2870:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "2859:34:1"
									},
									{
										"assignments": [
											394
										],
										"declarations": [
											{
												"constant": false,
												"id": 394,
												"name": "price",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "2903:10:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 393,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "2903:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 400,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 395,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "2916:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 396,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "2916:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 398,
												"indexExpression": {
													"argumentTypes": null,
													"id": 397,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "2926:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "2916:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 399,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "price",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 42,
											"src": "2916:20:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "2903:33:1"
									},
									{
										"assignments": [
											402
										],
										"declarations": [
											{
												"constant": false,
												"id": 402,
												"name": "lowest_bidder",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "2946:29:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												},
												"typeName": {
													"id": 401,
													"name": "address",
													"nodeType": "ElementaryTypeName",
													"src": "2946:15:1",
													"stateMutability": "payable",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 408,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 403,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "2978:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 404,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "2978:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 406,
												"indexExpression": {
													"argumentTypes": null,
													"id": 405,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "2988:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "2978:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 407,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "lowest_bidder",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 44,
											"src": "2978:28:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "2946:60:1"
									},
									{
										"assignments": [
											410
										],
										"declarations": [
											{
												"constant": false,
												"id": 410,
												"name": "next_lowest_bidder",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3016:34:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												},
												"typeName": {
													"id": 409,
													"name": "address",
													"nodeType": "ElementaryTypeName",
													"src": "3016:15:1",
													"stateMutability": "payable",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 416,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 411,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3053:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 412,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3053:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 414,
												"indexExpression": {
													"argumentTypes": null,
													"id": 413,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3063:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3053:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 415,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "next_lowest_bidder",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 46,
											"src": "3053:33:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3016:70:1"
									},
									{
										"assignments": [
											418
										],
										"declarations": [
											{
												"constant": false,
												"id": 418,
												"name": "balance",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3096:12:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 417,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "3096:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 424,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 419,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3111:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 420,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3111:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 422,
												"indexExpression": {
													"argumentTypes": null,
													"id": 421,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3121:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3111:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 423,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "balance",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 48,
											"src": "3111:22:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3096:37:1"
									},
									{
										"assignments": [
											426
										],
										"declarations": [
											{
												"constant": false,
												"id": 426,
												"name": "poster",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3143:22:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												},
												"typeName": {
													"id": 425,
													"name": "address",
													"nodeType": "ElementaryTypeName",
													"src": "3143:15:1",
													"stateMutability": "payable",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 432,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 427,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3168:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 428,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3168:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 430,
												"indexExpression": {
													"argumentTypes": null,
													"id": 429,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3178:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3168:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 431,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "poster",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 50,
											"src": "3168:21:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3143:46:1"
									},
									{
										"assignments": [
											434
										],
										"declarations": [
											{
												"constant": false,
												"id": 434,
												"name": "title",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3199:19:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string"
												},
												"typeName": {
													"id": 433,
													"name": "string",
													"nodeType": "ElementaryTypeName",
													"src": "3199:6:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_storage_ptr",
														"typeString": "string"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 440,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 435,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3221:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 436,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3221:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 438,
												"indexExpression": {
													"argumentTypes": null,
													"id": 437,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3231:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3221:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 439,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "title",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 58,
											"src": "3221:20:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3199:42:1"
									},
									{
										"assignments": [
											442
										],
										"declarations": [
											{
												"constant": false,
												"id": 442,
												"name": "description",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3251:25:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string"
												},
												"typeName": {
													"id": 441,
													"name": "string",
													"nodeType": "ElementaryTypeName",
													"src": "3251:6:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_storage_ptr",
														"typeString": "string"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 448,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 443,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3279:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 444,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3279:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 446,
												"indexExpression": {
													"argumentTypes": null,
													"id": 445,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3289:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3279:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 447,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "description",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 60,
											"src": "3279:26:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3251:54:1"
									},
									{
										"assignments": [
											450
										],
										"declarations": [
											{
												"constant": false,
												"id": 450,
												"name": "claimed",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3315:12:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"typeName": {
													"id": 449,
													"name": "bool",
													"nodeType": "ElementaryTypeName",
													"src": "3315:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 456,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 451,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3330:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 452,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3330:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 454,
												"indexExpression": {
													"argumentTypes": null,
													"id": 453,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3340:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3330:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 455,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "claimed",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 52,
											"src": "3330:22:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3315:37:1"
									},
									{
										"assignments": [
											458
										],
										"declarations": [
											{
												"constant": false,
												"id": 458,
												"name": "accepted",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3362:13:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"typeName": {
													"id": 457,
													"name": "bool",
													"nodeType": "ElementaryTypeName",
													"src": "3362:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 464,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 459,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3378:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 460,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3378:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 462,
												"indexExpression": {
													"argumentTypes": null,
													"id": 461,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3388:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3378:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 463,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "accepted",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 54,
											"src": "3378:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3362:39:1"
									},
									{
										"assignments": [
											466
										],
										"declarations": [
											{
												"constant": false,
												"id": 466,
												"name": "paid",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3411:9:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"typeName": {
													"id": 465,
													"name": "bool",
													"nodeType": "ElementaryTypeName",
													"src": "3411:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 472,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 467,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3423:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 468,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3423:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 470,
												"indexExpression": {
													"argumentTypes": null,
													"id": 469,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3433:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3423:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 471,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "paid",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 56,
											"src": "3423:19:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3411:31:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 474,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3470:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 475,
													"name": "price",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 394,
													"src": "3475:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 476,
													"name": "lowest_bidder",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 402,
													"src": "3482:13:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 477,
													"name": "next_lowest_bidder",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 410,
													"src": "3497:18:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 478,
													"name": "balance",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 418,
													"src": "3517:7:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 479,
													"name": "poster",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 426,
													"src": "3526:6:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 480,
													"name": "claimed",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 450,
													"src": "3534:7:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												{
													"argumentTypes": null,
													"id": 481,
													"name": "accepted",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 458,
													"src": "3543:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												{
													"argumentTypes": null,
													"id": 482,
													"name": "paid",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 466,
													"src": "3553:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												{
													"argumentTypes": null,
													"id": 483,
													"name": "title",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 434,
													"src": "3559:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												},
												{
													"argumentTypes": null,
													"id": 484,
													"name": "description",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 442,
													"src": "3566:11:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												],
												"id": 473,
												"name": "IndexValue",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 61,
												"src": "3459:10:1",
												"typeDescriptions": {
													"typeIdentifier": "t_type$_t_struct$_IndexValue_$61_storage_ptr_$",
													"typeString": "type(struct IndexValue storage pointer)"
												}
											},
											"id": 485,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "structConstructorCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "3459:119:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory",
												"typeString": "struct IndexValue memory"
											}
										},
										"functionReturnParameters": 384,
										"id": 486,
										"nodeType": "Return",
										"src": "3452:126:1"
									}
								]
							},
							"documentation": null,
							"id": 488,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_get",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 381,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 378,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 488,
										"src": "2766:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 377,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2766:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 380,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 488,
										"src": "2786:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 379,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2786:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2765:35:1"
							},
							"returnParameters": {
								"id": 384,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 383,
										"name": "value",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 488,
										"src": "2824:23:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
											"typeString": "struct IndexValue"
										},
										"typeName": {
											"contractScope": null,
											"id": 382,
											"name": "IndexValue",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 61,
											"src": "2824:10:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
												"typeString": "struct IndexValue"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2823:25:1"
							},
							"scope": 489,
							"src": "2745:840:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						}
					],
					"scope": 805,
					"src": "684:2903:1"
				},
				{
					"abstract": false,
					"baseContracts": [],
					"contractDependencies": [],
					"contractKind": "contract",
					"documentation": null,
					"fullyImplemented": true,
					"id": 804,
					"linearizedBaseContracts": [
						804
					],
					"name": "SupplyMesh",
					"nodeType": "ContractDefinition",
					"nodes": [
						{
							"constant": false,
							"id": 491,
							"name": "data",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 804,
							"src": "3615:10:1",
							"stateVariable": true,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_struct$_itmap_$76_storage",
								"typeString": "struct itmap"
							},
							"typeName": {
								"contractScope": null,
								"id": 490,
								"name": "itmap",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 76,
								"src": "3615:5:1",
								"typeDescriptions": {
									"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
									"typeString": "struct itmap"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"id": 494,
							"libraryName": {
								"contractScope": null,
								"id": 492,
								"name": "IterableMapping",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 489,
								"src": "3637:15:1",
								"typeDescriptions": {
									"typeIdentifier": "t_contract$_IterableMapping_$489",
									"typeString": "library IterableMapping"
								}
							},
							"nodeType": "UsingForDirective",
							"src": "3631:32:1",
							"typeName": {
								"contractScope": null,
								"id": 493,
								"name": "itmap",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 76,
								"src": "3657:5:1",
								"typeDescriptions": {
									"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
									"typeString": "struct itmap"
								}
							}
						},
						{
							"constant": false,
							"id": 496,
							"name": "max_key",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 804,
							"src": "3669:12:1",
							"stateVariable": true,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 495,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "3669:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 553,
								"nodeType": "Block",
								"src": "3800:408:1",
								"statements": [
									{
										"assignments": [
											506
										],
										"declarations": [
											{
												"constant": false,
												"id": 506,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 553,
												"src": "3810:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 505,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "3810:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 511,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 509,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 498,
													"src": "3859:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 507,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "3842:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 508,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "3842:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 510,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "3842:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3810:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"id": 524,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"commonType": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"id": 518,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"leftExpression": {
													"argumentTypes": null,
													"id": 514,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "UnaryOperation",
													"operator": "!",
													"prefix": true,
													"src": "3877:20:1",
													"subExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 512,
															"name": "bountyEntry",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 506,
															"src": "3878:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																"typeString": "struct IndexValue memory"
															}
														},
														"id": 513,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "claimed",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 52,
														"src": "3878:19:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"nodeType": "BinaryOperation",
												"operator": "&&",
												"rightExpression": {
													"argumentTypes": null,
													"id": 517,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "UnaryOperation",
													"operator": "!",
													"prefix": true,
													"src": "3901:21:1",
													"subExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 515,
															"name": "bountyEntry",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 506,
															"src": "3902:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																"typeString": "struct IndexValue memory"
															}
														},
														"id": 516,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "accepted",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 54,
														"src": "3902:20:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"src": "3877:45:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "&&",
											"rightExpression": {
												"argumentTypes": null,
												"components": [
													{
														"argumentTypes": null,
														"commonType": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														},
														"id": 522,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftExpression": {
															"argumentTypes": null,
															"id": 519,
															"name": "price",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 500,
															"src": "3927:5:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "BinaryOperation",
														"operator": ">=",
														"rightExpression": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"id": 520,
																"name": "bountyEntry",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 506,
																"src": "3937:11:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																	"typeString": "struct IndexValue memory"
																}
															},
															"id": 521,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "price",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 42,
															"src": "3937:17:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "3927:27:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													}
												],
												"id": 523,
												"isConstant": false,
												"isInlineArray": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "TupleExpression",
												"src": "3926:29:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "3877:78:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 550,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "4196:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 504,
											"id": 551,
											"nodeType": "Return",
											"src": "4189:12:1"
										},
										"id": 552,
										"nodeType": "IfStatement",
										"src": "3873:328:1",
										"trueBody": {
											"id": 549,
											"nodeType": "Block",
											"src": "3957:226:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"id": 528,
																"name": "max_key",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 496,
																"src": "3983:7:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"id": 529,
																"name": "price",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 500,
																"src": "3992:5:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 530,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "3999:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 531,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "poster",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 50,
																"src": "3999:18:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 532,
																	"name": "msg",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": -15,
																	"src": "4019:3:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_magic_message",
																		"typeString": "msg"
																	}
																},
																"id": 533,
																"isConstant": false,
																"isLValue": false,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "sender",
																"nodeType": "MemberAccess",
																"referencedDeclaration": null,
																"src": "4019:10:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 534,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4031:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 535,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 44,
																"src": "4031:25:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 536,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4058:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 537,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "title",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 58,
																"src": "4058:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 538,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4077:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 539,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "description",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 60,
																"src": "4077:23:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"hexValue": "74727565",
																"id": 540,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "bool",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "4102:4:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																"value": "true"
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 541,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4108:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 542,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "accepted",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 54,
																"src": "4108:20:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 543,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4130:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 544,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "paid",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 56,
																"src": "4130:16:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"expression": {
																"argumentTypes": null,
																"id": 525,
																"name": "data",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 491,
																"src": "3971:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage",
																	"typeString": "struct itmap storage ref"
																}
															},
															"id": 527,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "insert",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 249,
															"src": "3971:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
															}
														},
														"id": 545,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "3971:176:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"id": 546,
													"nodeType": "ExpressionStatement",
													"src": "3971:176:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 547,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "4168:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 504,
													"id": 548,
													"nodeType": "Return",
													"src": "4161:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "b4c81b7e",
							"id": 554,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "placeBidOnBounty",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 501,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 498,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 554,
										"src": "3756:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 497,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "3756:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 500,
										"name": "price",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 554,
										"src": "3766:10:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 499,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "3766:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "3755:22:1"
							},
							"returnParameters": {
								"id": 504,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 503,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 554,
										"src": "3794:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 502,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "3794:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "3793:6:1"
							},
							"scope": 804,
							"src": "3730:478:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 599,
								"nodeType": "Block",
								"src": "4394:380:1",
								"statements": [
									{
										"assignments": [
											562
										],
										"declarations": [
											{
												"constant": false,
												"id": 562,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 599,
												"src": "4404:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 561,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "4404:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 567,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 565,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 556,
													"src": "4453:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 563,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "4436:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 564,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "4436:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 566,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "4436:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "4404:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"id": 568,
												"name": "bountyEntry",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 562,
												"src": "4471:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue memory"
												}
											},
											"id": 569,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "claimed",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 52,
											"src": "4471:19:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 596,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "4762:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 560,
											"id": 597,
											"nodeType": "Return",
											"src": "4755:12:1"
										},
										"id": 598,
										"nodeType": "IfStatement",
										"src": "4467:300:1",
										"trueBody": {
											"id": 595,
											"nodeType": "Block",
											"src": "4492:257:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"id": 573,
																"name": "max_key",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 496,
																"src": "4518:7:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 574,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4527:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 575,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "price",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 42,
																"src": "4527:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 576,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4546:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 577,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "poster",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 50,
																"src": "4546:18:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 578,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4566:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 579,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 44,
																"src": "4566:25:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 580,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4593:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 581,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "next_lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 46,
																"src": "4593:30:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 582,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4625:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 583,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "title",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 58,
																"src": "4625:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 584,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4644:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 585,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "description",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 60,
																"src": "4644:23:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 586,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4669:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 587,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "claimed",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 52,
																"src": "4669:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															},
															{
																"argumentTypes": null,
																"hexValue": "74727565",
																"id": 588,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "bool",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "4690:4:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																"value": "true"
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 589,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4696:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 590,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "paid",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 56,
																"src": "4696:16:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"expression": {
																"argumentTypes": null,
																"id": 570,
																"name": "data",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 491,
																"src": "4506:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage",
																	"typeString": "struct itmap storage ref"
																}
															},
															"id": 572,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "insert",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 249,
															"src": "4506:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
															}
														},
														"id": 591,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "4506:207:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"id": 592,
													"nodeType": "ExpressionStatement",
													"src": "4506:207:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 593,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "4734:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 560,
													"id": 594,
													"nodeType": "Return",
													"src": "4727:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "dcd94dee",
							"id": 600,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "acceptBidOnBounty",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 557,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 556,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 600,
										"src": "4362:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 555,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "4362:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4361:10:1"
							},
							"returnParameters": {
								"id": 560,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 559,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 600,
										"src": "4388:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 558,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "4388:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4387:6:1"
							},
							"scope": 804,
							"src": "4335:439:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 645,
								"nodeType": "Block",
								"src": "4839:386:1",
								"statements": [
									{
										"assignments": [
											608
										],
										"declarations": [
											{
												"constant": false,
												"id": 608,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 645,
												"src": "4849:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 607,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "4849:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 613,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 611,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 602,
													"src": "4898:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 609,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "4881:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 610,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "4881:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 612,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "4881:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "4849:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"id": 614,
												"name": "bountyEntry",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 608,
												"src": "4916:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue memory"
												}
											},
											"id": 615,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "claimed",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 52,
											"src": "4916:19:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 642,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "5213:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 606,
											"id": 643,
											"nodeType": "Return",
											"src": "5206:12:1"
										},
										"id": 644,
										"nodeType": "IfStatement",
										"src": "4912:306:1",
										"trueBody": {
											"id": 641,
											"nodeType": "Block",
											"src": "4937:263:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"id": 619,
																"name": "max_key",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 496,
																"src": "4963:7:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 620,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "4972:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 621,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "price",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 42,
																"src": "4972:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 622,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "4991:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 623,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "poster",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 50,
																"src": "4991:18:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 624,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5011:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 625,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "next_lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 46,
																"src": "5011:30:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 626,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5043:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 627,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "next_lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 46,
																"src": "5043:30:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 628,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5075:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 629,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "title",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 58,
																"src": "5075:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 630,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5094:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 631,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "description",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 60,
																"src": "5094:23:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 632,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5119:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 633,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "claimed",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 52,
																"src": "5119:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															},
															{
																"argumentTypes": null,
																"hexValue": "66616c7365",
																"id": 634,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "bool",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "5140:5:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																"value": "false"
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 635,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5147:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 636,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "paid",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 56,
																"src": "5147:16:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"expression": {
																"argumentTypes": null,
																"id": 616,
																"name": "data",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 491,
																"src": "4951:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage",
																	"typeString": "struct itmap storage ref"
																}
															},
															"id": 618,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "insert",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 249,
															"src": "4951:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
															}
														},
														"id": 637,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "4951:213:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"id": 638,
													"nodeType": "ExpressionStatement",
													"src": "4951:213:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 639,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "5185:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 606,
													"id": 640,
													"nodeType": "Return",
													"src": "5178:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "599c716a",
							"id": 646,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "rejectBidOnBounty",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 603,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 602,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 646,
										"src": "4807:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 601,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "4807:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4806:10:1"
							},
							"returnParameters": {
								"id": 606,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 605,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 646,
										"src": "4833:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 604,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "4833:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4832:6:1"
							},
							"scope": 804,
							"src": "4780:445:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 680,
								"nodeType": "Block",
								"src": "5430:161:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 660,
													"name": "max_key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 496,
													"src": "5452:7:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 661,
													"name": "price",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 648,
													"src": "5461:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 662,
														"name": "msg",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": -15,
														"src": "5468:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_magic_message",
															"typeString": "msg"
														}
													},
													"id": 663,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "sender",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "5468:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 664,
														"name": "msg",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": -15,
														"src": "5480:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_magic_message",
															"typeString": "msg"
														}
													},
													"id": 665,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "sender",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "5480:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 666,
														"name": "msg",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": -15,
														"src": "5492:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_magic_message",
															"typeString": "msg"
														}
													},
													"id": 667,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "sender",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "5492:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 668,
													"name": "title",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 650,
													"src": "5504:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												},
												{
													"argumentTypes": null,
													"id": 669,
													"name": "description",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 652,
													"src": "5511:11:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												},
												{
													"argumentTypes": null,
													"hexValue": "66616c7365",
													"id": 670,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "bool",
													"lValueRequested": false,
													"nodeType": "Literal",
													"src": "5524:5:1",
													"subdenomination": null,
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													"value": "false"
												},
												{
													"argumentTypes": null,
													"hexValue": "66616c7365",
													"id": 671,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "bool",
													"lValueRequested": false,
													"nodeType": "Literal",
													"src": "5531:5:1",
													"subdenomination": null,
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													"value": "false"
												},
												{
													"argumentTypes": null,
													"hexValue": "66616c7365",
													"id": 672,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "bool",
													"lValueRequested": false,
													"nodeType": "Literal",
													"src": "5538:5:1",
													"subdenomination": null,
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													"value": "false"
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 657,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "5440:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 659,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "insert",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 249,
												"src": "5440:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
												}
											},
											"id": 673,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "5440:104:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 674,
										"nodeType": "ExpressionStatement",
										"src": "5440:104:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 676,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "++",
											"prefix": false,
											"src": "5554:9:1",
											"subExpression": {
												"argumentTypes": null,
												"id": 675,
												"name": "max_key",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 496,
												"src": "5554:7:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 677,
										"nodeType": "ExpressionStatement",
										"src": "5554:9:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"hexValue": "74727565",
											"id": 678,
											"isConstant": false,
											"isLValue": false,
											"isPure": true,
											"kind": "bool",
											"lValueRequested": false,
											"nodeType": "Literal",
											"src": "5580:4:1",
											"subdenomination": null,
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"value": "true"
										},
										"functionReturnParameters": 656,
										"id": 679,
										"nodeType": "Return",
										"src": "5573:11:1"
									}
								]
							},
							"documentation": null,
							"functionSelector": "20ae5a62",
							"id": 681,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "addBountyForEntity",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 653,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 648,
										"name": "price",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5348:10:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 647,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "5348:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 650,
										"name": "title",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5360:19:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 649,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "5360:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 652,
										"name": "description",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5381:25:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 651,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "5381:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5347:60:1"
							},
							"returnParameters": {
								"id": 656,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 655,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5424:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 654,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "5424:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5423:6:1"
							},
							"scope": 804,
							"src": "5320:271:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 719,
								"nodeType": "Block",
								"src": "5765:271:1",
								"statements": [
									{
										"assignments": [
											689
										],
										"declarations": [
											{
												"constant": false,
												"id": 689,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 719,
												"src": "5775:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 688,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "5775:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 694,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 692,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 683,
													"src": "5824:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 690,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "5807:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 691,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "5807:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 693,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "5807:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "5775:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"id": 703,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"commonType": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"id": 700,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"leftExpression": {
													"argumentTypes": null,
													"id": 697,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "UnaryOperation",
													"operator": "!",
													"prefix": true,
													"src": "5842:17:1",
													"subExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 695,
															"name": "bountyEntry",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 689,
															"src": "5843:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																"typeString": "struct IndexValue memory"
															}
														},
														"id": 696,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "paid",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 56,
														"src": "5843:16:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"nodeType": "BinaryOperation",
												"operator": "&&",
												"rightExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 698,
														"name": "bountyEntry",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 689,
														"src": "5863:11:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
															"typeString": "struct IndexValue memory"
														}
													},
													"id": 699,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "claimed",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 52,
													"src": "5863:19:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"src": "5842:40:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "&&",
											"rightExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"id": 701,
													"name": "bountyEntry",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 689,
													"src": "5886:11:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
														"typeString": "struct IndexValue memory"
													}
												},
												"id": 702,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "accepted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 54,
												"src": "5886:20:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "5842:64:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 716,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "6024:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 687,
											"id": 717,
											"nodeType": "Return",
											"src": "6017:12:1"
										},
										"id": 718,
										"nodeType": "IfStatement",
										"src": "5838:191:1",
										"trueBody": {
											"id": 715,
											"nodeType": "Block",
											"src": "5908:103:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 709,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 689,
																	"src": "5957:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 710,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "price",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 42,
																"src": "5957:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															],
															"expression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 704,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 689,
																	"src": "5922:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 707,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 44,
																"src": "5922:25:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															"id": 708,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "transfer",
															"nodeType": "MemberAccess",
															"referencedDeclaration": null,
															"src": "5922:34:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
																"typeString": "function (uint256)"
															}
														},
														"id": 711,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "5922:53:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_tuple$__$",
															"typeString": "tuple()"
														}
													},
													"id": 712,
													"nodeType": "ExpressionStatement",
													"src": "5922:53:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 713,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "5996:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 687,
													"id": 714,
													"nodeType": "Return",
													"src": "5989:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "13d6a6f3",
							"id": 720,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "payBountyForEntity",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 684,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 683,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 720,
										"src": "5733:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 682,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "5733:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5732:10:1"
							},
							"returnParameters": {
								"id": 687,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 686,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 720,
										"src": "5759:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 685,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "5759:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5758:6:1"
							},
							"scope": 804,
							"src": "5705:331:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 802,
								"nodeType": "Block",
								"src": "6260:671:1",
								"statements": [
									{
										"assignments": [
											730
										],
										"declarations": [
											{
												"constant": false,
												"id": 730,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 802,
												"src": "6270:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 729,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "6270:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 735,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 733,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 724,
													"src": "6319:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 731,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "6302:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 732,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "6302:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 734,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "6302:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "6270:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"id": 736,
												"name": "bountyEntry",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 730,
												"src": "6337:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue memory"
												}
											},
											"id": 737,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "paid",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 56,
											"src": "6337:16:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 799,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "6919:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 728,
											"id": 800,
											"nodeType": "Return",
											"src": "6912:12:1"
										},
										"id": 801,
										"nodeType": "IfStatement",
										"src": "6333:591:1",
										"trueBody": {
											"id": 798,
											"nodeType": "Block",
											"src": "6355:551:1",
											"statements": [
												{
													"condition": {
														"argumentTypes": null,
														"commonType": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														},
														"id": 744,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftExpression": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															},
															"id": 741,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"leftExpression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 738,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 730,
																	"src": "6373:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 739,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "balance",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 48,
																"src": "6373:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															"nodeType": "BinaryOperation",
															"operator": "+",
															"rightExpression": {
																"argumentTypes": null,
																"id": 740,
																"name": "volume",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 722,
																"src": "6395:6:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															"src": "6373:28:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "BinaryOperation",
														"operator": ">",
														"rightExpression": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"id": 742,
																"name": "bountyEntry",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 730,
																"src": "6404:11:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																	"typeString": "struct IndexValue memory"
																}
															},
															"id": 743,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "price",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 42,
															"src": "6404:17:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "6373:48:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"falseBody": {
														"id": 796,
														"nodeType": "Block",
														"src": "6799:97:1",
														"statements": [
															{
																"expression": {
																	"argumentTypes": null,
																	"arguments": [
																		{
																			"argumentTypes": null,
																			"id": 791,
																			"name": "volume",
																			"nodeType": "Identifier",
																			"overloadedDeclarations": [],
																			"referencedDeclaration": 722,
																			"src": "6845:6:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		}
																	],
																	"expression": {
																		"argumentTypes": [
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		],
																		"expression": {
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 786,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6817:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 789,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "poster",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 50,
																			"src": "6817:18:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		"id": 790,
																		"isConstant": false,
																		"isLValue": false,
																		"isPure": false,
																		"lValueRequested": false,
																		"memberName": "transfer",
																		"nodeType": "MemberAccess",
																		"referencedDeclaration": null,
																		"src": "6817:27:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
																			"typeString": "function (uint256)"
																		}
																	},
																	"id": 792,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"kind": "functionCall",
																	"lValueRequested": false,
																	"names": [],
																	"nodeType": "FunctionCall",
																	"src": "6817:35:1",
																	"tryCall": false,
																	"typeDescriptions": {
																		"typeIdentifier": "t_tuple$__$",
																		"typeString": "tuple()"
																	}
																},
																"id": 793,
																"nodeType": "ExpressionStatement",
																"src": "6817:35:1"
															},
															{
																"expression": {
																	"argumentTypes": null,
																	"hexValue": "74727565",
																	"id": 794,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"kind": "bool",
																	"lValueRequested": false,
																	"nodeType": "Literal",
																	"src": "6877:4:1",
																	"subdenomination": null,
																	"typeDescriptions": {
																		"typeIdentifier": "t_bool",
																		"typeString": "bool"
																	},
																	"value": "true"
																},
																"functionReturnParameters": 728,
																"id": 795,
																"nodeType": "Return",
																"src": "6870:11:1"
															}
														]
													},
													"id": 797,
													"nodeType": "IfStatement",
													"src": "6369:527:1",
													"trueBody": {
														"id": 785,
														"nodeType": "Block",
														"src": "6423:370:1",
														"statements": [
															{
																"expression": {
																	"argumentTypes": null,
																	"arguments": [
																		{
																			"argumentTypes": null,
																			"commonType": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			},
																			"id": 757,
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": false,
																			"lValueRequested": false,
																			"leftExpression": {
																				"argumentTypes": null,
																				"components": [
																					{
																						"argumentTypes": null,
																						"commonType": {
																							"typeIdentifier": "t_uint256",
																							"typeString": "uint256"
																						},
																						"id": 753,
																						"isConstant": false,
																						"isLValue": false,
																						"isPure": false,
																						"lValueRequested": false,
																						"leftExpression": {
																							"argumentTypes": null,
																							"expression": {
																								"argumentTypes": null,
																								"id": 750,
																								"name": "bountyEntry",
																								"nodeType": "Identifier",
																								"overloadedDeclarations": [],
																								"referencedDeclaration": 730,
																								"src": "6470:11:1",
																								"typeDescriptions": {
																									"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																									"typeString": "struct IndexValue memory"
																								}
																							},
																							"id": 751,
																							"isConstant": false,
																							"isLValue": true,
																							"isPure": false,
																							"lValueRequested": false,
																							"memberName": "balance",
																							"nodeType": "MemberAccess",
																							"referencedDeclaration": 48,
																							"src": "6470:19:1",
																							"typeDescriptions": {
																								"typeIdentifier": "t_uint256",
																								"typeString": "uint256"
																							}
																						},
																						"nodeType": "BinaryOperation",
																						"operator": "+",
																						"rightExpression": {
																							"argumentTypes": null,
																							"id": 752,
																							"name": "volume",
																							"nodeType": "Identifier",
																							"overloadedDeclarations": [],
																							"referencedDeclaration": 722,
																							"src": "6492:6:1",
																							"typeDescriptions": {
																								"typeIdentifier": "t_uint256",
																								"typeString": "uint256"
																							}
																						},
																						"src": "6470:28:1",
																						"typeDescriptions": {
																							"typeIdentifier": "t_uint256",
																							"typeString": "uint256"
																						}
																					}
																				],
																				"id": 754,
																				"isConstant": false,
																				"isInlineArray": false,
																				"isLValue": false,
																				"isPure": false,
																				"lValueRequested": false,
																				"nodeType": "TupleExpression",
																				"src": "6469:30:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_uint256",
																					"typeString": "uint256"
																				}
																			},
																			"nodeType": "BinaryOperation",
																			"operator": "-",
																			"rightExpression": {
																				"argumentTypes": null,
																				"expression": {
																					"argumentTypes": null,
																					"id": 755,
																					"name": "bountyEntry",
																					"nodeType": "Identifier",
																					"overloadedDeclarations": [],
																					"referencedDeclaration": 730,
																					"src": "6502:11:1",
																					"typeDescriptions": {
																						"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																						"typeString": "struct IndexValue memory"
																					}
																				},
																				"id": 756,
																				"isConstant": false,
																				"isLValue": true,
																				"isPure": false,
																				"lValueRequested": false,
																				"memberName": "price",
																				"nodeType": "MemberAccess",
																				"referencedDeclaration": 42,
																				"src": "6502:17:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_uint256",
																					"typeString": "uint256"
																				}
																			},
																			"src": "6469:50:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		}
																	],
																	"expression": {
																		"argumentTypes": [
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		],
																		"expression": {
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 745,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6441:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 748,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "poster",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 50,
																			"src": "6441:18:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		"id": 749,
																		"isConstant": false,
																		"isLValue": false,
																		"isPure": false,
																		"lValueRequested": false,
																		"memberName": "transfer",
																		"nodeType": "MemberAccess",
																		"referencedDeclaration": null,
																		"src": "6441:27:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
																			"typeString": "function (uint256)"
																		}
																	},
																	"id": 758,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"kind": "functionCall",
																	"lValueRequested": false,
																	"names": [],
																	"nodeType": "FunctionCall",
																	"src": "6441:79:1",
																	"tryCall": false,
																	"typeDescriptions": {
																		"typeIdentifier": "t_tuple$__$",
																		"typeString": "tuple()"
																	}
																},
																"id": 759,
																"nodeType": "ExpressionStatement",
																"src": "6441:79:1"
															},
															{
																"expression": {
																	"argumentTypes": null,
																	"arguments": [
																		{
																			"argumentTypes": null,
																			"id": 763,
																			"name": "max_key",
																			"nodeType": "Identifier",
																			"overloadedDeclarations": [],
																			"referencedDeclaration": 496,
																			"src": "6550:7:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 764,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6559:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 765,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "price",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 42,
																			"src": "6559:17:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 766,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6578:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 767,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "poster",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 50,
																			"src": "6578:18:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 768,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6598:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 769,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "lowest_bidder",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 44,
																			"src": "6598:25:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 770,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6625:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 771,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "next_lowest_bidder",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 46,
																			"src": "6625:30:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 772,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6657:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 773,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "title",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 58,
																			"src": "6657:17:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 774,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6676:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 775,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "description",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 60,
																			"src": "6676:23:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 776,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6701:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 777,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "claimed",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 52,
																			"src": "6701:19:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 778,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6722:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 779,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "accepted",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 54,
																			"src": "6722:20:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"hexValue": "74727565",
																			"id": 780,
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"kind": "bool",
																			"lValueRequested": false,
																			"nodeType": "Literal",
																			"src": "6744:4:1",
																			"subdenomination": null,
																			"typeDescriptions": {
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			},
																			"value": "true"
																		}
																	],
																	"expression": {
																		"argumentTypes": [
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			},
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			},
																			{
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			},
																			{
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			},
																			{
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			},
																			{
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			},
																			{
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			},
																			{
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			},
																			{
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			},
																			{
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			}
																		],
																		"expression": {
																			"argumentTypes": null,
																			"id": 760,
																			"name": "data",
																			"nodeType": "Identifier",
																			"overloadedDeclarations": [],
																			"referencedDeclaration": 491,
																			"src": "6538:4:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_struct$_itmap_$76_storage",
																				"typeString": "struct itmap storage ref"
																			}
																		},
																		"id": 762,
																		"isConstant": false,
																		"isLValue": true,
																		"isPure": false,
																		"lValueRequested": false,
																		"memberName": "insert",
																		"nodeType": "MemberAccess",
																		"referencedDeclaration": 249,
																		"src": "6538:11:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																			"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
																		}
																	},
																	"id": 781,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"kind": "functionCall",
																	"lValueRequested": false,
																	"names": [],
																	"nodeType": "FunctionCall",
																	"src": "6538:211:1",
																	"tryCall": false,
																	"typeDescriptions": {
																		"typeIdentifier": "t_bool",
																		"typeString": "bool"
																	}
																},
																"id": 782,
																"nodeType": "ExpressionStatement",
																"src": "6538:211:1"
															},
															{
																"expression": {
																	"argumentTypes": null,
																	"hexValue": "74727565",
																	"id": 783,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"kind": "bool",
																	"lValueRequested": false,
																	"nodeType": "Literal",
																	"src": "6774:4:1",
																	"subdenomination": null,
																	"typeDescriptions": {
																		"typeIdentifier": "t_bool",
																		"typeString": "bool"
																	},
																	"value": "true"
																},
																"functionReturnParameters": 728,
																"id": 784,
																"nodeType": "Return",
																"src": "6767:11:1"
															}
														]
													}
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "2996c566",
							"id": 803,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "fundBountyForEntity",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 725,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 722,
										"name": "volume",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 803,
										"src": "6207:11:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 721,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "6207:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 724,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 803,
										"src": "6220:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 723,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "6220:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "6206:23:1"
							},
							"returnParameters": {
								"id": 728,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 727,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 803,
										"src": "6254:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 726,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "6254:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "6253:6:1"
							},
							"scope": 804,
							"src": "6178:753:1",
							"stateMutability": "payable",
							"virtual": false,
							"visibility": "public"
						}
					],
					"scope": 805,
					"src": "3589:3344:1"
				}
			],
			"src": "0:6934:1"
		},
		"legacyAST": {
			"absolutePath": "/home/sean/Documents/engine/SupplyMesh/ethereum/contracts/SupplyMesh.sol",
			"exportedSymbols": {
				"IndexValue": [
					61
				],
				"IterableMapping": [
					489
				],
				"KeyFlag": [
					66
				],
				"SupplyMesh": [
					804
				],
				"itmap": [
					76
				]
			},
			"id": 805,
			"nodeType": "SourceUnit",
			"nodes": [
				{
					"id": 38,
					"literals": [
						"solidity",
						">=",
						"0.6",
						".0",
						"<",
						"0.7",
						".0"
					],
					"nodeType": "PragmaDirective",
					"src": "0:31:1"
				},
				{
					"canonicalName": "IndexValue",
					"id": 61,
					"members": [
						{
							"constant": false,
							"id": 40,
							"name": "keyIndex",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "96:13:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 39,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "96:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 42,
							"name": "price",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "144:10:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 41,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "144:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 44,
							"name": "lowest_bidder",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "161:29:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							},
							"typeName": {
								"id": 43,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "161:15:1",
								"stateMutability": "payable",
								"typeDescriptions": {
									"typeIdentifier": "t_address_payable",
									"typeString": "address payable"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 46,
							"name": "next_lowest_bidder",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "196:34:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							},
							"typeName": {
								"id": 45,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "196:15:1",
								"stateMutability": "payable",
								"typeDescriptions": {
									"typeIdentifier": "t_address_payable",
									"typeString": "address payable"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 48,
							"name": "balance",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "273:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 47,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "273:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 50,
							"name": "poster",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "337:22:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							},
							"typeName": {
								"id": 49,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "337:15:1",
								"stateMutability": "payable",
								"typeDescriptions": {
									"typeIdentifier": "t_address_payable",
									"typeString": "address payable"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 52,
							"name": "claimed",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "366:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 51,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "366:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 54,
							"name": "accepted",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "384:13:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 53,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "384:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 56,
							"name": "paid",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "403:9:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 55,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "403:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 58,
							"name": "title",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "457:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_string_storage_ptr",
								"typeString": "string"
							},
							"typeName": {
								"id": 57,
								"name": "string",
								"nodeType": "ElementaryTypeName",
								"src": "457:6:1",
								"typeDescriptions": {
									"typeIdentifier": "t_string_storage_ptr",
									"typeString": "string"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 60,
							"name": "description",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 61,
							"src": "475:18:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_string_storage_ptr",
								"typeString": "string"
							},
							"typeName": {
								"id": 59,
								"name": "string",
								"nodeType": "ElementaryTypeName",
								"src": "475:6:1",
								"typeDescriptions": {
									"typeIdentifier": "t_string_storage_ptr",
									"typeString": "string"
								}
							},
							"value": null,
							"visibility": "internal"
						}
					],
					"name": "IndexValue",
					"nodeType": "StructDefinition",
					"scope": 805,
					"src": "33:463:1",
					"visibility": "public"
				},
				{
					"canonicalName": "KeyFlag",
					"id": 66,
					"members": [
						{
							"constant": false,
							"id": 63,
							"name": "key",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 66,
							"src": "515:8:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 62,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "515:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 65,
							"name": "deleted",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 66,
							"src": "525:12:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							},
							"typeName": {
								"id": 64,
								"name": "bool",
								"nodeType": "ElementaryTypeName",
								"src": "525:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								}
							},
							"value": null,
							"visibility": "internal"
						}
					],
					"name": "KeyFlag",
					"nodeType": "StructDefinition",
					"scope": 805,
					"src": "498:42:1",
					"visibility": "public"
				},
				{
					"canonicalName": "itmap",
					"id": 76,
					"members": [
						{
							"constant": false,
							"id": 70,
							"name": "data",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 76,
							"src": "561:32:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
								"typeString": "mapping(uint256 => struct IndexValue)"
							},
							"typeName": {
								"id": 69,
								"keyType": {
									"id": 67,
									"name": "uint",
									"nodeType": "ElementaryTypeName",
									"src": "569:4:1",
									"typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									}
								},
								"nodeType": "Mapping",
								"src": "561:27:1",
								"typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
									"typeString": "mapping(uint256 => struct IndexValue)"
								},
								"valueType": {
									"contractScope": null,
									"id": 68,
									"name": "IndexValue",
									"nodeType": "UserDefinedTypeName",
									"referencedDeclaration": 61,
									"src": "577:10:1",
									"typeDescriptions": {
										"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
										"typeString": "struct IndexValue"
									}
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 73,
							"name": "keys",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 76,
							"src": "599:14:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage_ptr",
								"typeString": "struct KeyFlag[]"
							},
							"typeName": {
								"baseType": {
									"contractScope": null,
									"id": 71,
									"name": "KeyFlag",
									"nodeType": "UserDefinedTypeName",
									"referencedDeclaration": 66,
									"src": "599:7:1",
									"typeDescriptions": {
										"typeIdentifier": "t_struct$_KeyFlag_$66_storage_ptr",
										"typeString": "struct KeyFlag"
									}
								},
								"id": 72,
								"length": null,
								"nodeType": "ArrayTypeName",
								"src": "599:9:1",
								"typeDescriptions": {
									"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage_ptr",
									"typeString": "struct KeyFlag[]"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"constant": false,
							"id": 75,
							"name": "size",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 76,
							"src": "619:9:1",
							"stateVariable": false,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 74,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "619:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						}
					],
					"name": "itmap",
					"nodeType": "StructDefinition",
					"scope": 805,
					"src": "542:89:1",
					"visibility": "public"
				},
				{
					"abstract": false,
					"baseContracts": [],
					"contractDependencies": [],
					"contractKind": "library",
					"documentation": null,
					"fullyImplemented": true,
					"id": 489,
					"linearizedBaseContracts": [
						489
					],
					"name": "IterableMapping",
					"nodeType": "ContractDefinition",
					"nodes": [
						{
							"body": {
								"id": 248,
								"nodeType": "Block",
								"src": "984:791:1",
								"statements": [
									{
										"assignments": [
											104
										],
										"declarations": [
											{
												"constant": false,
												"id": 104,
												"name": "keyIndex",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 248,
												"src": "994:13:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 103,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "994:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 110,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 105,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 78,
														"src": "1010:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 106,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "1010:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 108,
												"indexExpression": {
													"argumentTypes": null,
													"id": 107,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 80,
													"src": "1020:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "1010:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 109,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "keyIndex",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 40,
											"src": "1010:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "994:39:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 118,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 111,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1043:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 114,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1043:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 115,
													"indexExpression": {
														"argumentTypes": null,
														"id": 113,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1053:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1043:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 116,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "price",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 42,
												"src": "1043:20:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 117,
												"name": "price",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 82,
												"src": "1066:5:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"src": "1043:28:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 119,
										"nodeType": "ExpressionStatement",
										"src": "1043:28:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 127,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 120,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1081:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 123,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1081:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 124,
													"indexExpression": {
														"argumentTypes": null,
														"id": 122,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1091:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1081:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 125,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "lowest_bidder",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 44,
												"src": "1081:28:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 126,
												"name": "lowest_bidder",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 86,
												"src": "1112:13:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"src": "1081:44:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"id": 128,
										"nodeType": "ExpressionStatement",
										"src": "1081:44:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 136,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 129,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1135:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 132,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1135:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 133,
													"indexExpression": {
														"argumentTypes": null,
														"id": 131,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1145:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1135:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 134,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "next_lowest_bidder",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 46,
												"src": "1135:33:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 135,
												"name": "next_lowest_bidder",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 88,
												"src": "1171:18:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"src": "1135:54:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"id": 137,
										"nodeType": "ExpressionStatement",
										"src": "1135:54:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 145,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 138,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1199:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 141,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1199:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 142,
													"indexExpression": {
														"argumentTypes": null,
														"id": 140,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1209:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1199:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 143,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "balance",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 48,
												"src": "1199:22:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 144,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1224:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "1199:26:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 146,
										"nodeType": "ExpressionStatement",
										"src": "1199:26:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 154,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 147,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1235:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 150,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1235:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 151,
													"indexExpression": {
														"argumentTypes": null,
														"id": 149,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1245:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1235:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 152,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "poster",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 50,
												"src": "1235:21:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 153,
												"name": "poster",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 84,
												"src": "1259:6:1",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												}
											},
											"src": "1235:30:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"id": 155,
										"nodeType": "ExpressionStatement",
										"src": "1235:30:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 163,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 156,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1275:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 159,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1275:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 160,
													"indexExpression": {
														"argumentTypes": null,
														"id": 158,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1285:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1275:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 161,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "title",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 58,
												"src": "1275:20:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_storage",
													"typeString": "string storage ref"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 162,
												"name": "title",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 90,
												"src": "1298:5:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string memory"
												}
											},
											"src": "1275:28:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"id": 164,
										"nodeType": "ExpressionStatement",
										"src": "1275:28:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 172,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 165,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1313:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 168,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1313:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 169,
													"indexExpression": {
														"argumentTypes": null,
														"id": 167,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1323:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1313:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 170,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "description",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 60,
												"src": "1313:26:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_storage",
													"typeString": "string storage ref"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 171,
												"name": "description",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 92,
												"src": "1342:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string memory"
												}
											},
											"src": "1313:40:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"id": 173,
										"nodeType": "ExpressionStatement",
										"src": "1313:40:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 181,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 174,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1363:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 177,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1363:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 178,
													"indexExpression": {
														"argumentTypes": null,
														"id": 176,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1373:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1363:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 179,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "claimed",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 52,
												"src": "1363:22:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 180,
												"name": "claimed",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 94,
												"src": "1388:7:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "1363:32:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 182,
										"nodeType": "ExpressionStatement",
										"src": "1363:32:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 190,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 183,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1405:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 186,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1405:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 187,
													"indexExpression": {
														"argumentTypes": null,
														"id": 185,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1415:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1405:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 188,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "accepted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 54,
												"src": "1405:23:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 189,
												"name": "accepted",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 96,
												"src": "1431:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "1405:34:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 191,
										"nodeType": "ExpressionStatement",
										"src": "1405:34:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 199,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 192,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 78,
															"src": "1449:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 195,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "1449:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 196,
													"indexExpression": {
														"argumentTypes": null,
														"id": 194,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 80,
														"src": "1459:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "1449:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 197,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "paid",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 56,
												"src": "1449:19:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"id": 198,
												"name": "paid",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 98,
												"src": "1471:4:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "1449:26:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 200,
										"nodeType": "ExpressionStatement",
										"src": "1449:26:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 203,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"id": 201,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 104,
												"src": "1489:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": ">",
											"rightExpression": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 202,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1500:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "1489:12:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"id": 246,
											"nodeType": "Block",
											"src": "1541:228:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [],
														"expression": {
															"argumentTypes": [],
															"expression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 206,
																	"name": "self",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 78,
																	"src": "1555:4:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																		"typeString": "struct itmap storage pointer"
																	}
																},
																"id": 209,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "keys",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 73,
																"src": "1555:9:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
																	"typeString": "struct KeyFlag storage ref[] storage ref"
																}
															},
															"id": 210,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "push",
															"nodeType": "MemberAccess",
															"referencedDeclaration": null,
															"src": "1555:14:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_arraypush_nonpayable$__$returns$_t_struct$_KeyFlag_$66_storage_$",
																"typeString": "function () returns (struct KeyFlag storage ref)"
															}
														},
														"id": 211,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "1555:16:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
															"typeString": "struct KeyFlag storage ref"
														}
													},
													"id": 212,
													"nodeType": "ExpressionStatement",
													"src": "1555:16:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 217,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftHandSide": {
															"argumentTypes": null,
															"id": 213,
															"name": "keyIndex",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 104,
															"src": "1585:8:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "Assignment",
														"operator": "=",
														"rightHandSide": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 214,
																	"name": "self",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 78,
																	"src": "1596:4:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																		"typeString": "struct itmap storage pointer"
																	}
																},
																"id": 215,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "keys",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 73,
																"src": "1596:9:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
																	"typeString": "struct KeyFlag storage ref[] storage ref"
																}
															},
															"id": 216,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "length",
															"nodeType": "MemberAccess",
															"referencedDeclaration": null,
															"src": "1596:16:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "1585:27:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 218,
													"nodeType": "ExpressionStatement",
													"src": "1585:27:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 228,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftHandSide": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"baseExpression": {
																	"argumentTypes": null,
																	"expression": {
																		"argumentTypes": null,
																		"id": 219,
																		"name": "self",
																		"nodeType": "Identifier",
																		"overloadedDeclarations": [],
																		"referencedDeclaration": 78,
																		"src": "1626:4:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																			"typeString": "struct itmap storage pointer"
																		}
																	},
																	"id": 222,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"memberName": "data",
																	"nodeType": "MemberAccess",
																	"referencedDeclaration": 70,
																	"src": "1626:9:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
																		"typeString": "mapping(uint256 => struct IndexValue storage ref)"
																	}
																},
																"id": 223,
																"indexExpression": {
																	"argumentTypes": null,
																	"id": 221,
																	"name": "key",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 80,
																	"src": "1636:3:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_uint256",
																		"typeString": "uint256"
																	}
																},
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"nodeType": "IndexAccess",
																"src": "1626:14:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_IndexValue_$61_storage",
																	"typeString": "struct IndexValue storage ref"
																}
															},
															"id": 224,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"memberName": "keyIndex",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 40,
															"src": "1626:23:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "Assignment",
														"operator": "=",
														"rightHandSide": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															},
															"id": 227,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"leftExpression": {
																"argumentTypes": null,
																"id": 225,
																"name": "keyIndex",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 104,
																"src": "1652:8:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															"nodeType": "BinaryOperation",
															"operator": "+",
															"rightExpression": {
																"argumentTypes": null,
																"hexValue": "31",
																"id": 226,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "number",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "1663:1:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_rational_1_by_1",
																	"typeString": "int_const 1"
																},
																"value": "1"
															},
															"src": "1652:12:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "1626:38:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 229,
													"nodeType": "ExpressionStatement",
													"src": "1626:38:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 237,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftHandSide": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"baseExpression": {
																	"argumentTypes": null,
																	"expression": {
																		"argumentTypes": null,
																		"id": 230,
																		"name": "self",
																		"nodeType": "Identifier",
																		"overloadedDeclarations": [],
																		"referencedDeclaration": 78,
																		"src": "1678:4:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																			"typeString": "struct itmap storage pointer"
																		}
																	},
																	"id": 233,
																	"isConstant": false,
																	"isLValue": true,
																	"isPure": false,
																	"lValueRequested": false,
																	"memberName": "keys",
																	"nodeType": "MemberAccess",
																	"referencedDeclaration": 73,
																	"src": "1678:9:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
																		"typeString": "struct KeyFlag storage ref[] storage ref"
																	}
																},
																"id": 234,
																"indexExpression": {
																	"argumentTypes": null,
																	"id": 232,
																	"name": "keyIndex",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 104,
																	"src": "1688:8:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_uint256",
																		"typeString": "uint256"
																	}
																},
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"nodeType": "IndexAccess",
																"src": "1678:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
																	"typeString": "struct KeyFlag storage ref"
																}
															},
															"id": 235,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"memberName": "key",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 63,
															"src": "1678:23:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "Assignment",
														"operator": "=",
														"rightHandSide": {
															"argumentTypes": null,
															"id": 236,
															"name": "key",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 80,
															"src": "1704:3:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "1678:29:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 238,
													"nodeType": "ExpressionStatement",
													"src": "1678:29:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"id": 242,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"nodeType": "UnaryOperation",
														"operator": "++",
														"prefix": false,
														"src": "1721:11:1",
														"subExpression": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"id": 239,
																"name": "self",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 78,
																"src": "1721:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																	"typeString": "struct itmap storage pointer"
																}
															},
															"id": 241,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": true,
															"memberName": "size",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 75,
															"src": "1721:9:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"id": 243,
													"nodeType": "ExpressionStatement",
													"src": "1721:11:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "66616c7365",
														"id": 244,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "1753:5:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "false"
													},
													"functionReturnParameters": 102,
													"id": 245,
													"nodeType": "Return",
													"src": "1746:12:1"
												}
											]
										},
										"id": 247,
										"nodeType": "IfStatement",
										"src": "1485:284:1",
										"trueBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "74727565",
												"id": 204,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1522:4:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "true"
											},
											"functionReturnParameters": 102,
											"id": 205,
											"nodeType": "Return",
											"src": "1515:11:1"
										}
									}
								]
							},
							"documentation": null,
							"id": 249,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "insert",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 99,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 78,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "730:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 77,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "730:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 80,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "750:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 79,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "750:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 82,
										"name": "price",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "760:10:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 81,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "760:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 84,
										"name": "poster",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "772:22:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_address_payable",
											"typeString": "address payable"
										},
										"typeName": {
											"id": 83,
											"name": "address",
											"nodeType": "ElementaryTypeName",
											"src": "772:15:1",
											"stateMutability": "payable",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 86,
										"name": "lowest_bidder",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "796:29:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_address_payable",
											"typeString": "address payable"
										},
										"typeName": {
											"id": 85,
											"name": "address",
											"nodeType": "ElementaryTypeName",
											"src": "796:15:1",
											"stateMutability": "payable",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 88,
										"name": "next_lowest_bidder",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "827:34:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_address_payable",
											"typeString": "address payable"
										},
										"typeName": {
											"id": 87,
											"name": "address",
											"nodeType": "ElementaryTypeName",
											"src": "827:15:1",
											"stateMutability": "payable",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 90,
										"name": "title",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "863:19:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 89,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "863:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 92,
										"name": "description",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "884:25:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 91,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "884:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 94,
										"name": "claimed",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "911:12:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 93,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "911:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 96,
										"name": "accepted",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "925:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 95,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "925:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 98,
										"name": "paid",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "940:9:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 97,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "940:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "729:221:1"
							},
							"returnParameters": {
								"id": 102,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 101,
										"name": "replaced",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 249,
										"src": "969:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 100,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "969:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "968:15:1"
							},
							"scope": 489,
							"src": "714:1061:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 294,
								"nodeType": "Block",
								"src": "1859:209:1",
								"statements": [
									{
										"assignments": [
											259
										],
										"declarations": [
											{
												"constant": false,
												"id": 259,
												"name": "keyIndex",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 294,
												"src": "1869:13:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 258,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "1869:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 265,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 260,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 251,
														"src": "1885:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 261,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "1885:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 263,
												"indexExpression": {
													"argumentTypes": null,
													"id": 262,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 253,
													"src": "1895:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "1885:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 264,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "keyIndex",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 40,
											"src": "1885:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "1869:39:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 268,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"id": 266,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 259,
												"src": "1922:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "==",
											"rightExpression": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 267,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1934:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "1922:13:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": null,
										"id": 271,
										"nodeType": "IfStatement",
										"src": "1918:43:1",
										"trueBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 269,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "1956:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 257,
											"id": 270,
											"nodeType": "Return",
											"src": "1949:12:1"
										}
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 276,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "delete",
											"prefix": true,
											"src": "1971:21:1",
											"subExpression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 272,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 251,
														"src": "1978:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 273,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "1978:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 275,
												"indexExpression": {
													"argumentTypes": null,
													"id": 274,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 253,
													"src": "1988:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"nodeType": "IndexAccess",
												"src": "1978:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_tuple$__$",
												"typeString": "tuple()"
											}
										},
										"id": 277,
										"nodeType": "ExpressionStatement",
										"src": "1971:21:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 287,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftHandSide": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 278,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 251,
															"src": "2002:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 283,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "keys",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 73,
														"src": "2002:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
															"typeString": "struct KeyFlag storage ref[] storage ref"
														}
													},
													"id": 284,
													"indexExpression": {
														"argumentTypes": null,
														"commonType": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														},
														"id": 282,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftExpression": {
															"argumentTypes": null,
															"id": 280,
															"name": "keyIndex",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 259,
															"src": "2012:8:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "BinaryOperation",
														"operator": "-",
														"rightExpression": {
															"argumentTypes": null,
															"hexValue": "31",
															"id": 281,
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"kind": "number",
															"lValueRequested": false,
															"nodeType": "Literal",
															"src": "2023:1:1",
															"subdenomination": null,
															"typeDescriptions": {
																"typeIdentifier": "t_rational_1_by_1",
																"typeString": "int_const 1"
															},
															"value": "1"
														},
														"src": "2012:12:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "2002:23:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
														"typeString": "struct KeyFlag storage ref"
													}
												},
												"id": 285,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "deleted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 65,
												"src": "2002:31:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "Assignment",
											"operator": "=",
											"rightHandSide": {
												"argumentTypes": null,
												"hexValue": "74727565",
												"id": 286,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "2036:4:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "true"
											},
											"src": "2002:38:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 288,
										"nodeType": "ExpressionStatement",
										"src": "2002:38:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 292,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "--",
											"prefix": false,
											"src": "2050:11:1",
											"subExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"id": 289,
													"name": "self",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 251,
													"src": "2050:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
														"typeString": "struct itmap storage pointer"
													}
												},
												"id": 291,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": true,
												"memberName": "size",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 75,
												"src": "2050:9:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 293,
										"nodeType": "ExpressionStatement",
										"src": "2050:11:1"
									}
								]
							},
							"documentation": null,
							"id": 295,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "remove",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 254,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 251,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 295,
										"src": "1797:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 250,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "1797:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 253,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 295,
										"src": "1817:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 252,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "1817:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "1796:30:1"
							},
							"returnParameters": {
								"id": 257,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 256,
										"name": "success",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 295,
										"src": "1845:12:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 255,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "1845:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "1844:14:1"
							},
							"scope": 489,
							"src": "1781:287:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 312,
								"nodeType": "Block",
								"src": "2151:51:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 310,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 304,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 297,
															"src": "2168:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 305,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "data",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 70,
														"src": "2168:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
															"typeString": "mapping(uint256 => struct IndexValue storage ref)"
														}
													},
													"id": 307,
													"indexExpression": {
														"argumentTypes": null,
														"id": 306,
														"name": "key",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 299,
														"src": "2178:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "2168:14:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage",
														"typeString": "struct IndexValue storage ref"
													}
												},
												"id": 308,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "keyIndex",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 40,
												"src": "2168:23:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": ">",
											"rightExpression": {
												"argumentTypes": null,
												"hexValue": "30",
												"id": 309,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "number",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "2194:1:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_rational_0_by_1",
													"typeString": "int_const 0"
												},
												"value": "0"
											},
											"src": "2168:27:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"functionReturnParameters": 303,
										"id": 311,
										"nodeType": "Return",
										"src": "2161:34:1"
									}
								]
							},
							"documentation": null,
							"id": 313,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "contains",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 300,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 297,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 313,
										"src": "2092:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 296,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2092:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 299,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 313,
										"src": "2112:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 298,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2112:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2091:30:1"
							},
							"returnParameters": {
								"id": 303,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 302,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 313,
										"src": "2145:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 301,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "2145:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2144:6:1"
							},
							"scope": 489,
							"src": "2074:128:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 329,
								"nodeType": "Block",
								"src": "2289:52:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 321,
													"name": "self",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 315,
													"src": "2319:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
														"typeString": "struct itmap storage pointer"
													}
												},
												{
													"argumentTypes": null,
													"arguments": [
														{
															"argumentTypes": null,
															"id": 325,
															"isConstant": false,
															"isLValue": false,
															"isPure": true,
															"lValueRequested": false,
															"nodeType": "UnaryOperation",
															"operator": "-",
															"prefix": true,
															"src": "2330:2:1",
															"subExpression": {
																"argumentTypes": null,
																"hexValue": "31",
																"id": 324,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "number",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "2331:1:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_rational_1_by_1",
																	"typeString": "int_const 1"
																},
																"value": "1"
															},
															"typeDescriptions": {
																"typeIdentifier": "t_rational_minus_1_by_1",
																"typeString": "int_const -1"
															}
														}
													],
													"expression": {
														"argumentTypes": [
															{
																"typeIdentifier": "t_rational_minus_1_by_1",
																"typeString": "int_const -1"
															}
														],
														"id": 323,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"lValueRequested": false,
														"nodeType": "ElementaryTypeNameExpression",
														"src": "2325:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_type$_t_uint256_$",
															"typeString": "type(uint256)"
														},
														"typeName": {
															"id": 322,
															"name": "uint",
															"nodeType": "ElementaryTypeName",
															"src": "2325:4:1",
															"typeDescriptions": {
																"typeIdentifier": null,
																"typeString": null
															}
														}
													},
													"id": 326,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "typeConversion",
													"lValueRequested": false,
													"names": [],
													"nodeType": "FunctionCall",
													"src": "2325:8:1",
													"tryCall": false,
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
														"typeString": "struct itmap storage pointer"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"id": 320,
												"name": "iterate_next",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 376,
												"src": "2306:12:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_uint256_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (uint256)"
												}
											},
											"id": 327,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "2306:28:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"functionReturnParameters": 319,
										"id": 328,
										"nodeType": "Return",
										"src": "2299:35:1"
									}
								]
							},
							"documentation": null,
							"id": 330,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_start",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 316,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 315,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 330,
										"src": "2231:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 314,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2231:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2230:20:1"
							},
							"returnParameters": {
								"id": 319,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 318,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 330,
										"src": "2274:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 317,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2274:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2273:15:1"
							},
							"scope": 489,
							"src": "2208:133:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 345,
								"nodeType": "Block",
								"src": "2434:51:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											},
											"id": 343,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"id": 339,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 334,
												"src": "2451:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "<",
											"rightExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 340,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 332,
														"src": "2462:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 341,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "keys",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 73,
													"src": "2462:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
														"typeString": "struct KeyFlag storage ref[] storage ref"
													}
												},
												"id": 342,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "length",
												"nodeType": "MemberAccess",
												"referencedDeclaration": null,
												"src": "2462:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"src": "2451:27:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"functionReturnParameters": 338,
										"id": 344,
										"nodeType": "Return",
										"src": "2444:34:1"
									}
								]
							},
							"documentation": null,
							"id": 346,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_valid",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 335,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 332,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 346,
										"src": "2370:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 331,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2370:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 334,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 346,
										"src": "2390:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 333,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2390:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2369:35:1"
							},
							"returnParameters": {
								"id": 338,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 337,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 346,
										"src": "2428:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 336,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "2428:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2427:6:1"
							},
							"scope": 489,
							"src": "2347:138:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 375,
								"nodeType": "Block",
								"src": "2588:151:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"id": 356,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "++",
											"prefix": false,
											"src": "2598:10:1",
											"subExpression": {
												"argumentTypes": null,
												"id": 355,
												"name": "keyIndex",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 350,
												"src": "2598:8:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 357,
										"nodeType": "ExpressionStatement",
										"src": "2598:10:1"
									},
									{
										"body": {
											"expression": {
												"argumentTypes": null,
												"id": 370,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "UnaryOperation",
												"operator": "++",
												"prefix": false,
												"src": "2697:10:1",
												"subExpression": {
													"argumentTypes": null,
													"id": 369,
													"name": "keyIndex",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 350,
													"src": "2697:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"id": 371,
											"nodeType": "ExpressionStatement",
											"src": "2697:10:1"
										},
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"id": 368,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"commonType": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"id": 362,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"leftExpression": {
													"argumentTypes": null,
													"id": 358,
													"name": "keyIndex",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 350,
													"src": "2625:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"nodeType": "BinaryOperation",
												"operator": "<",
												"rightExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 359,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 348,
															"src": "2636:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 360,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "keys",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 73,
														"src": "2636:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
															"typeString": "struct KeyFlag storage ref[] storage ref"
														}
													},
													"id": 361,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "length",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "2636:16:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"src": "2625:27:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "&&",
											"rightExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"baseExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 363,
															"name": "self",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 348,
															"src": "2656:4:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
																"typeString": "struct itmap storage pointer"
															}
														},
														"id": 364,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "keys",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 73,
														"src": "2656:9:1",
														"typeDescriptions": {
															"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
															"typeString": "struct KeyFlag storage ref[] storage ref"
														}
													},
													"id": 366,
													"indexExpression": {
														"argumentTypes": null,
														"id": 365,
														"name": "keyIndex",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 350,
														"src": "2666:8:1",
														"typeDescriptions": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														}
													},
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "IndexAccess",
													"src": "2656:19:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
														"typeString": "struct KeyFlag storage ref"
													}
												},
												"id": 367,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "deleted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 65,
												"src": "2656:27:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "2625:58:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 372,
										"nodeType": "WhileStatement",
										"src": "2618:89:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 373,
											"name": "keyIndex",
											"nodeType": "Identifier",
											"overloadedDeclarations": [],
											"referencedDeclaration": 350,
											"src": "2724:8:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"functionReturnParameters": 354,
										"id": 374,
										"nodeType": "Return",
										"src": "2717:15:1"
									}
								]
							},
							"documentation": null,
							"id": 376,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_next",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 351,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 348,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 376,
										"src": "2513:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 347,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2513:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 350,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 376,
										"src": "2533:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 349,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2533:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2512:35:1"
							},
							"returnParameters": {
								"id": 354,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 353,
										"name": "r_keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 376,
										"src": "2571:15:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 352,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2571:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2570:17:1"
							},
							"scope": 489,
							"src": "2491:248:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 487,
								"nodeType": "Block",
								"src": "2849:736:1",
								"statements": [
									{
										"assignments": [
											386
										],
										"declarations": [
											{
												"constant": false,
												"id": 386,
												"name": "key",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "2859:8:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 385,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "2859:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 392,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 387,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "2870:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 388,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "keys",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 73,
													"src": "2870:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_array$_t_struct$_KeyFlag_$66_storage_$dyn_storage",
														"typeString": "struct KeyFlag storage ref[] storage ref"
													}
												},
												"id": 390,
												"indexExpression": {
													"argumentTypes": null,
													"id": 389,
													"name": "keyIndex",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 380,
													"src": "2880:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "2870:19:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_KeyFlag_$66_storage",
													"typeString": "struct KeyFlag storage ref"
												}
											},
											"id": 391,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "key",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 63,
											"src": "2870:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "2859:34:1"
									},
									{
										"assignments": [
											394
										],
										"declarations": [
											{
												"constant": false,
												"id": 394,
												"name": "price",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "2903:10:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 393,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "2903:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 400,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 395,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "2916:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 396,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "2916:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 398,
												"indexExpression": {
													"argumentTypes": null,
													"id": 397,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "2926:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "2916:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 399,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "price",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 42,
											"src": "2916:20:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "2903:33:1"
									},
									{
										"assignments": [
											402
										],
										"declarations": [
											{
												"constant": false,
												"id": 402,
												"name": "lowest_bidder",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "2946:29:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												},
												"typeName": {
													"id": 401,
													"name": "address",
													"nodeType": "ElementaryTypeName",
													"src": "2946:15:1",
													"stateMutability": "payable",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 408,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 403,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "2978:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 404,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "2978:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 406,
												"indexExpression": {
													"argumentTypes": null,
													"id": 405,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "2988:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "2978:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 407,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "lowest_bidder",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 44,
											"src": "2978:28:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "2946:60:1"
									},
									{
										"assignments": [
											410
										],
										"declarations": [
											{
												"constant": false,
												"id": 410,
												"name": "next_lowest_bidder",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3016:34:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												},
												"typeName": {
													"id": 409,
													"name": "address",
													"nodeType": "ElementaryTypeName",
													"src": "3016:15:1",
													"stateMutability": "payable",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 416,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 411,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3053:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 412,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3053:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 414,
												"indexExpression": {
													"argumentTypes": null,
													"id": 413,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3063:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3053:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 415,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "next_lowest_bidder",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 46,
											"src": "3053:33:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3016:70:1"
									},
									{
										"assignments": [
											418
										],
										"declarations": [
											{
												"constant": false,
												"id": 418,
												"name": "balance",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3096:12:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												},
												"typeName": {
													"id": 417,
													"name": "uint",
													"nodeType": "ElementaryTypeName",
													"src": "3096:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 424,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 419,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3111:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 420,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3111:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 422,
												"indexExpression": {
													"argumentTypes": null,
													"id": 421,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3121:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3111:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 423,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "balance",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 48,
											"src": "3111:22:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3096:37:1"
									},
									{
										"assignments": [
											426
										],
										"declarations": [
											{
												"constant": false,
												"id": 426,
												"name": "poster",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3143:22:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_address_payable",
													"typeString": "address payable"
												},
												"typeName": {
													"id": 425,
													"name": "address",
													"nodeType": "ElementaryTypeName",
													"src": "3143:15:1",
													"stateMutability": "payable",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 432,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 427,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3168:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 428,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3168:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 430,
												"indexExpression": {
													"argumentTypes": null,
													"id": 429,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3178:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3168:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 431,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "poster",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 50,
											"src": "3168:21:1",
											"typeDescriptions": {
												"typeIdentifier": "t_address_payable",
												"typeString": "address payable"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3143:46:1"
									},
									{
										"assignments": [
											434
										],
										"declarations": [
											{
												"constant": false,
												"id": 434,
												"name": "title",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3199:19:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string"
												},
												"typeName": {
													"id": 433,
													"name": "string",
													"nodeType": "ElementaryTypeName",
													"src": "3199:6:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_storage_ptr",
														"typeString": "string"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 440,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 435,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3221:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 436,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3221:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 438,
												"indexExpression": {
													"argumentTypes": null,
													"id": 437,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3231:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3221:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 439,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "title",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 58,
											"src": "3221:20:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3199:42:1"
									},
									{
										"assignments": [
											442
										],
										"declarations": [
											{
												"constant": false,
												"id": 442,
												"name": "description",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3251:25:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_string_memory_ptr",
													"typeString": "string"
												},
												"typeName": {
													"id": 441,
													"name": "string",
													"nodeType": "ElementaryTypeName",
													"src": "3251:6:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_storage_ptr",
														"typeString": "string"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 448,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 443,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3279:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 444,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3279:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 446,
												"indexExpression": {
													"argumentTypes": null,
													"id": 445,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3289:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3279:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 447,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "description",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 60,
											"src": "3279:26:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage",
												"typeString": "string storage ref"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3251:54:1"
									},
									{
										"assignments": [
											450
										],
										"declarations": [
											{
												"constant": false,
												"id": 450,
												"name": "claimed",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3315:12:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"typeName": {
													"id": 449,
													"name": "bool",
													"nodeType": "ElementaryTypeName",
													"src": "3315:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 456,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 451,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3330:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 452,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3330:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 454,
												"indexExpression": {
													"argumentTypes": null,
													"id": 453,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3340:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3330:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 455,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "claimed",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 52,
											"src": "3330:22:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3315:37:1"
									},
									{
										"assignments": [
											458
										],
										"declarations": [
											{
												"constant": false,
												"id": 458,
												"name": "accepted",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3362:13:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"typeName": {
													"id": 457,
													"name": "bool",
													"nodeType": "ElementaryTypeName",
													"src": "3362:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 464,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 459,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3378:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 460,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3378:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 462,
												"indexExpression": {
													"argumentTypes": null,
													"id": 461,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3388:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3378:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 463,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "accepted",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 54,
											"src": "3378:23:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3362:39:1"
									},
									{
										"assignments": [
											466
										],
										"declarations": [
											{
												"constant": false,
												"id": 466,
												"name": "paid",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 487,
												"src": "3411:9:1",
												"stateVariable": false,
												"storageLocation": "default",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"typeName": {
													"id": 465,
													"name": "bool",
													"nodeType": "ElementaryTypeName",
													"src": "3411:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 472,
										"initialValue": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"baseExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 467,
														"name": "self",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 378,
														"src": "3423:4:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
															"typeString": "struct itmap storage pointer"
														}
													},
													"id": 468,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "data",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 70,
													"src": "3423:9:1",
													"typeDescriptions": {
														"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_IndexValue_$61_storage_$",
														"typeString": "mapping(uint256 => struct IndexValue storage ref)"
													}
												},
												"id": 470,
												"indexExpression": {
													"argumentTypes": null,
													"id": 469,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3433:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "IndexAccess",
												"src": "3423:14:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_storage",
													"typeString": "struct IndexValue storage ref"
												}
											},
											"id": 471,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "paid",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 56,
											"src": "3423:19:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3411:31:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 474,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 386,
													"src": "3470:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 475,
													"name": "price",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 394,
													"src": "3475:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 476,
													"name": "lowest_bidder",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 402,
													"src": "3482:13:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 477,
													"name": "next_lowest_bidder",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 410,
													"src": "3497:18:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 478,
													"name": "balance",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 418,
													"src": "3517:7:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 479,
													"name": "poster",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 426,
													"src": "3526:6:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 480,
													"name": "claimed",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 450,
													"src": "3534:7:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												{
													"argumentTypes": null,
													"id": 481,
													"name": "accepted",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 458,
													"src": "3543:8:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												{
													"argumentTypes": null,
													"id": 482,
													"name": "paid",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 466,
													"src": "3553:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												{
													"argumentTypes": null,
													"id": 483,
													"name": "title",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 434,
													"src": "3559:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												},
												{
													"argumentTypes": null,
													"id": 484,
													"name": "description",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 442,
													"src": "3566:11:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												],
												"id": 473,
												"name": "IndexValue",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 61,
												"src": "3459:10:1",
												"typeDescriptions": {
													"typeIdentifier": "t_type$_t_struct$_IndexValue_$61_storage_ptr_$",
													"typeString": "type(struct IndexValue storage pointer)"
												}
											},
											"id": 485,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "structConstructorCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "3459:119:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory",
												"typeString": "struct IndexValue memory"
											}
										},
										"functionReturnParameters": 384,
										"id": 486,
										"nodeType": "Return",
										"src": "3452:126:1"
									}
								]
							},
							"documentation": null,
							"id": 488,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "iterate_get",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 381,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 378,
										"name": "self",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 488,
										"src": "2766:18:1",
										"stateVariable": false,
										"storageLocation": "storage",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
											"typeString": "struct itmap"
										},
										"typeName": {
											"contractScope": null,
											"id": 377,
											"name": "itmap",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 76,
											"src": "2766:5:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
												"typeString": "struct itmap"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 380,
										"name": "keyIndex",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 488,
										"src": "2786:13:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 379,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "2786:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2765:35:1"
							},
							"returnParameters": {
								"id": 384,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 383,
										"name": "value",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 488,
										"src": "2824:23:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
											"typeString": "struct IndexValue"
										},
										"typeName": {
											"contractScope": null,
											"id": 382,
											"name": "IndexValue",
											"nodeType": "UserDefinedTypeName",
											"referencedDeclaration": 61,
											"src": "2824:10:1",
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
												"typeString": "struct IndexValue"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "2823:25:1"
							},
							"scope": 489,
							"src": "2745:840:1",
							"stateMutability": "view",
							"virtual": false,
							"visibility": "internal"
						}
					],
					"scope": 805,
					"src": "684:2903:1"
				},
				{
					"abstract": false,
					"baseContracts": [],
					"contractDependencies": [],
					"contractKind": "contract",
					"documentation": null,
					"fullyImplemented": true,
					"id": 804,
					"linearizedBaseContracts": [
						804
					],
					"name": "SupplyMesh",
					"nodeType": "ContractDefinition",
					"nodes": [
						{
							"constant": false,
							"id": 491,
							"name": "data",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 804,
							"src": "3615:10:1",
							"stateVariable": true,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_struct$_itmap_$76_storage",
								"typeString": "struct itmap"
							},
							"typeName": {
								"contractScope": null,
								"id": 490,
								"name": "itmap",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 76,
								"src": "3615:5:1",
								"typeDescriptions": {
									"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
									"typeString": "struct itmap"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"id": 494,
							"libraryName": {
								"contractScope": null,
								"id": 492,
								"name": "IterableMapping",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 489,
								"src": "3637:15:1",
								"typeDescriptions": {
									"typeIdentifier": "t_contract$_IterableMapping_$489",
									"typeString": "library IterableMapping"
								}
							},
							"nodeType": "UsingForDirective",
							"src": "3631:32:1",
							"typeName": {
								"contractScope": null,
								"id": 493,
								"name": "itmap",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 76,
								"src": "3657:5:1",
								"typeDescriptions": {
									"typeIdentifier": "t_struct$_itmap_$76_storage_ptr",
									"typeString": "struct itmap"
								}
							}
						},
						{
							"constant": false,
							"id": 496,
							"name": "max_key",
							"nodeType": "VariableDeclaration",
							"overrides": null,
							"scope": 804,
							"src": "3669:12:1",
							"stateVariable": true,
							"storageLocation": "default",
							"typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							},
							"typeName": {
								"id": 495,
								"name": "uint",
								"nodeType": "ElementaryTypeName",
								"src": "3669:4:1",
								"typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								}
							},
							"value": null,
							"visibility": "internal"
						},
						{
							"body": {
								"id": 553,
								"nodeType": "Block",
								"src": "3800:408:1",
								"statements": [
									{
										"assignments": [
											506
										],
										"declarations": [
											{
												"constant": false,
												"id": 506,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 553,
												"src": "3810:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 505,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "3810:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 511,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 509,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 498,
													"src": "3859:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 507,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "3842:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 508,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "3842:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 510,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "3842:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "3810:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"id": 524,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"commonType": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"id": 518,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"leftExpression": {
													"argumentTypes": null,
													"id": 514,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "UnaryOperation",
													"operator": "!",
													"prefix": true,
													"src": "3877:20:1",
													"subExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 512,
															"name": "bountyEntry",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 506,
															"src": "3878:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																"typeString": "struct IndexValue memory"
															}
														},
														"id": 513,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "claimed",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 52,
														"src": "3878:19:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"nodeType": "BinaryOperation",
												"operator": "&&",
												"rightExpression": {
													"argumentTypes": null,
													"id": 517,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "UnaryOperation",
													"operator": "!",
													"prefix": true,
													"src": "3901:21:1",
													"subExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 515,
															"name": "bountyEntry",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 506,
															"src": "3902:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																"typeString": "struct IndexValue memory"
															}
														},
														"id": 516,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "accepted",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 54,
														"src": "3902:20:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"src": "3877:45:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "&&",
											"rightExpression": {
												"argumentTypes": null,
												"components": [
													{
														"argumentTypes": null,
														"commonType": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														},
														"id": 522,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftExpression": {
															"argumentTypes": null,
															"id": 519,
															"name": "price",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 500,
															"src": "3927:5:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "BinaryOperation",
														"operator": ">=",
														"rightExpression": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"id": 520,
																"name": "bountyEntry",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 506,
																"src": "3937:11:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																	"typeString": "struct IndexValue memory"
																}
															},
															"id": 521,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "price",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 42,
															"src": "3937:17:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "3927:27:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													}
												],
												"id": 523,
												"isConstant": false,
												"isInlineArray": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"nodeType": "TupleExpression",
												"src": "3926:29:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "3877:78:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 550,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "4196:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 504,
											"id": 551,
											"nodeType": "Return",
											"src": "4189:12:1"
										},
										"id": 552,
										"nodeType": "IfStatement",
										"src": "3873:328:1",
										"trueBody": {
											"id": 549,
											"nodeType": "Block",
											"src": "3957:226:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"id": 528,
																"name": "max_key",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 496,
																"src": "3983:7:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"id": 529,
																"name": "price",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 500,
																"src": "3992:5:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 530,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "3999:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 531,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "poster",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 50,
																"src": "3999:18:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 532,
																	"name": "msg",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": -15,
																	"src": "4019:3:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_magic_message",
																		"typeString": "msg"
																	}
																},
																"id": 533,
																"isConstant": false,
																"isLValue": false,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "sender",
																"nodeType": "MemberAccess",
																"referencedDeclaration": null,
																"src": "4019:10:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 534,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4031:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 535,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 44,
																"src": "4031:25:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 536,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4058:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 537,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "title",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 58,
																"src": "4058:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 538,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4077:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 539,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "description",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 60,
																"src": "4077:23:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"hexValue": "74727565",
																"id": 540,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "bool",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "4102:4:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																"value": "true"
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 541,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4108:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 542,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "accepted",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 54,
																"src": "4108:20:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 543,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 506,
																	"src": "4130:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 544,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "paid",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 56,
																"src": "4130:16:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"expression": {
																"argumentTypes": null,
																"id": 525,
																"name": "data",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 491,
																"src": "3971:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage",
																	"typeString": "struct itmap storage ref"
																}
															},
															"id": 527,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "insert",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 249,
															"src": "3971:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
															}
														},
														"id": 545,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "3971:176:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"id": 546,
													"nodeType": "ExpressionStatement",
													"src": "3971:176:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 547,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "4168:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 504,
													"id": 548,
													"nodeType": "Return",
													"src": "4161:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "b4c81b7e",
							"id": 554,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "placeBidOnBounty",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 501,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 498,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 554,
										"src": "3756:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 497,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "3756:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 500,
										"name": "price",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 554,
										"src": "3766:10:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 499,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "3766:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "3755:22:1"
							},
							"returnParameters": {
								"id": 504,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 503,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 554,
										"src": "3794:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 502,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "3794:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "3793:6:1"
							},
							"scope": 804,
							"src": "3730:478:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 599,
								"nodeType": "Block",
								"src": "4394:380:1",
								"statements": [
									{
										"assignments": [
											562
										],
										"declarations": [
											{
												"constant": false,
												"id": 562,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 599,
												"src": "4404:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 561,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "4404:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 567,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 565,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 556,
													"src": "4453:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 563,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "4436:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 564,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "4436:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 566,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "4436:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "4404:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"id": 568,
												"name": "bountyEntry",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 562,
												"src": "4471:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue memory"
												}
											},
											"id": 569,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "claimed",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 52,
											"src": "4471:19:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 596,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "4762:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 560,
											"id": 597,
											"nodeType": "Return",
											"src": "4755:12:1"
										},
										"id": 598,
										"nodeType": "IfStatement",
										"src": "4467:300:1",
										"trueBody": {
											"id": 595,
											"nodeType": "Block",
											"src": "4492:257:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"id": 573,
																"name": "max_key",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 496,
																"src": "4518:7:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 574,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4527:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 575,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "price",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 42,
																"src": "4527:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 576,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4546:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 577,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "poster",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 50,
																"src": "4546:18:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 578,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4566:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 579,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 44,
																"src": "4566:25:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 580,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4593:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 581,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "next_lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 46,
																"src": "4593:30:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 582,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4625:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 583,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "title",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 58,
																"src": "4625:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 584,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4644:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 585,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "description",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 60,
																"src": "4644:23:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 586,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4669:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 587,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "claimed",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 52,
																"src": "4669:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															},
															{
																"argumentTypes": null,
																"hexValue": "74727565",
																"id": 588,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "bool",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "4690:4:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																"value": "true"
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 589,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 562,
																	"src": "4696:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 590,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "paid",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 56,
																"src": "4696:16:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"expression": {
																"argumentTypes": null,
																"id": 570,
																"name": "data",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 491,
																"src": "4506:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage",
																	"typeString": "struct itmap storage ref"
																}
															},
															"id": 572,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "insert",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 249,
															"src": "4506:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
															}
														},
														"id": 591,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "4506:207:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"id": 592,
													"nodeType": "ExpressionStatement",
													"src": "4506:207:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 593,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "4734:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 560,
													"id": 594,
													"nodeType": "Return",
													"src": "4727:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "dcd94dee",
							"id": 600,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "acceptBidOnBounty",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 557,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 556,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 600,
										"src": "4362:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 555,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "4362:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4361:10:1"
							},
							"returnParameters": {
								"id": 560,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 559,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 600,
										"src": "4388:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 558,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "4388:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4387:6:1"
							},
							"scope": 804,
							"src": "4335:439:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 645,
								"nodeType": "Block",
								"src": "4839:386:1",
								"statements": [
									{
										"assignments": [
											608
										],
										"declarations": [
											{
												"constant": false,
												"id": 608,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 645,
												"src": "4849:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 607,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "4849:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 613,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 611,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 602,
													"src": "4898:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 609,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "4881:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 610,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "4881:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 612,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "4881:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "4849:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"id": 614,
												"name": "bountyEntry",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 608,
												"src": "4916:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue memory"
												}
											},
											"id": 615,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "claimed",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 52,
											"src": "4916:19:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 642,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "5213:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 606,
											"id": 643,
											"nodeType": "Return",
											"src": "5206:12:1"
										},
										"id": 644,
										"nodeType": "IfStatement",
										"src": "4912:306:1",
										"trueBody": {
											"id": 641,
											"nodeType": "Block",
											"src": "4937:263:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"id": 619,
																"name": "max_key",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 496,
																"src": "4963:7:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 620,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "4972:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 621,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "price",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 42,
																"src": "4972:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 622,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "4991:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 623,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "poster",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 50,
																"src": "4991:18:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 624,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5011:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 625,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "next_lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 46,
																"src": "5011:30:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 626,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5043:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 627,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "next_lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 46,
																"src": "5043:30:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 628,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5075:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 629,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "title",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 58,
																"src": "5075:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 630,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5094:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 631,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "description",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 60,
																"src": "5094:23:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																}
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 632,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5119:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 633,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "claimed",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 52,
																"src": "5119:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															},
															{
																"argumentTypes": null,
																"hexValue": "66616c7365",
																"id": 634,
																"isConstant": false,
																"isLValue": false,
																"isPure": true,
																"kind": "bool",
																"lValueRequested": false,
																"nodeType": "Literal",
																"src": "5140:5:1",
																"subdenomination": null,
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																"value": "false"
															},
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 635,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 608,
																	"src": "5147:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 636,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "paid",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 56,
																"src": "5147:16:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_string_memory",
																	"typeString": "string memory"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																},
																{
																	"typeIdentifier": "t_bool",
																	"typeString": "bool"
																}
															],
															"expression": {
																"argumentTypes": null,
																"id": 616,
																"name": "data",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 491,
																"src": "4951:4:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_itmap_$76_storage",
																	"typeString": "struct itmap storage ref"
																}
															},
															"id": 618,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "insert",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 249,
															"src": "4951:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
															}
														},
														"id": 637,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "4951:213:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"id": 638,
													"nodeType": "ExpressionStatement",
													"src": "4951:213:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 639,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "5185:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 606,
													"id": 640,
													"nodeType": "Return",
													"src": "5178:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "599c716a",
							"id": 646,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "rejectBidOnBounty",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 603,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 602,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 646,
										"src": "4807:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 601,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "4807:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4806:10:1"
							},
							"returnParameters": {
								"id": 606,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 605,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 646,
										"src": "4833:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 604,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "4833:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "4832:6:1"
							},
							"scope": 804,
							"src": "4780:445:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 680,
								"nodeType": "Block",
								"src": "5430:161:1",
								"statements": [
									{
										"expression": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 660,
													"name": "max_key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 496,
													"src": "5452:7:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"id": 661,
													"name": "price",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 648,
													"src": "5461:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												},
												{
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 662,
														"name": "msg",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": -15,
														"src": "5468:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_magic_message",
															"typeString": "msg"
														}
													},
													"id": 663,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "sender",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "5468:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 664,
														"name": "msg",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": -15,
														"src": "5480:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_magic_message",
															"typeString": "msg"
														}
													},
													"id": 665,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "sender",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "5480:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 666,
														"name": "msg",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": -15,
														"src": "5492:3:1",
														"typeDescriptions": {
															"typeIdentifier": "t_magic_message",
															"typeString": "msg"
														}
													},
													"id": 667,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "sender",
													"nodeType": "MemberAccess",
													"referencedDeclaration": null,
													"src": "5492:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													}
												},
												{
													"argumentTypes": null,
													"id": 668,
													"name": "title",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 650,
													"src": "5504:5:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												},
												{
													"argumentTypes": null,
													"id": 669,
													"name": "description",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 652,
													"src": "5511:11:1",
													"typeDescriptions": {
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													}
												},
												{
													"argumentTypes": null,
													"hexValue": "66616c7365",
													"id": 670,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "bool",
													"lValueRequested": false,
													"nodeType": "Literal",
													"src": "5524:5:1",
													"subdenomination": null,
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													"value": "false"
												},
												{
													"argumentTypes": null,
													"hexValue": "66616c7365",
													"id": 671,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "bool",
													"lValueRequested": false,
													"nodeType": "Literal",
													"src": "5531:5:1",
													"subdenomination": null,
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													"value": "false"
												},
												{
													"argumentTypes": null,
													"hexValue": "66616c7365",
													"id": 672,
													"isConstant": false,
													"isLValue": false,
													"isPure": true,
													"kind": "bool",
													"lValueRequested": false,
													"nodeType": "Literal",
													"src": "5538:5:1",
													"subdenomination": null,
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													"value": "false"
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_address_payable",
														"typeString": "address payable"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													},
													{
														"typeIdentifier": "t_string_memory_ptr",
														"typeString": "string memory"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													},
													{
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 657,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "5440:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 659,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "insert",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 249,
												"src": "5440:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
												}
											},
											"id": 673,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "5440:104:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"id": 674,
										"nodeType": "ExpressionStatement",
										"src": "5440:104:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"id": 676,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"nodeType": "UnaryOperation",
											"operator": "++",
											"prefix": false,
											"src": "5554:9:1",
											"subExpression": {
												"argumentTypes": null,
												"id": 675,
												"name": "max_key",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 496,
												"src": "5554:7:1",
												"typeDescriptions": {
													"typeIdentifier": "t_uint256",
													"typeString": "uint256"
												}
											},
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"id": 677,
										"nodeType": "ExpressionStatement",
										"src": "5554:9:1"
									},
									{
										"expression": {
											"argumentTypes": null,
											"hexValue": "74727565",
											"id": 678,
											"isConstant": false,
											"isLValue": false,
											"isPure": true,
											"kind": "bool",
											"lValueRequested": false,
											"nodeType": "Literal",
											"src": "5580:4:1",
											"subdenomination": null,
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"value": "true"
										},
										"functionReturnParameters": 656,
										"id": 679,
										"nodeType": "Return",
										"src": "5573:11:1"
									}
								]
							},
							"documentation": null,
							"functionSelector": "20ae5a62",
							"id": 681,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "addBountyForEntity",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 653,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 648,
										"name": "price",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5348:10:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 647,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "5348:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 650,
										"name": "title",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5360:19:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 649,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "5360:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 652,
										"name": "description",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5381:25:1",
										"stateVariable": false,
										"storageLocation": "memory",
										"typeDescriptions": {
											"typeIdentifier": "t_string_memory_ptr",
											"typeString": "string"
										},
										"typeName": {
											"id": 651,
											"name": "string",
											"nodeType": "ElementaryTypeName",
											"src": "5381:6:1",
											"typeDescriptions": {
												"typeIdentifier": "t_string_storage_ptr",
												"typeString": "string"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5347:60:1"
							},
							"returnParameters": {
								"id": 656,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 655,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 681,
										"src": "5424:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 654,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "5424:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5423:6:1"
							},
							"scope": 804,
							"src": "5320:271:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 719,
								"nodeType": "Block",
								"src": "5765:271:1",
								"statements": [
									{
										"assignments": [
											689
										],
										"declarations": [
											{
												"constant": false,
												"id": 689,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 719,
												"src": "5775:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 688,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "5775:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 694,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 692,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 683,
													"src": "5824:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 690,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "5807:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 691,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "5807:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 693,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "5807:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "5775:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"commonType": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											},
											"id": 703,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"lValueRequested": false,
											"leftExpression": {
												"argumentTypes": null,
												"commonType": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"id": 700,
												"isConstant": false,
												"isLValue": false,
												"isPure": false,
												"lValueRequested": false,
												"leftExpression": {
													"argumentTypes": null,
													"id": 697,
													"isConstant": false,
													"isLValue": false,
													"isPure": false,
													"lValueRequested": false,
													"nodeType": "UnaryOperation",
													"operator": "!",
													"prefix": true,
													"src": "5842:17:1",
													"subExpression": {
														"argumentTypes": null,
														"expression": {
															"argumentTypes": null,
															"id": 695,
															"name": "bountyEntry",
															"nodeType": "Identifier",
															"overloadedDeclarations": [],
															"referencedDeclaration": 689,
															"src": "5843:11:1",
															"typeDescriptions": {
																"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																"typeString": "struct IndexValue memory"
															}
														},
														"id": 696,
														"isConstant": false,
														"isLValue": true,
														"isPure": false,
														"lValueRequested": false,
														"memberName": "paid",
														"nodeType": "MemberAccess",
														"referencedDeclaration": 56,
														"src": "5843:16:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"nodeType": "BinaryOperation",
												"operator": "&&",
												"rightExpression": {
													"argumentTypes": null,
													"expression": {
														"argumentTypes": null,
														"id": 698,
														"name": "bountyEntry",
														"nodeType": "Identifier",
														"overloadedDeclarations": [],
														"referencedDeclaration": 689,
														"src": "5863:11:1",
														"typeDescriptions": {
															"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
															"typeString": "struct IndexValue memory"
														}
													},
													"id": 699,
													"isConstant": false,
													"isLValue": true,
													"isPure": false,
													"lValueRequested": false,
													"memberName": "claimed",
													"nodeType": "MemberAccess",
													"referencedDeclaration": 52,
													"src": "5863:19:1",
													"typeDescriptions": {
														"typeIdentifier": "t_bool",
														"typeString": "bool"
													}
												},
												"src": "5842:40:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"nodeType": "BinaryOperation",
											"operator": "&&",
											"rightExpression": {
												"argumentTypes": null,
												"expression": {
													"argumentTypes": null,
													"id": 701,
													"name": "bountyEntry",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 689,
													"src": "5886:11:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
														"typeString": "struct IndexValue memory"
													}
												},
												"id": 702,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "accepted",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 54,
												"src": "5886:20:1",
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												}
											},
											"src": "5842:64:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 716,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "6024:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 687,
											"id": 717,
											"nodeType": "Return",
											"src": "6017:12:1"
										},
										"id": 718,
										"nodeType": "IfStatement",
										"src": "5838:191:1",
										"trueBody": {
											"id": 715,
											"nodeType": "Block",
											"src": "5908:103:1",
											"statements": [
												{
													"expression": {
														"argumentTypes": null,
														"arguments": [
															{
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 709,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 689,
																	"src": "5957:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 710,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "price",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 42,
																"src": "5957:17:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															}
														],
														"expression": {
															"argumentTypes": [
																{
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															],
															"expression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 704,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 689,
																	"src": "5922:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 707,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "lowest_bidder",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 44,
																"src": "5922:25:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_address_payable",
																	"typeString": "address payable"
																}
															},
															"id": 708,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "transfer",
															"nodeType": "MemberAccess",
															"referencedDeclaration": null,
															"src": "5922:34:1",
															"typeDescriptions": {
																"typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
																"typeString": "function (uint256)"
															}
														},
														"id": 711,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"kind": "functionCall",
														"lValueRequested": false,
														"names": [],
														"nodeType": "FunctionCall",
														"src": "5922:53:1",
														"tryCall": false,
														"typeDescriptions": {
															"typeIdentifier": "t_tuple$__$",
															"typeString": "tuple()"
														}
													},
													"id": 712,
													"nodeType": "ExpressionStatement",
													"src": "5922:53:1"
												},
												{
													"expression": {
														"argumentTypes": null,
														"hexValue": "74727565",
														"id": 713,
														"isConstant": false,
														"isLValue": false,
														"isPure": true,
														"kind": "bool",
														"lValueRequested": false,
														"nodeType": "Literal",
														"src": "5996:4:1",
														"subdenomination": null,
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														},
														"value": "true"
													},
													"functionReturnParameters": 687,
													"id": 714,
													"nodeType": "Return",
													"src": "5989:11:1"
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "13d6a6f3",
							"id": 720,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "payBountyForEntity",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 684,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 683,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 720,
										"src": "5733:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 682,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "5733:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5732:10:1"
							},
							"returnParameters": {
								"id": 687,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 686,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 720,
										"src": "5759:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 685,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "5759:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "5758:6:1"
							},
							"scope": 804,
							"src": "5705:331:1",
							"stateMutability": "nonpayable",
							"virtual": false,
							"visibility": "public"
						},
						{
							"body": {
								"id": 802,
								"nodeType": "Block",
								"src": "6260:671:1",
								"statements": [
									{
										"assignments": [
											730
										],
										"declarations": [
											{
												"constant": false,
												"id": 730,
												"name": "bountyEntry",
												"nodeType": "VariableDeclaration",
												"overrides": null,
												"scope": 802,
												"src": "6270:29:1",
												"stateVariable": false,
												"storageLocation": "memory",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue"
												},
												"typeName": {
													"contractScope": null,
													"id": 729,
													"name": "IndexValue",
													"nodeType": "UserDefinedTypeName",
													"referencedDeclaration": 61,
													"src": "6270:10:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_IndexValue_$61_storage_ptr",
														"typeString": "struct IndexValue"
													}
												},
												"value": null,
												"visibility": "internal"
											}
										],
										"id": 735,
										"initialValue": {
											"argumentTypes": null,
											"arguments": [
												{
													"argumentTypes": null,
													"id": 733,
													"name": "key",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 724,
													"src": "6319:3:1",
													"typeDescriptions": {
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												}
											],
											"expression": {
												"argumentTypes": [
													{
														"typeIdentifier": "t_uint256",
														"typeString": "uint256"
													}
												],
												"expression": {
													"argumentTypes": null,
													"id": 731,
													"name": "data",
													"nodeType": "Identifier",
													"overloadedDeclarations": [],
													"referencedDeclaration": 491,
													"src": "6302:4:1",
													"typeDescriptions": {
														"typeIdentifier": "t_struct$_itmap_$76_storage",
														"typeString": "struct itmap storage ref"
													}
												},
												"id": 732,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"memberName": "iterate_get",
												"nodeType": "MemberAccess",
												"referencedDeclaration": 488,
												"src": "6302:16:1",
												"typeDescriptions": {
													"typeIdentifier": "t_function_internal_view$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$returns$_t_struct$_IndexValue_$61_memory_ptr_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
													"typeString": "function (struct itmap storage pointer,uint256) view returns (struct IndexValue memory)"
												}
											},
											"id": 734,
											"isConstant": false,
											"isLValue": false,
											"isPure": false,
											"kind": "functionCall",
											"lValueRequested": false,
											"names": [],
											"nodeType": "FunctionCall",
											"src": "6302:21:1",
											"tryCall": false,
											"typeDescriptions": {
												"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
												"typeString": "struct IndexValue memory"
											}
										},
										"nodeType": "VariableDeclarationStatement",
										"src": "6270:53:1"
									},
									{
										"condition": {
											"argumentTypes": null,
											"expression": {
												"argumentTypes": null,
												"id": 736,
												"name": "bountyEntry",
												"nodeType": "Identifier",
												"overloadedDeclarations": [],
												"referencedDeclaration": 730,
												"src": "6337:11:1",
												"typeDescriptions": {
													"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
													"typeString": "struct IndexValue memory"
												}
											},
											"id": 737,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"memberName": "paid",
											"nodeType": "MemberAccess",
											"referencedDeclaration": 56,
											"src": "6337:16:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"falseBody": {
											"expression": {
												"argumentTypes": null,
												"hexValue": "66616c7365",
												"id": 799,
												"isConstant": false,
												"isLValue": false,
												"isPure": true,
												"kind": "bool",
												"lValueRequested": false,
												"nodeType": "Literal",
												"src": "6919:5:1",
												"subdenomination": null,
												"typeDescriptions": {
													"typeIdentifier": "t_bool",
													"typeString": "bool"
												},
												"value": "false"
											},
											"functionReturnParameters": 728,
											"id": 800,
											"nodeType": "Return",
											"src": "6912:12:1"
										},
										"id": 801,
										"nodeType": "IfStatement",
										"src": "6333:591:1",
										"trueBody": {
											"id": 798,
											"nodeType": "Block",
											"src": "6355:551:1",
											"statements": [
												{
													"condition": {
														"argumentTypes": null,
														"commonType": {
															"typeIdentifier": "t_uint256",
															"typeString": "uint256"
														},
														"id": 744,
														"isConstant": false,
														"isLValue": false,
														"isPure": false,
														"lValueRequested": false,
														"leftExpression": {
															"argumentTypes": null,
															"commonType": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															},
															"id": 741,
															"isConstant": false,
															"isLValue": false,
															"isPure": false,
															"lValueRequested": false,
															"leftExpression": {
																"argumentTypes": null,
																"expression": {
																	"argumentTypes": null,
																	"id": 738,
																	"name": "bountyEntry",
																	"nodeType": "Identifier",
																	"overloadedDeclarations": [],
																	"referencedDeclaration": 730,
																	"src": "6373:11:1",
																	"typeDescriptions": {
																		"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																		"typeString": "struct IndexValue memory"
																	}
																},
																"id": 739,
																"isConstant": false,
																"isLValue": true,
																"isPure": false,
																"lValueRequested": false,
																"memberName": "balance",
																"nodeType": "MemberAccess",
																"referencedDeclaration": 48,
																"src": "6373:19:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															"nodeType": "BinaryOperation",
															"operator": "+",
															"rightExpression": {
																"argumentTypes": null,
																"id": 740,
																"name": "volume",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 722,
																"src": "6395:6:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_uint256",
																	"typeString": "uint256"
																}
															},
															"src": "6373:28:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"nodeType": "BinaryOperation",
														"operator": ">",
														"rightExpression": {
															"argumentTypes": null,
															"expression": {
																"argumentTypes": null,
																"id": 742,
																"name": "bountyEntry",
																"nodeType": "Identifier",
																"overloadedDeclarations": [],
																"referencedDeclaration": 730,
																"src": "6404:11:1",
																"typeDescriptions": {
																	"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																	"typeString": "struct IndexValue memory"
																}
															},
															"id": 743,
															"isConstant": false,
															"isLValue": true,
															"isPure": false,
															"lValueRequested": false,
															"memberName": "price",
															"nodeType": "MemberAccess",
															"referencedDeclaration": 42,
															"src": "6404:17:1",
															"typeDescriptions": {
																"typeIdentifier": "t_uint256",
																"typeString": "uint256"
															}
														},
														"src": "6373:48:1",
														"typeDescriptions": {
															"typeIdentifier": "t_bool",
															"typeString": "bool"
														}
													},
													"falseBody": {
														"id": 796,
														"nodeType": "Block",
														"src": "6799:97:1",
														"statements": [
															{
																"expression": {
																	"argumentTypes": null,
																	"arguments": [
																		{
																			"argumentTypes": null,
																			"id": 791,
																			"name": "volume",
																			"nodeType": "Identifier",
																			"overloadedDeclarations": [],
																			"referencedDeclaration": 722,
																			"src": "6845:6:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		}
																	],
																	"expression": {
																		"argumentTypes": [
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		],
																		"expression": {
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 786,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6817:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 789,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "poster",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 50,
																			"src": "6817:18:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		"id": 790,
																		"isConstant": false,
																		"isLValue": false,
																		"isPure": false,
																		"lValueRequested": false,
																		"memberName": "transfer",
																		"nodeType": "MemberAccess",
																		"referencedDeclaration": null,
																		"src": "6817:27:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
																			"typeString": "function (uint256)"
																		}
																	},
																	"id": 792,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"kind": "functionCall",
																	"lValueRequested": false,
																	"names": [],
																	"nodeType": "FunctionCall",
																	"src": "6817:35:1",
																	"tryCall": false,
																	"typeDescriptions": {
																		"typeIdentifier": "t_tuple$__$",
																		"typeString": "tuple()"
																	}
																},
																"id": 793,
																"nodeType": "ExpressionStatement",
																"src": "6817:35:1"
															},
															{
																"expression": {
																	"argumentTypes": null,
																	"hexValue": "74727565",
																	"id": 794,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"kind": "bool",
																	"lValueRequested": false,
																	"nodeType": "Literal",
																	"src": "6877:4:1",
																	"subdenomination": null,
																	"typeDescriptions": {
																		"typeIdentifier": "t_bool",
																		"typeString": "bool"
																	},
																	"value": "true"
																},
																"functionReturnParameters": 728,
																"id": 795,
																"nodeType": "Return",
																"src": "6870:11:1"
															}
														]
													},
													"id": 797,
													"nodeType": "IfStatement",
													"src": "6369:527:1",
													"trueBody": {
														"id": 785,
														"nodeType": "Block",
														"src": "6423:370:1",
														"statements": [
															{
																"expression": {
																	"argumentTypes": null,
																	"arguments": [
																		{
																			"argumentTypes": null,
																			"commonType": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			},
																			"id": 757,
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": false,
																			"lValueRequested": false,
																			"leftExpression": {
																				"argumentTypes": null,
																				"components": [
																					{
																						"argumentTypes": null,
																						"commonType": {
																							"typeIdentifier": "t_uint256",
																							"typeString": "uint256"
																						},
																						"id": 753,
																						"isConstant": false,
																						"isLValue": false,
																						"isPure": false,
																						"lValueRequested": false,
																						"leftExpression": {
																							"argumentTypes": null,
																							"expression": {
																								"argumentTypes": null,
																								"id": 750,
																								"name": "bountyEntry",
																								"nodeType": "Identifier",
																								"overloadedDeclarations": [],
																								"referencedDeclaration": 730,
																								"src": "6470:11:1",
																								"typeDescriptions": {
																									"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																									"typeString": "struct IndexValue memory"
																								}
																							},
																							"id": 751,
																							"isConstant": false,
																							"isLValue": true,
																							"isPure": false,
																							"lValueRequested": false,
																							"memberName": "balance",
																							"nodeType": "MemberAccess",
																							"referencedDeclaration": 48,
																							"src": "6470:19:1",
																							"typeDescriptions": {
																								"typeIdentifier": "t_uint256",
																								"typeString": "uint256"
																							}
																						},
																						"nodeType": "BinaryOperation",
																						"operator": "+",
																						"rightExpression": {
																							"argumentTypes": null,
																							"id": 752,
																							"name": "volume",
																							"nodeType": "Identifier",
																							"overloadedDeclarations": [],
																							"referencedDeclaration": 722,
																							"src": "6492:6:1",
																							"typeDescriptions": {
																								"typeIdentifier": "t_uint256",
																								"typeString": "uint256"
																							}
																						},
																						"src": "6470:28:1",
																						"typeDescriptions": {
																							"typeIdentifier": "t_uint256",
																							"typeString": "uint256"
																						}
																					}
																				],
																				"id": 754,
																				"isConstant": false,
																				"isInlineArray": false,
																				"isLValue": false,
																				"isPure": false,
																				"lValueRequested": false,
																				"nodeType": "TupleExpression",
																				"src": "6469:30:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_uint256",
																					"typeString": "uint256"
																				}
																			},
																			"nodeType": "BinaryOperation",
																			"operator": "-",
																			"rightExpression": {
																				"argumentTypes": null,
																				"expression": {
																					"argumentTypes": null,
																					"id": 755,
																					"name": "bountyEntry",
																					"nodeType": "Identifier",
																					"overloadedDeclarations": [],
																					"referencedDeclaration": 730,
																					"src": "6502:11:1",
																					"typeDescriptions": {
																						"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																						"typeString": "struct IndexValue memory"
																					}
																				},
																				"id": 756,
																				"isConstant": false,
																				"isLValue": true,
																				"isPure": false,
																				"lValueRequested": false,
																				"memberName": "price",
																				"nodeType": "MemberAccess",
																				"referencedDeclaration": 42,
																				"src": "6502:17:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_uint256",
																					"typeString": "uint256"
																				}
																			},
																			"src": "6469:50:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		}
																	],
																	"expression": {
																		"argumentTypes": [
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		],
																		"expression": {
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 745,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6441:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 748,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "poster",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 50,
																			"src": "6441:18:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		"id": 749,
																		"isConstant": false,
																		"isLValue": false,
																		"isPure": false,
																		"lValueRequested": false,
																		"memberName": "transfer",
																		"nodeType": "MemberAccess",
																		"referencedDeclaration": null,
																		"src": "6441:27:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
																			"typeString": "function (uint256)"
																		}
																	},
																	"id": 758,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"kind": "functionCall",
																	"lValueRequested": false,
																	"names": [],
																	"nodeType": "FunctionCall",
																	"src": "6441:79:1",
																	"tryCall": false,
																	"typeDescriptions": {
																		"typeIdentifier": "t_tuple$__$",
																		"typeString": "tuple()"
																	}
																},
																"id": 759,
																"nodeType": "ExpressionStatement",
																"src": "6441:79:1"
															},
															{
																"expression": {
																	"argumentTypes": null,
																	"arguments": [
																		{
																			"argumentTypes": null,
																			"id": 763,
																			"name": "max_key",
																			"nodeType": "Identifier",
																			"overloadedDeclarations": [],
																			"referencedDeclaration": 496,
																			"src": "6550:7:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 764,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6559:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 765,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "price",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 42,
																			"src": "6559:17:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 766,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6578:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 767,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "poster",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 50,
																			"src": "6578:18:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 768,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6598:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 769,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "lowest_bidder",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 44,
																			"src": "6598:25:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 770,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6625:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 771,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "next_lowest_bidder",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 46,
																			"src": "6625:30:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 772,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6657:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 773,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "title",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 58,
																			"src": "6657:17:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 774,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6676:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 775,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "description",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 60,
																			"src": "6676:23:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 776,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6701:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 777,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "claimed",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 52,
																			"src": "6701:19:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"expression": {
																				"argumentTypes": null,
																				"id": 778,
																				"name": "bountyEntry",
																				"nodeType": "Identifier",
																				"overloadedDeclarations": [],
																				"referencedDeclaration": 730,
																				"src": "6722:11:1",
																				"typeDescriptions": {
																					"typeIdentifier": "t_struct$_IndexValue_$61_memory_ptr",
																					"typeString": "struct IndexValue memory"
																				}
																			},
																			"id": 779,
																			"isConstant": false,
																			"isLValue": true,
																			"isPure": false,
																			"lValueRequested": false,
																			"memberName": "accepted",
																			"nodeType": "MemberAccess",
																			"referencedDeclaration": 54,
																			"src": "6722:20:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			}
																		},
																		{
																			"argumentTypes": null,
																			"hexValue": "74727565",
																			"id": 780,
																			"isConstant": false,
																			"isLValue": false,
																			"isPure": true,
																			"kind": "bool",
																			"lValueRequested": false,
																			"nodeType": "Literal",
																			"src": "6744:4:1",
																			"subdenomination": null,
																			"typeDescriptions": {
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			},
																			"value": "true"
																		}
																	],
																	"expression": {
																		"argumentTypes": [
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			},
																			{
																				"typeIdentifier": "t_uint256",
																				"typeString": "uint256"
																			},
																			{
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			},
																			{
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			},
																			{
																				"typeIdentifier": "t_address_payable",
																				"typeString": "address payable"
																			},
																			{
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			},
																			{
																				"typeIdentifier": "t_string_memory",
																				"typeString": "string memory"
																			},
																			{
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			},
																			{
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			},
																			{
																				"typeIdentifier": "t_bool",
																				"typeString": "bool"
																			}
																		],
																		"expression": {
																			"argumentTypes": null,
																			"id": 760,
																			"name": "data",
																			"nodeType": "Identifier",
																			"overloadedDeclarations": [],
																			"referencedDeclaration": 491,
																			"src": "6538:4:1",
																			"typeDescriptions": {
																				"typeIdentifier": "t_struct$_itmap_$76_storage",
																				"typeString": "struct itmap storage ref"
																			}
																		},
																		"id": 762,
																		"isConstant": false,
																		"isLValue": true,
																		"isPure": false,
																		"lValueRequested": false,
																		"memberName": "insert",
																		"nodeType": "MemberAccess",
																		"referencedDeclaration": 249,
																		"src": "6538:11:1",
																		"typeDescriptions": {
																			"typeIdentifier": "t_function_internal_nonpayable$_t_struct$_itmap_$76_storage_ptr_$_t_uint256_$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$_t_bool_$_t_bool_$returns$_t_bool_$bound_to$_t_struct$_itmap_$76_storage_ptr_$",
																			"typeString": "function (struct itmap storage pointer,uint256,uint256,address payable,address payable,address payable,string memory,string memory,bool,bool,bool) returns (bool)"
																		}
																	},
																	"id": 781,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": false,
																	"kind": "functionCall",
																	"lValueRequested": false,
																	"names": [],
																	"nodeType": "FunctionCall",
																	"src": "6538:211:1",
																	"tryCall": false,
																	"typeDescriptions": {
																		"typeIdentifier": "t_bool",
																		"typeString": "bool"
																	}
																},
																"id": 782,
																"nodeType": "ExpressionStatement",
																"src": "6538:211:1"
															},
															{
																"expression": {
																	"argumentTypes": null,
																	"hexValue": "74727565",
																	"id": 783,
																	"isConstant": false,
																	"isLValue": false,
																	"isPure": true,
																	"kind": "bool",
																	"lValueRequested": false,
																	"nodeType": "Literal",
																	"src": "6774:4:1",
																	"subdenomination": null,
																	"typeDescriptions": {
																		"typeIdentifier": "t_bool",
																		"typeString": "bool"
																	},
																	"value": "true"
																},
																"functionReturnParameters": 728,
																"id": 784,
																"nodeType": "Return",
																"src": "6767:11:1"
															}
														]
													}
												}
											]
										}
									}
								]
							},
							"documentation": null,
							"functionSelector": "2996c566",
							"id": 803,
							"implemented": true,
							"kind": "function",
							"modifiers": [],
							"name": "fundBountyForEntity",
							"nodeType": "FunctionDefinition",
							"overrides": null,
							"parameters": {
								"id": 725,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 722,
										"name": "volume",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 803,
										"src": "6207:11:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 721,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "6207:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									},
									{
										"constant": false,
										"id": 724,
										"name": "key",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 803,
										"src": "6220:8:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_uint256",
											"typeString": "uint256"
										},
										"typeName": {
											"id": 723,
											"name": "uint",
											"nodeType": "ElementaryTypeName",
											"src": "6220:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_uint256",
												"typeString": "uint256"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "6206:23:1"
							},
							"returnParameters": {
								"id": 728,
								"nodeType": "ParameterList",
								"parameters": [
									{
										"constant": false,
										"id": 727,
										"name": "",
										"nodeType": "VariableDeclaration",
										"overrides": null,
										"scope": 803,
										"src": "6254:4:1",
										"stateVariable": false,
										"storageLocation": "default",
										"typeDescriptions": {
											"typeIdentifier": "t_bool",
											"typeString": "bool"
										},
										"typeName": {
											"id": 726,
											"name": "bool",
											"nodeType": "ElementaryTypeName",
											"src": "6254:4:1",
											"typeDescriptions": {
												"typeIdentifier": "t_bool",
												"typeString": "bool"
											}
										},
										"value": null,
										"visibility": "internal"
									}
								],
								"src": "6253:6:1"
							},
							"scope": 804,
							"src": "6178:753:1",
							"stateMutability": "payable",
							"virtual": false,
							"visibility": "public"
						}
					],
					"scope": 805,
					"src": "3589:3344:1"
				}
			],
			"src": "0:6934:1"
		},
		"compiler": {
			"name": "solc",
			"version": "0.6.4+commit.1dca32f3.Emscripten.clang"
		},
		"networks": {},
		"schemaVersion": "3.0.23",
		"updatedAt": "2020-04-05T04:24:53.392Z",
		"devdoc": {
			"methods": {}
		},
		"userdoc": {
			"methods": {}
		}
	}
]
