import React,{Component} from 'react';
import './layout.css';

import Header from '../../component/Header/header';

class Layout extends Component{
    state={
        showNav:false
    }
    toggleSideNav=(action)=>{
        this.setState({
            showNav:action
        })
    }
    
    render (){
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={()=>this.toggleSideNav(false)}
                    onOpenNav={()=>this.toggleSideNav(true)}
                />
                {this.props.children}
                <h1>Footer</h1>
            </div>
        )
    }
}

export default Layout;