export const idlFactory = ({ IDL }) => {
  const SubAccount_2 = IDL.Vec(IDL.Nat8);
  const SubAccount = SubAccount_2;
  const SubAccount_3 = SubAccount;
  const AccountIdentifier_2 = IDL.Text;
  const AccountIdentifier = AccountIdentifier_2;
  const AccountIdentifier_3 = AccountIdentifier;
  const TokenIndex_2 = IDL.Nat32;
  const TokenIndex = TokenIndex_2;
  const Settlement = IDL.Record({
    subaccount: SubAccount_3,
    seller: IDL.Principal,
    buyer: AccountIdentifier_3,
    price: IDL.Nat64,
  });
  const Metadata_2 = IDL.Variant({
    fungible: IDL.Record({
      decimals: IDL.Nat8,
      metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
      name: IDL.Text,
      symbol: IDL.Text,
    }),
    nonfungible: IDL.Record({ metadata: IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const Metadata = Metadata_2;
  const TokenIdentifier = IDL.Text;
  const User = IDL.Variant({
    principal: IDL.Principal,
    address: AccountIdentifier,
  });
  const BalanceRequest_2 = IDL.Record({
    token: TokenIdentifier,
    user: User,
  });
  const BalanceRequest = BalanceRequest_2;
  const Balance = IDL.Nat;
  const CommonError_2 = IDL.Variant({
    InvalidToken: TokenIdentifier,
    Other: IDL.Text,
  });
  const Result_10 = IDL.Variant({ ok: Balance, err: CommonError_2 });
  const BalanceResponse_2 = Result_10;
  const BalanceResponse = BalanceResponse_2;
  const TokenIdentifier_2 = TokenIdentifier;
  const CommonError = CommonError_2;
  const Result_7 = IDL.Variant({
    ok: AccountIdentifier_3,
    err: CommonError,
  });
  const Balance_2 = Balance;
  const Time_2 = IDL.Int;
  const Time = Time_2;
  const Listing = IDL.Record({
    locked: IDL.Opt(Time),
    seller: IDL.Principal,
    price: IDL.Nat64,
  });
  const Result_9 = IDL.Variant({
    ok: IDL.Tuple(AccountIdentifier_3, IDL.Opt(Listing)),
    err: CommonError,
  });
  const Extension_2 = IDL.Text;
  const Extension = Extension_2;
  const Generation = IDL.Nat8;
  const BreedId = IDL.Nat32;
  const Wearable_2 = IDL.Record({
    hat: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
    pet: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
    accessory: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
    eyewear: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
  });
  const Wearable = Wearable_2;
  const Transaction2 = IDL.Record({
    token: TokenIdentifier_2,
    time: Time,
    seller: IDL.Principal,
    buyer: AccountIdentifier_3,
    price: IDL.Nat64,
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    url: IDL.Text,
    method: IDL.Text,
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(HeaderField),
  });
  const HttpResponse = IDL.Record({
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(HeaderField),
    status_code: IDL.Nat16,
  });
  const Result_8 = IDL.Variant({ ok: TokenIndex, err: CommonError });
  const ListRequest = IDL.Record({
    token: TokenIdentifier_2,
    from_subaccount: IDL.Opt(SubAccount_3),
    price: IDL.Opt(IDL.Nat64),
  });
  const Result_5 = IDL.Variant({ ok: IDL.Null, err: CommonError });
  const Result_6 = IDL.Variant({ ok: Metadata, err: CommonError });
  const MintRequest_2 = IDL.Record({
    to: User,
    metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const MintRequest = MintRequest_2;
  const Memo = IDL.Vec(IDL.Nat8);
  const Memo_2 = Memo;
  const User_2 = User;
  const NotifyLog = IDL.Record({
    tokenid: TokenIdentifier_2,
    memo: Memo_2,
    user: User_2,
    amount: Balance_2,
  });
  const SireRequest = IDL.Record({
    token: TokenIdentifier_2,
    from_subaccount: IDL.Opt(SubAccount_3),
    price: IDL.Opt(Balance_2),
  });
  const BreedData = IDL.Record({
    fee: IDL.Opt(Balance_2),
    canBreed: IDL.Bool,
    cost: Balance_2,
    generation: Generation,
    breedTime: IDL.Opt(Time),
  });
  const Sire = IDL.Record({
    metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
    index: TokenIndex,
    breedData: BreedData,
  });
  const Result_4 = IDL.Variant({ ok: Balance_2, err: CommonError });
  const Result_3 = IDL.Variant({
    ok: IDL.Vec(TokenIndex),
    err: CommonError,
  });
  const Result_2 = IDL.Variant({
    ok: IDL.Vec(
      IDL.Tuple(
        TokenIndex,
        IDL.Opt(Listing),
        IDL.Opt(IDL.Vec(IDL.Nat8)),
        IDL.Opt(BreedData),
      ),
    ),
    err: CommonError,
  });
  const TransferRequest_2 = IDL.Record({
    to: User,
    token: TokenIdentifier,
    notify: IDL.Bool,
    from: User,
    memo: Memo,
    subaccount: IDL.Opt(SubAccount),
    amount: Balance,
  });
  const TransferRequest = TransferRequest_2;
  const Result = IDL.Variant({
    ok: Balance,
    err: IDL.Variant({
      CannotNotify: AccountIdentifier,
      InsufficientBalance: IDL.Null,
      InvalidToken: TokenIdentifier,
      Rejected: IDL.Null,
      Unauthorized: AccountIdentifier,
      Other: IDL.Text,
    }),
  });
  const TransferResponse_2 = Result;
  const TransferResponse = TransferResponse_2;
  return IDL.Service({
    TEMPaddPayment: IDL.Func([IDL.Text, IDL.Principal, SubAccount_3], [], []),
    TEMPusedAddresses: IDL.Func(
      [IDL.Text],
      [IDL.Vec(IDL.Tuple(AccountIdentifier_3, IDL.Principal, SubAccount_3))],
      [],
    ),
    acceptCycles: IDL.Func([], [], []),
    allPayments: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(SubAccount_3)))],
      ["query"],
    ),
    allSettlements: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, Settlement))],
      ["query"],
    ),
    availableCycles: IDL.Func([], [IDL.Nat], ["query"]),
    backup: IDL.Func(
      [],
      [
        IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3)),
        IDL.Vec(IDL.Tuple(AccountIdentifier_3, IDL.Vec(TokenIndex))),
        IDL.Vec(IDL.Tuple(TokenIndex, Metadata)),
      ],
      ["query"],
    ),
    balance: IDL.Func([BalanceRequest], [BalanceResponse], ["query"]),
    bearer: IDL.Func([TokenIdentifier_2], [Result_7], ["query"]),
    clearPayments: IDL.Func([IDL.Principal, IDL.Vec(SubAccount_3)], [], []),
    crnDetails: IDL.Func(
      [],
      [Balance_2, IDL.Nat, IDL.Vec(IDL.Tuple(AccountIdentifier_3, Balance_2))],
      ["query"],
    ),
    details: IDL.Func([TokenIdentifier_2], [Result_9], ["query"]),
    extensions: IDL.Func([], [IDL.Vec(Extension)], ["query"]),
    generations: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Tuple(Generation, BreedId)))],
      ["query"],
    ),
    getAllPayments: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(SubAccount_3)))],
      ["query"],
    ),
    getAllWearables: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, Wearable))],
      ["query"],
    ),
    getBuyers: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(AccountIdentifier_3, IDL.Vec(TokenIndex)))],
      ["query"],
    ),
    getMinted: IDL.Func([], [TokenIndex], ["query"]),
    getMinter: IDL.Func([], [IDL.Principal], ["query"]),
    getRegistry: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3))],
      ["query"],
    ),
    getSold: IDL.Func([], [TokenIndex], ["query"]),
    getTokens: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))],
      ["query"],
    ),
    getTransactions: IDL.Func(
      [IDL.Opt(IDL.Nat)],
      [IDL.Vec(Transaction2)],
      ["query"],
    ),
    http_request: IDL.Func([HttpRequest], [HttpResponse], ["query"]),
    index: IDL.Func([TokenIdentifier_2], [Result_8], ["query"]),
    list: IDL.Func([ListRequest], [Result_5], []),
    listings: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, Listing, Metadata))],
      ["query"],
    ),
    lock: IDL.Func(
      [TokenIdentifier_2, IDL.Nat64, AccountIdentifier_3, SubAccount_3],
      [Result_7],
      [],
    ),
    metadata: IDL.Func([TokenIdentifier_2], [Result_6], ["query"]),
    mintNFT: IDL.Func([MintRequest], [TokenIndex], []),
    notifications: IDL.Func([], [IDL.Vec(NotifyLog)], ["query"]),
    payments: IDL.Func([], [IDL.Opt(IDL.Vec(SubAccount_3))], ["query"]),
    receiveWearable: IDL.Func(
      [TokenIndex, TokenIndex, IDL.Vec(IDL.Nat8), AccountIdentifier_3],
      [
        IDL.Variant({
          replaced: TokenIndex,
          success: IDL.Null,
          failed: IDL.Null,
        }),
      ],
      [],
    ),
    refunds: IDL.Func([], [IDL.Opt(IDL.Vec(SubAccount_3))], ["query"]),
    removePayments: IDL.Func([IDL.Vec(SubAccount_3)], [], []),
    removeRefunds: IDL.Func([IDL.Vec(SubAccount_3)], [], []),
    retreiveSnapshot: IDL.Func([IDL.Text], [IDL.Vec(AccountIdentifier_3)], []),
    setMinter: IDL.Func([IDL.Principal], [], []),
    settings: IDL.Func(
      [],
      [
        IDL.Bool,
        IDL.Vec(IDL.Nat8),
        Time,
        Time,
        Time,
        IDL.Vec(Balance_2),
        IDL.Principal,
      ],
      ["query"],
    ),
    settle: IDL.Func([TokenIdentifier_2], [Result_5], []),
    settlements: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3, IDL.Nat64))],
      ["query"],
    ),
    sire: IDL.Func([SireRequest], [Result_5], []),
    sires: IDL.Func([], [IDL.Vec(Sire)], ["query"]),
    supply: IDL.Func([TokenIdentifier_2], [Result_4], ["query"]),
    takeSnapshot: IDL.Func([IDL.Text], [IDL.Nat], []),
    tokenTransferNotification: IDL.Func(
      [TokenIdentifier_2, User_2, Balance_2, Memo_2],
      [IDL.Opt(Balance_2)],
      [],
    ),
    tokens: IDL.Func([AccountIdentifier_3], [Result_3], ["query"]),
    tokens_ext: IDL.Func([AccountIdentifier_3], [Result_2], ["query"]),
    transactions: IDL.Func([], [IDL.Vec(Transaction2)], ["query"]),
    transfer: IDL.Func([TransferRequest], [TransferResponse], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
