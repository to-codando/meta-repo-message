export default state => {
  state.merge({
    message: 'A simple AppMessage component!'
  })

  const getState = () => state.get()

  return { getState }
}
