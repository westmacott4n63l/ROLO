import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

export default function SearchBar ({ placeholder }:{placeholder?: string}) {
  return ( 
    
    <TextField
          id='marketSearch'
          variant='filled'
          size='small'
          hiddenLabel
          placeholder= {placeholder}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
    )
}

