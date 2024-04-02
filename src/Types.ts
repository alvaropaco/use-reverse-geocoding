type OpenStreetMapResponse = {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    display_name: string;
    address: {
      house_number?: string;
      road?: string;
      neighbourhood?: string;
      suburb?: string;
      village?: string;
      town?: string;
      city?: string;
      county?: string;
      state?: string;
      postcode?: string;
      country?: string;
      country_code: string;
      [key: string]: any; // Additional properties for flexibility
    };
    boundingbox: string[];
    class?: string;
    type?: string;
    importance?: number;
    place_rank?: number;
    addresstype?: string;
    name?: string;
    [key: string]: any; // Additional properties for future-proofing
  };
  
  export default OpenStreetMapResponse;
  