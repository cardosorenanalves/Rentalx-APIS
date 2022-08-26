import { parse as csvParse } from "csv-parse";

import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory{
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository ){}

    

    async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        const categories: IImportCategory[] = []
      
        const stream = fs.createReadStream(file.path)
      
        const parseFile = csvParse()
      
        stream.pipe(parseFile)
      
        for await (const chunk of parseFile) {
          const [name, description] = chunk
      
          categories.push({ name, description })
        }
      
        return categories
      }


    async execute(file: Express.Multer.File): Promise<void>{
     const categories = await this.loadCategories(file)
     
     categories.map(async (category) => {
        const { name, description } = category;

        const existCategory = this.categoriesRepository.findByName(name);

        if(!existCategory){
            this.categoriesRepository.create({
                name,
                description
            })
        }
     })
    }
}
export { ImportCategoryUseCase }
