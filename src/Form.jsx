var React = require('react');
import {Button} from '@material-ui/core/Button';
const Form = () => {
    return (
        <Form style={{marginTop: '20px'}} onSubmit={onSubmit}>
            <Button fullwidth variant="contained" color="primary" type="submit">Submit</Button>
            
        </Form>
        
    )
}

export default Form;