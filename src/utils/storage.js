// 封装快速获取和设置本地存储的方法

// 获取数据的方法
export function getLocal (key) {
  let data = localStorage.getItem(key)

  try {
    data = JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
  return data
}

export function setLocal (key, data) {
  localStorage.setItem(
    key,
    typeof data === 'object' ? JSON.stringify(data) : data
  )
}
