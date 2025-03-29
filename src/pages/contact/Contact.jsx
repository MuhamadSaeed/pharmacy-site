import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">تواصل معنا</h2>
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-center">الموقع</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110532.27926850537!2d31.3059475!3d31.0409494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dfe5b5c88db%3A0xe9300b6d40fd1b14!2z2YXYr9mK2YbYqSDYp9mE2LnZhNiv2Yog2KfZhNi52YjYp9mE2YrYqSDYp9mE2YXZg9iyINin2YTYp9mF2KfYqiDYp9mE2KPYrNmH2YbYqg!5e0!3m2!1sar!2seg!4v1711753643707!5m2!1sar!"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-md-6">
          <form  className="arabic-text">
            <div className="mb-3">
              <label className="form-label">الاسم</label>
              <input type="text" className="form-control" placeholder="ادخل اسمك" />
            </div>
            <div className="mb-3">
              <label className="form-label">البريد الالكتروني</label>
              <input type="email" className="form-control" placeholder="example@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">الرسالة</label>
              <textarea className="form-control" rows="4" placeholder="اكتب رسالتك هنا"></textarea>
            </div>
            <button type="submit" className="btn btncolr">ارسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;