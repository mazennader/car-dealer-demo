const cars = [
    {
      id: 1,
      title: "Porsche 911 Turbo S",
      brand: "Porsche",
      year: 2024,
      price: 245000,
      mileage: "1,200 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "Experience the pinnacle of Porsche engineering with the 911 Turbo S. This masterpiece combines breathtaking performance with everyday usability.",
      images: [
        "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 2,
      title: "Mercedes-Benz S-Class",
      brand: "Mercedes-Benz",
      year: 2024,
      price: 125000,
      mileage: "4,500 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "A luxury sedan built for comfort, class, and smooth driving.",
      images: [
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 3,
      title: "BMW M5 Competition",
      brand: "BMW",
      year: 2023,
      price: 110000,
      mileage: "8,900 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "A powerful sports sedan with luxury interior and strong road presence.",
      images: [
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 4,
      title: "Cadillac Escalade",
      brand: "Cadillac",
      year: 2023,
      price: 98000,
      mileage: "12,000 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "A full-size luxury SUV with bold design, comfort, and strong road presence.",
      images: [
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 5,
      title: "BMW 740i",
      brand: "BMW",
      year: 2022,
      price: 85000,
      mileage: "18,000 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "Elegant executive sedan with premium comfort and modern technology.",
      images: [
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 6,
      title: "Range Rover Sport",
      brand: "Range Rover",
      year: 2023,
      price: 135000,
      mileage: "9,500 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "Luxury SUV with refined interior, smooth drive, and premium off-road capability.",
      images: [
        "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 7,
      title: "Lamborghini Urus",
      brand: "Lamborghini",
      year: 2023,
      price: 245000,
      mileage: "6,000 miles",
      transmission: "Automatic",
      fuel: "Gasoline",
      description: "A super SUV combining Lamborghini performance with everyday practicality.",
      images: [
        "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 8,
      title: "Tesla Model X Plaid",
      brand: "Tesla",
      year: 2024,
      price: 115000,
      mileage: "1,500 miles",
      transmission: "Automatic",
      fuel: "Electric",
      description: "The quickest SUV ever made, the Model X Plaid redefines performance with falcon-wing doors and cutting-edge technology.",
      images: [
        "https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];
  
  function formatPrice(price) {
    return "$" + Number(price).toLocaleString();
  }
  
  function goToDetails(id) {
    window.location.href = `car-details.html?id=${id}`;
  }
  
  /* HOME PAGE */
  const carsGrid = document.getElementById("carsGrid");
  
  if (carsGrid) {
    const searchInput = document.getElementById("searchInput");
    const brandFilter = document.getElementById("brandFilter");
    const carCount = document.getElementById("carCount");
  
    function loadBrands() {
      brandFilter.innerHTML = `<option value="all">All Brands</option>`;
  
      const brands = [...new Set(cars.map(car => car.brand))];
  
      brands.forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
      });
    }
  
    function animateCards() {
      const cards = document.querySelectorAll(".car-card");
  
      cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(18px)";
  
        setTimeout(() => {
          card.style.transition = "0.45s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 80);
      });
    }
  
    function displayCars(list) {
      carsGrid.innerHTML = "";
      carCount.textContent = `${list.length} vehicles available`;
  
      if (list.length === 0) {
        carsGrid.innerHTML = `<p>No cars found.</p>`;
        return;
      }
  
      list.forEach(car => {
        const card = document.createElement("article");
        card.className = "car-card";
        card.tabIndex = 0;
  
        card.innerHTML = `
          <img src="${car.images[0]}" alt="${car.title}">
          <div class="car-info">
            <h3>${car.title}</h3>
            <p class="year">${car.year}</p>
            <div class="car-bottom">
              <p class="price">${formatPrice(car.price)}</p>
              <a href="car-details.html?id=${car.id}" class="details-btn">View Details</a>
            </div>
          </div>
        `;
  
        card.addEventListener("click", () => {
          goToDetails(car.id);
        });
  
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            goToDetails(car.id);
          }
        });
  
        const button = card.querySelector(".details-btn");
        button.addEventListener("click", (e) => {
          e.stopPropagation();
        });
  
        carsGrid.appendChild(card);
      });
  
      animateCards();
    }
  
    function filterCars() {
      const searchValue = searchInput.value.toLowerCase().trim();
      const selectedBrand = brandFilter.value;
  
      const filteredCars = cars.filter(car => {
        const matchesSearch =
          car.title.toLowerCase().includes(searchValue) ||
          car.brand.toLowerCase().includes(searchValue) ||
          car.year.toString().includes(searchValue);
  
        const matchesBrand =
          selectedBrand === "all" || car.brand === selectedBrand;
  
        return matchesSearch && matchesBrand;
      });
  
      displayCars(filteredCars);
    }
  
    searchInput.addEventListener("input", filterCars);
    brandFilter.addEventListener("change", filterCars);
  
    loadBrands();
    displayCars(cars);
  }
  
  /* DETAILS PAGE */
  const carDetails = document.getElementById("carDetails");
  
  if (carDetails) {
    const params = new URLSearchParams(window.location.search);
    const carId = Number(params.get("id"));
    const car = cars.find(item => item.id === carId);
  
    if (!car) {
      carDetails.innerHTML = `<h2>Car not found</h2>`;
    } else {
      carDetails.innerHTML = `
        <div class="details-card">
          <div class="main-image-wrap fade-image">
            <img id="mainCarImage" src="${car.images[0]}" alt="${car.title}">
          </div>
  
          <div class="thumbs">
            ${car.images.map((img, index) => `
              <button class="thumb ${index === 0 ? "active" : ""}" data-img="${img}">
                <img src="${img}" alt="${car.title}">
              </button>
            `).join("")}
          </div>
  
          <div class="details-info">
            <div>
              <h2>${car.title}</h2>
              <p class="details-year">${car.year}</p>
            </div>
            <p class="details-price">${formatPrice(car.price)}</p>
          </div>
  
          <h3 class="section-title">Specifications</h3>
  
          <div class="specs">
            <div>
              <span>Mileage</span>
              <strong>${car.mileage}</strong>
            </div>
            <div>
              <span>Transmission</span>
              <strong>${car.transmission}</strong>
            </div>
            <div>
              <span>Fuel Type</span>
              <strong>${car.fuel}</strong>
            </div>
          </div>
  
          <div class="line"></div>
  
          <h3 class="section-title">Description</h3>
          <p class="description">${car.description}</p>
  
          <div class="details-actions">
            <a class="whatsapp-big" target="_blank" href="https://wa.me/96170123456?text=Hello, I am interested in the ${encodeURIComponent(car.title)}">
              Contact on WhatsApp
            </a>
            <a class="back-btn" href="index.html">Back to Listings</a>
          </div>
        </div>
      `;
  
      const detailsCard = document.querySelector(".details-card");
      detailsCard.style.opacity = "0";
      detailsCard.style.transform = "translateY(18px)";
  
      setTimeout(() => {
        detailsCard.style.transition = "0.45s ease";
        detailsCard.style.opacity = "1";
        detailsCard.style.transform = "translateY(0)";
      }, 80);
  
      document.querySelectorAll(".thumb").forEach(button => {
        button.addEventListener("click", () => {
          const mainImage = document.getElementById("mainCarImage");
  
          mainImage.style.opacity = "0";
  
          setTimeout(() => {
            mainImage.src = button.dataset.img;
            mainImage.style.opacity = "1";
          }, 180);
  
          document.querySelectorAll(".thumb").forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
        });
      });
    }
  }