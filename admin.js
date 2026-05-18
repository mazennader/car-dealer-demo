let cars = JSON.parse(localStorage.getItem("demoCars")) || [];

const carForm = document.getElementById("carForm");
const adminCarsList = document.getElementById("adminCarsList");
const submitBtn = document.getElementById("submitBtn");

function saveCars() {
  localStorage.setItem("demoCars", JSON.stringify(cars));
}

function displayAdminCars() {
  adminCarsList.innerHTML = "";

  if (cars.length === 0) {
    adminCarsList.innerHTML = "<p>No cars added yet.</p>";
    return;
  }

  cars.forEach(car => {
    const item = document.createElement("div");
    item.className = "admin-car-item";

    item.innerHTML = `
      <img src="${car.image}" alt="${car.title}">
      <div>
        <h3>${car.title}</h3>
        <p>${car.year} • ${car.brand} • $${Number(car.price).toLocaleString()}</p>
      </div>
      <div class="admin-actions">
        <button class="edit-btn" onclick="editCar(${car.id})">Edit</button>
        <button class="delete-btn" onclick="deleteCar(${car.id})">Delete</button>
      </div>
    `;

    adminCarsList.appendChild(item);
  });
}

carForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const carId = document.getElementById("carId").value;

  const carData = {
    id: carId ? Number(carId) : Date.now(),
    title: document.getElementById("title").value,
    brand: document.getElementById("brand").value,
    year: document.getElementById("year").value,
    price: document.getElementById("price").value,
    mileage: document.getElementById("mileage").value,
    transmission: document.getElementById("transmission").value,
    fuel: document.getElementById("fuel").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value
  };

  if (carId) {
    cars = cars.map(car => car.id === Number(carId) ? carData : car);
    submitBtn.textContent = "Add Car";
  } else {
    cars.push(carData);
  }

  saveCars();
  displayAdminCars();
  carForm.reset();
  document.getElementById("carId").value = "";
});

function editCar(id) {
  const car = cars.find(car => car.id === id);

  document.getElementById("carId").value = car.id;
  document.getElementById("title").value = car.title;
  document.getElementById("brand").value = car.brand;
  document.getElementById("year").value = car.year;
  document.getElementById("price").value = car.price;
  document.getElementById("mileage").value = car.mileage;
  document.getElementById("transmission").value = car.transmission;
  document.getElementById("fuel").value = car.fuel;
  document.getElementById("image").value = car.image;
  document.getElementById("description").value = car.description;

  submitBtn.textContent = "Save Changes";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteCar(id) {
  cars = cars.filter(car => car.id !== id);
  saveCars();
  displayAdminCars();
}

displayAdminCars();