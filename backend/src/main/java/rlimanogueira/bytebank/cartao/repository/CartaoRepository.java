package rlimanogueira.bytebank.cartao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rlimanogueira.bytebank.cartao.model.Cartao;

public interface CartaoRepository extends JpaRepository<Cartao, Long> {
    
}
