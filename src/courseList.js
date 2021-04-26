import React  , {Component , Fragment} from 'react'

class CourseList extends Component{

    state ={
        isEdit : false
    }

    // render course items
    renderCourse =()=> {
        return(
            <li>
            <span>{this.props.details.name}</span>
            <button onClick={()=>{this.toggleState()}}>Edit Course</button>
            <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete Course </button>
        </li>
        )
    }

    // toggleState
    toggleState =()=>{
        let {isEdit} = this.state;
        this.setState({
            isEdit :!isEdit 
        })
    }

    updatcourseItem =(e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value );
        this.toggleState();
    }


    // render update form
    renderUpdateForm = () =>{
        return (
            <form onSubmit={this.updatcourseItem}>
                <input type="text" ref={(v)=> {this.input = v}} defaultValue={this.props.details.name}  />
                <button>Update Course</button>
            </form>
        )
    }

    render(){
        let {isEdit} = this.state; 
        return(
            <Fragment>
               { isEdit ? this.renderUpdateForm() :  this.renderCourse()}
            </Fragment>
        )
    }
}

export default CourseList

