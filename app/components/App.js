import Header from './Header'
import Footer from './Footer'
import globalStyles from './Global.css'
import stylesheet from './App.css'

const App = ({ children }) =>
  <main>
    <Header />

    {children}

    <style jsx global>{globalStyles}</style>
    <style jsx>{stylesheet}</style>

    <Footer />
  </main>


export default App
