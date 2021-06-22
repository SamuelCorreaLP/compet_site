import api from "./api";

export async function listMovies (): Promise<any> {
    const res = await axios.get("/movies");
    return res.data;
}