import {getFaucet, getTestFaucet} from "../branding";

export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const openledgerAPIs = {
    BASE: "https://ol-api1.openledger.info/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount",
    RPC_URL: "https://openledger.info/api/"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/v3_0",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/simple-api/initiate-trade"
};

export const bitsparkAPIs = {
    BASE: "https://dex-api.bitspark.io/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const cryptoBridgeAPIs = {
    BASE: "https://api.crypto-bridge.org/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/wallets",
    MARKETS: "/markets",
    TRADING_PAIRS: "/trading-pairs"
};

export const citadelAPIs = {
    BASE: "https://citadel.li/trade",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const gdex2APIs = {
    BASE: "https://api.gdex.io/adjust",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs"
};

// Legacy Deposit/Withdraw
export const gdexAPIs = {
    BASE: "https://api.gdex.io",
    ASSET_LIST: "/gateway/asset/assetList",
    ASSET_DETAIL: "/gateway/asset/assetDetail",
    GET_DEPOSIT_ADDRESS: "/gateway/address/getAddress",
    CHECK_WITHDRAY_ADDRESS: "/gateway/address/checkAddress",
    DEPOSIT_RECORD_LIST: "/gateway/deposit/recordList",
    DEPOSIT_RECORD_DETAIL: "/gateway/deposit/recordDetail",
    WITHDRAW_RECORD_LIST: "/gateway/withdraw/recordList",
    WITHDRAW_RECORD_DETAIL: "/gateway/withdraw/recordDetail",
    GET_USER_INFO: "/gateway/user/getUserInfo",
    USER_AGREEMENT: "/gateway/user/isAgree",
    WITHDRAW_RULE: "/gateway/withdraw/rule"
};

export const xbtsxAPIs = {
    BASE: "https://apis.xbts.io/api/v1",
    COINS_LIST: "/coin"
};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia and New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    // If you want a location to be translated, add the translation to settings in locale-xx.js
    // and use an object {translate: key} in WS_NODE_LIST
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: [
        {
            url: "wss://fake.automatic-selection.com",
            location: {translate: "settings.api_closest"}
        },
        {
            url: "wss://api-nbs-northchina.cnvote.vip:80",
            region: "MAINNET - China",
            location: "Beijing",
            operator: "CNVOTE"
        },
        {
            url: "wss://api-nbs-hangzhou.cnvote.vip:80",
            region: "MAINNET - China",
            location: "Hangzhou",
            operator: "CNVOTE"
        },
        {
            url: "wss://web.cnvote.vip:80",
            region: "MAINNET - China",
            location: "Chongqing",
            operator: "CNVOTE"
        },
        {
            url: "ws://127.0.0.1:8090",
            location: "Locally hosted"
        }
        // // Testnet
        // {
        //     url: "wss://web.cnvote.vip:80",
        //     region: "TESTNET - cnvote",
        //     country: "unknown",
        //     location: "unknown",
        //     operator: "cnvote",
        //     contact: "unknown"
        // }
    ],
    ES_WRAPPER_LIST: [
        {
            url: "https://eu.wrapper.elasticsearch.bitshares.ws",
            region: "Western Europe",
            country: "Germany",
            operator: "Infrastructure Worker",
            contact: "email:info@blockchainprojectsbv.com"
        },
        {
            url: "https://us.wrapper.elasticsearch.bitshares.ws",
            region: "Northern America",
            country: "U.S.A.",
            operator: "Infrastructure Worker",
            contact: "email:info@blockchainprojectsbv.com"
        },
        {
            url: "https://hk.wrapper.elasticsearch.bitshares.ws",
            region: "Hong Kong",
            country: "China",
            operator: "Infrastructure Worker",
            contact: "email:info@blockchainprojectsbv.com"
        },
        {
            url: "https://explorer.bitshares-kibana.info",
            region: "N/A",
            country: "N/A",
            operator: "N/A",
            contact: "N/A"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: getTestFaucet().url
};
