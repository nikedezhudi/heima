import request from "@/utils/request";

// 获取频道数据的的接口
export const getUserChannels = () => {
  return request({
    method: "GET",
    url: "/v1_0/user/channels",
  });
};

// 获取所有频道数据
export const fetchAllChannels = () => {
  return request({
    method: "GET",
    url: "/v1_0/channels",
  });
};

//添加频道的请求方法
export const fetchAddChannel = (channel) => {
  return request({
    method: "PATCH",
    url: "/v1_0/user/channels",
    data: {
      channels: [channel],
    },
  });
};

//删除用户频道请求方法
export const deleteUserChannel = (channelId) => {
  return request({
    method: "DELETE",
    url: `/v1_0/user/channels/${channelId}`,
  });
};
