import { Router } from "express";
import { CategoriesRepository } from "../respositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRespository);

    createCategoryService.execute({name, description});

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRespository.list();

    return response.json(all)
})

export {categoriesRoutes};