import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface CarouselProductsProps {
    images: {
        data: {
            id: number;
            attributes : {
                url: string;
            }
        }[]
    }
}

const CarouselProducts = (props : CarouselProductsProps) => {
    const {images} = props;

    return ( 
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.data.map((image) => (
                        <CarouselItem key={image.id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} alt="product" className="rounded-lg"/>
                        </CarouselItem>
                    ))}                    
                </CarouselContent>

                <CarouselPrevious>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </CarouselPrevious>
                <CarouselNext></CarouselNext>
            </Carousel>

        </div>
     );
}
 
export default CarouselProducts;