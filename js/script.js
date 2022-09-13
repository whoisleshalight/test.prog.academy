
const inpPriceBs = document.getElementById("inp_one");
const inpPriceDolls = document.querySelector(".input-dollar");
inpPriceDolls.addEventListener("change", calc);
inpPriceBs.addEventListener("change", calc);
function calc() {
	const inpPriceB = document.getElementById("inp_one");
	const inpPriceDoll = document.querySelector(".input-dollar");
	const result = document.querySelector(".test__result-item");
	const inpPriceBLength = +inpPriceB.value;
	const inpPriceDollLength = inpPriceDoll.value;
	result.innerHTML = +inpPriceDollLength / +inpPriceBLength;
}

