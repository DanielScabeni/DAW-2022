import { useContext } from "react";
import { ImovelContext } from "../context/ImovelContext";

export function useImovel() {
    const context = useContext(ImovelContext);
    return context;
}