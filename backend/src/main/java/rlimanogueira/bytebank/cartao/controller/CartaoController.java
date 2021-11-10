package rlimanogueira.bytebank.cartao.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rlimanogueira.bytebank.cartao.model.Cartao;
import rlimanogueira.bytebank.cartao.services.CartaoService;

@RestController
@RequestMapping("/cartao")
@RequiredArgsConstructor
public class CartaoController {
    private final CartaoService cartaoService;
    
    @PostMapping
    public ResponseEntity<Cartao> cadastrar(@RequestBody Cartao cartao) {
        return new ResponseEntity<>(cartaoService.cadastrar(cartao), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Cartao>> listarTodos() {
        return new ResponseEntity<>(cartaoService.buscarTodos(), HttpStatus.OK);
    }

    
}
