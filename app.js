import "./styles.css";
import { useState } from "react";

function Example() {
  // 宣告一個新的 state 變數，我們稱作為「count」。
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default function App() {
  const [comments, setComments] = useState([]);
  // const comments = ["apple", "bananahkhkhk"];
  const [newComment, setNewComment] = useState("");
  const handleChange = (e) => {
    // console.log(e.target.value)
    setNewComment(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
  };
  return (
    <div className="App">
      <Example />
      <h1>留言板</h1>
      <ul>
        {comments.map((comment) => (
          <li>{comment}</li>
        ))}
      </ul>
      new Comment: {newComment}
      <input type="text" onChange={handleCh[[](https:/>
      <button onClick={handleClick}>Add comment</button>
    </div>
  );
}

function hello() {}

// const hi = (x) => {
//   console.log("hi", x);
// };
function anotherPlus2(x) {
  return x + 2;
}

const hi = () => console.log("hi");
const plus2 = (x) => x + 2;
hi("hello");

console.log(plus2(5))