package rlimanogueira.bytebank.gastos.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rlimanogueira.bytebank.gastos.model.Gastos;

public interface GastosRepository extends JpaRepository<Gastos, Long>{
    
    List<Gastos> findByDataGasto(LocalDate dataGasto);
}
