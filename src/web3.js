import Web3 from 'web3';

export let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// We are in the browser and metamask is running.
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
	);
	web3 = new Web3(provider);
}

const address = '0xe7d704932f5d619968a6dfaad92eb04f01c7ea77';

const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: '_owner',
				type: 'address'
			},
			{
				indexed: true,
				name: '_spender',
				type: 'address'
			},
			{
				indexed: false,
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'Approval',
		type: 'event'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_spender',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'approve',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_spender',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			},
			{
				name: '_extraData',
				type: 'bytes'
			}
		],
		name: 'approveAndCall',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_to',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'transfer',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_from',
				type: 'address'
			},
			{
				name: '_to',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'transferFrom',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: '_from',
				type: 'address'
			},
			{
				indexed: true,
				name: '_to',
				type: 'address'
			},
			{
				indexed: false,
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		payable: false,
		stateMutability: 'nonpayable',
		type: 'fallback'
	},
	{
		constant: true,
		inputs: [
			{
				name: '_owner',
				type: 'address'
			},
			{
				name: '_spender',
				type: 'address'
			}
		],
		name: 'allowance',
		outputs: [
			{
				name: 'remaining',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '_owner',
				type: 'address'
			}
		],
		name: 'balanceOf',
		outputs: [
			{
				name: 'balance',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				name: '',
				type: 'uint8'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'version',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	}
];

export const tokenContract = new web3.eth.Contract(abi, address);
