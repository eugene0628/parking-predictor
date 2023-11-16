import { SECRET_NODE_LINK } from '$env/static/private';

export const load = async ({ fetch }) => {

    const fetchSessions = async () => {
        const response = await fetch(`${SECRET_NODE_LINK}/sessions`);
        const data = await response.json();
        return data;
    }

    return {
        sessions: fetchSessions(),
    }

}