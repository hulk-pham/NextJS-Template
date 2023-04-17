import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from 'src/pages/index'

describe('Home', () => {
  it('renders home page', () => {
    render(<Home />)

    // check if all components are rendered
    expect(screen.getAllByText(/Congratulations/)[0]).toBeInTheDocument()
  })
})
