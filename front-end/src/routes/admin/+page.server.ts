import { SECRET_NODE_LINK } from '$env/static/private';

export const load = async ({ fetch }) => {

    const fetchSessions = async () => {
        const response = await fetch(`${SECRET_NODE_LINK}/sessions`);
        if (response.ok) {
            const data = await response.json();
            const filteredData = data.map(({rec_garage, ...rest}) => rest);
            return filteredData;
        } else {
            throw new Error("Failed to obtain sessions table from Svelte.")
        }
    }

    return {
        sessions: fetchSessions(),
    }

}