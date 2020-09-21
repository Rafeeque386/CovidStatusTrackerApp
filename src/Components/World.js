import React, { Component } from 'react';
import Axios from 'axios';
 class World  extends Component {
     constructor(){
         super();
         this.state={
             data:[]
         }
     }

     componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({stateData:response.data});
           this.setState({data:response.data});
     });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-primary table-bordered table-striped">
                        <thead>
                            <tr>
                                <td><h4>Country</h4></td>
                                <td><h4>Total Cases</h4></td>
                                <td><h4>Recovered</h4></td>
                                <td><h4>Death</h4></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.data.map((itm,ky)=>{
                                return(
                                    <tr>
                                     <td><h4>{itm.country}</h4>
                                     <img style={{width:'64px',marginLeft:'10px'}} src={itm.countryInfo.flag}/>
                                     </td>
                                     <td>{itm.cases}</td>
                                     <td>{itm.recovered}</td>
                                     <td>{itm.deaths}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default World
