import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
})

export default {
  getLevel (id) {
    return apiClient.get(`/level-data/${id}`)
  },
  addLevel (id) {
    return apiClient.post("/level-data/", `${id}`)
  },
  removeLevel (id) {
    return apiClient.delete(`/level-data/${id}`)
  },
  updateLevel (data) {
    apiClient.delete(`/level-data/${data.id}`)
    return apiClient.post("/level-data", data)
  }
}
