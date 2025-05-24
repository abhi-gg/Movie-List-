const API_KEY = '2f6ee27eaf3d4c0077f4373f80db039f';
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        const data = await response.json();
        return data.results || []; // Ensure data.results is always an array
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return []; // Return empty array to prevent crashes
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};
