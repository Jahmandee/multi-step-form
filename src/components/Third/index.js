import { Box, Text, TextInput, Title } from '@mantine/core';


function Third({formData}) {
    const boxStyle = {
        width: '70%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '1rem 0',
        
      };
    return (
        <Box 
        sx={boxStyle}
        >
             <Title
        sx={{
          textAlign: 'center',
        }}
        order={2}
        >
        Check your details and submit
        </Title>
            
            <Box
            sx={{
                margin: '1rem 0',
            }}
            >
            <p>{formData.name}</p>
            <p>{formData.employment_status}</p>

           

    </Box>
</Box>
    );

 }

 export default Third;