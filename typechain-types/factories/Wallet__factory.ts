/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Wallet, WalletInterface } from "../Wallet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ticker",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "ticker",
        type: "bytes32",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokens",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "ticker",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct Wallet.Token[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenList",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenMapping",
    outputs: [
      {
        internalType: "bytes32",
        name: "ticker",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "ticker",
        type: "bytes32",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611a5c8061010d6000396000f3fe6080604052600436106100a75760003560e01c80639776aacf116100645780639776aacf146101bb5780639ead7222146101e4578063aa6ca80814610221578063c1612c441461024c578063d0e30db014610275578063f2fde38b1461027f576100a7565b80631f14df69146100ac5780632e1a7d4d146100e9578063667cb4ba14610112578063715018a6146101505780637d34900a146101675780638da5cb5b14610190575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce91906111f7565b6102a8565b6040516100e091906116c1565b60405180910390f35b3480156100f557600080fd5b50610110600480360381019061010b91906112c1565b6102cd565b005b34801561011e57600080fd5b506101396004803603810190610134919061125c565b610527565b6040516101479291906115d8565b60405180910390f35b34801561015c57600080fd5b5061016561056b565b005b34801561017357600080fd5b5061018e600480360381019061018991906112ea565b6105f3565b005b34801561019c57600080fd5b506101a56108ad565b6040516101b29190611520565b60405180910390f35b3480156101c757600080fd5b506101e260048036038101906101dd9190611285565b6108d6565b005b3480156101f057600080fd5b5061020b600480360381019061020691906112c1565b610a11565b60405161021891906115bd565b60405180910390f35b34801561022d57600080fd5b50610236610a35565b604051610243919061159b565b60405180910390f35b34801561025857600080fd5b50610273600480360381019061026e91906112ea565b610c28565b005b61027d610e51565b005b34801561028b57600080fd5b506102a660048036038101906102a191906111ce565b610f57565b005b6003602052816000526040600020602052806000526040600020600091509150505481565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f54424e42000000000000000000000000000000000000000000000000000000008152602001908152602001600020541015610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037790611621565b60405180910390fd5b61040381600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f54424e420000000000000000000000000000000000000000000000000000000081526020019081526020016000205461104f90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f54424e420000000000000000000000000000000000000000000000000000000081526020019081526020016000208190555060003373ffffffffffffffffffffffffffffffffffffffff168260405161049d9061150b565b60006040518083038185875af1925050503d80600081146104da576040519150601f19603f3d011682016040523d82523d6000602084013e6104df565b606091505b5050905080610523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051a90611641565b60405180910390fd5b5050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610573611065565b73ffffffffffffffffffffffffffffffffffffffff166105916108ad565b73ffffffffffffffffffffffffffffffffffffffff16146105e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105de90611681565b60405180910390fd5b6105f1600061106d565b565b80600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561069a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069190611661565b60405180910390fd5b82600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054101561072d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610724906116a1565b60405180910390fd5b61079083600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000205461104f90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020819055506001600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401610855929190611572565b602060405180830381600087803b15801561086f57600080fd5b505af1158015610883573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a79190611233565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108de611065565b73ffffffffffffffffffffffffffffffffffffffff166108fc6108ad565b73ffffffffffffffffffffffffffffffffffffffff1614610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990611681565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600160008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505060028290806001815401808255809150506001900390600052602060002001600090919091909150555050565b60028181548110610a2157600080fd5b906000526020600020016000915090505481565b6060600060028054905067ffffffffffffffff811115610a7e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610ab757816020015b610aa4611147565b815260200190600190039081610a9c5790505b50905060005b600280549050811015610c205760405180604001604052806001600060028581548110610b13577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015481526020019081526020016000206000015481526020016001600060028581548110610b73577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250828281518110610c02577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508080610c189061180d565b915050610abd565b508091505090565b80600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610ccf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc690611661565b60405180910390fd5b6001600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610d429392919061153b565b602060405180830381600087803b158015610d5c57600080fd5b505af1158015610d70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d949190611233565b50610df883600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000205461113190919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550505050565b60003411610e5e57600080fd5b610ee134600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f54424e420000000000000000000000000000000000000000000000000000000081526020019081526020016000205461113190919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f54424e4200000000000000000000000000000000000000000000000000000000815260200190815260200160002081905550565b610f5f611065565b73ffffffffffffffffffffffffffffffffffffffff16610f7d6108ad565b73ffffffffffffffffffffffffffffffffffffffff1614610fd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fca90611681565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611043576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103a90611601565b60405180910390fd5b61104c8161106d565b50565b6000818361105d9190611787565b905092915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000818361113f9190611731565b905092915050565b604051806040016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b600081359050611189816119ca565b92915050565b60008151905061119e816119e1565b92915050565b6000813590506111b3816119f8565b92915050565b6000813590506111c881611a0f565b92915050565b6000602082840312156111e057600080fd5b60006111ee8482850161117a565b91505092915050565b6000806040838503121561120a57600080fd5b60006112188582860161117a565b9250506020611229858286016111a4565b9150509250929050565b60006020828403121561124557600080fd5b60006112538482850161118f565b91505092915050565b60006020828403121561126e57600080fd5b600061127c848285016111a4565b91505092915050565b6000806040838503121561129857600080fd5b60006112a6858286016111a4565b92505060206112b78582860161117a565b9150509250929050565b6000602082840312156112d357600080fd5b60006112e1848285016111b9565b91505092915050565b600080604083850312156112fd57600080fd5b600061130b858286016111b9565b925050602061131c858286016111a4565b9150509250929050565b600061133283836114cd565b60408301905092915050565b611347816117bb565b82525050565b611356816117bb565b82525050565b6000611367826116ec565b6113718185611704565b935061137c836116dc565b8060005b838110156113ad5781516113948882611326565b975061139f836116f7565b925050600181019050611380565b5085935050505092915050565b6113c3816117d9565b82525050565b6113d2816117d9565b82525050565b60006113e5602683611720565b91506113f082611885565b604082019050919050565b6000611408601283611720565b9150611413826118d4565b602082019050919050565b600061142b603a83611720565b9150611436826118fd565b604082019050919050565b600061144e600f83611720565b91506114598261194c565b602082019050919050565b6000611471602083611720565b915061147c82611975565b602082019050919050565b6000611494601683611720565b915061149f8261199e565b602082019050919050565b60006114b7600083611715565b91506114c2826119c7565b600082019050919050565b6040820160008201516114e360008501826113ba565b5060208201516114f6602085018261133e565b50505050565b61150581611803565b82525050565b6000611516826114aa565b9150819050919050565b6000602082019050611535600083018461134d565b92915050565b6000606082019050611550600083018661134d565b61155d602083018561134d565b61156a60408301846114fc565b949350505050565b6000604082019050611587600083018561134d565b61159460208301846114fc565b9392505050565b600060208201905081810360008301526115b5818461135c565b905092915050565b60006020820190506115d260008301846113c9565b92915050565b60006040820190506115ed60008301856113c9565b6115fa602083018461134d565b9392505050565b6000602082019050818103600083015261161a816113d8565b9050919050565b6000602082019050818103600083015261163a816113fb565b9050919050565b6000602082019050818103600083015261165a8161141e565b9050919050565b6000602082019050818103600083015261167a81611441565b9050919050565b6000602082019050818103600083015261169a81611464565b9050919050565b600060208201905081810360008301526116ba81611487565b9050919050565b60006020820190506116d660008301846114fc565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061173c82611803565b915061174783611803565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561177c5761177b611856565b5b828201905092915050565b600061179282611803565b915061179d83611803565b9250828210156117b0576117af611856565b5b828203905092915050565b60006117c6826117e3565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061181882611803565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561184b5761184a611856565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e7375666669656e742062616c616e63650000000000000000000000000000600082015250565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b7f546f6b656e206e6f742061646465640000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f42616c616e6365206e6f742073756666696369656e7400000000000000000000600082015250565b50565b6119d3816117bb565b81146119de57600080fd5b50565b6119ea816117cd565b81146119f557600080fd5b50565b611a01816117d9565b8114611a0c57600080fd5b50565b611a1881611803565b8114611a2357600080fd5b5056fea2646970667358221220b507bcdb12ee33b11378b3501ae833f1159ce95d9a6bd7b52d0a421e0d5aba9864736f6c63430008040033";

type WalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Wallet__factory extends ContractFactory {
  constructor(...args: WalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Wallet> {
    return super.deploy(overrides || {}) as Promise<Wallet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Wallet {
    return super.attach(address) as Wallet;
  }
  connect(signer: Signer): Wallet__factory {
    return super.connect(signer) as Wallet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new utils.Interface(_abi) as WalletInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wallet {
    return new Contract(address, _abi, signerOrProvider) as Wallet;
  }
}
