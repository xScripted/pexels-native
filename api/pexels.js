import axios from "axios";

//563492ad6f91700001000001ac82a3086197484b82e0f9369979e527

export const getImages = async(searchTerm = 'programming') => 
    await axios.get('https://api.pexels.com/v1/search?query=' + searchTerm, {
        headers: {
            Authorization: '563492ad6f91700001000001ac82a3086197484b82e0f9369979e527'
        }
    });