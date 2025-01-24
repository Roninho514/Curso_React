
// 4 - custom hook

import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando o post

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);


    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers : {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data)
            });

            setMethod(method)
        }
    }

    useEffect(() => {
        setLoading(true);
        const httpRequest = async() => {
            let json

            if(method === "POST"){
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);
                json = await res.json();
            }
            setCallFetch(json);
            setLoading(false);
        }

        httpRequest();
    }, [config, method, url])

    
    return {data, httpConfig, loading};

}