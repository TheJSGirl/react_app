// class Hellocomponents  extends React.Component{

//     render() {
//         return (
//             <div><h1>Hello World</h1></div>
//         );
//     }

// }
// ReactDOM.render(<Hellocomponents/>, document.querySelector('#app'));
class BussinessCard extends React.Component{
    render(){
        return(
            <div>
                <h1>Name is {this.props.name}</h1>
                <h2>Post is {this.props.post}</h2>
                <p>Address is {this.props.address}</p>
            </div>
        );
    }
}

class CardHolders extends React.Component{
    person ={
        name:'anupriya',
        post:'developer',
        address:'noida'

    };

    render(){
        return(
            <div>
                <h1>All members</h1>
                <BussinessCard
                name= {this.person.name}
                post= {this.person.post}
                address= {this.person.address}/>
            </div>
        )

    }
}

ReactDOM.render(<CardHolders/>, document.querySelector('#app'));