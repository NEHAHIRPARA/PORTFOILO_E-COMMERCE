// Function to toggle the up menu into down 

// Get all dropdown toggle buttons
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Loop through each dropdown toggle button
dropdownToggles.forEach(function (dropdownToggle) {
  // Add click event listener to each dropdown toggle button
  dropdownToggle.addEventListener('mouseover', function () {
    // Get the icon element within the clicked dropdown toggle button
    let icon = this.querySelector('i');
    // Get the dropdown menu associated with the clicked dropdown toggle button
    let dropdownMenu = this.nextElementSibling;

    // Toggle the icon class based on the presence of the 'show' class on the dropdown menu
    if (dropdownMenu.classList.contains('show')) {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    } else {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    }

    // Update icons of other dropdown toggle buttons
    dropdownToggles.forEach(function (otherDropdownToggle) {
      if (otherDropdownToggle !== dropdownToggle) {
        let otherIcon = otherDropdownToggle.querySelector('i');
        otherIcon.classList.remove('fa-chevron-up');
        otherIcon.classList.add('fa-chevron-down');
      }
    });
  });
});


// humburger

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function closemenu() {
  let closemenu = document.getElementById("close")
  closemenu.style.display = "none";
}

// cart
function togglecart() {
  var cartMenu = document.getElementById("open");
  cartMenu.style.display = (cartMenu.style.display === "block") ? "none" : "block";
}

function closecart() {
  var cartMenu = document.getElementById("open");
  cartMenu.style.display = "none";

}


// textile

// JavaScript code to handle button clicks
document.addEventListener('DOMContentLoaded', function () {
  // Get all dropdown buttons
  var dropdownButtons = document.querySelectorAll('.dropdown-button');

  // Add click event listener to each dropdown button
  dropdownButtons.forEach(function (button) {
    button.addEventListener('mouseover', function () {
      // Get the ID of the corresponding dropdown
      var dropdownId = this.id;

      // Toggle visibility of all dropdowns
      var dropdowns = document.querySelectorAll('.kakel_right_list');
      dropdowns.forEach(function (dropdown) {
        if (dropdown.id === dropdownId) {
          dropdown.style.display = 'block';
        } else {
          dropdown.style.display = 'none';
        }
      });
    });
  });
});

// whishlist

// JavaScript code to handle heart icon click
document.addEventListener('DOMContentLoaded', function () {
  // Get all heart icons
  var heartIcons = document.querySelectorAll('.fa-heart');

  // Add click event listener to each heart icon
  heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener('click', function () {
      // Toggle the classes to change the heart icon style
      if (heartIcon.classList.contains('far')) {
        // If it's currently empty heart, change to solid heart
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
      } else {
        // If it's currently solid heart, change to empty heart
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
      }
    });
  });
});


// utomhus

// change image

// Get the button and image elements
const button = document.getElementById('utomhus');
const image = document.getElementById('homeImage');

// Define the original and hover image paths
const originalImagePath = 'Assest/Image/inspiration/home.svg';
const hoverImagePath = 'Assest/Image/inspiration/utomhus.svg';

// Add event listeners for mouseenter and mouseleave
document.getElementById('utomhus').addEventListener('mouseenter', function () {
  // Change the image source to the hover image path
  image.src = hoverImagePath;
});

document.getElementById('utomhus').addEventListener('mouseleave', function () {
  // Change the image source back to the original image path
  image.src = originalImagePath;
});


// image change on hover

// Get references to the buttons and images
const buttons = document.querySelectorAll('.inspiration_btn');
const images = document.querySelectorAll('.btnimg');
const homeImage = document.getElementById('homeImage');

// Loop through each button
buttons.forEach((button, index) => {
  // Add event listener for mouseenter event
  button.addEventListener('mouseenter', () => {
    // Hide all images
    images.forEach(image => image.style.display = 'none');
    // Show the corresponding image based on index + 1
    images[index].style.display = 'block';
    // Hide the home image
    homeImage.style.display = 'none';
  });

  // Add event listener for mouseleave event
  button.addEventListener('mouseleave', () => {
    // Hide the corresponding image when mouse leaves the button
    images[index].style.display = 'none';
    // Show the home image
    homeImage.style.display = 'block';
  });
});







function modalimg() {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var images = document.querySelectorAll(".modal-trigger");
  var caption1 = document.getElementById("caption1");
  var caption2 = document.getElementById("caption2");
  var caption3 = document.getElementById("caption3");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.dataset.src;


      caption1.innerText = "";
      caption2.innerText = "";
      caption3.innerText = "";
      caption3.style.display = "none";

      if (this.dataset.caption1) {
        caption1.innerText = this.dataset.caption1;
      }
      if (this.dataset.caption2) {
        caption2.innerText = this.dataset.caption2;
      }


      if (img.classList.contains('im2') && this.dataset.caption3) {
        caption3.style.display = "block";
        caption3.innerText = this.dataset.caption3;
      }


    });
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

modalimg();

function plus_minus() {
  // Get DOM elements
  var btnMinus = document.querySelector(".btn-minus");
  var btnPlus = document.querySelector(".btn-plus");
  var quantityInput = document.querySelector(".quantity-input");

  // Add event listeners
  btnMinus.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = (currentValue - 1).toString();
    }
  });

  // btnPlus.addEventListener("click", function () {
  //   var currentValue = parseInt(quantityInput.value);
  //   console.log(currentValue);
  //   quantityInput.value = (currentValue + 1).toString();
  // });


}




function popupinfo(contentId) {
  var dropdownContent1 = document.querySelector(".dropdown-content1");
  var dropdownContent2 = document.querySelector(".dropdown-content2");

  if (contentId === 'dropdown-content1') {
    dropdownContent1.style.display = dropdownContent1.style.display === "block" ? "none" : "block";
    dropdownContent2.style.display = "none"; // Close dropdown 2
  } else if (contentId === 'dropdown-content2') {
    dropdownContent2.style.display = dropdownContent2.style.display === "block" ? "none" : "block";
    dropdownContent1.style.display = "none"; // Close dropdown 1
  }
}

// Close dropdowns when clicking outside of them
document.body.addEventListener("click", function () {
  var dropdownContent1 = document.querySelector(".dropdown-content1");
  var dropdownContent2 = document.querySelector(".dropdown-content2");

  dropdownContent1.style.display = "none";
  dropdownContent2.style.display = "none";
});


// open and close productInfoPopup

function togglePopup() {
  var popup = document.getElementById("productInfoPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block"; // Toggle the popup
}


function formatDate(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day} ${month} ${year} ${hours}:${minutes}`;
}

function updateDateTime() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  document.getElementById('datetime').textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime()


// account

function toggleSection(sectionId) {

  var sections = document.querySelectorAll('.Allt_right > .Allt_list');
  sections.forEach(function (section) {

    if (section.id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

function navigateToPage(pageUrl, button) {
  // Remove active class from all buttons
  document.querySelectorAll('.account_btn_list button').forEach(function(btn) {
      btn.classList.remove('active');
  });
  // Add active class to the clicked button
  button.classList.add('active');
  // Navigate to the specified page
  window.location.href = pageUrl;
}

// Check the current page URL and apply active class to the corresponding button
document.addEventListener("DOMContentLoaded", function() {
  var currentPageUrl = window.location.href;
  var buttons = document.querySelectorAll('.account_btn_list button');
  buttons.forEach(function(btn) {
      if (currentPageUrl.includes(btn.getAttribute('onclick').split("'")[1])) {
          btn.classList.add('active');
      }
  });
});

function toggleContent(dropdownId) {
  var contentBox = document.getElementById("contentBox" + dropdownId);
  var plusSign = document.getElementById("plusSign" + dropdownId);
  var closeSign = document.getElementById("closeSign" + dropdownId);

  contentBox.classList.toggle("open");
  plusSign.style.display = contentBox.classList.contains("open") ? "none" : "inline";
  closeSign.style.display = contentBox.classList.contains("open") ? "inline" : "none";
}























