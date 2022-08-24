import { Router } from "express";
import { CategoriesRespository } from "../respositories/CategoriesRespository";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;

    const categoryAlreadyExists = categoriesRespository.findByName(name);

    if(categoryAlreadyExists){
        return response.status(400).json({error: "Category already exists!"})
    }

    categoriesRespository.create({name, description});

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRespository.list();

    return response.json(all)
})

export {categoriesRoutes};