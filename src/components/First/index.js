import { Box, Text, TextInput, Title} from '@mantine/core';

function First({ formData, setFormData}) {
    return (
        <Box>
             <Title
        // sx={{
        //     margin: '1rem 0',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     textAlign: 'center',
        // }}
        order={2}
        >
        Hey there!
        </Title>
        <Box
          sx={{
            margin: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }}>


        

            <Text
            
            >To start with, what's your name?</Text>
            
            <Box>
                <TextInput 

                    onChange={(e) => { 
                    setFormData ({
                        ...formData,
                        name: e.target.value,
                });
            }}
            sx={{
                margin: '1rem 0',
                width: '400px',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                


                
            }}
            value={formData.name}
            placeholder="John Doe"
            required
           />

            
</Box>

    </Box>
</Box>
    );

 }

 export default First;
