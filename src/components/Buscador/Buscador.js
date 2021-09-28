import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import './Buscador.css';
import * as actionsCreators from '../../actions/index';
import { bindActionCreators } from 'redux';
function Buscador({fetchPost}) {
  
  const [title, setTitle] = useState("")
  const history = useHistory();
  const handleChange=(x)=> {
    setTitle(x.target.value );
  }
  const handleSubmit=(x) =>{
    x.preventDefault();
    fetchPost(title);
    history.push("/?search="+title)
  }

  return (
    
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <button type="submit"><i class="fas fa-search"></i></button>
        <div>
          <input className="text-input" placeholder="Titulos, Personas, Generos..."
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        
        
      </form>
    </div>
  );
}
function mapStateToProps(state){
  return{
    result: state.result
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Buscador)



