import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x129C37a794B6a15365560356b60Bc8F3Baf394A0'
);

export default instance;
