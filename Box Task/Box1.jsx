import React, { Component } from 'react'
import Box1A from './Box1A'
import Box1B from './Box1B'
import Box1C from './Box1C'

export default class Box1 extends Component {
    render() {
        return (
            <div id='B'>
                <Box1A></Box1A>
                <Box1B></Box1B>
                <Box1C></Box1C>
            </div>
        )
    }
}
