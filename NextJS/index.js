const rootCont  = document.getElementById("root")

const eleOne = React.createElement(
    "ul", 
    null, 
    React.createElement("li", null, "one")
)

ReactDOM.render(eleOne, rootCont)