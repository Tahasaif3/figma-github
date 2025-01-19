import { type SchemaTypeDefinition } from 'sanity'
import {productSchema} from "@/sanity/schemaTypes/product"
import { categorySchema } from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema],
}
