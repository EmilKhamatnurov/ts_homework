interface ITotalPrice {
	price: number;
	discount: number;
	isInstallment: boolean;
	months: number;
}

export const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
	if (months <= 0) throw new Error("Количество месяцев должно быть больше 0");
	if (!isInstallment) return price * (1 - discount / 100);

	return price * (1 - discount / 100) / months;
};
