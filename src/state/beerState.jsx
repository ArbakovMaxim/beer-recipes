import { create } from "zustand";

export const useBeerStore = create((set) => ({
  beers: [],
  setBeer: (newBeer) => {
    set((state) => {
      // Проверяем, отличаются ли новые данные от текущих данных в состоянии
      if (JSON.stringify(state.beers) === JSON.stringify(newBeer)) {
        return state; // Если данные идентичны, возвращаем текущее состояние без изменений
      } else {
        return { beers: [...state.beers, ...newBeer] }; // Если данные отличаются, обновляем состояние с новыми данными
      }
    });
  },
  removeItems: (ids) => {
    set((state) => ({
      beers: state.beers.filter((item) => !ids.includes(item.id)),
    }));
  },
}));
