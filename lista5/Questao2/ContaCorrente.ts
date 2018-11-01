class ContaCorrente {
	private numero: number;
	private nome_cliente: string;
	private saldo: number = 0;

	constructor(numero: number, nome_cliente: string){
		this.numero = numero;
		this.nome_cliente = nome_cliente;
	}

	public depositar(valor: number) {
		this.saldo += valor;
	}

	public sacar(valor: number) {
		if(this.saldo < valor) {
			return console.log("Saldo insuficiente");
		}else{
			this.saldo -= valor;
		}
	}

	public obter_saldo() {
		return console.log(this.saldo);
	}

	public obter_numero() {
		return console.log(this.numero);
	}

	public obter_nome_cliente() {
		return console.log(this.nome_cliente);
	}

}

let conta1 = new ContaCorrente(1, "Francisco");
conta1.depositar(500.00);
conta1.obter_saldo();
