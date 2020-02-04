export function addToCartRequest(id) {
  return {
    type: '@carrinho/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@carrinho/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@carrinho/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@carrinho/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@carrinho/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
