import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController =  new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController} 
