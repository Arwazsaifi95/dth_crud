import { Request, Response } from 'express';
import { channelService } from '../services/channe.service';
import logger from '../logger/logger';

export const ChannelController = {

    async addChannel(req: Request, res: Response) {
        const { name } = req.body;
        try {
            const channel = await channelService.addChannel(name);
            res.status(200).json({
                status: 'success',
                data: channel,
                message: 'channel added successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },


    async getAllChannels(req: Request, res: Response) {
        try {
            const channels = await channelService.getAllChannels();
            res.status(200).json({
                status: 'success',
                data: channels,
                message: 'channels retrieved successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },

    async getChannelById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const channels = await channelService.getChannelById(id);
            logger.info(`channel retrived ${channels.id}`)
            res.status(200).json({
                status: 'success',
                data: channels,
                message: 'channel retrieved successfully',
            });
        } catch (error) {
            logger.error(error)
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },

    async deleteChannelById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await channelService.deleteChannelById(id);
            res.status(200).json({
                status: 'success',
                data: {},
                message: "channel deleted successfully"
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    }

};


