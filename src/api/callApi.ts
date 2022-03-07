import axios from 'axios';
import { TypeStudente } from '../types/types';
import {API_DOMAIN, API_PREFIX, API_REPOS} from '../config/configApi';

export const callApi = async () => {
    let result: any;
    try {
        const { data } = await axios.get(API_DOMAIN + API_PREFIX + API_REPOS);
        result = data;  
        return result;
    } catch (error) {
        if ((axios.isAxiosError(error))) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        } else {
            console.log(error);
            throw error;
        }
    }
}