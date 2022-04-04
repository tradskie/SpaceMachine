//var CONTRACT_ADDRESS = "0x95B716125aB48F1996B44142Cd6C3Ce37A36BA80"; //testnet
var CONTRACT_ADDRESS = "0x83E36e50e70153A8b018569136fF25f35782201B"; //mainnet
//var tokenAddr = "0xe0e92035077c39594793e61802a350347c320cf2"; // test busd/bnb LP
var tokenAddr = '0x434cB47c13D472da45aF9e9ff4FfB5b9D1B2F814'; // mainnet SPO/BNB LP
var referrer = "0x2f0ead34aBDD8375382AD56B8da4b14d94AD9B66";
var upline = "0x2f0ead34aBDD8375382AD56B8da4b14d94AD9B66";

var uiConfig = {
  accurateDecimals: 7,
  shortDecimals: 7,
  totalsDecimals: 7,
  contractDivisor: 1e18,
};

var contractUtil = {
  parse: function (res) {
    return res / uiConfig.contractDivisor;
  },
  parseFormat: function (res, purpose) {
    const parsed = this.parse(res);
    switch (purpose) {
      case "totals":
        return parsed.toFixed(uiConfig.totalsDecimals);
      case "accurate":
        return parsed.toFixed(uiConfig.accurateDecimals);
      case "short":
        return parsed.toFixed(uiConfig.shortDecimals);
      default:
        return parsed;
    }
  },
};

var contractAbi = [
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserTimeToUnstake",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"userAddress",
            "type":"address"
         }
      ],
      "name":"getUserDownlineCount",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         },
         {
            "name":"",
            "type":"uint256"
         },
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"name",
      "outputs":[
         {
            "name":"",
            "type":"string"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"spender",
            "type":"address"
         },
         {
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"approve",
      "outputs":[
         {
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"totalSupply",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"SET_ENABLE_AIRDROP",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"tokenAmount",
            "type":"uint256"
         }
      ],
      "name":"sellToken",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_FEE2",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"sender",
            "type":"address"
         },
         {
            "name":"recipient",
            "type":"address"
         },
         {
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"transferFrom",
      "outputs":[
         {
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"ADMIN",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"limitSupply",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"totalTokenStaked",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"decimals",
      "outputs":[
         {
            "name":"",
            "type":"uint8"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getContractTokenBalance",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"spender",
            "type":"address"
         },
         {
            "name":"addedValue",
            "type":"uint256"
         }
      ],
      "name":"increaseAllowance",
      "outputs":[
         {
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getAPY_T",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getAPY_M",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getCurrentUserBonAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getCurrentDay",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_FEE",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"userAddress",
            "type":"address"
         }
      ],
      "name":"getUserReferralTotalBonus",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"unStakeToken",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getTokenPrice",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"claimAirdropM",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserAirdropReqInv",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"claimAirdrop",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getDAILYAPY_M",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"tokenAmount",
            "type":"uint256"
         }
      ],
      "name":"tokenToSpoLP",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"address"
         }
      ],
      "name":"CHANGE_ADMIN",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getTokenSoldToday",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"userAddress",
            "type":"address"
         }
      ],
      "name":"getUserReferralWithdrawn",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"totalSpoLPStaked",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_1",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"account",
            "type":"address"
         }
      ],
      "name":"balanceOf",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"SET_TOKEN_DAILYPROFIT",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"startTime",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserSpoLPStaked",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"availableSupply",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"TOKEN_DAILYPROFIT",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserUnclaimedTokens_M",
      "outputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"getContractLpTokens",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"SET_DEV_FEE2",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"symbol",
      "outputs":[
         {
            "name":"",
            "type":"string"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"SET_START_TIME",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"ownerManualAirdropCheckpoint",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getTimeToNextDay",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"spender",
            "type":"address"
         },
         {
            "name":"subtractedValue",
            "type":"uint256"
         }
      ],
      "name":"decreaseAllowance",
      "outputs":[
         {
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"SET_SPOLP_DAILYPROFIT",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"to",
            "type":"address"
         },
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"transfer",
      "outputs":[
         {
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_5",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserTokenStaked",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"SET_DEV_FEE",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserSpoLPBalance",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"sentAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_3",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"totalUsers",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserCountAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"referrer",
            "type":"address"
         },
         {
            "name":"_amount",
            "type":"uint256"
         }
      ],
      "name":"stakeSpoLP",
      "outputs":[
         
      ],
      "payable":true,
      "stateMutability":"payable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getContractSpoLPBalance",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"SpoLPAmount",
            "type":"uint256"
         }
      ],
      "name":"SpoLPToToken",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"withdrawRef",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"spender",
            "type":"address"
         },
         {
            "name":"amount",
            "type":"uint256"
         },
         {
            "name":"extraData",
            "type":"bytes"
         }
      ],
      "name":"approveAndCall",
      "outputs":[
         {
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserBonAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"ENABLE_AIRDROP",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserTimeToNextAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"tokenAmount",
            "type":"uint256"
         }
      ],
      "name":"stakeToken",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getContractLaunchTime",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"claimToken_M",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserUnclaimedTokens_T",
      "outputs":[
         {
            "name":"value",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"owner",
            "type":"address"
         },
         {
            "name":"spender",
            "type":"address"
         }
      ],
      "name":"allowance",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"claimToken_T",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getDAILYAPY_T",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"userAddress",
            "type":"address"
         }
      ],
      "name":"getUserReferralBonus",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"SPOLP_DAILYPROFIT",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_2",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"DEV_4",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "name":"_addr",
            "type":"address"
         }
      ],
      "name":"getUserTokenBalance",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getAvailableAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"ownerManualAirdrop",
      "outputs":[
         {
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "name":"account",
            "type":"address"
         },
         {
            "indexed":false,
            "name":"txType",
            "type":"string"
         },
         {
            "indexed":false,
            "name":"tokenAmount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "name":"trxAmount",
            "type":"uint256"
         }
      ],
      "name":"TokenOperation",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "name":"from",
            "type":"address"
         },
         {
            "indexed":true,
            "name":"to",
            "type":"address"
         },
         {
            "indexed":false,
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"Transfer",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "name":"owner",
            "type":"address"
         },
         {
            "indexed":true,
            "name":"spender",
            "type":"address"
         },
         {
            "indexed":false,
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"Approval",
      "type":"event"
   }
]

var tokenAbi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "burn",
    outputs: [
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      { internalType: "uint112", name: "_reserve0", type: "uint112" },
      { internalType: "uint112", name: "_reserve1", type: "uint112" },
      { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_token0", type: "address" },
      { internalType: "address", name: "_token1", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "mint",
    outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "skim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "amount0Out", type: "uint256" },
      { internalType: "uint256", name: "amount1Out", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "swap",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token1",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

var tokenContract;

var currentAddr;
var contract = null;
var gasPrice = "10000000000";
var percent1, percent2, percent3, percent4, percent5, percent6;
var startD, startH, startM, startS;

var BUSDPrice = 0;
var TokenPrice = 0;
var userBUSDStaked = 0;
var userReqAirdropInv = 0;

window.addEventListener("load", Connect);

async function Connect() {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();

      let accounts = await web3.eth.getAccounts();
      currentAddr = accounts[0];
      console.log(currentAddr);
      runAPP();
      return;
    } catch (error) {
      console.error(error);
    }
  } else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);

    let accounts = await web3.eth.getAccounts();
    currentAddr = accounts[0];
    console.log(currentAddr);
    runAPP();
    return;
  }
  setTimeout(checkForBinanceChain, 1500);
}
async function checkForBinanceChain() {
  try {
    await window.BinanceChain.enable();
    console.log(typeof window.BinanceChain);
    if (window.BinanceChain) {
      console.log("BinanceChain");
      await BinanceChain.enable();
      window.web3 = new Web3(window.BinanceChain);
      let accounts = await web3.eth.getAccounts();
      currentAddr = accounts[0];

      console.log(contract);
      runAPP();
      return;
    }
  } catch (e) {}
}

async function runAPP() {
  let networkID = await web3.eth.net.getId();
  if (networkID == 56) {
    // 56 - BSC Live. 97 -- BSC Test
    contract = await new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS);
    console.log(contract);
    tokenContract = await new web3.eth.Contract(tokenAbi, tokenAddr);
    console.log(tokenContract);
  }
}

setInterval(() => {
  if (contract) {
    contract.methods
      .getContractLaunchTime()
      .call()
      .then((res) => {
        var t = parseInt(res) + 60;
        startD = parseInt(t / 60 / 60 / 24);

        t = t - startD * 60 * 60 * 24;
        startH = parseInt(t / 60 / 60);

        t = t - startH * 60 * 60;
        startM = parseInt(t / 60);

        t = t - startM * 60;
        startS = parseInt(t);

        //launchTime(res,(body)=>{
        //   $("#launch-time").html(body)
        //});
      });

    contract.methods
      .getTimeToNextDay()
      .call()
      .then((res) => {
        var t = parseInt(res) + 60;
        startD = parseInt(t / 60 / 60 / 24);

        t = t - startD * 60 * 60 * 24;
        startH = parseInt(t / 60 / 60);

        t = t - startH * 60 * 60;
        startM = parseInt(t / 60);

        t = t - startM * 60;
        startS = parseInt(t);

        $("#time-tonextday").html(
          `Reset in <span>${startD}D : ${startH}H : ${startM}M</span>`
        );
      });

    contract.methods
      .getUserTimeToUnstake(currentAddr)
      .call()
      .then((res) => {
        var t = parseInt(res) + 60;
        startD = parseInt(t / 60 / 60 / 24);

        t = t - startD * 60 * 60 * 24;
        startH = parseInt(t / 60 / 60);

        t = t - startH * 60 * 60;
        startM = parseInt(t / 60);

        t = t - startM * 60;
        startS = parseInt(t);

        if (res == 0) {
          $("#time-tounstake").html(``);
        } else {
          $("#time-tounstake").html(
            `Unstake available in: ${startD}D : ${startH}H : ${startM}M`
          );
        }
      });

    contract.methods
      .getUserTimeToNextAirdrop(currentAddr)
      .call()
      .then((res) => {
        var t = parseInt(res) + 60;
        startD = parseInt(t / 60 / 60 / 24);

        t = t - startD * 60 * 60 * 24;
        startH = parseInt(t / 60 / 60);

        t = t - startH * 60 * 60;
        startM = parseInt(t / 60);

        t = t - startM * 60;
        startS = parseInt(t);

        if (res == 0) {
          $("#airdrop-c-2").html(`7 days since the last claim<span>✅</span>`);
        } else {
          $("#airdrop-c-2").html(
            `7 days since the last claim<span>${startD}D : ${startH}H : ${startM}M❌</span>`
          );
        }
      });
  }
}, 3000);

setInterval(() => {
  if (contract) {
    web3.eth.getAccounts().then((res) => {
      currentAddr = res[0];
    });

    var connectedAddr =
      currentAddr[0] +
      currentAddr[1] +
      currentAddr[2] +
      currentAddr[3] +
      currentAddr[4] +
      "..." +
      currentAddr[currentAddr.length - 5] +
      currentAddr[currentAddr.length - 4] +
      currentAddr[currentAddr.length - 3] +
      currentAddr[currentAddr.length - 2] +
      currentAddr[currentAddr.length - 1];

    $("#connect-btn").text(connectedAddr);

    contract.methods
      .getTokenPrice()
      .call()
      .then((res) => {
        TokenPrice = contractUtil.parseFormat(res, "accurate");
        $("#token-price").html(`${TokenPrice}`);
        $("#token-priceM").html(`${TokenPrice}`);
      });

    contract.methods
      .totalSupply()
      .call()
      .then((res) => {
        const val = contractUtil.parseFormat(res, "totals");
        $("#total-supply").text(val);
      });

    contract.methods
      .limitSupply()
      .call()
      .then((res) => {
        $("#limit-supply").text(contractUtil.parseFormat(res, "totals"));
      });

    contract.methods
      .availableSupply()
      .call()
      .then((res) => {
        $("#available-supply").text(contractUtil.parseFormat(res, "totals"));
      });

    contract.methods
      .totalUsers()
      .call()
      .then((res) => {
        $("#total-users").text(res);
      });
	
	contract.methods
      .getDAILYAPY_M()
      .call()
      .then((res) => {
        $("#DAILYAPY_M").html(`Daily<span>${res / 10}%</span>`);
      });

    contract.methods
      .getDAILYAPY_T()
      .call()
      .then((res) => {
        $("#DAILYAPY_T").html(`Daily<span>${res / 10}%</span>`);
      });	

    contract.methods
      .getAPY_M()
      .call()
      .then((res) => {
        $("#APY_M").html(`APR<span>${res / 10}%</span>`);
      });

    contract.methods
      .getAPY_T()
      .call()
      .then((res) => {
        $("#APY_T").html(`APR<span>${res / 10}%</span>`);
      });

    contract.methods
      .totalSpoLPStaked()
      .call()
      .then((res) => {
        $("#total-BUSD-staked").html(
          `Total Staked<span>${contractUtil.parseFormat(
            res,
            "accurate"
          )} SPO LP</span>`
        );
      });

    contract.methods
      .totalUsers()
      .call()
      .then((res) => {
        $("#totalUsers").html(`${res}`);
      });

    contract.methods
      .totalTokenStaked()
      .call()
      .then((res) => {
        $("#total-token-staked").html(
          `Total Staked<span>${contractUtil.parseFormat(
            res,
            "accurate"
          )} MTR</span>`
        );
      });

    // todo, change hardcoded address for variable
    //tokenContract.methods.balanceOf('0xab08906867fcA09e9E39819411Df1355C918Da05').call().then(res => {
    tokenContract.methods
      .balanceOf(CONTRACT_ADDRESS)
      .call()
      .then((res) => {
        $("#contract-BUSD-balance").text(
          contractUtil.parseFormat(res, "totals")
        );
      });

    tokenContract.methods
      .balanceOf(currentAddr)
      .call()
      .then((res) => {
        $("#user-BUSD-balance-1").text(contractUtil.parse(res).toFixed(7));
      });

    //contract.methods.getUserSpoLPBalance(currentAddr).call().then(res=>{
    //    $("#user-BUSD-balance-1").text((res/1e18).toFixed(6))
    //})

    contract.methods
      .getContractTokenBalance()
      .call()
      .then((res) => {
        $("#contract-token-balance").text(
          contractUtil.parseFormat(res, "totals")
        );
      });

    contract.methods
      .getAvailableAirdrop()
      .call()
      .then((res) => {
        $("#available-airdrop").text(contractUtil.parse(res).toFixed(0));
      });

    contract.methods
      .getUserTokenBalance(currentAddr)
      .call()
      .then((res) => {
        $("#user-token-balance-1").text(contractUtil.parse(res).toFixed(7));
        $("#user-token-balance-2").text(contractUtil.parse(res).toFixed(7));
      });

    contract.methods
      .getUserSpoLPStaked(currentAddr)
      .call()
      .then((res) => {
        userBUSDStaked = contractUtil.parseFormat(res, "accurate");
        // console.log(userBUSDStaked)
        $("#user-BUSD-staked").html(
          `My Stake<span>${userBUSDStaked} SPO-LP</span>`
        );
      });

    contract.methods
      .getUserAirdropReqInv(currentAddr)
      .call()
      .then((res) => {
        userReqAirdropInv = contractUtil.parseFormat(res, "accurate");
        //console.log(parseInt(userReqAirdropInv))
        //console.log(parseInt(userBUSDStaked))
        if (parseInt(userReqAirdropInv) > parseInt(userBUSDStaked)) {
          ///console.log("in here")
          $("#airdrop-c-1").html(
            `Have at least ${userReqAirdropInv} SPO-LP in Stake<span>❌</span>`
          );
        } else {
          //console.log("in here too")
          $("#airdrop-c-1").html(
            `Have at least ${userReqAirdropInv} SPO-LP in Stake<span>✅</span>`
          );
        }
      });

    contract.methods
      .getUserBonAirdrop(currentAddr)
      .call()
      .then((res) => {
        if (res >= 5) {
          $("#airdrop-c-3").html(
            `Have 5 more referrals (from level 1)<span>(${res})✅</span>`
          );
        } else {
          $("#airdrop-c-3").html(
            `Have 5 more referrals (from level 1)<span>(${res})❌</span>`
          );
        }
      });

    contract.methods
      .getUserTokenStaked(currentAddr)
      .call()
      .then((res) => {
        $("#user-token-staked").html(
          `My Stake<span>${contractUtil.parseFormat(
            res,
            "accurate"
          )} MTR</span>`
        );
      });

    contract.methods
      .getUserUnclaimedTokens_M(currentAddr)
      .call()
      .then((res) => {
        $("#user-unClaimed-M").text(contractUtil.parseFormat(res, "accurate"));
      });

    contract.methods
      .getUserUnclaimedTokens_T(currentAddr)
      .call()
      .then((res) => {
        $("#user-unClaimed-T").text(contractUtil.parseFormat(res, "accurate"));
      });

    contract.methods
      .getTokenSoldToday()
      .call()
      .then((res) => {
        $("#total-sold-today").html(
          `Sold Today<span>${contractUtil.parseFormat(res, "accurate")}</span>`
        );
      });

    $("#ref-link").val(
      "https://" + window.location.host + "/?ref=" + currentAddr
    );

    contract.methods
      .getUserReferralBonus(currentAddr)
      .call()
      .then((res) => {
        $("#referral-available").text(
          contractUtil.parseFormat(res, "accurate")
        );
      });

    contract.methods
      .getUserReferralTotalBonus(currentAddr)
      .call()
      .then((res) => {
        $("#referral-earned").text(contractUtil.parseFormat(res, "accurate"));
      });

    contract.methods
      .getUserReferralWithdrawn(currentAddr)
      .call()
      .then((res) => {
        $("#referral-withdrawn").text(
          contractUtil.parseFormat(res, "accurate")
        );
      });

    contract.methods
      .getUserDownlineCount(currentAddr)
      .call()
      .then((res) => {
        var sum = parseInt(res[0]) + parseInt(res[1]) + parseInt(res[2]);
        $("#total-referrals").text(sum.toFixed(0));
      });
  }

  // fetch('https://api.cryptonator.com/api/ticker/BUSD-usd').then(resp=>{
  //               var response = resp.json().then(r=>{
  //                 var usd = r.ticker.price
  //				BUSDPrice = r.ticker.price
  //              $("#BUSD-price").text("$"+ parseFloat(usd).toFixed(3))
  //        })
  //   })
}, 3000);

function approveBUSD(trx) {
  var trxspenddoc = document.getElementById("input-approve");
  console.log("approve: " + web3.utils.toWei(trxspenddoc.value));
  tokenContract.methods
    .approve(CONTRACT_ADDRESS, web3.utils.toWei(trxspenddoc.value))
    .send({ from: currentAddr });
}
function spendLimit(callback) {
  tokenContract.methods
    .allowance(currentAddr, contract)
    .call()
    .then((result) => {
      callback(web3.utils.fromWei(result));
    })
    .catch((err) => {
      console.log(err);
    });
}

function userBalance(callback) {
  tokenContract.methods
    .balanceOf(currentAddr)
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result);
      // console.log("balance" + amt)
      callback(amt);
      usrBal = amt;
    })
    .catch((err) => {
      console.log(err);
    });
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
  showAlert("Successfuly copied", "success");
}

function showAlert(msg, type) {
  if (type == "error") {
    iziToast.error({
      title: "Error",
      message: msg,
      backgroundColor: "white",
      position: "topRight",
      color: ".iziToast-color-red",
      iconColor: ".iziToast-color-red",
    });
  }

  if (type == "success") {
    iziToast.success({
      title: "OK",
      message: msg,
      backgroundColor: "white",
      position: "topRight",
      progressBarColor: "#76BF73",
      color: ".iziToast-#76BF73",
      iconColor: ".iziToast-#76BF73",
    });
  }
}

function toHexString(number) {
  return "0x" + number.toString(16);
}

function SetMaxBUSD() {
  var inputF = document.getElementById("input-busd");
  tokenContract.methods
    .balanceOf(currentAddr)
    .call()
    .then((res) => {
      inputF.value = web3.utils.fromWei(res);
    });
}

function SetMaxBUSDMachine() {
  var inputF = document.getElementById("input-2");
  contract.methods
    .getUserTokenBalance(currentAddr)
    .call()
    .then((res) => {
      amt = web3.utils.fromWei(res);
      inputF.value = parseFloat(amt).toFixed(3) - 0.001;
    });
}

function SetMaxBUSDMachineToSell() {
  var inputF = document.getElementById("input-3");
  contract.methods
    .getUserTokenBalance(currentAddr)
    .call()
    .then((res) => {
      amt = web3.utils.fromWei(res);
      inputF.value = parseFloat(amt).toFixed(3) - 0.001;
    });
}

function stakeM() {
  var today = new Date();
  var date =
    today.getUTCFullYear() +
    "-" +
    (today.getUTCMonth() + 1) +
    "-" +
    today.getUTCDate();
  var time =
    today.getUTCHours() +
    ":" +
    today.getUTCMinutes() +
    ":" +
    today.getUTCSeconds();
  var CurrentDateTime = date + " " + time;
  // console.log(CurrentDateTime);

  var busdlaunch = new Date("Thu Jan 28 2022 13:00:00 GMT-0000");
  var date =
    busdlaunch.getUTCFullYear() +
    "-" +
    (busdlaunch.getUTCMonth() + 1) +
    "-" +
    busdlaunch.getUTCDate();
  var time =
    busdlaunch.getUTCHours() +
    ":" +
    busdlaunch.getUTCMinutes() +
    ":" +
    busdlaunch.getUTCSeconds();
  var BUSDLaunchDateTime = date + " " + time;
  // console.log(BUSDLaunchDateTime);

  if (CurrentDateTime > BUSDLaunchDateTime) {
    // launched
    if (contract) {
      var trxspenddoc = document.getElementById("input-busd");

      console.log("stake spo-lp: " + web3.utils.toWei(trxspenddoc.value));
      contract.methods
        .stakeSpoLP(upline, web3.utils.toWei(trxspenddoc.value))
        .send({
          // value: amount,
          from: currentAddr,
          gasPrice: gasPrice,
        });
    }
  } else {
    window.alert(
      "Staking SPO-LP available from :Thu Jan 28 2022 13:00:00 GMT-0000"
    );
  }
}

function stakeT(input) {
  if (contract) {
    var amount = toHexString($(input).val() * 1e18);
    console.log(amount);
    contract.methods.stakeToken(amount).send({
      // value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
}

function sell(input) {
  if (contract) {
    var amount = toHexString($(input).val() * 1e18);
    console.log(amount);
    contract.methods.sellToken(amount).send({
      // value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};

var refurl = getUrlParameter("ref");

if (refurl) {
  localStorage.setItem("ref", refurl);
}

upline = localStorage.getItem("ref") ? localStorage.getItem("ref") : referrer;

$("#unstake").click(() => {
  if (contract) {
    contract.methods.unStakeToken().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
});

$("#claimM").click(() => {
  if (contract) {
    contract.methods.claimToken_M().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
});

$("#claimT").click(() => {
  if (contract) {
    contract.methods.claimToken_T().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
});

$("#claimA").click(() => {
  if (contract) {
    contract.methods.claimAirdrop().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
});

$("#withdraw-referral-btn").click(() => {
  if (contract) {
    contract.methods.withdrawRef().send({
      value: 0,
      from: currentAddr,
      gasPrice: gasPrice,
    });
  }
});

$("#input-3").on("input", () => {
  var amount = $("#input-3").val();

  if (contract) {
    var profit = amount * TokenPrice;
    $("#sell-calc").html(
      `${profit.toFixed(uiConfig.accurateDecimals)} SPO-LP</span>`
    );
  }
});
