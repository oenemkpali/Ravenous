const apiKey = '0yYdi5huxxPouJ7HB5865HgDW9wp7Zdsxso4uXWAdhmOZpINWhhyEUsE6Xz0ttU4Hw7DHdkayDq63oiVXlsblovY5pDKWLYS8InNUA5VZQd16UCBezxoo1Dqd4U1X3Yx'

const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
          }).then((jsonResponse) => {
              if(jsonResponse.businesses){
                  return jsonResponse.businesses.map(business => {
                      console.log(business);
                      return {
                          id: business.id,
                          imageSrc: business.image_url,
                          name: business.name,
                          address: business.location.address1,
                          city: business.location.city,
                          state: business.location.state,
                          zipCode: business.location.zip_code,
                          category: business.categories[0].title,
                          rating: business.rating,
                          reviewCount: business.review_count,
                      };
                  })
              }
          })
    }
};

export default Yelp;