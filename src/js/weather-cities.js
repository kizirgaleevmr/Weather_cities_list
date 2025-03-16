export default class WeatherCities {
    /** @param {array[]} cities */
    constructor(cities) {
        // свойство объекта значение массив с объектами
        this.cities = cities;
    }
    /**
     *
     * @returns {object} - возвращаем первый элемент массива
     */
    getFirst() {
        // your code
        return this.cities.at(0);
    }
    /**
     *
     * @returns {object} - возвращаем последний элемент массива
     */
    getLast() {
        // your code
        return this.cities.at(-1);
    }

    /**
     *
     * @returns {string} - возвращаем строку в виде html разметки
     */
    exportCsv() {
        // your code
        const template = [];

        this.cities.forEach((elem) => {
            template.push(
                `<li>г. ${elem?.location?.name} ${elem?.current?.temperature}` +
                    "&deg;</li>"
            );
        });
        return `<ul>${template.join(" ")}</ul>`;
    }
}
