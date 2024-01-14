/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material"

const ColorText = ({color, children}) => {
  return (
   <Box sx={{color}} component='span' >{children}</Box>
  )
}

export default ColorText; 