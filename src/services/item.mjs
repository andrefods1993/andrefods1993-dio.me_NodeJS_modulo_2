/* 
 *  Ações que o item pode está realizando dentro do carrinho

    ✔️ -> Criar item (nome, preço, quantidade), calculando o total
	✔️ -> Calcular o total do item (subtotal)
	✔️ -> Calcular desconto (se houver)
*/

// Função assíncrona para criar um item com nome, preço, quantidade e percentual de desconto (opcional)
async function createItem(name, price, quantity, discountPercentage = 0) {
	return {
		// Propriedades do item
		name,
		price,
		quantity,
		discountPercentage,
		// Getter para calcular o subtotal bruto (sem descontos)
		get subtotalBrute() {
			return calculateItemTotal(this.price, this.quantity);
		},
		// Getter para calcular o total de desconto
		get totalDiscount() {
			return calculateDiscount(this.price, this.quantity, this.discountPercentage);
		},
		// Getter para calcular o subtotal (após descontos)
		get subtotal() {
			return calculateItemTotal(this.price, this.quantity) - this.totalDiscount;
		},
	};
}

// Função para calcular o total do item (preço * quantidade)
function calculateItemTotal(price, quantity) {
	return price * quantity;
}

// Função para calcular o valor do desconto
function calculateDiscount(price, quantity, discountPercentage) {
	// Sem desconto
	if (discountPercentage <= 0) {
		return 0;
	// Desconto de 100% ou mais
	} else if (discountPercentage >= 100) {
		return price * quantity;
	// Calcula o valor do desconto baseado no percentual fornecido
	} else {
		return price * quantity * (discountPercentage / 100);
	}
}

// Exporta a função createItem como padrão
export default createItem;
