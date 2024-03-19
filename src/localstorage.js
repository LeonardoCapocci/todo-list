export function saveData(key, data) {
  console.log("SAVING DATA!")
  console.log(data)
  localStorage.setItem(key, JSON.stringify(data))
}

export function loadData(key) {
  console.log("LOADING DATA!")
  const data = localStorage.getItem(key)
  console.log(data)
  return data ? JSON.parse(data) : null
}