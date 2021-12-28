import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetAllVideosService{
    public async execute() {
        const repo = getRepository(Video);
        const videos = await repo.find({
            relations: ["category"],
        });

        return videos;
    }
}