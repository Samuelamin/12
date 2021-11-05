import React, { Component } from 'react';

export class Default extends Component {
    render() {
        return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 mx-auto text-center
                texxt-title text-uppercase pt-5'>
                  <h1>error</h1>
                  <h2>page not found</h2>
                  <h3>
                      the request URL 
                      <sapn className='text-danger'>
                          {this.props.location.pathname}
                      </sapn>{""}
                      was not found
                  </h3>
                </div>
            </div> 
        </div>
        )
    }
}

export default Default
