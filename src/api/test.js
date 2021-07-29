export default function handler(req, res)
{
  console.log(req.headers)
  console.log(req.rawHeaders)
  return res.status(200).json("OK")
}