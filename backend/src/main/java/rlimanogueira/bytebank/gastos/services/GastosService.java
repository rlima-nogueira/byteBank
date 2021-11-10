package rlimanogueira.bytebank.gastos.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import rlimanogueira.bytebank.gastos.model.Gastos;
import rlimanogueira.bytebank.gastos.repository.GastosRepository;

@Service
@RequiredArgsConstructor
public class GastosService {
    private final GastosRepository gastoRepository;

    public Optional<Gastos> buscarPorId(Long id) {
        return this.gastoRepository.findById(id);
    }

    public List<Gastos> buscarTodos() {
        return this.gastoRepository.findAll();
    }

    public List<Gastos> buscarPorDataGasto(LocalDate dataGasto) {
        return this.gastoRepository.findByDataGasto(dataGasto);
    }

    @Transactional
    public Gastos salvar(Gastos gasto) {
        return this.gastoRepository.saveAndFlush(gasto);
    }

    @Transactional
    public Gastos alterar(Gastos gasto) {
        Gastos gastosAlterados = gasto;
        return this.gastoRepository.saveAndFlush(gastosAlterados);
    }

    @Transactional
    public void deletar(Long id) {
        this.gastoRepository.deleteById(id);
    }
 
}
