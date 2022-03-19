/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type OrderStruct = {
  id: BigNumberish;
  trader: string;
  orderType: BigNumberish;
  ticker: BytesLike;
  amount: BigNumberish;
  price: BigNumberish;
  filled: BigNumberish;
};

export type OrderStructOutput = [
  BigNumber,
  string,
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  id: BigNumber;
  trader: string;
  orderType: number;
  ticker: string;
  amount: BigNumber;
  price: BigNumber;
  filled: BigNumber;
};

export interface DexInterface extends utils.Interface {
  functions: {
    "GetOrderBook(bytes32,uint8)": FunctionFragment;
    "addToken(bytes32,address)": FunctionFragment;
    "balances(address,bytes32)": FunctionFragment;
    "createLimitOrder(uint8,bytes32,uint256,uint256)": FunctionFragment;
    "createMarketOrder(uint8,bytes32,uint256)": FunctionFragment;
    "deposit()": FunctionFragment;
    "depositToken(uint256,bytes32)": FunctionFragment;
    "native()": FunctionFragment;
    "nextOrderId()": FunctionFragment;
    "orderBook(bytes32,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tokenList(uint256)": FunctionFragment;
    "tokenMapping(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawToken(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "GetOrderBook",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createLimitOrder",
    values: [BigNumberish, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketOrder",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "native", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextOrderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orderBook",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenMapping",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "GetOrderBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "native", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orderBook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Dex extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DexInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    GetOrderBook(
      ticker: BytesLike,
      orderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[OrderStructOutput[]]>;

    addToken(
      ticker: BytesLike,
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createLimitOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMarketOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    native(overrides?: CallOverrides): Promise<[string]>;

    nextOrderId(overrides?: CallOverrides): Promise<[BigNumber]>;

    orderBook(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number, string, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        trader: string;
        orderType: number;
        ticker: string;
        amount: BigNumber;
        price: BigNumber;
        filled: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    tokenMapping(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { ticker: string; tokenAddress: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  GetOrderBook(
    ticker: BytesLike,
    orderType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<OrderStructOutput[]>;

  addToken(
    ticker: BytesLike,
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balances(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createLimitOrder(
    orderType: BigNumberish,
    ticker: BytesLike,
    amount: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMarketOrder(
    orderType: BigNumberish,
    ticker: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositToken(
    amount: BigNumberish,
    ticker: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  native(overrides?: CallOverrides): Promise<string>;

  nextOrderId(overrides?: CallOverrides): Promise<BigNumber>;

  orderBook(
    arg0: BytesLike,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, number, string, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      trader: string;
      orderType: number;
      ticker: string;
      amount: BigNumber;
      price: BigNumber;
      filled: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  tokenMapping(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { ticker: string; tokenAddress: string }>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    amount: BigNumberish,
    ticker: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    GetOrderBook(
      ticker: BytesLike,
      orderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<OrderStructOutput[]>;

    addToken(
      ticker: BytesLike,
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createLimitOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createMarketOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(overrides?: CallOverrides): Promise<void>;

    depositToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    native(overrides?: CallOverrides): Promise<string>;

    nextOrderId(overrides?: CallOverrides): Promise<BigNumber>;

    orderBook(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number, string, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        trader: string;
        orderType: number;
        ticker: string;
        amount: BigNumber;
        price: BigNumber;
        filled: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    tokenList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    tokenMapping(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { ticker: string; tokenAddress: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    GetOrderBook(
      ticker: BytesLike,
      orderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addToken(
      ticker: BytesLike,
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createLimitOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMarketOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    native(overrides?: CallOverrides): Promise<BigNumber>;

    nextOrderId(overrides?: CallOverrides): Promise<BigNumber>;

    orderBook(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenMapping(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GetOrderBook(
      ticker: BytesLike,
      orderType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addToken(
      ticker: BytesLike,
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createLimitOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMarketOrder(
      orderType: BigNumberish,
      ticker: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    native(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextOrderId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderBook(
      arg0: BytesLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenMapping(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      amount: BigNumberish,
      ticker: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
