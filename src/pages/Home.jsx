import { v4 as uuidv4 } from "uuid";
import { Wraper } from "./Home.styled";
import { getBeer } from "../service/Api";
import { useEffect, useState } from "react";
import { useBeerStore } from "../state/beerState";

const Home = () => {
  const beerss = useBeerStore((state) => state.beerss);
  const setBeer = useBeerStore((state) => state.setBeer);
  const removeItems = useBeerStore((state) => state.removeItems);
  const [fifteen, setFifteen] = useState([]);
  const [page, setPage] = useState(1);

  const handleRemoveItems = (ids) => {
    removeItems(ids);
  };

  useEffect(() => {
    const fetchBeer = async (n) => {
      const beer = await getBeer(n);
      setBeer(beer);
    };

    if (beerss.length === 0) {
      fetchBeer(page);
    } else if (beerss.length >= 15) {
      const firstFifteen = beerss.slice(0, 15);
      setFifteen(firstFifteen);
    } else {
      setPage((prevPage) => prevPage + 1);
      fetchBeer(page);
    }

    console.log(beerss.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beerss]);

  console.log(beerss);

  return (
    <Wraper>
      <h1>Home</h1>
      <button
        onClick={() => {
          handleRemoveItems([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ]);
        }}
      >
        тест удаления
      </button>
      {fifteen.map((beer) => (
        <ul key={beer.id}>
          <li>
            <img src={beer.image_url} alt="beer img" />
          </li>
          <li>name: {beer.name}</li>
          <li>tagline: {beer.tagline}</li>
          <li>first brewed: {beer.first_brewed}</li>
          <li>description: {beer.description}</li>
          <li>
            malt:
            {beer.ingredients.malt.map((malt) => (
              <ul key={uuidv4()}>
                <li>name: {malt.name}</li>
                <li>
                  amount: {malt.amount.value}
                  {malt.amount.unit}
                </li>
              </ul>
            ))}
          </li>
          <li>
            hops:
            {beer.ingredients.hops.map((hops) => (
              <ul key={uuidv4()}>
                <li>name: {hops.name}</li>
                <li>
                  amount: {hops.amount.value}
                  {hops.amount.unit}
                </li>
                <li>add: {hops.add}</li>
                <li>attribute: {hops.attribute}</li>
              </ul>
            ))}
          </li>
          <li>yeast: {beer.ingredients.yeast}</li>
          <li>
            food pairing:
            <ul key={uuidv4()}>
              {beer.food_pairing.map((item) => (
                <li key={uuidv4()}>{item}</li>
              ))}
            </ul>
          </li>
          <li>brewers tips: {beer.brewers_tips}</li>
          <li>contributed by: {beer.contributed_by}</li>
        </ul>
      ))}
    </Wraper>
  );
};

export default Home;
