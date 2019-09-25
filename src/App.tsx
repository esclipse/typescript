import * as React from 'react';
export default class App extends React.PureComponent{
    task1() {
        console.log('task1');
        const promise1 = Promise.resolve('error');
        const promise2 = Promise.resolve('heh');
        const promise3 = 
            new Promise((resolve,reject)=>{
                setTimeout(resolve,200, "hello world")
            })
        
        Promise.race([promise3, promise1, promise2]).then((values)=>{
            console.log(values,'values')
        })
    }
    componentDidMount() {
        // console.log(client, 'NKN');
      
    }

    render() {
        return (
            <div>app is here</div>
        )
    }
}