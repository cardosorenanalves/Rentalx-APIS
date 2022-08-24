import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
};

class CreateSpecificationService {
    constructor(private specificationRepository : ISpecificationsRepository){}
    execute({name, description}: IRequest): void{
        const specificationAlredyExists = this.specificationRepository.findByName(name);

        if(specificationAlredyExists){
            throw new Error('Specification already exists!')
        }

        this.specificationRepository.create({
            name,
            description
       }); 
    }

};

export { CreateSpecificationService };