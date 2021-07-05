import React, { Component } from 'react';
import Card from './CardUI';
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'
import img4 from '../imgs/img4.jpg'


class Cards extends Component {
    
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <table cellPadding="20" cellSpacing="20">
                        <tr>
                            <td align="center">
                                <Card imgsrc={img2} title='studentmaterials' />
                            </td>
                            <td align="center">
                                <Card imgsrc={img3} title='studentquiz' />
                            </td>
                            <td align="center">
                                <Card imgsrc={img4} title='studentlecture'/>
                            </td>

                            </tr>

                    </table>  
               </div>
            </div>
         );
    }
}
 
export default Cards;