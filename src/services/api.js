export async function getCategories() {
  const responseRaw = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await responseRaw.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const responseJson = await responseRaw.json();
  return responseJson;
}
