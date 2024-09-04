// Tambahkan event listener untuk scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  // Jika halaman di-scroll lebih dari 50px, tambahkan kelas shadow-header
  if (window.scrollY > 50) {
    header.classList.add("shadow-header");
  } else {
    // Jika tidak, hapus kelas shadow-header
    header.classList.remove("shadow-header");
  }
});

// <=========================>
// Dropdown Destinasi Start
function destinationDropdown() {
  const dropdown = document.getElementById("destinationDropmenu");
  const icon = document.getElementById("dropdownIcon");

  dropdown.classList.toggle("hidden");
  icon.style.transform = dropdown.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
}

// Menutup dropdown dan memutar kembali ikon menjadi semula ketika klik di luar dropdown
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("destinationDropmenu");
  const button = document.querySelector('a[onclick="destinationDropdown()"]');

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
    document.getElementById("dropdownIcon").style.transform = "rotate(0deg)";
  }
});
//   Dropdown Destinasi End
// <=========================>

// <=========================>
//   Dropdown Destinasi Mobile Start
function mobileDestinationDropdown() {
  const submenu = document.getElementById("mobileDestinationSubmenu");
  const icon = document.getElementById("mobileDropdownIcon");

  submenu.classList.toggle("hidden");
  icon.style.transform = submenu.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
}
//   Dropdown Destinasi Mobile End
// <=========================>

// <=========================>
//   Popup Search Start
const searchButton = document.getElementById("searchButton");
const searchPopup = document.getElementById("searchPopup");

searchButton.addEventListener("click", () => {
  searchPopup.classList.toggle("hidden");
});

searchPopup.addEventListener("click", (e) => {
  if (e.target === searchPopup) {
    searchPopup.classList.add("hidden");
  }
});
//   Popup Search End
// <=========================>

// <=========================>
// Hamburger Start
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("hamburgerButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = mobileMenuButton.querySelector(".hamburger-icon");
  const closeIcon = mobileMenuButton.querySelector(".close-icon");

  // Toggle Mobile Menu
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("opacity-0");
    closeIcon.classList.toggle("opacity-0");
    mobileMenuButton.querySelector("svg").classList.toggle("rotate-90");
  });
});
//   Hamburger End
// <=========================>

// Tab Switch
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Sembunyikan semua konten tab
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hidden");
  }

  // Hapus kelas aktif dari semua tombol tab
  tablinks = document.getElementsByTagName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("bg-gray-200", "text-primary");
  }

  // Tampilkan konten tab yang dipilih
  document.getElementById(tabName).classList.remove("hidden");

  // Tambahkan kelas aktif pada tombol yang diklik
  evt.currentTarget.classList.add("bg-gray-200", "text-primary");
}

const cardsPerPage = 12;
let currentPage = 1;
const cardContainer = document.querySelector(".card-container");
const cards = Array.from(cardContainer.children);
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Pagination
function createPagination() {
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "flex justify-center mt-8";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = `px-3 py-1 rounded mx-1 ${
      i === currentPage
        ? "bg-primary text-white-new"
        : "bg-gray-200 text-gray-700"
    }`;
    button.addEventListener("click", () => {
      currentPage = i;
      showPage(currentPage);
      updatePaginationButtons();
    });
    paginationContainer.appendChild(button);
  }

  cardContainer.parentNode.insertBefore(
    paginationContainer,
    cardContainer.nextSibling
  );
}

function updatePaginationButtons() {
  const buttons = document.querySelectorAll(".flex.justify-center.mt-8 button");
  buttons.forEach((button, index) => {
    const page = index + 1;
    button.className = `px-3 py-1 rounded-lg mx-1 ${
      page === currentPage
        ? "bg-primary text-white-new"
        : "bg-gray-200 text-gray-700"
    }`;
  });
}

// Inisialisasi
showPage(currentPage);
createPagination();

// <=========================>
// Search Data Start
function searchResults(query) {
  // Contoh data yang akan dicari (dapat diubah menjadi API atau database)
  const data = [
    {
      title: "Ayam Goreng Sulawesi",
      image: "../../../public/img/ayam-goreng-sulawesi.jpg",
      url: "./ayam-goreng-sulawesi.html",
    },
    {
      title: "Baju Bodo",
      image: "../../../public/img/baju-bodo.jpg",
      url: "./baju-bodo.html",
    },
    {
      title: "Baju Pokko",
      image: "../../../public/img/pokko.jpg",
      url: "./baju-pokko.html",
    },
    {
      title: "Baju Seppa Tallung",
      image: "../../../public/img/seppa-tallung.jpg",
      url: "./baju-seppa-tallung.html",
    },
    {
      title: "Cahaya Oleh-Oleh",
      image: "../../../public/img/cahaya-oleh-oleh.jpg",
      url: "./cahaya-oleh-oleh.html",
    },
    {
      title: "Claro Hotel",
      image: "../../../public/img/claro-hotel-makassar.jpg",
      url: "./claro-hotel.html",
    },
    {
      title: "Coto Daeng Sirua",
      image: "../../../public/img/coto-daeng-sirua.jpeg",
      url: "./coto-daeng-sirua.html",
    },
    {
      title: "Coto Nusantara",
      image: "../../../public/img/coto-makassar.jpg",
      url: "./coto-nusantara.html",
    },
    {
      title: "Donald Mee",
      image: "../../../public/img/donald-mee.jpg",
      url: "./donald-mee.html",
    },
    {
      title: "Gammara Hotel",
      image: "../../../public/img/gammara-hotel.jpg",
      url: "./gammara-hotel.html",
    },
    {
      title: "Grand Mall Maros",
      image: "../../../public/img/grand-mall-maros.jpg",
      url: "./grand-mall-maros.html",
    },
    {
      title: "Grind and Pull",
      image: "../../../public/img/grind-and-pull.JPG",
      url: "./grind-and-pull.html",
    },
    {
      title: "Gumuk Pasir Sumalu",
      image: "../../../public/img/gumuk-pasir-sumalu.jpg",
      url: "./gumuk-pasir-sumalu.html",
    },
    {
      title: "Gunung Bawakaraeng",
      image: "../../../public/img/gunung-bawakaraeng.jpg",
      url: "./gunung-bawakaraeng.html",
    },
    {
      title: "Gunung Bulusaraung",
      image: "../../../public/img/gunung-bulusaraung.jpg",
      url: "./gunung-bulusaraung.html",
    },
    {
      title: "Hutan Pinus Malino",
      image: "../../../public/img/hutan-pinus-malino.jpg",
      url: "./hutan-pinus-malino.html",
    },
    {
      title: "Jas Tutu'",
      image: "../../../public/img/baju-bodo.jpg",
      url: "./jas-tutu.html",
    },
    {
      title: "Katto Bokko",
      image: "../../../public/img/katto-bokko.JPG",
      url: "./katto-bokko.html",
    },
    {
      title: "Kopi Konnichiwa",
      image: "../../../public/img/kopi-konnichiwa.png",
      url: "./kopi-konnichiwa.html",
    },
    {
      title: "KOZI Coffee",
      image: "../../../public/img/kozi-coffee.jpg",
      url: "./kozi-coffee.html",
    },
    {
      title: "Lappa Laona",
      image: "../../../public/img/lappa-laona.jpg",
      url: "./lappa-laona.html",
    },
    {
      title: "Losari Beach Hotel",
      image: "../../../public/img/losari-beach-hotel.jpg",
      url: "./losari-beach-hotel.html",
    },
    {
      title: "Mall Panakkukang",
      image: "../../../public/img/mall-panakkukang.jpg",
      url: "./mall-panakkukang.html",
    },
    {
      title: "Mall Ratu Indah",
      image: "../../../public/img/mall-ratu-indah.jpg",
      url: "./mall-ratu-indah.html",
    },
    {
      title: "Maudu Lompoa",
      image: "../../../public/img/maudu-lompoa.jpg",
      url: "./maudu-lompoa.html",
    },
    {
      title: "Museum Balla Lompoa",
      image: "../../../public/img/museum-balla-lompoa.jpg",
      url: "./museum-balla-lompoa.html",
    },
    {
      title: "Museum Kota Makassar",
      image: "../../../public/img/museum-kota-makassar.jpg",
      url: "./museum-kota-makassar.html",
    },
    {
      title: "Museum La Galigo",
      image: "../../../public/img/museum-la-galigo.jpeg",
      url: "./museum-la-galigo.html",
    },
    {
      title: "Nipah Mall",
      image: "../../../public/img/nipah-mall.jpg",
      url: "./nipah-mall.html",
    },
    {
      title: "Novotel Hotel",
      image: "../../../public/img/novotel-hotel-makassar.jpg",
      url: "./novotel-hotel.html",
    },
    {
      title: "Paduppa Resort",
      image: "../../../public/img/paduppa-resort.jpg",
      url: "./paduppa-resort.html",
    },
    {
      title: "Pallubasa Serigala",
      image: "../../../public/img/pallubasa-serigala.jpg",
      url: "./pallubasa-serigala.html",
    },
    {
      title: "Pantai Apparalang",
      image: "../../../public/img/pantai-apparalang.jpg",
      url: "./pantai-apparalang.html",
    },
    {
      title: "Pantai Bara",
      image: "../../../public/img/pantai-bara.jpg",
      url: "./pantai-bara.html",
    },
    {
      title: "Pantai Losari",
      image: "../../../public/img/pantai-losari.jpg",
      url: "./pantai-losari.html",
    },
    {
      title: "Pegunungan Latimojong",
      image: "../../../public/img/pegunungan-latimojong.jpg",
      url: "./pegunungan-latimojong.html",
    },
    {
      title: "Phinisi Hotel Bira",
      image: "../../../public/img/phinisi-hostel-bira.jpg",
      url: "./phinisi-hostel-bira.html",
    },
    {
      title: "Phinisi Point",
      image: "../../../public/img/phinisi-point.jpg",
      url: "./phinisi-point.html",
    },
    {
      title: "Pod House Losari",
      image: "../../../public/img/pod-house-losari.jpg",
      url: "./pod-house-losari.html",
    },
    {
      title: "Pulau Gusung",
      image: "../../../public/img/pulau-gusung.jpeg",
      url: "./pulau-gusung.html",
    },
    {
      title: "Pulau Kapoposang",
      image: "../../../public/img/pulau-kapoposang.jpg",
      url: "./pulau-kapoposang.html",
    },
    {
      title: "Pulau Samalona",
      image: "../../../public/img/pulau-samalona.jpg",
      url: "./pulau-samalona.html",
    },
    {
      title: "Rammang-Rammang",
      image: "../../../public/img/rammang-rammang.jpg",
      url: "./rammang-rammang.html",
    },
    {
      title: "Ratu Gurih Seafood",
      image: "../../../public/img/ratu-gurih.jpg",
      url: "./ratu-gurih-seafood.html",
    },
    {
      title: "Renjana Beach House",
      image: "../../../public/img/renjana-beach-house.jpg",
      url: "./renjana-beach-house.html",
    },
    {
      title: "Rumah Adat Balla",
      image: "../../../public/img/museum-balla-lompoa.jpg",
      url: "./rumah-adat-balla.html",
    },
    {
      title: "Rumah Adat Saoraja",
      image: "../../../public/img/rumah-adat-bugis.jpg",
      url: "./rumah-adat-saoraja.html",
    },
    {
      title: "Rumah Adat Tongkonan",
      image: "../../../public/img/rumah-adat-tongkonan.jpg",
      url: "./rumah-adat-tongkonan.html",
    },
    {
      title: "Rumah Kopi Setia",
      image: "../../../public/img/kopi-setia.jpg",
      url: "./rumah-kopi-setia.html",
    },
    {
      title: "Sop Konro Karebosi",
      image: "../../../public/img/sop-konro-karebosi.jpg",
      url: "./sop-konro-karebosi.html",
    },
    {
      title: "Sop Saudara",
      image: "../../../public/img/sop-saudara.jpg",
      url: "./sop-saudara.html",
    },
    {
      title: "Tanjung Bira",
      image: "../../../public/img/tanjung-bira.jpg",
      url: "./tanjung-bira.html",
    },
    {
      title: "Tebing Romantis Ollon",
      image: "../../../public/img/tebing-romantis-ollon.jpg",
      url: "./tebing-romantis-ollon.html",
    },
    {
      title: "The Library Coffee",
      image: "../../../public/img/the-library-coffee.jpg",
      url: "./the-library-coffee.html",
    },
    {
      title: "The Rinra Hotel",
      image: "../../../public/img/the-rinra.jpg",
      url: "./the-rinra.html",
    },
    {
      title: "Toko Oleh-Oleh Kota Daeng",
      image: "../../../public/img/toko-oleh-oleh-kota-daeng.jpg",
      url: "./toko-oleh-oleh-kota-daeng.html",
    },
    {
      title: "Toko Serba Ole-Ole",
      image: "../../../public/img/toko-serba-ole-ole.jpeg",
      url: "./toko-serba-ole-ole.html",
    },
    {
      title: "Trans Studio Mall",
      image: "../../../public/img/trans-studio-mall.jpg",
      url: "./trans-studio-mall.html",
    },
    {
      title: "Upacara Rambu Solo",
      image: "../../../public/img/upacara-rambu-solo.jpg",
      url: "./upacara-rambu-solo.html",
    },
  ];

  // Filter data berdasarkan kata kunci
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Tampilkan hasil pencarian
  const searchResultsElement = document.getElementById("search-results");
  searchResultsElement.innerHTML = "";

  // Tambahkan event untuk menghapus konten hasil pencarian saat input search kosong
  if (query.trim() === "") {
    searchResultsElement.style.display = "none";
  } else {
    searchResultsElement.style.display = "block";
    filteredData.forEach((item) => {
      const resultElement = document.createElement("div");
      resultElement.classList.add(
        "bg-white",
        "border",
        "rounded",
        "p-3",
        "cursor-pointer",
        "flex",
        "items-center",
        "gap-4",
        "mt-4",
        "text-sm"
      );

      // Tambahkan event listener untuk mengklik item hasil pencarian
      resultElement.addEventListener("click", () => {
        window.location.href = item.url;
      });

      // Tambahkan gambar dan deskripsi ke dalam item hasil pencarian
      const imageElement = document.createElement("img");
      imageElement.src = item.image;
      imageElement.alt = item.title; // Menggunakan title karena tidak ada deskripsi
      imageElement.classList.add("w-20", "h-16", "object-cover", "rounded");

      const titleElement = document.createElement("p");
      titleElement.textContent = item.title;

      resultElement.appendChild(imageElement);
      resultElement.appendChild(titleElement);

      searchResultsElement.appendChild(resultElement);
    });
  }
}

document.querySelectorAll(".search-result").forEach((element) => {
  element.classList.add("search-result");
});
// Search Data End
// <=========================>
