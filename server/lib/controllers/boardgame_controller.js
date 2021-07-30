const pool = require('../database/connection');

function create(req, res) {

    if (isEmpty(req.body)) {
        res.json({
            ok: false,
            message: "Invalid"
        })

        return;
    }

    const boardGame = req.body;

    console.log(boardGame);

    if (!boardGame.name || !boardGame.publisher || !boardGame.category) {
        return res.json({
            ok: false,
            message: "The fields name, publisher and category are required."
        })
    }

    if (boardGame.name.length == 0 || boardGame.publisher.length == 0 || boardGame.category.length == 0) {
        return res.json({
            ok: false,
            message: "The fields name, publisher and category are required."
        })
    }


    // if (boardGame.year) {

    //     if (boardGame.year.lenght !== 4) {
    //         return res.json({
    //             ok: false,
    //             message: "Invalid year."
    //         })
    //     }
    // }

    let script = "INSERT INTO boardgames set ?"

    pool.query(script, [boardGame], (err, data) => {
        if (err)
            console.log(err)
        else
            res.json({
                ok: true,
                message: "Boardgame added successfully."
            })
    })


}

function list(req, res) {

    let script = "SELECT * FROM boardgames"

    pool.query(script, (err, boardgames) => {
        if (err)
            res.json(err);
        else
            res.json(boardgames);

    });
}


function getOne(req, res) {
    const { id } = req.params;

    let script = "SELECT * FROM boardgames WHERE id = ?"

    pool.query(script, [id], (err, data) => {
        if (err)
            res.json(err)
        else {


            if (data.length == 0) {
                res.json({
                    ok: false,
                    message: 'Boardgame doesnt exist.'
                })

                return;
            }

            res.json({
                ok: true,
                data,

            })

        }
    })


}

function edit(req, res) {
    const { id } = req.params;
    const newBoardgame = req.body;

    let script = "UPDATE boardgames SET ? WHERE id = ?"

    pool.query(script, [newBoardgame, id], (err, data) => {
        if (err) {
            res.json(err)
        } else
            res.json({
                ok: true,
                message: "Boardgame updated."

            })
    })

}

function delet(req, res) {
    const { id } = req.params;

    let script = "DELETE FROM boardgames WHERE id = ?";

    pool.query(script, [id], (err, data) => {
        if (err) {
            res.json(err)
        } else
            res.json({
                ok: true,
                message: "Boardgame deleted."

            })
    })


}


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

module.exports = {
    list,
    create,
    getOne,
    edit,
    delet
}