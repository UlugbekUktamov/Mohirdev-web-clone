function RoyxatdanOtish({ class1, removeClass1 }) {
  return (
    <div className={class1}>
      <div className="container">
        <div onClick={removeClass1} className="icon">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="royxatdan-otish-content">
          <h3>Ro'yxatdan o'tish</h3>
          <p>
            Profilingiz bormi? <span>Kirish</span>
          </p>
          <input type="text" placeholder="Ism va familiya" />
          <input type="username" placeholder="Usename" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Parol" />
          <button>Ro'yxatdan o'tish</button>
        </div>
      </div>
    </div>
  );
}
export default RoyxatdanOtish;
