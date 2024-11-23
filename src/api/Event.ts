import axios from "axios";
import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTUzZmU3MC03ZWFhLTQ0ZDUtOTc4Mi00Y2I3OGIzNjU5MzgiLCJlbWFpbCI6InBodXF1aXZvMDMuY2JAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjkxNjdjYmUzYjU2YzA1MDk4YjU2Iiwic2NvcGVkS2V5U2VjcmV0IjoiODZlNzc5ZmRjZGQ5MGU0NzdlNTJmZTliNTVhZTcwZGM4MjhkMGIxMGY4YjY2YjQwZTgxYzAyYTcwMzlmMmE3YyIsImV4cCI6MTc2MzQzMTU3Nn0.Yzm2zz33PKgWO1hmT1DZfYofdlP74svoiFIfSeb7n4k
`,
  pinataGateway: `crimson-eldest-pike-581.mypinata.cloud`,
});
export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  address: string;

}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});


export const getEvents = async (): Promise<Event[]> => {
  return (await axiosInstance.get<Event[]>("/event")).data;
  //   return data;
};
