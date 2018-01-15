import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x404952D7d56d7e56726935271C346f36D50b8F6f'
);

export default instance;
