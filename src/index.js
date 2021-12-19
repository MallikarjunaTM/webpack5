import { render } from "react-dom";
import App from './components/App';

render(<App/>,document.getElementById("root"));
const abc={
    a:1,
    b:2,
    c:3

}

const efg={
    ...abc,
    d:5,
    b:6
}
console.log(abc);
console.log(efg);