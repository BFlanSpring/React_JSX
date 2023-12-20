const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Brady" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))