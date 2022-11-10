const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Maya's Kitchen Corner`;
  }, [title]);
};

export default useTitle;
