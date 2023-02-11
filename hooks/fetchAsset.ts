import axios from 'axios';
import { Asset } from './types';

export const AssetList = async () => {
  const response = await axios.get(
    'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/osmosis-1/osmosis-1.assetlist.json'
  );
  let list: Asset[] = response.data.assets 
  return list;
};
