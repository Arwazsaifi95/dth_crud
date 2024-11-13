import { ChannelController } from "../controllers/channel";
import express from 'express';
const router = express.Router();

router.post('/',ChannelController.addChannel)
router.get('/',ChannelController.getAllChannels)
router.get('/:id',ChannelController.getChannelById)
router.delete('/:id',ChannelController.deleteChannelById)


export default router;