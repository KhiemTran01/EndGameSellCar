document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("sortPrice");
  const productContainer = document.querySelector(".row.mt-4");
  const productCards = Array.from(productContainer.children);

  select.addEventListener("change", function () {
    const value = select.value;

    if (value === "default") {
      window.location.reload();
      return;
    }

    const sortedCards = productCards.sort((a, b) => {
      const priceA = extractPrice(a);
      const priceB = extractPrice(b);

      return value === "asc" ? priceA - priceB : priceB - priceA;
    });

    productContainer.innerHTML = "";

    sortedCards.forEach((card) => {
      productContainer.appendChild(card);
    });
  });

  function extractPrice(card) {
    const priceText = card.querySelector(
      ".card-body .row .col:last-child"
    ).textContent;
    const number = parseInt(priceText.replace(/\D/g, ""), 10);
    return isNaN(number) ? 0 : number;
  }
});
