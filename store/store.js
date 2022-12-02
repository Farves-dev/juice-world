import create from "zustand";

export const useStore = create((set) => ({
  cart: {
    juices: [],
  },

  addJuice: (data) =>
    set((state) => ({
      cart: {
        juices: [...state.cart.juices, data],
      },
    })),

  removeJuice: (index) =>
    set((state) => ({
      cart: {
        juices: state.cart.juices.filter((_, i) => i != index),
      },
    })),

  resetCart: () =>
    set(() => ({
      cart: {
        juices: [],
      },
    })),
}));
