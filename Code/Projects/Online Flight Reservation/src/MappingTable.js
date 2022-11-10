import { Component } from "react";

class MappingTable extends Component {
    state = {
        flight : [
            { id: 1, name: "Pak_Air11", rating : 4.7},
            { id: 2, name: "Pak_Air22", rating : 3.9 },
            { id: 3, name: "Pak_Air33", rating : 4.4 }
        ]
     } 

    //  handleDelete = (flightID) => {
    //     console.log("Deleting.." + flightID);

    //     const filteredData = this.state.flight.filter( flightData => flightData.id !== flightID );

    //     this.setState({
    //         flight: filteredData
    //     });

    //     console.log("Deleted...");

    //  }

    render() { 
        return (
            <div>
                <table className="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Flight Name</th>
                        <th>Rating</th>
                        <th>Operations</th>
                    </tr>

                    {

                        this.state.flight.map((flightRecord, key) => (
                            <tr key={flightRecord.id}>
                                <td>{flightRecord.id}</td>
                                <td>{flightRecord.name}</td>
                                <td>{flightRecord.rating}</td>
                                {/* <button className="btn btn-danger" onClick={() => this.handleDelete(flightRecord.id)}>Delete</button> */}
                            </tr> 
                        ))



                    }


                </table>
            </div>
        );
    }
}
 
export default MappingTable