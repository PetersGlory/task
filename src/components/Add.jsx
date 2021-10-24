import React from 'react'

class Add extends React.Component  {
    // const [category, setCategory] = React.useState('');
    // const [parent, setParent] = React.useState('');
        constructor(props) {
            super(props);
            this.state = {
                input:'',
            megacategory:[],
            leftcategory:[],
            rightcategory:[],
                parent:'',
            };
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    handleSubmit (){
        if (this.state.parent == 'left-dropdown' && this.state.parent != "") {
            this.setState({leftcategory: this.state.input});
            setTimeout(()=>{
                console.log(this.state);
            },1000);
        }else if(this.state.parent == 'mega-dropdown' && this.state.parent != ""){
            this.setState({megacategory: this.state.input});
            setTimeout(()=>{
                console.log(this.state);
            },1000);
        }else if(this.state.parent == 'right-dropdown' && this.state.parent != ""){
            this.setState({rightcategory: this.state.input});
            setTimeout(()=>{
                console.log(this.state);
            },1000);
        }else{
            alert('please insert text');
        }
    };
    render ( ){
    return<React.Fragment>
            <div className="container-fluid">
            
            <div className="container">
                <h3>Tiny Task Tracker</h3> <br /><br />
                <label htmlFor="uname">Task Description</label>
                <input type="text" placeholder="Enter......." name="uname" required />

                <label htmlFor="select">Assign Task To </label>
                <div className="custom-select" id="select">
                    <select>
                        <option>...</option>
                        <option value="1">Task 1</option>
                        <option value="2">Task 2</option>
                        <option value="3">Task 3</option>
                        <option value="4">Task 4</option>
                        
                    </select>
                    </div>

                <button type="button">Submit</button>
            </div>
            </div>
        </React.Fragment>
     
    };
}

export default Add;