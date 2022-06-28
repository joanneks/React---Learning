import React from 'react';
import Book from './Book';


export default class App extends React.Component{
  state={
    fruits:['apples','oranges','pineapple','durians'],
    secretOfLife: 42,
    superheroes: ['Captain America','Iron Man','Spiderman','Dr Strange'],
    movies: ['chicken little','dunes','matrix'],
    books:[
      {
      title:'Twilight',
      author:'Stephenie Meyer'
      },
      {
      title:'Romance of the 3 Kingdoms',
      author:'Luo GuanZhong'
      },
      {
      title:'Harry Potter',
      author:'JK Rowling'
      }
    ]
  }

  renderBooks() {
    let bookElements =[];
    for (let b of this.state.books){
      bookElements.push(
      <div style ={{"border":"1px solid black"}}>
        <h1>{b.title}</h1>
        <h2>{b.author}</h2>
      </div>)
    }
    return bookElements
  }

  renderBooks1() {
    let bookElements =[];
    for (let b of this.state.books){
      bookElements.push(<Book title={b.title} author={b.author}/>)}
    return bookElements
  }

  renderSuperHeroes (){
    let superheroElements =[]
    //same as mapping --> when we create a new array with all the elements of the original array
    for (let s of this.state.superheroes){
      superheroElements.push(<li>{s}</li>)
    }
    return superheroElements
  }
  render(){
    let p = <p>Hello there</p>
    //when jsx objects are in an array, react will render in sequential order for you
    let items = [
      <li>Item one</li>,
      <li>Item two</li>,
      <li>Item three</li>
    ]

    let fruitElements = [];
    for (let f of this.state.fruits){
      fruitElements.push(<li>{f}</li>)
    }

    return (
      <React.Fragment>
        <div>
          {p}
        </div>
        {items}
        <div>
          {this.state.secretOfLife}
        </div>
        <div>
          {this.state.fruits}
        </div>
        <div>
          <ul>
            {fruitElements}
          </ul>
        </div>
        <div>
          <ol>
            {this.renderSuperHeroes()}
          </ol>
        </div>
        <div>
          <ul>
            {/* mapping --> when we create a new array with all the elements of the original array */}
            {this.state.movies.map(function(m){
              return<li>{m}</li>
            })}
          </ul>
        </div>
        <div>
          {this.renderBooks()}
        </div>
        <div>
          {this.renderBooks1()}
        </div>
      
      </React.Fragment>
    );
  }
}
