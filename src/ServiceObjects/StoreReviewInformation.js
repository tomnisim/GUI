
export class StoreReviewInformation  {
    
    
    constructor(data) {
        //private Map<String, Integer> rating;
        this.rating = data.rating;

    }
    
    
    static create(rating) {
        return new StoreReviewInformation({
            rating: rating,

        })

    }
}
