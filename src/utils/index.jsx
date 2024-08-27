
const Container = ({ children }) => {
  return (
   <>
    <div className='container mx-auto p-4 w-full'>
    {children}
    </div>
   
   </>
  )
}

export { Container }