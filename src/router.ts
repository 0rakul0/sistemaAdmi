import { Router } from "express";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { CreateVideoController } from "./controller/CreateVideoController";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController";
import { GetAllVideosController } from "./controller/GetAllVideoController";
import { UpdateCategoryController } from "./controller/UpdateCategoryController";

const routes = Router();

//CRUD CATEGORY
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

//CRUD VIDEO
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };