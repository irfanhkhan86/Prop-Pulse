const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all
async function fetchProperties() {
    try {

        // handle when domain isnt available yet

        if (!apiDomain) {
            return [];
        
        }
      const res = await fetch(`${apiDomain}/properties`);
      console.log('Data from API: ', JSON.stringify(res,null,2));
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
      return res.json();
    } catch (error) {
      console.log(error);
      return [];
      
  }
  }
  
// Fetch single

async function fetchProperty(id) {
    try {

        // handle when domain isnt available yet

        if (!apiDomain) {
            return null;
        
        }
      const res = await fetch(`${apiDomain}/properties/${id}`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
      
  }
  }

  export { fetchProperties, fetchProperty };