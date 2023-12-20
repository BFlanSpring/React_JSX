const App = () => (
    <div>
        <Person name="Nanc" age={27} hobbies={["bowling", "watching tv", "drinking beer"]}/>
        <Person name="Brady" age={26} hobbies={["painting", "gambling"]} />
        <Person name="Lila" age={4} hobbies={["skateboarding", "making prank calls"]}/>
        <Person name="Dilly" age={1} hobbies={["reading", "saxophone", "eating vegetables"]}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
