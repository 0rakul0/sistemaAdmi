import { getRepository } from "typeorm";
import { Category } from "./../entities/Category";
import { Video } from "./../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
}
export class CreateVideoService {
  public async execute({ name, description, category_id, duration }: VideoRequest): Promise<Error | Video> {

    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    if (!await repoCategory.findOne(category_id)) {
      return new Error('Video does not exists');
    }

    const video = repo.create({
      name, description, duration, category_id
    });

    await repo.save(video);

    return video;
  }
}