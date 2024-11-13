import {ChannelDao} from '../dao/channel.dao'

class ChannelService{
    private channelDao: ChannelDao;

    constructor() {
        this.channelDao = new ChannelDao();
      }

    async addChannel(name:string){
        return await this.channelDao.addChannel(name);
    }

    async getAllChannels() {
        return await this.channelDao.getAllChannels();
    }

    async getChannelById(id:string){
        const channel =  await this.channelDao.getChannelById(id)
        if(!channel) throw new Error("channel not found")
        return channel;
    }

    async deleteChannelById(id:string){
        return await this.channelDao.deleteChannelById(id)
    }
}

export const channelService = new ChannelService;