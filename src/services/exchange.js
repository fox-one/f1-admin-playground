import request from "@/utils/request";
import constants from '../constants';

export async function getAssets(){
    return request(`${constants.adminHost}/exchange/market/assets`,{
        method: 'GET'
    })
}