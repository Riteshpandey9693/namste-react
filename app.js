/* 
    <div>
        <div>
            <h1>Hello World</>
        </div>
    </div>
*/      


let div = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [
    React.createElement("h1", {id: "heading"}, "I'm a h1 tag!"),
    React.createElement("h2", {id: "heading"}, "I'm a h2 tag!")
]));

let root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(div);


