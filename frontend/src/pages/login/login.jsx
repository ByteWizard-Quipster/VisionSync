import loginImage from "../../assets/images/login_image.png";
export default function Login() {
  return (
    <div className='grid grid-cols-2'>
      <div className='...'>
        {" "}
        <img
          src={loginImage}
          className='img-fluid'
          alt='Padmasana'
          style={{ height: "80vh" }}
        />
      </div>
      <div className='...'>05</div>
    </div>
  );
}
