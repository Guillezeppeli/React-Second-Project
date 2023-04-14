import React, { Component } from 'react'

export default class Search extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            name: '',
            img: ''
        }
    }

    /*
    componentDidMount(){
      this.setState({
        name: 'Raichu'
      })
    }*/

    traerDatos = async () => {
    let respuesta = await fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.name}`);
    let data = await respuesta.json();
    //console.log(data);

    this.setState({
      img: data.sprites.front_default
    })
    }

    getName = (event) => {
      let aux = event.target.value.toLowerCase();
      console.log(event.target.value.toLowerCase());
      
      this.setState({
        name: aux
      })
    }

    getSubmit = (event) => {
      let name = this.state.name;
      //console.log(name);
      event.preventDefault();
      this.traerDatos();
    }

  render() {
    //console.log(this.state.name);
    if(this.state.img === ''){
    return (
      <div className='card'>
            <div className='card-header text-black'>
              Busca tu pokemon
            </div>
            <div className='card body'>
              <form>
              <label className='text-black'>Ingresa nombre de tu pokemon</label><br />
              <input type="text" 
              placeholder='Nombre pokemon' 
              onChange={this.getName}
              /><br />
              <button className='btn btn-primary' type='submit'
              onClick={this.getSubmit}>Buscar</button>
              </form>
            </div>
      </div>

    )}else  {
      return(
      <div className='card' style={{width: '18rem'}}>
            <div className='card header text-black'>
              {this.state.name}
            </div>
            <div className='card-body'>
              <img src={this.state.img} alt={this.state.name}></img>
              <br />
              <button className='btn btn-primary' onClick={() => { this.setState({ name:'', img: ''})}}> Regresar </button>
              </div>
          </div>
      )}
  }
}
