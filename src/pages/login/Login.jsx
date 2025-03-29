import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
  const [error, setError] = useState("");
  // console.log(mailFunc);

  const handelLogin = (e) => {
    e.preventDefault();
    
    console.log(email, password);
    // also dont forget making the validiate 
    if (email && password) {
      setError("");
      navigate("/"); 
    } else {
      setError("يرجى ادخال البريد الالكتروني وكلمة المرور");
    }
  };
  
  return (
    <div className="container arabic-text d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">تسجيل الدخول</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handelLogin}>
          <div className="mb-3">
            <label className="form-label">البريد الالكتروني</label>
            <input type="email" className="form-control" placeholder="ادخل بريدك الالكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">كلمة المرور</label>
            <input type="password" className="form-control" placeholder="ادخل كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btncolr w-100"> دخول  </button>
        </form>
        <div className="text-center mt-3">
          <button className="btn btn-outline-secondary w-100" onClick={() => navigate("/signup")}> ليس لديك حساب؟ سجل الان </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
