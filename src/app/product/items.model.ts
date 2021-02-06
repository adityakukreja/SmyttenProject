export class ItemModel {
    store : number;
    product : ProductModel[];
    sort_type : number;
    total_count : number;
}

export class ProductModel {
                name: string;
                id: string;
                sku: string;
                rating: number;
                quantity: number;
                price: number;
                discount: number;
                mrp: number;
                size: string;
                color: string;
                shade: string;
                material: string;
                share_url: string;
                rate_count: number;
                brand_name: string;
                image_url: string;
                variant_count: number;
                offer_text: string;
                color_code: string;
                color_image: number;
                discover_sku: number;
}

export class StoreModel{
            name: string;
            id: number
            icon: string;
            status: number;
            offer_text: string;
}