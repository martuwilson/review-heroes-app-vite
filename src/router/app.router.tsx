import { createBrowserRouter } from "react-router";
import HomePage from '../heroes/pages/home/HomePage';
import AdminPage from "@/admin/pages/AdminPage";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import SearchPage from "@/heroes/pages/search/SearchPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    },
    {
        path: "/hero/1",
        element: <HeroPage />
    },
    {
        path: "/search",
        element: <SearchPage />
    }
])