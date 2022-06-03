import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}
function Book() {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
}

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/91DBkHW1%2BtL._AC_UL200_SR200,200_.jpg"
    alt=" Bhagvad Gita "
  />
);
const Title = () => <h3>Bhagavad Gita: Yatharoop (Hindi)</h3>;
const Author = () => <h6>A.C. Bhaktivendanta Swami Prabhupada</h6>;

ReactDOM.render(<BookList />, document.getElementById("root"));
