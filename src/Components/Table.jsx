import React, { Component} from 'react'
import "../App.css";
import Table from 'react-bootstrap/Table'

export default class Tables extends Component {
        
     renderTable = (r,no,n)=>
        r.map((keys,Index)=>{
            if(n<no && Index<r.length-1){
                n++
                return (
                    <tr key={keys[0]} >
                        <td>{keys[0]}</td>
                        <td>{keys[1]}</td>
                    </tr>
                )
                }
                return null;
            
        })
        
     
    render() {
        const {result,number} = this.props;
        let r= Array.from(result);
        let n=0;
        
        return (
            <section className="table">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Words</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <thead>
                        {this.renderTable(r,number,n)}
                    </thead>
                </Table>
                
            </section>
        )
    }
}