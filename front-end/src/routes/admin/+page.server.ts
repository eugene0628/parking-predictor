import { SECRET_NODE_LINK } from '$env/static/private';
import { json, error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {

    const fetchSessions = async () => {
        const response = await fetch(`${SECRET_NODE_LINK}/sessions`);
        const data = await response.json();
        // const data = [
        //     {
        //         UID: 1,
        //         createdAt: "2023-11-02 18:28:45",
        //         USER: 1,
        //         rec_garage: "TEMP",
        //         rec_avail_1: 390,
        //         rec_travel_time_1: 3,
        //         rec_avail_2: 390,
        //         rec_travel_time_2: 3,
        //         rec_avail_3: 390,
        //         rec_travel_time_3: 3,
        //     },
        //     {
        //         UID: 1,
        //         createdAt: "2023-11-02 18:28:45",
        //         USER: 1,
        //         rec_garage: "TEMP",
        //         rec_avail_1: 390,
        //         rec_travel_time_1: 3,
        //         rec_avail_2: 390,
        //         rec_travel_time_2: 3,
        //         rec_avail_3: 390,
        //         rec_travel_time_3: 3,
        //     },
        // ];
        return data;
    }

    return {
        sessions: fetchSessions(),
    }

}