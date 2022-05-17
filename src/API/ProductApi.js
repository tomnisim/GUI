import axios from "axios";
import {EMPLOYEE_BASE_REST_API_URL,  FIND_PRODUCT_INFORMATION, FIND_PRODUCTS_BY_NAME, FIND_PRODUCTS_BY_CATEGORY,FIND_PRODUCTS_BY_KEYWORDS 
    ,ADD_PRODUCT_TO_CART, EDIT_PRODUCT_QUANTITY_IN_CART,REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT_REVIEW, RATE_PRODUCT, EDIT_PRODUCT_NAME, EDIT_PRODUCT_PRICE, EDIT_PRODUCT_CATEGORY, EDIT_PRODUCT_KEY_WORDS} from "./ApiPaths";
import { Response } from "./Response";
import { Product } from "../ServiceObjects/Product";
const instance = axios.create(
    {withCredentials : true}
);



export class ProductApi {
    testtttt(product_id) {
        return instance.post(EMPLOYEE_BASE_REST_API_URL, 
            {
                product_id: product_id,
            })
            .then(res => {
                console.log("this is the answer\n\n"+res.data)
                return new Response(res.data)
            })
            .catch(res => console.log("fuckkkkk\n\n"));
    }
    find_product_information(product_id) {
        return instance.post(FIND_PRODUCT_INFORMATION, 
            {
                product_id: product_id,
            })
            .then(res => {
                let response = res.data;
                let product_info = new Product(response.value);
                return reponse_obj.create(product_info, response.message);
            })
            .catch(res => undefined);
    }
    find_product_by_name(product_name) {
        return instance.post(FIND_PRODUCTS_BY_NAME,
            {
                product_name: product_name,
            })
            .then(res => {
                let response = res.data;
                //traverse the products and create product for each element on the list
                //create response with the list of products
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    find_product_by_category(product_category) {
        return instance.post(FIND_PRODUCTS_BY_CATEGORY,
            {
                product_category: product_category,
            })
            .then(res => {
                //traverse the products and create product for each element on the list
                //create response with the list of products
                return new Response(res.data)
            })
            .catch(res => undefined);
    }
    find_product_by_keywords(product_keywords) {
        return instance.post(FIND_PRODUCTS_BY_KEYWORDS,
            {
                product_keywords: product_keywords,
            })
            .then(res => {
                //traverse the products and create product for each element on the list
                //create response with the list of products
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    add_product_to_cart(store_id, product_id, quantity) {
        return instance.post(ADD_PRODUCT_TO_CART,
            {
                store_id: store_id,
                product_id: product_id,
                quantity: quantity,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    edit_product_quantity_in_cart(store_id, product_id, quantity) {
        return instance.post(EDIT_PRODUCT_QUANTITY_IN_CART,
            {
                store_id: store_id,
                product_id: product_id,
                quantity: quantity,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    remove_product_from_cart(store_id, product_id) {
        return instance.post(REMOVE_PRODUCT_FROM_CART,
            {
                store_id: store_id,
                product_id: product_id,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }
    

    add_product_review(product_id, store_id, review) {
        return instance.post(ADD_PRODUCT_REVIEW,
            {
                product_id: product_id,
                store_id: store_id,
                review : review,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    rate_product(product_id, store_id, rate) {
        return instance.post(RATE_PRODUCT,
            {
                product_id: product_id,
                store_id: store_id,
                rate : rate,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    edit_product_name(product_id, store_id, name) {
        return instance.post(EDIT_PRODUCT_NAME,
            {
                product_id: product_id,
                store_id: store_id,
                name : name,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    edit_product_price(product_id, store_id, price) {
        return instance.post(EDIT_PRODUCT_PRICE,
            {
                product_id: product_id,
                store_id: store_id,
                price : price,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }
    edit_product_category(product_id, store_id, category) {
        return instance.post(EDIT_PRODUCT_CATEGORY,
            {
                product_id: product_id,
                store_id: store_id,
                category : category,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }
    edit_product_key_words(product_id, store_id, key_words) {
        return instance.post(EDIT_PRODUCT_KEY_WORDS,
            {
                product_id: product_id,
                store_id: store_id,
                key_words : key_words,
            })
            .then(res => {
                return new Response(res.data)
            })
            .catch(res => undefined);
    }

    
    
    
   
}