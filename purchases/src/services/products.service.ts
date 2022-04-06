import { Injectable } from "@nestjs/common";
import slugify from "slugify";

import { PrismaService } from "../database/prisma/prisma.service";

interface CreateProductDTO {
  title: string;

} 

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listProducts() {
    return this.prisma.product.findMany();
  }

  getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      }
    })
  }

  async createProduct({ title }: CreateProductDTO) {
    const slug = slugify(title, {
      lower: true,
    });

    const productWithSameSlug = await this.prisma.product.findUnique({
      where: {
        slug,
      }
    })

    if (productWithSameSlug) {
      throw new Error('Another product with same slug already exists.')
    }

    const product = await this.prisma.product.create({
      data: {
        title,
        slug,
      }
    })

    return product;
  }
}