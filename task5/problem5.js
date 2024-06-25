function fetchData(apiEndpoints) {
    const fetchPromises = [];

    apiEndpoints.forEach(endpoint => {
        const promise = new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json(); 
                })
                .then(data => {
                    resolve({ endpoint: endpoint, data: data });
                })
                .catch(error => {
                    reject(error); 
                });
        });

        fetchPromises.push(promise);
    });

    return Promise.all(fetchPromises);
}
