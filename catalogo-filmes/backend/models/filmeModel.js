const db = require("../config/db");

const Filme = {

    listar(callback) {

        const sql = `
        SELECT
        filmes.*,
        diretores.nome AS diretor,
        generos.nome AS genero
        FROM filmes
        LEFT JOIN diretores
        ON filmes.diretor_id=diretores.id
        LEFT JOIN generos
        ON filmes.genero_id=generos.id
        ORDER BY filmes.id DESC`;

        db.query(sql, callback);
    },

    buscar(id, callback){

        const sql = `
        SELECT
        filmes.*,
        diretores.nome AS diretor,
        generos.nome AS genero
        FROM filmes
        LEFT JOIN diretores
        ON filmes.diretor_id=diretores.id
        LEFT JOIN generos
        ON filmes.genero_id=generos.id
        WHERE filmes.id=?`;

        db.query(sql,[id],callback);
    },

    cadastrar(filme,callback){

        db.query(
        `INSERT INTO filmes
        (titulo,sinopse,ano_lancamento,duracao_min,classificacao,poster,diretor_id,genero_id)
        VALUES(?,?,?,?,?,?,?,?)`,
        [
            filme.titulo,
            filme.sinopse,
            filme.ano_lancamento,
            filme.duracao_min,
            filme.classificacao,
            filme.poster,
            filme.diretor_id,
            filme.genero_id
        ],
        callback
        );

    },

    atualizar(id,filme,callback){

        db.query(
        `UPDATE filmes SET
        titulo=?,
        sinopse=?,
        ano_lancamento=?,
        duracao_min=?,
        classificacao=?,
        poster=?,
        diretor_id=?,
        genero_id=?
        WHERE id=?`,
        [
            filme.titulo,
            filme.sinopse,
            filme.ano_lancamento,
            filme.duracao_min,
            filme.classificacao,
            filme.poster,
            filme.diretor_id,
            filme.genero_id,
            id
        ],
        callback
        );

    },

    excluir(id,callback){

        db.query(
        "DELETE FROM filmes WHERE id=?",
        [id],
        callback
        );

    }

};

module.exports=Filme;