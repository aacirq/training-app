import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <img src="https://z3.ax1x.com/2021/07/02/R662lR.jpg" alt="R662lR.jpg" className="doream" />
      <h2>
        my name is <span className="name">Kevin</span>,{" "}
        <span className="age">24</span>years old and this is my resume/cv
      </h2>
    </header>
  );
}