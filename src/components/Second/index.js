import { Box, Text, TextInput, Title, Select } from '@mantine/core';


function Second({setFormData, formData}) {
    return (
        <Box 
        // sx={boxStyle}
        >
             <Title
        sx={{
          textAlign: 'center',
        }}
        order={2}
        >
        Let's get to know you
        </Title>
            
            <Box
            sx={{
                margin: '1rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
                
            }}
            >
            <Box sx={{
              
                

            }}>
            <label>Your email</label>
            <TextInput  sx={{
          width: '400px',
        }}
            placeholder="email@email.com"
            required
            />
            </Box>

<Select
    sx={{
        width: '400px',
      }}
       data={[
    { value: 'Student', label: 'Student' },
    { value: 'Employed', label: 'Employed' },
    { value: 'Business', label: 'Business' },
   ]}
    onChange={(e) => {
    console.log(e);
    setFormData({ ...formData, employment_status: e });
   }}
   
   value={formData.employment_status}
   label="Your employment status"
   placeholder="Choose one"
/>
            

    </Box>
</Box>
    );

 }

 export default Second;