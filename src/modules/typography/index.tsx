// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TypographyTexts from './components/TypographyTexts'
import TypographyHeadings from './components/TypographyHeadings'

const TypographyDemo = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TypographyHeadings />
      </Grid>
      <Grid item xs={12}>
        <TypographyTexts />
      </Grid>
    </Grid>
  )
}

export default TypographyDemo
