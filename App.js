const reg = /^(\+\d{3}|[0-9])\d{10}$/;

const telcos = new Map([
	[
		[
			"0803",
			"0806",
			"0814",
			"0810",
			"0813",
			"0814",
			"0816",
			"0703",
			"0706",
			"0903",
			"0906",
			"0704",
			"0916",
			"0913",
			"0702",
		],
		"MTN",
	],
	[["0905", "0705", "0815", "0811", "0807", "0805", "0915"], "GLO"],
	[
		[
			"0802",
			"0808",
			"0812",
			"0708",
			"0701",
			"0902",
			"0901",
			"0912",
			"0904",
			"0907",
		],
		"Airtel",
	],
	[["0909", "0809", "0817", "0818", "0908"], "etisalat"],
]);

const toCheck = "+2348060330819";

function networkValidate(number, network) {
	for (const [key, value] of network) {
		for (const prefix of key) {
			let sliceNumber = number.slice(0, 4);
			if (number.startsWith("+234")) sliceNumber = "0" + number.slice(4, 7);
			if (sliceNumber === prefix) {
				return value;
			}
		}
	}
}

const phoneNumber = document.querySelector("#phone_number");
phoneNumber.addEventListener("keyup", (event) => {
	validate(event.target, reg);
});

const setImage = document.querySelector(".logo");
const error = document.querySelector(".error");

const validate = (e_target, regex) => {
	setImage.src = "";
	if (regex.test(e_target.value)) {
		let networkType = networkValidate(e_target.value, telcos);
		if (networkType) {
			switch (networkType) {
				case "MTN":
					setImage.src = "/logos/MTN.jpg";
					break;
				case "etisalat":
					setImage.src = "/logos/9mobile.svg";
					break;
				case "Airtel":
					setImage.src = "/logos/airtel.svg";
					break;
				case "GLO":
					setImage.src = "/logos/glo.svg";
					break;
			}
		}
	}
	// error.className = "error";
};



// function validatePassword() {
// 	let inputValue = $("#password").val();
// 	let pass = new RegExp("^(?=.*[A-Z])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{8,16}$")
// 	if (!pass.test < 8) {
// 		$("#error").text("password must contain at least 8 characters")
// 		return true;}
// 		else if (!pass.test(/^[A-Z]/) < 0) {
// 		$("#error").text("Your password must start with uppercase");
// 		return true;
// 	}
// 	else if (!pass.test(/[!@#$%^&*.]/) < 0) {
// 		$("#error").test("Your password must contain special characters");
// 		return true;}
// 	else {
// 		$("#error").text("");
// 		return false;}

// }

let Error = document.querySelector("#error");
let checkPassword = function(str)
{
	let re = /^(?=.*[A-Z])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]\w{8,}$/;
	return re.test(str);
};
  function checkForm(form)
{
	if (this.amount.value == "") {
		Error.text("Amount cannot be blank!");
		FormData.username.focus();
		return false;
	}
	else if (!re.test(/^[A-Z]/) < 0) {
		Error.text("password must start with capital letter");
		FormData.password.focus();
		return false;
	}
	else if (!re.test(/[!@#$%^&*.]/) < 0) {
		Error.text("password must contain special character");
		FormData.password.focus();
		return false;
	}
	else {
		Error.text("password must contain number");
		FormData.password.focus();
		return false;
	}
	return true;
}
