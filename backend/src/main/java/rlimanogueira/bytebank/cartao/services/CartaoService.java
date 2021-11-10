package rlimanogueira.bytebank.cartao.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import rlimanogueira.bytebank.cartao.model.Cartao;
import rlimanogueira.bytebank.cartao.repository.CartaoRepository;

@Service
@RequiredArgsConstructor
public class CartaoService {
    
    private final CartaoRepository cartaoRepository;

    public Cartao cadastrar(Cartao cartao) {
        return this.cartaoRepository.saveAndFlush(cartao);
    }

    public List<Cartao> buscarTodos() {
        return this.cartaoRepository.findAll();
    }

}
