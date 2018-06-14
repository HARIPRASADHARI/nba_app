import React,{Component} from 'react';
import './layout.css';

class Layout extends Component{
    state={

    }
    render (){
        return (
            <div>
                <h1>Header</h1>
                {this.props.children}
                <h1>Footer</h1>
            </div>
        )
    }
}

export default Layout;