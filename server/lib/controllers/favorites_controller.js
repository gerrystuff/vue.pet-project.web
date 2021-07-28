const pool = require('../database/connection');


function listFav(req, res) {

    let script =
        (`SELECT f.id,b.name,b.publisher,b.category,b.year 
      FROM favorites as f 
      INNER JOIN boardgames as b on f.idboardgame = b.id `)
    pool.query(script, (err, favorites) => {
        if (err)
            res.json(err);
        else
            res.json(favorites);

    });
}


function createFav(req, res) {
    if (isEmpty(req.body)) {
        res.json({
            ok: false,
            message: "Send the boardgame id."
        })

        return;
    }

    const favorite = req.body;

    let script = "INSERT INTO favorites set ?"

    pool.query(script, [favorite], (err, data) => {
        if (err)
            console.log(err)
        else
            res.json({
                ok: true,
                message: "Favorite added successfully."
            })
    })


}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function deletFav(req, res) {
    const { id } = req.params;

    let script = "DELETE FROM favorites WHERE id = ?";

    pool.query(script, [id], (err, data) => {
        if (err) {
            res.json(err)
        } else
            res.json({
                ok: true,
                message: "Favorite deleted."

            })
    })

}

module.exports = {
    listFav,
    createFav,
    deletFav
}