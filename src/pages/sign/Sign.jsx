import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [emal, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
    
  const navigate = useNavigate();
  
  const [error, setError] = useState("");

  // try making the checking more prof when u get the api 
  const handlSignUp = (e) => {
    e.preventDefault();
    console.log(emal, password, confirmpassword);

    if (!emal || !password || !confirmpassword) {
      setError("يرجي ملي جميع الحقول");
      return;
    }

    if (password !== confirmpassword) {
      setError("كلمه المرور غير متطابقين!");
      return;
    }

    alert("تم التسجبل بنجاح! يمكنك الدخول الان.");
    navigate("/login");
  };

  console.log();
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">انشا حساب جديد</h2>
        
        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handlSignUp} className="arabic-text">
          <div className="mb-3">
            <label className="form-label">البريد الالكتورني</label>
            <input type="text" className="form-control" placeholder="ادخل بريدك الالكتروني" value={emal} onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className="mb-3">
            <label className="form-label">كلمه السر</label>
            <input type="password" className="form-control" placeholder="كلمه السر" value={password} onChange={(e) => setpassword(e.target.value)}  required/>
          </div>

          <div className="mb-3">
            <label className="form-label">تاكيد كلمه السر</label>
            <input type="password" className="form-control" placeholder="اعد إدخال كلمه السر" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}/>
          </div>

          <button className="btn btncolr w-100">تسجل </button>
        </form>

        <div className="text-center mt-3">
          <button className="btn btn-outline-secondar w-100" onClick={() => navigate("/login")}>هل لديك حساب ؟ سجل دخول </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
