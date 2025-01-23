export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('es-EC', {
        style: "currency", 
        currency: "USD"
    })
    
    return priceFormated.format(price)
 }