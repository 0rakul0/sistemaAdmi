import { getRepository, ObjectID } from "typeorm";
import { Category } from "./../entities/Category";

export class DeleteCategoryService {
    constructor() {
    }
    async execute(id: string | number | Date | ObjectID) {
        const repo = getRepository(Category);
        const category = await repo.findOne(id);
        if (!category) {
            return new Error("Category not found");
        }
        await repo.remove(category);
        return category;
    }
}