import React,{Component} from 'react'
import Link from 'next/link'

class SearchComponent extends Component {
    constructor(props) {
        super(props)

        this.change = this.change.bind(this)
    }    
    change(ev) {
        this.props.change(ev.target.value)

    }
    render() {
        return (
            <div>
                <input placeholder={'search'} onChange={this.change} />
             </div>
        )
    }
}


export default SearchComponent