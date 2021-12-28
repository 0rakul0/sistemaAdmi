import { Request, Response } from "express";
import { GetAllCategoriesServices } from "./../services/GetAllCategoriesServices";

export class GetAllCategoriesController{
	async handle(request: Request, response: Response){
		const service = new GetAllCategoriesServices();

		const categories = await service.execute();

		return response.json(categories);
	}
}