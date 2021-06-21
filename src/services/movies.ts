import api from "./api";

export async function listMovies (): Promise<any> {
    const res = await api.get("/movies");
    return res.data;
}