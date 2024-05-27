import { useEffect, useState } from "react";
import "./scroll.css";
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const FetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);

      setErrorMessage(e.message);
    }
  };
  useEffect(() => {
    FetchData(url);
  }, [url]);

  const HandleScroll = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);
  if (loading) {
    return <div>LOADING....</div>;
  }
  if (errorMessage) {
    return <div>Error..</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>CUSTOM SCROLL INDICATOR</h1>
        <div className="scroll-progress">
          <div
            className="current-progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div>
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};
export default ScrollIndicator;
