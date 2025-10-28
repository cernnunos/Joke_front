export async function postAPI(question, response) {
    try {
        const res = await fetch("https://joke-back.onrender.com/api/v1/blagues/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, response }),
        })
        const responseData = await res.json()
        return responseData
    } catch (error) {
        const responseData = {
            error: {
                message: "Mauvais lien ou serveur non atteignable",
            }
        };
        return responseData;

    }
}

export async function getAPI(link) {

    try {
        const res = await fetch(`https://joke-back.onrender.com/api/v1/blagues/${link}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const responseData = await res.json()
        return responseData
    } catch (error) {
        const responseData = {
            error: {
                message: "Mauvais lien ou serveur non atteignable",
            }
        };
        return responseData;
    }
}

export async function getAPIById(number) {
    try {
        const res = await fetch(`https://joke-back.onrender.com/api/v1/blagues/${number}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        const responseData = await res.json()
        return responseData
    } catch (error) {
        const responseData = {
            error: {
                message: "Mauvais lien ou serveur non atteignable",
            }
        };
        return responseData;
    }
}

export default { postAPI, getAPI, getAPIById }