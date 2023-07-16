import { useBeerStore } from "../../state/beerState";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import {
  ImageBeer,
  ItemBeer,
  ItemIngridient,
  List,
  NavigationLink,
  Span,
  Title,
  Wraper,
  WraperCard,
} from "./BeerInfo.styled";

const BeerInfo = () => {
  const beers = useBeerStore((state) => state.beers);
  const { ID } = useParams();
  const id = parseInt(ID);

  let beer = beers.find((beer) => beer.id === id);

  // сохранения в sessionStorage рецепта
  if (!beer) {
    beer = JSON.parse(sessionStorage.getItem("saveBeer"));
  } else {
    sessionStorage.setItem("saveBeer", JSON.stringify(beer));
  }

  //Удаление <>
  const cleanedContributedBy = beer.contributed_by.replace(/<[^>]+>/g, "");

  return (
    <Wraper>
      <Title>{beer.name}</Title>
      <NavigationLink to="/">Назад</NavigationLink>
      <WraperCard>
        <ImageBeer src={beer.image_url} alt="beer img" />
        <ul>
          <ItemBeer>
            <Span>Name:</Span> {beer.name}
          </ItemBeer>
          <ItemBeer>
            <Span>Tagline:</Span> {beer.tagline}
          </ItemBeer>
          <ItemBeer>
            <Span>First brewed:</Span> {beer.first_brewed}
          </ItemBeer>
          <ItemBeer>
            <Span>Description:</Span> {beer.description}
          </ItemBeer>
          <ItemBeer>
            <Span>Abv:</Span> {beer.abv}
          </ItemBeer>
          <ItemBeer>
            <Span>Ibu:</Span> {beer.ibu}
          </ItemBeer>
          <ItemBeer>
            <Span>Target fg:</Span> {beer.target_fg}
          </ItemBeer>
          <ItemBeer>
            <Span>Target og:</Span> {beer.target_og}
          </ItemBeer>
          <ItemBeer>
            <Span>Ebc:</Span> {beer.ebc}
          </ItemBeer>
          <ItemBeer>
            <Span>Srm:</Span> {beer.srm}
          </ItemBeer>
          <ItemBeer>
            <Span>Ph:</Span> {beer.ph}
          </ItemBeer>
          <ItemBeer>
            <Span>Attenuation level:</Span> {beer.attenuation_level}
          </ItemBeer>
          <ItemBeer>
            <Span>Volume:</Span>
            <List key={uuidv4()}>
              <ItemBeer>
                <Span>Value:</Span> {beer.volume.value}
              </ItemBeer>
              <ItemIngridient>
                <Span>Unit:</Span> {beer.volume.unit}
              </ItemIngridient>
            </List>
          </ItemBeer>
          <ItemBeer>
            <Span>Boil volume:</Span>
            <List key={uuidv4()}>
              <ItemBeer>
                <Span>Value:</Span> {beer.boil_volume.value}
              </ItemBeer>
              <ItemIngridient>
                <Span>Unit:</Span> {beer.boil_volume.unit}
              </ItemIngridient>
            </List>
          </ItemBeer>
          <ItemBeer>
            <Span>Method:</Span>
            {beer.method.mash_temp.map((mashtemp) => (
              <List key={uuidv4()}>
                <ItemBeer>
                  <Span>Value:</Span> {mashtemp.temp.value}
                </ItemBeer>
                <ItemIngridient>
                  <Span>Unit:</Span> {mashtemp.temp.unit}
                </ItemIngridient>
                <ItemBeer>
                  <Span>Duration:</Span> {mashtemp.duration}
                </ItemBeer>
              </List>
            ))}
          </ItemBeer>
          <ItemBeer>
            <Span>Fermentation:</Span>
            <List key={uuidv4()}>
              <ItemBeer>
                <Span>Value:</Span> {beer.method.fermentation.temp.value}
              </ItemBeer>
              <ItemIngridient>
                <Span>Unit:</Span> {beer.method.fermentation.temp.unit}
              </ItemIngridient>
            </List>
          </ItemBeer>
          <ItemBeer>
            <Span>Malt:</Span>
            {beer.ingredients.malt.map((malt) => (
              <List key={uuidv4()}>
                <ItemBeer>
                  <Span>Name:</Span> {malt.name}
                </ItemBeer>
                <ItemIngridient>
                  <Span>Amount:</Span> {malt.amount.value}
                  {malt.amount.unit}
                </ItemIngridient>
              </List>
            ))}
          </ItemBeer>
          <ItemBeer>
            <Span>Hops:</Span>
            {beer.ingredients.hops.map((hops) => (
              <List key={uuidv4()}>
                <ItemBeer>
                  <Span>Name:</Span> {hops.name}
                </ItemBeer>
                <ItemIngridient>
                  <Span>Amount:</Span> {hops.amount.value}
                  {hops.amount.unit}
                </ItemIngridient>
                <ItemIngridient>
                  <Span>Add:</Span> {hops.add}
                </ItemIngridient>
                <ItemIngridient>
                  <Span>Attribute:</Span> {hops.attribute}
                </ItemIngridient>
              </List>
            ))}
          </ItemBeer>
          <ItemBeer>
            <Span>Yeast:</Span> {beer.ingredients.yeast}
          </ItemBeer>
          <ItemBeer>
            <Span>Food pairing:</Span>
            <List key={uuidv4()}>
              {beer.food_pairing.map((item) => (
                <ItemBeer key={uuidv4()}>{item}</ItemBeer>
              ))}
            </List>
          </ItemBeer>
          <ItemBeer>
            <Span>Brewers tips:</Span> {beer.brewers_tips}
          </ItemBeer>
          <ItemBeer>
            <Span>Contributed by:</Span> {cleanedContributedBy}
          </ItemBeer>
        </ul>
      </WraperCard>
    </Wraper>
  );
};

export default BeerInfo;
