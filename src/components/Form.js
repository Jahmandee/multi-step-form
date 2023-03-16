import { Box, Button, Title } from '@mantine/core';
import First from './First/index';
import Second from './Second/index';
import Third from './Third/index';
import { useState } from 'react';

export default function Form () {

    const [page, setPage] = useState(0);

    function handleSubmit () {
        setPage(page + 1);
      }

    
    const conditionalComponent = () => {
        switch (page) {
            case 0:
            return <First formData={formData} setFormData={setFormData} />;
            case 1:
                return <Second formData={formData} setFormData={setFormData} />;
            case 2:
                return <Third formData={formData} setFormData={setFormData} />;
            default:
                return <First formData={formData} setFormData={setFormData} />;
        }
    };

    const [formData, setFormData] =  useState({
        name: '',
        email: '',
        employment_status: null
    });

    return (
        <Box>
        {conditionalComponent()}
        { page > 0 && <Button onClick={() => setPage(page-1)}>Back</Button>}
        <Button 
        sx={{
            marginLeft: '.5rem',
            backgroundColor: 'purple',
            
        }}
        
        onClick={handleSubmit}>
    { page === 0 || page === 1 ? "Next" : "Submit" }
      </Button>
      
      
         </Box>


    ) 

   
}






