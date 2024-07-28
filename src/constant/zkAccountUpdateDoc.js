/**
 * this file is from [o1js/dist/node/bindings/mina-transaction/gen/js-layout.js]
 * just use for pretty zk commond
 */
export const AccountUpdate = {
    type: "object",
    name: "ZkappAccountUpdate",
    docs: "An account update in a zkApp transaction",
    keys: ["body", "authorization"],
    entries: {
      body: {
        type: "object",
        name: "AccountUpdateBody",
        docs: null,
        keys: [
          "publicKey",
          "tokenId",
          "update",
          "balanceChange",
          "incrementNonce",
          "events",
          "actions",
          "callData",
          "callDepth",
          "preconditions",
          "useFullCommitment",
          "implicitAccountCreationFee",
          "mayUseToken",
          "authorizationKind",
        ],
        entries: {
          publicKey: { type: "PublicKey" },
          tokenId: { type: "TokenId" },
          update: {
            type: "object",
            name: "AccountUpdateModification",
            docs: null,
            keys: [
              "appState",
              "delegate",
              "verificationKey",
              "permissions",
              "zkappUri",
              "tokenSymbol",
              "timing",
              "votingFor",
            ],
            entries: {
              appState: {
                type: "array",
                inner: {
                  type: "option",
                  optionType: "flaggedOption",
                  inner: { type: "Field" },
                },
                staticLength: 8,
              },
              delegate: {
                type: "option",
                optionType: "flaggedOption",
                inner: { type: "PublicKey" },
              },
              verificationKey: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "object",
                  name: "VerificationKeyWithHash",
                  docs: null,
                  keys: ["data", "hash"],
                  entries: {
                    data: { type: "string" },
                    hash: { type: "Field" },
                  },
                  docEntries: { data: null, hash: null },
                },
              },
              permissions: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "object",
                  name: "Permissions",
                  docs: null,
                  keys: [
                    "editState",
                    "access",
                    "send",
                    "receive",
                    "setDelegate",
                    "setPermissions",
                    "setVerificationKey",
                    "setZkappUri",
                    "editActionState",
                    "setTokenSymbol",
                    "incrementNonce",
                    "setVotingFor",
                    "setTiming",
                  ],
                  entries: {
                    editState: { type: "AuthRequired" },
                    access: { type: "AuthRequired" },
                    send: { type: "AuthRequired" },
                    receive: { type: "AuthRequired" },
                    setDelegate: { type: "AuthRequired" },
                    setPermissions: { type: "AuthRequired" },
                    setVerificationKey: { type: "AuthRequired" },
                    setZkappUri: { type: "AuthRequired" },
                    editActionState: { type: "AuthRequired" },
                    setTokenSymbol: { type: "AuthRequired" },
                    incrementNonce: { type: "AuthRequired" },
                    setVotingFor: { type: "AuthRequired" },
                    setTiming: { type: "AuthRequired" },
                  },
                  docEntries: {
                    editState: null,
                    access: null,
                    send: null,
                    receive: null,
                    setDelegate: null,
                    setPermissions: null,
                    setVerificationKey: null,
                    setZkappUri: null,
                    editActionState: null,
                    setTokenSymbol: null,
                    incrementNonce: null,
                    setVotingFor: null,
                    setTiming: null,
                  },
                },
              },
              zkappUri: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "string",
                  checkedType: {
                    type: "object",
                    name: "Events",
                    docs: null,
                    keys: ["data", "hash"],
                    entries: {
                      data: { type: "string" },
                      hash: { type: "Field" },
                    },
                    docEntries: { data: null, hash: null },
                  },
                  checkedTypeName: "ZkappUri",
                },
              },
              tokenSymbol: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "string",
                  checkedType: {
                    type: "object",
                    name: "Anonymous",
                    docs: null,
                    keys: ["symbol", "field"],
                    entries: {
                      symbol: { type: "string" },
                      field: { type: "Field" },
                    },
                    docEntries: { symbol: "", field: "" },
                  },
                  checkedTypeName: "TokenSymbol",
                },
              },
              timing: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "object",
                  name: "Timing",
                  docs: null,
                  keys: [
                    "initialMinimumBalance",
                    "cliffTime",
                    "cliffAmount",
                    "vestingPeriod",
                    "vestingIncrement",
                  ],
                  entries: {
                    initialMinimumBalance: { type: "UInt64" },
                    cliffTime: { type: "UInt32" },
                    cliffAmount: { type: "UInt64" },
                    vestingPeriod: { type: "UInt32" },
                    vestingIncrement: { type: "UInt64" },
                  },
                  docEntries: {
                    initialMinimumBalance: null,
                    cliffTime: null,
                    cliffAmount: null,
                    vestingPeriod: null,
                    vestingIncrement: null,
                  },
                },
              },
              votingFor: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "Field",
                  checkedType: { type: "Field" },
                  checkedTypeName: "StateHash",
                },
              },
            },
            docEntries: {
              appState: null,
              delegate: null,
              verificationKey: null,
              permissions: null,
              zkappUri: null,
              tokenSymbol: null,
              timing: null,
              votingFor: null,
            },
          },
          balanceChange: {
            type: "object",
            name: "BalanceChange",
            docs: null,
            keys: ["magnitude", "sgn"],
            entries: { magnitude: { type: "UInt64" }, sgn: { type: "Sign" } },
            docEntries: { magnitude: null, sgn: null },
          },
          incrementNonce: { type: "Bool" },
          events: {
            type: "array",
            inner: {
              type: "array",
              inner: { type: "Field" },
              staticLength: null,
            },
            staticLength: null,
            checkedType: {
              type: "object",
              name: "Events",
              docs: null,
              keys: ["data", "hash"],
              entries: {
                data: {
                  type: "array",
                  inner: {
                    type: "array",
                    inner: { type: "Field" },
                    staticLength: null,
                  },
                  staticLength: null,
                },
                hash: { type: "Field" },
              },
              docEntries: { data: null, hash: null },
            },
            checkedTypeName: "Events",
          },
          actions: {
            type: "array",
            inner: {
              type: "array",
              inner: { type: "Field" },
              staticLength: null,
            },
            staticLength: null,
            checkedType: {
              type: "object",
              name: "Events",
              docs: null,
              keys: ["data", "hash"],
              entries: {
                data: {
                  type: "array",
                  inner: {
                    type: "array",
                    inner: { type: "Field" },
                    staticLength: null,
                  },
                  staticLength: null,
                },
                hash: { type: "Field" },
              },
              docEntries: { data: null, hash: null },
            },
            checkedTypeName: "Actions",
          },
          callData: { type: "Field" },
          callDepth: { type: "number" },
          preconditions: {
            type: "object",
            name: "Preconditions",
            docs: null,
            keys: ["network", "account", "validWhile"],
            entries: {
              network: {
                type: "object",
                name: "NetworkPrecondition",
                docs: null,
                keys: [
                  "snarkedLedgerHash",
                  "blockchainLength",
                  "minWindowDensity",
                  "totalCurrency",
                  "globalSlotSinceGenesis",
                  "stakingEpochData",
                  "nextEpochData",
                ],
                entries: {
                  snarkedLedgerHash: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Field" },
                  },
                  blockchainLength: {
                    type: "option",
                    optionType: "closedInterval",
                    rangeMin: "0",
                    rangeMax: "4294967295",
                    inner: {
                      type: "object",
                      name: "LengthInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" },
                      },
                      docEntries: { lower: null, upper: null },
                    },
                  },
                  minWindowDensity: {
                    type: "option",
                    optionType: "closedInterval",
                    rangeMin: "0",
                    rangeMax: "4294967295",
                    inner: {
                      type: "object",
                      name: "LengthInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" },
                      },
                      docEntries: { lower: null, upper: null },
                    },
                  },
                  totalCurrency: {
                    type: "option",
                    optionType: "closedInterval",
                    rangeMin: "0",
                    rangeMax: "18446744073709551615",
                    inner: {
                      type: "object",
                      name: "CurrencyAmountInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt64" },
                        upper: { type: "UInt64" },
                      },
                      docEntries: { lower: null, upper: null },
                    },
                  },
                  globalSlotSinceGenesis: {
                    type: "option",
                    optionType: "closedInterval",
                    rangeMin: "0",
                    rangeMax: "4294967295",
                    inner: {
                      type: "object",
                      name: "GlobalSlotSinceGenesisInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" },
                      },
                      docEntries: { lower: null, upper: null },
                    },
                  },
                  stakingEpochData: {
                    type: "object",
                    name: "EpochDataPrecondition",
                    docs: null,
                    keys: [
                      "ledger",
                      "seed",
                      "startCheckpoint",
                      "lockCheckpoint",
                      "epochLength",
                    ],
                    entries: {
                      ledger: {
                        type: "object",
                        name: "EpochLedgerPrecondition",
                        docs: null,
                        keys: ["hash", "totalCurrency"],
                        entries: {
                          hash: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: { type: "Field" },
                          },
                          totalCurrency: {
                            type: "option",
                            optionType: "closedInterval",
                            rangeMin: "0",
                            rangeMax: "18446744073709551615",
                            inner: {
                              type: "object",
                              name: "CurrencyAmountInterval",
                              docs: null,
                              keys: ["lower", "upper"],
                              entries: {
                                lower: { type: "UInt64" },
                                upper: { type: "UInt64" },
                              },
                              docEntries: { lower: null, upper: null },
                            },
                          },
                        },
                        docEntries: { hash: null, totalCurrency: null },
                      },
                      seed: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" },
                      },
                      startCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" },
                      },
                      lockCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" },
                      },
                      epochLength: {
                        type: "option",
                        optionType: "closedInterval",
                        rangeMin: "0",
                        rangeMax: "4294967295",
                        inner: {
                          type: "object",
                          name: "LengthInterval",
                          docs: null,
                          keys: ["lower", "upper"],
                          entries: {
                            lower: { type: "UInt32" },
                            upper: { type: "UInt32" },
                          },
                          docEntries: { lower: null, upper: null },
                        },
                      },
                    },
                    docEntries: {
                      ledger: null,
                      seed: null,
                      startCheckpoint: null,
                      lockCheckpoint: null,
                      epochLength: null,
                    },
                  },
                  nextEpochData: {
                    type: "object",
                    name: "EpochDataPrecondition",
                    docs: null,
                    keys: [
                      "ledger",
                      "seed",
                      "startCheckpoint",
                      "lockCheckpoint",
                      "epochLength",
                    ],
                    entries: {
                      ledger: {
                        type: "object",
                        name: "EpochLedgerPrecondition",
                        docs: null,
                        keys: ["hash", "totalCurrency"],
                        entries: {
                          hash: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: { type: "Field" },
                          },
                          totalCurrency: {
                            type: "option",
                            optionType: "closedInterval",
                            rangeMin: "0",
                            rangeMax: "18446744073709551615",
                            inner: {
                              type: "object",
                              name: "CurrencyAmountInterval",
                              docs: null,
                              keys: ["lower", "upper"],
                              entries: {
                                lower: { type: "UInt64" },
                                upper: { type: "UInt64" },
                              },
                              docEntries: { lower: null, upper: null },
                            },
                          },
                        },
                        docEntries: { hash: null, totalCurrency: null },
                      },
                      seed: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" },
                      },
                      startCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" },
                      },
                      lockCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" },
                      },
                      epochLength: {
                        type: "option",
                        optionType: "closedInterval",
                        rangeMin: "0",
                        rangeMax: "4294967295",
                        inner: {
                          type: "object",
                          name: "LengthInterval",
                          docs: null,
                          keys: ["lower", "upper"],
                          entries: {
                            lower: { type: "UInt32" },
                            upper: { type: "UInt32" },
                          },
                          docEntries: { lower: null, upper: null },
                        },
                      },
                    },
                    docEntries: {
                      ledger: null,
                      seed: null,
                      startCheckpoint: null,
                      lockCheckpoint: null,
                      epochLength: null,
                    },
                  },
                },
                docEntries: {
                  snarkedLedgerHash: null,
                  blockchainLength: null,
                  minWindowDensity: null,
                  totalCurrency: null,
                  globalSlotSinceGenesis: null,
                  stakingEpochData: null,
                  nextEpochData: null,
                },
              },
              account: {
                type: "object",
                name: "AccountPrecondition",
                docs: null,
                keys: [
                  "balance",
                  "nonce",
                  "receiptChainHash",
                  "delegate",
                  "state",
                  "actionState",
                  "provedState",
                  "isNew",
                ],
                entries: {
                  balance: {
                    type: "option",
                    optionType: "closedInterval",
                    rangeMin: "0",
                    rangeMax: "18446744073709551615",
                    inner: {
                      type: "object",
                      name: "BalanceInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt64" },
                        upper: { type: "UInt64" },
                      },
                      docEntries: { lower: null, upper: null },
                    },
                  },
                  nonce: {
                    type: "option",
                    optionType: "closedInterval",
                    rangeMin: "0",
                    rangeMax: "4294967295",
                    inner: {
                      type: "object",
                      name: "NonceInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" },
                      },
                      docEntries: { lower: null, upper: null },
                    },
                  },
                  receiptChainHash: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Field" },
                  },
                  delegate: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "PublicKey" },
                  },
                  state: {
                    type: "array",
                    inner: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: { type: "Field" },
                    },
                    staticLength: 8,
                  },
                  actionState: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "Field",
                      checkedType: { type: "Field" },
                      checkedTypeName: "ActionState",
                    },
                  },
                  provedState: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Bool" },
                  },
                  isNew: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Bool" },
                  },
                },
                docEntries: {
                  balance: null,
                  nonce: null,
                  receiptChainHash: null,
                  delegate: null,
                  state: null,
                  actionState: null,
                  provedState: null,
                  isNew: null,
                },
              },
              validWhile: {
                type: "option",
                optionType: "closedInterval",
                rangeMin: "0",
                rangeMax: "4294967295",
                inner: {
                  type: "object",
                  name: "GlobalSlotSinceGenesisInterval",
                  docs: null,
                  keys: ["lower", "upper"],
                  entries: {
                    lower: { type: "UInt32" },
                    upper: { type: "UInt32" },
                  },
                  docEntries: { lower: null, upper: null },
                },
              },
            },
            docEntries: { network: null, account: null, validWhile: null },
          },
          useFullCommitment: { type: "Bool" },
          implicitAccountCreationFee: { type: "Bool" },
          mayUseToken: {
            type: "object",
            name: "MayUseToken",
            docs: null,
            keys: ["parentsOwnToken", "inheritFromParent"],
            entries: {
              parentsOwnToken: { type: "Bool" },
              inheritFromParent: { type: "Bool" },
            },
            docEntries: { parentsOwnToken: null, inheritFromParent: null },
          },
          authorizationKind: {
            type: "object",
            name: "AuthorizationKindStructured",
            docs: null,
            keys: ["isSigned", "isProved", "verificationKeyHash"],
            entries: {
              isSigned: { type: "Bool" },
              isProved: { type: "Bool" },
              verificationKeyHash: {
                type: "Field",
                checkedType: { type: "Field" },
                checkedTypeName: "VerificationKeyHash",
              },
            },
            docEntries: {
              isSigned: null,
              isProved: null,
              verificationKeyHash: null,
            },
          },
        },
        docEntries: {
          publicKey: null,
          tokenId: null,
          update: null,
          balanceChange: null,
          incrementNonce: null,
          events: null,
          actions: null,
          callData: null,
          callDepth: null,
          preconditions: null,
          useFullCommitment: null,
          implicitAccountCreationFee: null,
          mayUseToken: null,
          authorizationKind: null,
        },
      },
      authorization: {
        type: "object",
        name: "Control",
        docs: null,
        keys: ["proof", "signature"],
        entries: {
          proof: {
            type: "option",
            optionType: "orUndefined",
            inner: { type: "string" },
          },
          signature: {
            type: "option",
            optionType: "orUndefined",
            inner: { type: "string" },
          },
        },
        docEntries: { proof: null, signature: null },
      },
    },
    docEntries: { body: null, authorization: null },
  };