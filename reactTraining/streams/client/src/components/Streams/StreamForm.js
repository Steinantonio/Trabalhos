import React from 'react'
import {Field, reduxForm} from "redux-form";

class StreamForm extends React.Component {
    
    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                 <div className={"ui error message"}>
                     <div className={"header"}>{error}</div>
                 </div>
            );
        }
        ;
    };
    
    
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error & meta.touched ? 'error' : ''}`;
        return (
             <div className={`field ${className}`}>
                 <label>{label}</label>
                 <input {...input}/>
                 <div>{this.renderError(meta)}</div>
             </div>
        );
    };
    
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues); // callback to be used by other callers
     };
    
    
    render() {
        return (
             <div className={"ui raised segment"}>
                 <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                     <div className={"fields"}>
                         
                         <div className={"nine wide field"}>
                             <Field name={"title"} label={"Enter Title"} component={this.renderInput}/>
                         </div>
                         
                         <div className={"nine wide field"}>
                             <Field name={"description"} label={"Enter Description"} component={this.renderInput}/>
                         </div>
                     
                     </div>
                     <button className={"ui input button four wide"}>Submit</button>
                 
                 </form>
             </div>
        
        );
    };
};


const validate = (formValues) => {
    const errors = {};
    
    if (!formValues.title) {
        errors.title = "You should enter title";
    };
    if (!formValues.description) {
        errors.description = "Enter Description Please";
    }
    ;
    return errors;
};


export default reduxForm({form: 'streamForm', validate})(StreamForm);
