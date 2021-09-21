export async function getCategories() {
  const responseRaw = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await responseRaw.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let responseRaw = [];
  if (categoryId && query) {
    responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  } else if (categoryId) {
    responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else if (query) {
    responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }
  const responseJson = await responseRaw.json();
  return responseJson;
}
