import { create } from "zustand";

export const useBeerStore = create((set) => ({
  beerss: [],
  setBeer: (newBeer) => {
    set((state) => {
      // Проверяем, отличаются ли новые данные от текущих данных в состоянии
      if (JSON.stringify(state.beerss) === JSON.stringify(newBeer)) {
        return state; // Если данные идентичны, возвращаем текущее состояние без изменений
      } else {
        return { beerss: [...state.beerss, ...newBeer] }; // Если данные отличаются, обновляем состояние с новыми данными
      }
    });
  },
  removeItems: (ids) => {
    set((state) => ({
      beerss: state.beerss.filter((item) => !ids.includes(item.id)),
    }));
  },
}));
