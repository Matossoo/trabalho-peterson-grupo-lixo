const Filme = require("../models/filmeModel");

exports.listar = (req, res) => {
    Filme.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
};

exports.buscar = (req, res) => {

    Filme.buscar(req.params.id, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        if (resultado.length == 0) {
            return res.status(404).json({
                mensagem: "Filme não encontrado"
            });
        }

        res.json(resultado[0]);

    });

};

exports.cadastrar = (req, res) => {

    Filme.cadastrar(req.body, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Filme cadastrado com sucesso",
            id: resultado.insertId
        });

    });

};

exports.atualizar = (req, res) => {

    Filme.atualizar(req.params.id, req.body, (erro) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json({
            mensagem: "Filme atualizado com sucesso"
        });

    });

};

exports.excluir = (req, res) => {

    Filme.excluir(req.params.id, (erro) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json({
            mensagem: "Filme excluído com sucesso"
        });

    });

};