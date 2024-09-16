import { defineStore } from "pinia";

export const useserviceStore = defineStore("service", {
  /**
   * The state of the service store. This contains an array of objects, each
   * representing a service. The objects have an `id`, `name`, and `price`
   * property.
   *
   * @typedef {Object} Service
   * @property {number} id - The id of the service
   * @property {string} name - The name of the service
   * @property {number} price - The price of the service
   *
   * @type {Service[]}
   */
  state: () => ({
    services: [
      {
        id: 1,
        name: "Service 1",
        price: 100,
      },
      {
        id: 2,
        name: "Service 2",
        price: 200,
      },
      {
        id: 3,
        name: "Service 3",
        price: 300,
      },
      {
        id: 4,
        name: "Service 4",
        price: 400,
      },
      {
        id: 5,
        name: "Service 5",
        price: 500,
      },
      {
        id: 6,
        name: "Service 6",
        price: 600,
      },
      {
        id: 7,
        name: "Service 7",
        price: 700,
      },
      {
        id: 8,
        name: "Service 8",
        price: 800,
      },
      {
        id: 9,
        name: "Service 9",
        price: 900,
      },
      {
        id: 10,
        name: "Service 10",
        price: 1000,
      },
    ],
  }),

  actions: {
    /**
     * Adds a service to the list of services.
     *
     * @param {Service} service - The service to add
     */
    addService(service) {
      this.services.push(service);
    },
  },

  getters: {
    ourServices: (state) => {
      return state.services[0].name + state.services[1].name;
    },
  },
});
