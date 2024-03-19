export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function loadData(key) {
  const data = localStorage.getItem(key)
  if (data) {
    try {
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Error parsing JSON data:", error);
        return null;
    }
  }
  else {
    console.error("No data found in localStorage for key:", key);
    return null;
  }
}