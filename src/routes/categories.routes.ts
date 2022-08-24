import { request, response, Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRespository } from "../respositories/CategoriesRespository";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;

   categoriesRespository.create({name, description});

    return response.status(201).send();
});

export {categoriesRoutes};