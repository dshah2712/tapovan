import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'
import img4 from '../imgs/img4.jpg'

// Student Side
// import StudentCard from './Students/StudentCards/StudentCard'
// import StudentLecture from './Students/showLecture'
// import StudentQuiz from './Students/showQuiz'
// import StudentMaterial from './Students/showMaterial'




class Cards extends Component {
    
    render() { 
        return ( 
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <table cellPadding="20" cellSpacing="20">
                        <tr>
                            <td align="center">
                                <Card imgsrc={img1} title='Search' />
                            </td>
                            <td align="center">
                                <Card imgsrc={img2} title='Materials' />
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <Card imgsrc={img3} title='Quiz' />
                            </td>
                            <td align="center">
                                <Card imgsrc={img4} title='Lecture'/>
                            </td>
                        </tr>

                    </table>  
               </div>
            </div>
         );
    }
}
 
export default Cards;