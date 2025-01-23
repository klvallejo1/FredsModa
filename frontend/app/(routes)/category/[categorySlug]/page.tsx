"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "./components/filters-controls-category"

export default function Page() {

    const params = useParams()
    const { categorySlug } = params

    const {result, loading} : ResponseType = useGetCategoryProduct(categorySlug)
    const router = useRouter()

    console.log(result)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">Ropa {result[0].attributes.category.data.attributes.categoryName}</h1>
            )}

            <Separator className="sm:flex sm:justify-between">
                <FiltersControlsCategory>
                </FiltersControlsCategory>

                <div>
                    
                </div>

            </Separator>

        </div>
    )
}