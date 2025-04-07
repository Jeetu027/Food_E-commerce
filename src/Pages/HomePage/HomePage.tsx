import { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import FoodItems from "../../Components/FoodItems/FoodItems";
import LearnMore from "../../Components/LearnMore/LearnMore";
import Inbox from "../../Components/Inbox/Inbox";

const HomePage = () => {
  const [items, setItems] = useState<
    {
      id?: string;
      name: string;
      description: string;
      type: string;
      time: string;
      category_id: string;
      created_by: string;
      nutrition_id?: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/foods");
        const result = await response.json();
        console.log(result);
        setItems(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* ✅ Only render if items are available */}
      {items.length > 0 ? <p>{JSON.stringify(items)}</p> : <p>Loading...</p>}

      <Slider />
      <Categories />
      <FoodItems />
      <LearnMore />
      <Inbox />
    </div>
  );
};

export default HomePage;
