let flag= 0;
let flag2=0;
let flag3= 0;
let flag4=0;
let flag5= 0;

const form = document.getElementById("form");
const username = document.getElementById("username");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const quantity = document.getElementById("quantity");
const postalcode = document.getElementById("postal-code");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const addressValue = address.value.trim();
  const phoneValue = phone.value.trim();
  const quantityValue = quantity.value.trim();
  const postalcodeValue = postalcode.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank");
    flag=0;
  } else {
    //add success class
    setSuccessFor(username);
    flag=1;
  }

  if (phoneValue.startsWith('62') && isNaN(phoneValue) == false) {
    setSuccessFor(phone);
    flag2=1;
  } else  if (phoneValue === "") {
    setErrorFor(phone, "Phone number cannot be blank");
    flag2=0;
  }else{
    setErrorFor(phone, "Phone number must start with 62");
    flag2=0;
  }


  if (addressValue.startsWith('Jl.') || addressValue.startsWith('Jalan')) {
    setSuccessFor(address);
    flag3=1;
  } else if(addressValue === "") {
    setErrorFor(address, "Address cannot be blank");
    flag3=0;
  }else{
    setErrorFor(address, "Address must start with Jl. or Jalan");
    flag3=0;
  }

  if (quantityValue <= 0 ||  quantityValue > 100) {
    setErrorFor(quantity, "Quantity must between 1 - 100");
    flag4=0;
  } else {
    setSuccessFor(quantity);
    flag4=1;
  }

  if(postalcodeValue.length !== 6 || isNaN(postalcodeValue) === true){
    setErrorFor(postalcode, "Postal code must contain 6 digit number");
    flag5=0;
  }else{
    setSuccessFor(postalcode);
    flag5=1;
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";

}

function setSuccessFor(input) {
  const formContol = input.parentElement;
  formContol.className = "form-control success";
}

const imageCount = $(".images").length;
const imageWidth = $(".images").width();
const imageHeight = $(".images").height();
const totalWidth = imageCount * imageWidth;

$("#image-slider").css({
  width: imageWidth,
  height: imageHeight,
});
$("#slider").css({
  width: totalWidth,
  marginLeft: -imageWidth,
});

$(".images:last-child").prependTo("#slider");

$("#prev").click(() => {
  $("#slider").animate(
    {
      left: imageWidth,
    },
    2000,
    () => {
      $(".images:last-child").prependTo("#slider");
      $("#slider").css("left", "");
    }
  );
});

$("#next").click(() => {
  $("#slider").animate(
    {
      left: -imageWidth,
    },
    2000,
    () => {
      $(".images:first-child").appendTo("#slider");
      $("#slider").css("left", "");
    }
  );
});

function SubmitForm(form) {
 
  if(flag === 1 && flag2===1 && flag3===1 && flag4===1 && flag5===1){
    flag=0;
    flag2=0;
    flag3= 0;
    flag4=0;
    flag5= 0;

    var x = prompt(
      'Are you sure about this purchase?\nType "CONFIRM" to Continue!'
    );
    if (x == "CONFIRM") {
      alert("Item purchased successfully, Thank You for your purchase!");
    } else {
      alert("Failed Order!");
    }
  }
}
