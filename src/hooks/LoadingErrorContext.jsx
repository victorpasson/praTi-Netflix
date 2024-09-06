import { createContext, useState } from "react";

export const LoadingErrorContext = createContext();

export const LoadingErrorStorage = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return <LoadingErrorContext.Provider value={[loading, setLoading, error, setError]}>{children}</LoadingErrorContext.Provider>;
}