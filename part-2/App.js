const App = () => (
    <div>
        <Tweet date="12:12pm 12/21/23" username="CodyTVWeber" name="Cody" msg="This is my first Tweet Test" />
        <Tweet date="3:16pm 12/22/23" username="BFlan" name="Brady" msg="This is my first Tweet Test" />
        <Tweet date="6:54pm 12/22/23" username="LilaBelle" name="Lil" msg="This is my first Tweet Test" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))