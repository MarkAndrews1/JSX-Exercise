const App = () => (
        <div>
        <Tweet username="Mark2005" name="Mark Andrews" date={new Date().toDateString()} tweet='This is the 1st test.' />
        <Tweet username="Jo2000" name="Jo Andrews" date={new Date().toDateString()} tweet='This is the 2nd test.' />
        <Tweet username="Anna2003" name="Anna Andrews" date={new Date().toDateString()} tweet='This is the 3rd test.' />
        </div>
)

ReactDOM.render(<App />,document.getElementById("root"));