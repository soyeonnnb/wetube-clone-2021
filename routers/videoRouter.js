import express from "express";
import { videos } from "../controlloers/userControllers";
import {
  deleteVideo,
  editVideo,
  search,
  upload,
  videoDetail,
} from "../controlloers/videoControllers";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
