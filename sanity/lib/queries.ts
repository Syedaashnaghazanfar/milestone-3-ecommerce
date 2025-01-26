import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
*[_type == "product"]{
    _id,
    name,
    description,
    "slugCurrent": slug.current,
    price,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url

}
`);

export const fourproducts = defineQuery(`
    *[_type == "product"][0..7]{
        _id,
        name,
        description,
       "slugCurrent": slug.current,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
    
    }
    `);


