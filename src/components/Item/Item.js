const Item = ({data}) => {
  return (
    <>
    <h1>{data.id}</h1>
    <img height="400px" width="400px" src={data.img} alt="foto"/>
    <p>{data.nombre}</p>
    <p>{data.precio}</p>
    <p>{data.stock}</p>

</>
)
}
export default Item