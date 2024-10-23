import http from "k6/http";
import { sleep } from "k6";

const API_ENDPOINT = "http://localhost:56932";

export const options = {
  stages: [
    { duration: "10s", target: 200 },
    { duration: "60s", target: 400 },
    { duration: "30s", target: 200 },
    { duration: "10s", target: 0 },
  ],
};

export default function () {
  http.get(API_ENDPOINT);
  sleep(1);
}
