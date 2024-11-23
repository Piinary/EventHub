
import axios, { AxiosResponse } from "axios";
import { PinataSDK } from "pinata-web3";

interface Event {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    EndDate: Date;
    address: string;
    image: string;
}
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false
});
export const getEvents = async (): Promise<Event[]> => {
    console.log(process.env.REACT_APP_PINATA_GATEWAY);
    const res: AxiosResponse<Event[]> = await axiosInstance.get<Event[]>('/event');
    return res.data;
}