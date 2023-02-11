/**
 * Defines the interface for the Osmosis asset list JSON response. 
 */
export interface OsmosisAssets {
    chain_name: string;
    assets:     Asset[];
}

/**
 * Defines the interface for each asset in the Osmosis asset list. 
 */
export interface Asset {
    description?:  string;
    denom_units:   DenomUnit[];
    base:          string;
    name:          string;
    display:       string;
    symbol:        string;
    logo_URIs:     LogoURIs;
    coingecko_id?: string;
    keywords?:     string[];
    traces?:       Trace[];
    type_asset?:   TypeAsset;
    address?:      string;
}

/**
 * Defines the interface for each 'denom unit' in the Osmosis asset list. 
 */
export interface DenomUnit {
    denom:    string;
    exponent: number;
    aliases?: string[];
}

/**
 * Defines the png and/or svg location for each asset in the Osmosis asset list.
 * 
 * This is generally the Cosmos Chain Registry GH repo: https://github.com/cosmos/chain-registry 
 */
export interface LogoURIs {
    png?: string;
    svg?: string;
}

/**
 * Defines the interface for each 'denom trace' in the Osmosis asset list. To allow tracking for fungible IBC assets transfers.
 */
export interface Trace {
    type:         TraceType;
    counterparty: Counterparty;
    provider?:    string;
    chain?:       Chain;
}

export interface Chain {
    channel_id: string;
    path:       string;
    port?:      Port;
}

export enum Port {
    Transfer = "transfer",
}

export interface Counterparty {
    chain_name:  string;
    base_denom:  string;
    channel_id?: string;
    port?:       string;
}

export enum TraceType {
    Bridge = "bridge",
    Ibc = "ibc",
    IbcCw20 = "ibc-cw20",
    LiquidStake = "liquid-stake",
    Synthetic = "synthetic",
    Wrapped = "wrapped",
}

export enum TypeAsset {
    Cw20 = "cw20",
    SdkCoin = "sdk.coin",
    Snip20 = "snip20",
}

export interface QueryPoolsResp {
    pools: PoolInfoResp[];
}

export interface PoolInfoResp {
    "@type":                    string;
    address:                    string;
    id:                         string;
    pool_params:                PoolParams;
    future_pool_governor:       string;
    total_shares:               Coin;
    pool_assets?:               PoolAsset[];
    total_weight?:              string;
    pool_liquidity?:            Coin[];
    scaling_factors?:           string[];
    scaling_factor_controller?: string;
}

export interface PoolAsset {
    token:  Coin;
    weight: string;
}

export interface Coin {
    denom:  string;
    amount: string;
}

export interface PoolParams {
    swap_fee:                     string;
    exit_fee:                     string;
    smooth_weight_change_params?: null;
}
