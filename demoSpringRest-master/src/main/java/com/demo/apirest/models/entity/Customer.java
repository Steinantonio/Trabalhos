package com.demo.apirest.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;

    @Column(name="nome_cliente")
	private String nomeCliente;
	
	@Column(name="limite_credito")
	private Float limiteCredito;
	
	@Column(name="risco")
	private String risco;

	@Column(name = "juros")
    private Float juros;



    public Customer() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public double getLimiteCredito() {
        return limiteCredito;
    }

    public void setLimiteCredito(Float limiteCredito) {
        this.limiteCredito = limiteCredito;
    }

    public String getRisco() {
        return risco;
    }

    public void setRisco(String risco) {
        this.risco = risco;
    }

    public Float getJuros() {
        return juros;
    }

    public void setJuros(Float juros) {
        this.juros = juros;
    }

		@Override
	public String toString() {
		return "Customer [id=" + id + ", nomeCliente =" + nomeCliente + ", limiteCredito=" +
            limiteCredito + ", risco=" + risco + "]";
	}

}
