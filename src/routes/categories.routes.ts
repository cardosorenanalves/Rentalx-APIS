import { Router } from "express";
import { createCategoryController } from "../Modules/Cars/useCases/createCategory";
import { listCategoriesController } from "../Modules/Cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
 return listCategoriesController.handle(request, response);
})

export {categoriesRoutes};