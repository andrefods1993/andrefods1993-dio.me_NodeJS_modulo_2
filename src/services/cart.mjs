/* 
 * Ações que o carrinho de compras pode realizar:
    
    ✔️ -> Adicionar item
    ✔️ -> Remover item
    ✔️ -> Atualizar quantidade
    ✔️ -> Calcular total
	✔️ -> Visualizar carrinho

*/

// Função para adicionar um item ao carrinho
async function addItemToCart(userCart, item) {
	userCart.push(item); // Adiciona o item ao array do carrinho
}

// Função para remover um item do carrinho
async function removeItemFromCart(userCart, item) {
	const index = userCart.indexOf(item); // Encontra o índice do item no carrinho
	if (index !== -1) {
		userCart.splice(index, 1); // Remove o item se ele for encontrado
	}
}

// Função para atualizar a quantidade de um item no carrinho
async function updateItemQuantity(userCart, item, newQuantity) {
	if (newQuantity <= 0) {
		removeItemFromCart(userCart, item); // Remove o item se a nova quantidade for menor ou igual a zero
	} else {
		userCart[userCart.indexOf(item)].quantity = newQuantity; // Atualiza a quantidade do item no carrinho
	}
}

// Função para visualizar o conteúdo do carrinho
async function viewCart(userCart) {
	console.log("🛒 Your Cart:");
	userCart.forEach((item) => {
		console.log(
			`${item.name} - Quantity: ${item.quantity} - Unit price: R$ ${item.price.toFixed(
				2
			)} - Subtotal Brute: R$ ${item.subtotalBrute.toFixed(2)}`
		);
		console.log(
			`💸Discount: ${item.discountPercentage}% / R$ ${item.totalDiscount.toFixed(
				2
			)} - 💲Subtotal: R$ ${item.subtotal.toFixed(2)}\n`
		);
	});
}

// Função para calcular o total do carrinho
async function calculateTotal(userCart) {
	console.log("\n💰 Shopee Cart TOTAL IS:");
	const discountTotal = userCart.reduce((total, item) => total + item.totalDiscount, 0); // Calcula o total de descontos
	console.log(`💸Total Discount: R$ ${discountTotal.toFixed(2)}`);
	const result = userCart.reduce((total, item) => total + item.subtotal, 0); // Calcula o total após descontos
	console.log(`💲Total: R$ ${result.toFixed(2)}\n`);
}

// Exporta as funções para manipulação do carrinho
export { addItemToCart, removeItemFromCart, updateItemQuantity, calculateTotal, viewCart };
