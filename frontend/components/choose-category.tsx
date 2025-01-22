"use client";
import { useGetCategories } from '@/api/getProducts';
import { CategoryType } from '@/types/category';
import { ResponseType } from '@/types/response';
import Link from 'next/link';

const ChooseCategory = () => {
    const { result, loading, error }: ResponseType = useGetCategories();
    console.log(result);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!result || !Array.isArray(result) || result.length === 0) {
        return <p>No categories found.</p>;
    }

    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoria favorita</h3>

            <div className='grid gap-5 sm:grid-cols-3'>
                {result.map((category: CategoryType) => {
                    const { attributes, id } = category;
                    if (!attributes) return null; // Verificación de attributes

                    const { slug, mainImage, categoryName } = attributes;
                    if (!mainImage || !mainImage.data || !mainImage.data.attributes) return null; // Verificación de mainImage

                    return (
                        <Link key={id} href={`/category/${slug}`} 
                            className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${mainImage.data.attributes.url}`} alt={categoryName} 
                                className='max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110'/>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseCategory;