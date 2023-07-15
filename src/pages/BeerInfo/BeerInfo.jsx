import { useBeerStore } from "../../state/beerState";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useParams } from "react-router-dom";
import { NavigationLink, Wraper } from "./BeerInfo.styled";

const BeerInfo = () => {
  const beers = useBeerStore((state) => state.beers);
  const { ID } = useParams();
  const id = parseInt(ID);

  const beer = beers.find((beer) => beer.id === id);

  if (!beer) {
    return <Navigate to="/" replace />;
  }

  //Удаление <>
  const cleanedContributedBy = beer.contributed_by.replace(/<[^>]+>/g, "");

  return (
    <Wraper>
      <h1>beer</h1>
      <NavigationLink to="/">Назад</NavigationLink>
      <ul>
        <li>
          <img src={beer.image_url} alt="beer img" />
        </li>
        <li>name: {beer.name}</li>
        <li>tagline: {beer.tagline}</li>
        <li>first brewed: {beer.first_brewed}</li>
        <li>description: {beer.description}</li>
        <li>abv: {beer.abv}</li>
        <li>ibu: {beer.ibu}</li>
        <li>target fg: {beer.target_fg}</li>
        <li>target og: {beer.target_og}</li>
        <li>ebc: {beer.ebc}</li>
        <li>srm: {beer.srm}</li>
        <li>ph: {beer.ph}</li>
        <li>attenuation level: {beer.attenuation_level}</li>
        <li>
          volume:
          <ul key={uuidv4()}>
            <li>value: {beer.volume.value}</li>
            <li>unit: {beer.volume.unit}</li>
          </ul>
        </li>
        <li>
          boil volume:
          <ul key={uuidv4()}>
            <li>value: {beer.boil_volume.value}</li>
            <li>unit: {beer.boil_volume.unit}</li>
          </ul>
        </li>
        <li>
          method:
          {beer.method.mash_temp.map((mashtemp) => (
            <ul key={uuidv4()}>
              <li>value: {mashtemp.temp.value}</li>
              <li>unit: {mashtemp.temp.unit}</li>
              <li>duration: {mashtemp.duration}</li>
            </ul>
          ))}
        </li>
        <li>
          fermentation:
          <ul key={uuidv4()}>
            <li>value: {beer.method.fermentation.temp.value}</li>
            <li>unit: {beer.method.fermentation.temp.unit}</li>
          </ul>
        </li>
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
        <li>contributed by: {cleanedContributedBy}</li>
      </ul>
    </Wraper>
  );
};

export default BeerInfo;
