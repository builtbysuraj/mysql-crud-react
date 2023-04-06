import express from "express"
import cors from "cors"
import { createConnection } from "mysql"

const app = express()
app.use(cors())
app.use(express.json())

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "new_db"
})

app.get("/", (req, res) => {
  const sql = "SELECT * FROM product"
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post("/products", (req, res) => {
  const sql = "INSERT INTO product (`name`, `description`) VALUES (?)"
  const values = [
    req.body.name,
    req.body.description,
  ]
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.get("/read/:Id", (req, res) => {
  const sql = "SELECT * FROM product WHERE id=?"
  const id = req.params.Id

  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.put("/update/:Id", (req, res) => {
  const sql = "UPDATE product SET `name`=?,`description`=? WHERE id=?"
  const id = req.params.Id
  db.query(sql, [req.body.name, req.body.description, id], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.delete("/delete/:Id", (req, res) => {
  const sql = "DELETE FROM product WHERE id=?"
  const id = req.params.Id
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.listen(4000, console.log(`working on 4000`))
