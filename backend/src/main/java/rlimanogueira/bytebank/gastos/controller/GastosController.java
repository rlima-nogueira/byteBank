package rlimanogueira.bytebank.gastos.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rlimanogueira.bytebank.gastos.model.Gastos;
import rlimanogueira.bytebank.gastos.services.GastosService;

@RestController
@RequestMapping("/gastos")
@RequiredArgsConstructor
public class GastosController {
    private final GastosService gastosService;

    @PostMapping
    public ResponseEntity<Gastos> cadastrar(@RequestBody Gastos gastos) throws IOException {
        return new ResponseEntity<>(gastosService.salvar(gastos), HttpStatus.CREATED);
    }

    
    @PutMapping("/{id}")
    public ResponseEntity<Gastos> alterar(@PathVariable("id") Long id, @RequestBody Gastos gastos) throws IOException {
        Optional<Gastos> gasto = gastosService.buscarPorId(id);

        if (!gasto.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(gastosService.alterar(gastos), HttpStatus.OK) ;        
    }

    @GetMapping("/data-gasto")
    public ResponseEntity<List<Gastos>> buscarPorData(@RequestParam("dataGasto") LocalDate dataGasto) throws IOException {
        return new ResponseEntity<>(gastosService.buscarPorDataGasto(dataGasto), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Gastos>> buscarPorId(@PathVariable("id") Long id) throws IOException {
        Optional<Gastos> gasto = gastosService.buscarPorId(id);

        if (!gasto.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND) ;
        }

        return new ResponseEntity<>(gasto, HttpStatus.OK) ;
    }

    @GetMapping
    public ResponseEntity<List<Gastos>> buscarTodos() throws IOException {
        return new ResponseEntity<>(gastosService.buscarTodos(), HttpStatus.OK) ;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarGasto(@PathVariable("id") Long id) throws IOException {
       Optional<Gastos> optional = gastosService.buscarPorId(id);

       if (!optional.isPresent()) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        
        gastosService.deletar(id);
       return new ResponseEntity<>(HttpStatus.OK);
   }
    
}
