// Importa funções de manipulação do carrinho e criação de itens dos arquivos de serviço
import { addItemToCart, removeItemFromCart, updateItemQuantity, calculateTotal, viewCart } from "./services/cart.mjs";
import createItem from "./services/item.mjs";

// Função assíncrona auto-executável para manipular o carrinho de compras
(async () => {
	try {
		// Inicializa o carrinho de compras como um array vazio
		const myCart = [];

		// Exibe uma mensagem de boas-vindas no console
		console.log("👋Welcome to the your Shopee Cart!\n");

		// Cria itens de exemplo com nome, preço, quantidade e desconto
		const item1 = await createItem("Macbook", 4850, 1, 5);
		const item2 = await createItem("Celular", 1900, 2, 20);
		const item3 = await createItem("Notebook", 3500, 1);
		const item4 = await createItem("Iphone", 4500, 1);

		// Adiciona os itens criados ao carrinho
		await addItemToCart(myCart, item1);
		await addItemToCart(myCart, item2);
		await addItemToCart(myCart, item3);
		await addItemToCart(myCart, item4);

		// Remove um item do carrinho
		await removeItemFromCart(myCart, item4);

		// Atualiza a quantidade de um item no carrinho
		await updateItemQuantity(myCart, item2, 2);

		// Exibe o conteúdo atual do carrinho
		await viewCart(myCart);

		// Calcula e exibe o total do carrinho
		await calculateTotal(myCart);
	} catch (error) {
		// Captura e exibe qualquer erro que ocorrer
		console.error("Um erro ocorreu -", error);
	}
})();
