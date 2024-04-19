export const createCityElements = (cityName) => {
  const citySpan = document.createElement("span");
  citySpan.classList.add("citySpan");
  citySpan.textContent = cityName;

  const cityDeleteBtn = document.createElement("button");
  cityDeleteBtn.classList.add("deleteCityBtn");
  cityDeleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;

  cityDeleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    citySpan.remove();

    let cities = JSON.parse(localStorage.getItem("cities")) || [];
    let cityIndex = cities.indexOf(cityName);
    if (cityIndex !== -1) {
      cities.splice(cityIndex, 1);
      localStorage.setItem("cities", JSON.stringify(cities));
    }
  });

  citySpan.appendChild(cityDeleteBtn);

  return citySpan;
};
