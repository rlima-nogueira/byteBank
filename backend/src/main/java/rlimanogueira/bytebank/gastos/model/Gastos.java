package rlimanogueira.bytebank.gastos.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rlimanogueira.bytebank.cartao.model.Cartao;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Gastos {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 

    @DateTimeFormat(pattern="dd/MM/yyyy")	
    private LocalDate dataGasto;
    
    private Double valor;
    private String descricao;

    @DateTimeFormat(pattern="dd/MM/yyyy")	
    private LocalDate data;

    private boolean pago;
    private String email;

    @ManyToOne
    private Cartao cartao; 

}
