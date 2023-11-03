import { json, error } from '@sveltejs/kit';
import { SECRET_FLASK_LINK, SECRET_NODE_LINK } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const endpoint = `${SECRET_NODE_LINK}/predict`
    const dataPackage = await request.json()

    // return json({garage1:{expected_occupancy:500}, garage2:{expected_occupancy:400}, garage3:{expected_occupancy:300}});
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(json({garage1:{expected_occupancy:30}, garage2:{expected_occupancy:129}, garage3:{expected_occupancy:2}}))
        }, 2000)
    })
    // const response = await fetch(endpoint, {
    //     method: "POST",
    //     headers: {
    //         "Content-type":"application/json",
    //     },
    //     body: JSON.stringify({ inputs })
    // })
    // if (response.ok) {
    //     const data = await response.json();
    //     return json(data);
    // } else {
    //     throw new Error("Failed to fulfill POST request to express.js predict API.")
    // }
}

