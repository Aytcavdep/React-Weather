export const storage = {
  setItem: (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name) => {
    const item = localStorage.getItem(name) ?? JSON.stringify('Moscow')
    if (item) {
      return JSON.parse(item);
    }
  },
};
