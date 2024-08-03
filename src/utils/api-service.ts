import axios from "axios";

export const ApiService = {
  authenticateUser: async function (authData: any) {
    const { data } = await axios.post(`/api/user/`, authData);
    return data;
  },
  getFrameById: async function (frameId: string) {
    const { data } = await axios.get(`/api/create/${frameId}`);
    return data;
  },
  fetchFramesByCurrentUser: async function () {
    const { data } = await axios.get(`/api/create`);
    return data;
  },

  getUserByFid: async function (fid: string) {
    const { data } = await axios.get(`/api/user/${fid}`);
    return data;
  },

  getFramesPerCollective: async function () {
    const { data } = await axios.get(`/api/leaderboard`);
    return data;
  },
};
