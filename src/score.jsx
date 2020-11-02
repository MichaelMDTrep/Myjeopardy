
var React = require('react');
import {Button} from '@material-ui/core/Button';


class MyComponent extends React.Component {

    getComponent(event) {
        event.target.style.backgroundColor = '#ccc';
        
        // or you can write
        //arguments[0].target.style.backgroundColor = '#ccc';
    }
    
  render() {
    return(
       <div>
         <ul>
            <li onClick={this.getComponent.bind(this)}>Component 1</li>
         </ul>
       </div>
    );
  }
  

}

export { MyComponent };  // use this to be possible in future imports with {} like: import {MyComponent} from './MyComponent'
export default MyComponent;

// var score=0;

       
        
// <script type="text/javascript">
// var score=0;
// function resetScore()
// if (this.state.Question) {
//      question = (
//      <div>
//           { this.state.Questions.map((question, index) => {
//                return <Question key={question.id}
//                title={question.title} />
//           })}
//      </div>
//      )
// }
// {   
//     score=0;
//     document.getElementById("score").value=score;
// }
// function randomAdd()
//         {
//             var x=document.getElementById("AddN1");
//             x.value=Math.floor((Math.random()*12)+1);

//             var y=document.getElementById("AddN2");
//             y.value=Math.floor((Math.random()*12)+1);
//         }


//         function checkAdd()
//         {
//             var z=document.getElementById("AddA2");
//             z.value= parseInt(document.getElementById("AddN1").value) + parseInt(document.getElementById("AddN2").value);

//             if(parseInt(document.getElementById("AddA1").value)==z.value)
//             {
//                 //score=score+1;
//                 score++;
//                 alert("Addition: Correct");
//                 document.getElementById("score").value=score;
//             }
//             else
//             {   
//                 //score=score-1;
//                 score--;
//                 alert("Addition: Incorrect");
//                 document.getElementById("score").value=score;
//             }
//         }

// </script>
