import Link from 'next/link'
import stylesheet from './Footer.css'

export default ({ pathname }) =>
  <footer>
    <small>&copy; <span>{new Date().getFullYear()}</span> hrfmmymt.</small>
    <style jsx>{stylesheet}</style>
  </footer>
