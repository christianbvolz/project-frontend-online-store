export async function getCategories() {
  const responseRaw = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await responseRaw.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let responseRaw = [];
  if (categoryId && query) {
    console.log('1');
    responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  } else if (categoryId) {
    console.log('2');
    responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else if (query) {
    console.log('3');
    responseRaw = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }
  const responseJson = await responseRaw.json();
  return responseJson;
}
