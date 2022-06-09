export default function handler(req, res) {
    let token = Math.random().toString(36).substr(2, 6)
    res.json({ token: token })
}