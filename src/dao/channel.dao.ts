import AppDataSource from "../config/dataSource";
import { Channel } from "../entities/channel.entity";

export class ChannelDao{
    private channelRepository = AppDataSource.getRepository(Channel)

    async addChannel(name:string): Promise<Channel> {
       const channel = this.channelRepository.create({
        name: name
       });
       return await this.channelRepository.save(channel);
    }

    async getAllChannels(): Promise<Channel[]> {
        return await this.channelRepository.find();
    }

    async getChannelById(id: string): Promise<Channel> {
        const channel = await this.channelRepository.findOne({where:{id : id}})
        return channel
    }

    async deleteChannelById(id: string): Promise<void> {
         await this.channelRepository.delete(id)
    }

}