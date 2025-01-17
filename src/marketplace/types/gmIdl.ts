export type GmIdl = {
  version: '0.1.0';
  name: 'marketplace';
  instructions: [
    {
      name: 'addRoyaltyTier';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'RegisteredCurrency';
                path: 'registered_currency.token_mint';
              }
            ];
          };
        }
      ];
      args: [
        {
          name: 'stakeAmount';
          type: 'u64';
        },
        {
          name: 'discount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'deleteRoyaltyTier';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'RegisteredCurrency';
                path: 'registered_currency.token_mint';
              }
            ];
          };
        }
      ];
      args: [
        {
          name: 'stakeAmount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'deregisterCurrency';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'currency_mint';
              }
            ];
          };
        },
        {
          name: 'currencyMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'initializeMarketplace';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'registerCurrency';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'currency_mint';
              }
            ];
          };
        },
        {
          name: 'currencyMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'saCurrencyVault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'royalty';
          type: 'u64';
        }
      ];
    },
    {
      name: 'updateCurrencyVault';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'currency_mint';
              }
            ];
          };
        },
        {
          name: 'currencyMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'saCurrencyVault';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'updateCurrencyRoyalty';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'currency_mint';
              }
            ];
          };
        },
        {
          name: 'currencyMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'royalty';
          type: 'u64';
        }
      ];
    },
    {
      name: 'updateRoyaltyTier';
      accounts: [
        {
          name: 'updateAuthorityAccount';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'registeredCurrency';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'RegisteredCurrency';
                path: 'registered_currency.token_mint';
              }
            ];
          };
        }
      ];
      args: [
        {
          name: 'stakeAmount';
          type: 'u64';
        },
        {
          name: 'discount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'processInitializeBuy';
      accounts: [
        {
          name: 'orderInitializer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'depositMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'receiveMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'orderVaultAccount';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-account';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'orderVaultAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-auth';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              }
            ];
          };
        },
        {
          name: 'initializerDepositTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'initializerReceiveTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'orderAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'registeredCurrency';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'openOrdersCounter';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'open-orders-counter';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'price';
          type: 'u64';
        },
        {
          name: 'originationQty';
          type: 'u64';
        }
      ];
    },
    {
      name: 'processInitializeSell';
      accounts: [
        {
          name: 'orderInitializer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'depositMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'receiveMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'orderVaultAccount';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-account';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'orderVaultAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-auth';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              }
            ];
          };
        },
        {
          name: 'initializerDepositTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'initializerReceiveTokenAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'orderAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'registeredCurrency';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'receive_mint';
              }
            ];
          };
        },
        {
          name: 'openOrdersCounter';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'open-orders-counter';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'price';
          type: 'u64';
        },
        {
          name: 'originationQty';
          type: 'u64';
        }
      ];
    },
    {
      name: 'processExchange';
      accounts: [
        {
          name: 'orderTaker';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'orderTakerDepositTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'orderTakerReceiveTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'currencyMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'assetMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'orderInitializer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'initializerDepositTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'initializerReceiveTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'orderVaultAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'orderVaultAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-auth';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'OrderAccount';
                path: 'order_account.order_initializer_pubkey';
              }
            ];
          };
        },
        {
          name: 'orderAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'saVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'registeredCurrency';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'registered-currency';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'currency_mint';
              }
            ];
          };
        },
        {
          name: 'openOrdersCounter';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'atlasStaking';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'registeredStake';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakingAccount';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'purchaseQuantity';
          type: 'u64';
        },
        {
          name: 'expectedPrice';
          type: 'u64';
        },
        {
          name: 'seller';
          type: 'publicKey';
        }
      ];
    },
    {
      name: 'processCancel';
      accounts: [
        {
          name: 'signer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'orderInitializer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'marketVarsAccount';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'market-vars';
              }
            ];
          };
        },
        {
          name: 'depositMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'initializerDepositTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'orderVaultAccount';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-account';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'orderVaultAuthority';
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'order-vault-auth';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              }
            ];
          };
        },
        {
          name: 'orderAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'openOrdersCounter';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'open-orders-counter';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'order_initializer';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: 'initializeOpenOrdersCounter';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'user';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'openOrdersCounter';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'open-orders-counter';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'user';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'Mint';
                path: 'deposit_mint';
              }
            ];
          };
        },
        {
          name: 'depositMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: 'MarketVars';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'updateAuthorityMaster';
            type: 'publicKey';
          },
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'OpenOrdersCounter';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'openOrderCount';
            type: 'u64';
          },
          {
            name: 'bump';
            type: 'u8';
          }
        ];
      };
    },
    {
      name: 'OrderAccount';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'orderInitializerPubkey';
            type: 'publicKey';
          },
          {
            name: 'currencyMint';
            type: 'publicKey';
          },
          {
            name: 'assetMint';
            type: 'publicKey';
          },
          {
            name: 'initializerCurrencyTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'initializerAssetTokenAccount';
            type: 'publicKey';
          },
          {
            name: 'orderSide';
            type: {
              defined: 'OrderSide';
            };
          },
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'orderOriginationQty';
            type: 'u64';
          },
          {
            name: 'orderRemainingQty';
            type: 'u64';
          },
          {
            name: 'createdAtTimestamp';
            type: 'i64';
          }
        ];
      };
    },
    {
      name: 'RegisteredCurrency';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'tokenMint';
            type: 'publicKey';
          },
          {
            name: 'saCurrencyVault';
            type: 'publicKey';
          },
          {
            name: 'royalty';
            type: 'u64';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'royaltyTiers';
            type: {
              vec: {
                defined: 'RoyaltyTier';
              };
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: 'RoyaltyTier';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakeAmount';
            type: 'u64';
          },
          {
            name: 'discount';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'OrderSide';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Buy';
          },
          {
            name: 'Sell';
          }
        ];
      };
    },
    {
      name: 'TokenType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Asset';
          },
          {
            name: 'Currency';
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'InvalidDestinationAccount';
      msg: 'Invalid Destination Token Account';
    },
    {
      code: 6001;
      name: 'InvalidInstruction';
      msg: 'Invalid instruction.';
    },
    {
      code: 6002;
      name: 'InvalidMint';
      msg: 'Invalid SPL Token mint';
    },
    {
      code: 6003;
      name: 'InvalidOfferAccountOwner';
      msg: 'Invalid Offer Account Owner';
    },
    {
      code: 6004;
      name: 'InvalidTokenAccount';
      msg: 'Invalid SPL Token account';
    },
    {
      code: 6005;
      name: 'NumericalOverflowError';
      msg: 'Numerical overflow error';
    },
    {
      code: 6006;
      name: 'InvalidUpdateAuthorityAccount';
      msg: 'Invalid Update Authority account';
    },
    {
      code: 6007;
      name: 'InvalidOrderVaultAuthorityAccount';
      msg: 'Invalid Order Vault Authority account';
    },
    {
      code: 6008;
      name: 'UninitializedTokenAccount';
      msg: 'Uninitialized Token Account';
    },
    {
      code: 6009;
      name: 'InsufficientBalance';
      msg: 'Insufficient Balance';
    },
    {
      code: 6010;
      name: 'InvalidOrderDuration';
      msg: 'Invalid Order Duration';
    },
    {
      code: 6011;
      name: 'InvalidOriginationQty';
      msg: 'Origination quantity must be greater than 0';
    },
    {
      code: 6012;
      name: 'InsufficientOrderQty';
      msg: 'Insufficient Order Quantity Remaining';
    },
    {
      code: 6013;
      name: 'InvalidRoyalty';
      msg: 'Invalid Royalty Value';
    },
    {
      code: 6014;
      name: 'InvalidCounter';
      msg: 'Invalid Open Order Counter';
    },
    {
      code: 6015;
      name: 'MintDecimalError';
      msg: 'Mint must be zero decimal';
    },
    {
      code: 6016;
      name: 'InvalidOrderAccountError';
      msg: 'Order Account does not match provided account';
    },
    {
      code: 6017;
      name: 'InvalidRoyaltyTier';
      msg: 'No royalty tier exists with provided stake amount';
    },
    {
      code: 6018;
      name: 'RoyaltyTierLength';
      msg: 'Royalty Tier vector cannot hold any additional tiers';
    },
    {
      code: 6019;
      name: 'InvalidOrderPrice';
      msg: 'Order price did not match expected price';
    },
    {
      code: 6020;
      name: 'DuplicateRoyaltyTier';
      msg: 'Royalty tier already exists';
    },
    {
      code: 6021;
      name: 'InvalidSeller';
      msg: 'Order seller did not match expected seller';
    }
  ];
  metadata: Record<string, unknown>;
};
export const baseIdl: GmIdl = {
  version: '0.1.0',
  name: 'marketplace',
  instructions: [
    {
      name: 'addRoyaltyTier',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'RegisteredCurrency',
                path: 'registered_currency.token_mint',
              },
            ],
          },
        },
      ],
      args: [
        {
          name: 'stakeAmount',
          type: 'u64',
        },
        {
          name: 'discount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'deleteRoyaltyTier',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'RegisteredCurrency',
                path: 'registered_currency.token_mint',
              },
            ],
          },
        },
      ],
      args: [
        {
          name: 'stakeAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'deregisterCurrency',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'currency_mint',
              },
            ],
          },
        },
        {
          name: 'currencyMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'initializeMarketplace',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'registerCurrency',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'currency_mint',
              },
            ],
          },
        },
        {
          name: 'currencyMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'saCurrencyVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'royalty',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateCurrencyVault',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'currency_mint',
              },
            ],
          },
        },
        {
          name: 'currencyMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'saCurrencyVault',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'updateCurrencyRoyalty',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'currency_mint',
              },
            ],
          },
        },
        {
          name: 'currencyMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'royalty',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateRoyaltyTier',
      accounts: [
        {
          name: 'updateAuthorityAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'registeredCurrency',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'RegisteredCurrency',
                path: 'registered_currency.token_mint',
              },
            ],
          },
        },
      ],
      args: [
        {
          name: 'stakeAmount',
          type: 'u64',
        },
        {
          name: 'discount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'processInitializeBuy',
      accounts: [
        {
          name: 'orderInitializer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'depositMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'receiveMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'orderVaultAccount',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-account',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'orderVaultAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-auth',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
            ],
          },
        },
        {
          name: 'initializerDepositTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'initializerReceiveTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'orderAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'registeredCurrency',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'openOrdersCounter',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'open-orders-counter',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'price',
          type: 'u64',
        },
        {
          name: 'originationQty',
          type: 'u64',
        },
      ],
    },
    {
      name: 'processInitializeSell',
      accounts: [
        {
          name: 'orderInitializer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'depositMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'receiveMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'orderVaultAccount',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-account',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'orderVaultAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-auth',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
            ],
          },
        },
        {
          name: 'initializerDepositTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'initializerReceiveTokenAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'orderAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'registeredCurrency',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'receive_mint',
              },
            ],
          },
        },
        {
          name: 'openOrdersCounter',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'open-orders-counter',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'price',
          type: 'u64',
        },
        {
          name: 'originationQty',
          type: 'u64',
        },
      ],
    },
    {
      name: 'processExchange',
      accounts: [
        {
          name: 'orderTaker',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'orderTakerDepositTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'orderTakerReceiveTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'currencyMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'assetMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'orderInitializer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'initializerDepositTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'initializerReceiveTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'orderVaultAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'orderVaultAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-auth',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'OrderAccount',
                path: 'order_account.order_initializer_pubkey',
              },
            ],
          },
        },
        {
          name: 'orderAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'saVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'registeredCurrency',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'registered-currency',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'currency_mint',
              },
            ],
          },
        },
        {
          name: 'openOrdersCounter',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'atlasStaking',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'registeredStake',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakingAccount',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'purchaseQuantity',
          type: 'u64',
        },
        {
          name: 'expectedPrice',
          type: 'u64',
        },
        {
          name: 'seller',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'processCancel',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'orderInitializer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'marketVarsAccount',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'market-vars',
              },
            ],
          },
        },
        {
          name: 'depositMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'initializerDepositTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'orderVaultAccount',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-account',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'orderVaultAuthority',
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'order-vault-auth',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
            ],
          },
        },
        {
          name: 'orderAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'openOrdersCounter',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'open-orders-counter',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'order_initializer',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'initializeOpenOrdersCounter',
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'openOrdersCounter',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'open-orders-counter',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'user',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'Mint',
                path: 'deposit_mint',
              },
            ],
          },
        },
        {
          name: 'depositMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'MarketVars',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'updateAuthorityMaster',
            type: 'publicKey',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'OpenOrdersCounter',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'openOrderCount',
            type: 'u64',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'OrderAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'orderInitializerPubkey',
            type: 'publicKey',
          },
          {
            name: 'currencyMint',
            type: 'publicKey',
          },
          {
            name: 'assetMint',
            type: 'publicKey',
          },
          {
            name: 'initializerCurrencyTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'initializerAssetTokenAccount',
            type: 'publicKey',
          },
          {
            name: 'orderSide',
            type: {
              defined: 'OrderSide',
            },
          },
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'orderOriginationQty',
            type: 'u64',
          },
          {
            name: 'orderRemainingQty',
            type: 'u64',
          },
          {
            name: 'createdAtTimestamp',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'RegisteredCurrency',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'tokenMint',
            type: 'publicKey',
          },
          {
            name: 'saCurrencyVault',
            type: 'publicKey',
          },
          {
            name: 'royalty',
            type: 'u64',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'royaltyTiers',
            type: {
              vec: {
                defined: 'RoyaltyTier',
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'RoyaltyTier',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakeAmount',
            type: 'u64',
          },
          {
            name: 'discount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'OrderSide',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Buy',
          },
          {
            name: 'Sell',
          },
        ],
      },
    },
    {
      name: 'TokenType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Asset',
          },
          {
            name: 'Currency',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidDestinationAccount',
      msg: 'Invalid Destination Token Account',
    },
    {
      code: 6001,
      name: 'InvalidInstruction',
      msg: 'Invalid instruction.',
    },
    {
      code: 6002,
      name: 'InvalidMint',
      msg: 'Invalid SPL Token mint',
    },
    {
      code: 6003,
      name: 'InvalidOfferAccountOwner',
      msg: 'Invalid Offer Account Owner',
    },
    {
      code: 6004,
      name: 'InvalidTokenAccount',
      msg: 'Invalid SPL Token account',
    },
    {
      code: 6005,
      name: 'NumericalOverflowError',
      msg: 'Numerical overflow error',
    },
    {
      code: 6006,
      name: 'InvalidUpdateAuthorityAccount',
      msg: 'Invalid Update Authority account',
    },
    {
      code: 6007,
      name: 'InvalidOrderVaultAuthorityAccount',
      msg: 'Invalid Order Vault Authority account',
    },
    {
      code: 6008,
      name: 'UninitializedTokenAccount',
      msg: 'Uninitialized Token Account',
    },
    {
      code: 6009,
      name: 'InsufficientBalance',
      msg: 'Insufficient Balance',
    },
    {
      code: 6010,
      name: 'InvalidOrderDuration',
      msg: 'Invalid Order Duration',
    },
    {
      code: 6011,
      name: 'InvalidOriginationQty',
      msg: 'Origination quantity must be greater than 0',
    },
    {
      code: 6012,
      name: 'InsufficientOrderQty',
      msg: 'Insufficient Order Quantity Remaining',
    },
    {
      code: 6013,
      name: 'InvalidRoyalty',
      msg: 'Invalid Royalty Value',
    },
    {
      code: 6014,
      name: 'InvalidCounter',
      msg: 'Invalid Open Order Counter',
    },
    {
      code: 6015,
      name: 'MintDecimalError',
      msg: 'Mint must be zero decimal',
    },
    {
      code: 6016,
      name: 'InvalidOrderAccountError',
      msg: 'Order Account does not match provided account',
    },
    {
      code: 6017,
      name: 'InvalidRoyaltyTier',
      msg: 'No royalty tier exists with provided stake amount',
    },
    {
      code: 6018,
      name: 'RoyaltyTierLength',
      msg: 'Royalty Tier vector cannot hold any additional tiers',
    },
    {
      code: 6019,
      name: 'InvalidOrderPrice',
      msg: 'Order price did not match expected price',
    },
    {
      code: 6020,
      name: 'DuplicateRoyaltyTier',
      msg: 'Royalty tier already exists',
    },
    {
      code: 6021,
      name: 'InvalidSeller',
      msg: 'Order seller did not match expected seller',
    },
  ],
  metadata: {},
};
