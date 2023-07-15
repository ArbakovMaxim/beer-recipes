import { v4 as uuidv4 } from "uuid";
import {
  ButtonBeer,
  ImageBeer,
  ItemBeer,
  ListBeer,
  Wraper,
  WraperCard,
  WrapperImageBeer,
} from "./Beer.styled";
import { getBeer } from "../service/Api";
import { useEffect, useState } from "react";
import { useBeerStore } from "../state/beerState";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Beer = () => {
  const beers = useBeerStore((state) => state.beers);
  const setBeer = useBeerStore((state) => state.setBeer);
  const removeItems = useBeerStore((state) => state.removeItems);
  const [fifteen, setFifteen] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [deleteId, setDeleteId] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBeer = async (n) => {
      const beer = await getBeer(n);
      setBeer(beer);
    };

    if (beers.length === 0) {
      fetchBeer(page);
    } else if (beers.length >= 15) {
      const firstFifteen = beers.slice(0, 15);
      setFifteen(firstFifteen);
      setVisibleItems(firstFifteen.slice(0, 5));
    } else {
      setPage((prevPage) => prevPage + 1);
      fetchBeer(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beers]);

  //Ленивая загрузка
  const loadMoreItems = () => {
    const currentIndex = visibleItems.length;
    const endIndex = currentIndex + 5;
    const nextItems = fifteen.slice(currentIndex, endIndex);

    setVisibleItems((prevItems) => [...prevItems, ...nextItems]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isScrolledToBottom && visibleItems.length < fifteen.length) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleItems, fifteen.length, fifteen]);

  // Функция, для сохранения или удаления id из массива удаления
  function toggleIdForDelete(id) {
    const index = deleteId.indexOf(id);
    if (index !== -1) {
      const updatedArray = [...deleteId];
      updatedArray.splice(index, 1);
      setDeleteId(updatedArray);
    } else {
      setDeleteId([...deleteId, id]);
    }
  }

  // Удаления рецептов
  const handleRemoveItems = (deleteId) => {
    if (deleteId.length === 0) {
      toast.error("Не чего не выбрано");
    } else {
      removeItems(deleteId);
      setDeleteId([]);
    }
  };

  return (
    <Wraper>
      {deleteId.length > 0 ? (
        <ButtonBeer
          onClick={() => {
            handleRemoveItems(deleteId);
          }}
        >
          Удалить рецепт
        </ButtonBeer>
      ) : null}
      {visibleItems.map((beer) => (
        <WraperCard
          isSelected={deleteId.includes(beer.id)}
          key={beer.id}
          onClick={() => {
            navigate(`/${beer.id}`);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            toggleIdForDelete(beer.id);
          }}
        >
          <WrapperImageBeer>
            <ImageBeer src={beer.image_url} alt="beer img" />
          </WrapperImageBeer>
          <ListBeer key={beer.id}>
            <ItemBeer>Name: {beer.name}</ItemBeer>
            <ItemBeer>Tagline: {beer.tagline}</ItemBeer>
            <ItemBeer>First brewed: {beer.first_brewed}</ItemBeer>
            <ItemBeer>Description: {beer.description}</ItemBeer>
            <ItemBeer>Yeast: {beer.ingredients.yeast}</ItemBeer>
            <ItemBeer>
              Food pairing:
              <ul key={uuidv4()}>
                {beer.food_pairing.map((item) => (
                  <ItemBeer key={uuidv4()}>{item}</ItemBeer>
                ))}
              </ul>
            </ItemBeer>
            <ItemBeer>Brewers tips: {beer.brewers_tips}</ItemBeer>
          </ListBeer>
        </WraperCard>
      ))}
    </Wraper>
  );
};

export default Beer;
