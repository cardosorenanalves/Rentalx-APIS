import { Router } from "express";
import { createSpecificationController } from "../Modules/Cars/useCases/createSpecification";

const specificationRoutes = Router()

specificationRoutes.post('/', (request, response) => {
   return createSpecificationController.handle(request, response);
})

export { specificationRoutes }