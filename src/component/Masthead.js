import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Masthead() {
    return <header class="masthead">
    <div class="container">
        <div class="masthead-subheading">Welcome to my homepage!</div>
        <div class="masthead-heading text-uppercase">Thank you for visiting.</div>
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">Why hire me?</a>
    </div>
</header>
}

ReactDOM.render(<Masthead />, document.getElementById('root'));
export default Masthead;