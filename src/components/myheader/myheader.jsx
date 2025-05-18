import NavBar from './navbar/navbar'

export default function MyHeader({
  navItems = [
    { label: 'Contact', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Pricing', href: '#' }
  ],
  mobileMenuOpen = false,
  setMobileMenuOpen = () => { },
  customClass = '',
  renderMobileMenu = false
}) {
  return (
    <div className={`${customClass}`}>
      {/* Navigation - Desktop */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden">
        <button
          className="hamburger-button w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex items-center justify-center">
            <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </div>
    </div>
  )
}