

const postReq = async (endpoint: string, payload: any) => {


    try {

        const response = await fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        
        console.log(response);
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    catch (ex) {
        console.log(ex);
    }

}



export { postReq };