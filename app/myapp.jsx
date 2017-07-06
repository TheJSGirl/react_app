class Hellocomponents  extends React.Component{

    render() {
        return (
            <div><h1>Hello World</h1></div>
        );
    }

}
ReactDOM.render(<Hellocomponents/>, document.querySelector('#app'));