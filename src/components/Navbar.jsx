const Navbar = function () {
    return (
           

 
            <nav className="glass-nav mt-2 rounded-xl bg-nav bg-gradient-to-br from-[#d3cef6] to-[#e5e0f8] md:left-6 md:right-6 md:top-6 md:rounded-4xl text-white flex items-center justify-between px-4 md:px-8 py-3 md:py-4 fixed md:w-auto z-20 w-full">
  {/* Left: Logo */}
  <div className="flex items-center z-10">
    <img src="Navlogo.svg" alt="Logo" />
  </div>

  {/* Center: Navigation Menu */}
  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
    <ul className="flex text-black  list-none gap-6 text-center items-center">
      <li className="hover:text-Home text-1xl]">Home</li>
      <li>About</li>
      <li>Instructors</li>
      <li>Program</li>
      <li>FAQ</li>
      <li>Contats</li>
      <li>News & Articles</li>
    </ul>

    
  </div>
 <div className="bg-gradient-to-r from-[#6E38F7] to-[#8A3FFC] w-35 h-11 md:rounded-4xl text-center flex items-center justify-center font-semibold shadow-md hover:scale-105 transition cursor-pointer ">
  <button className="bg inline-block cursor-pointer">Enroll Now</button>
</div>

  
</nav>
 
    )
}

export default Navbar;