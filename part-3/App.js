const App = () => (
        <div>
        <Person name='Mark' age={18} hobbies={[ 'Coding', 'Gaming', 'Guitar' ]} /> 
        <Person name='Victoria' age={11} hobbies={[ 'Singing', 'Writing', 'Piano' ]} /> 
        <Person name='Alexander' age={30} hobbies={[ 'Farming', 'Snails', 'Throwing Rocks' ]} /> 
        </div>
)

ReactDOM.render(<App />,document.getElementById("root"));