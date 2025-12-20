import "../pages/Home"

const Home = () => 
             <div className=" bg-[url('/Art.jpg')] bg-cover bg-center w-full h-589 ">
            <div className="absolute inset-0 bg-black/50 z-10 h-589"> 
        <div className="relative w-full overflow-x-hidden">

  {/* ================= HERO CONTENT ================= */}
  <div className="flex mt-35 flex-col md:flex-row items-center md:items-start">

    {/* TEXT BLOCK */}
    <div
      className="
        relative
        md:absolute
        md:ml-20 md:mt-30
        px-6 md:px-0
        text-center md:text-left
        z-10
      "
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-Homet">
        Boost Your Business <br />
        Productivity with <br />
        AI Technologies
      </h1>

      {/* BUTTON + TEXT */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-10">
        <div className="bg-gradient-to-r from-[#6E38F7] to-[#8A3FFC] w-62 h-15 rounded-full flex items-center justify-center font-semibold shadow-md hover:scale-105 transition cursor-pointer">
          <button className="text-white text-xl">
            Become AI Expert
          </button>
        </div>

        <p className="text-white text-lg md:text-2xl max-w-md">
          Stay ahead of industry trends by adopting <br className="hidden md:block" />
          cutting-edge AI technologies.
        </p>
      </div>
    </div>

    {/* IMAGE */}
    <img
      src="AI.webp"
      alt="AI"
      className="
        w-full max-w-[300px]
        md:max-w-none md:h-140
        mt-16 md:mt-48
        md:ml-210 mb-[-70px]
      "
    />
  </div>

  {/* ================= FEATURES ================= */}
  <div
    className="
      
      md:absolute
      mt-20 md:mt-[-70px]
      px-6 md:px-0
      md:ml-32
      flex flex-col sm:flex-row
      gap-10
      items-center
    "
  >

    {/* Feature 1 */}
    <div className="flex  items-start gap-4 max-w-xs">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/chatgpt-4.svg" alt="" className="w-8 h-8" />
      </div>
      <p className="text-white text-lg font-medium">
        Master the fundamentals <br />
        of AI tools usage
      </p>
    </div>

    {/* Feature 2 */}
    <div className="flex items-start gap-4 max-w-xs">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/ahead.svg" alt="" className="w-9 h-9" />
      </div>
      <p className="text-white text-lg font-medium">
        Integrate AI technologies <br />
        into your business
      </p>
    </div>

    {/* Feature 3 */}
    <div className="flex items-start gap-4 max-w-xs">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/rocket.svg" alt="" className="w-8 h-8" />
      </div>
      <p className="text-white text-lg font-medium">
        Automate routine tasks <br />
        & enhance productivity
      </p>
    </div>

  </div>
</div>

      
         
         

      <div className=" bg-Section  ">
          <div className="  inset-0 bg-black/10   h-auto sm-h-30000"> 
   <div className="flex justify-center px-4">
  <section
    className="
      w-full max-w-[1000px]
      mt-20
      bg-gradient-to-br from-[#d5cfff] to-[#e5e0f8]
      rounded-3xl
      flex flex-col md:flex-row
      items-center
      gap-10
      p-6 md:p-10
      shadow-lg
    "
  >

    {/* IMAGE */}
    <div className="w-full md:w-[420px]">
      <img
        src="/square001.jpg"
        alt="AI Productivity Gears"
        className="rounded-2xl w-full h-auto"
      />
    </div>

    {/* TEXT */}
    <div className="w-full md:flex-1 text-center md:text-left">

      {/* META */}
      <div
        className="
          flex flex-wrap
          justify-center md:justify-start
          gap-6
          text-black font-bold text-base
          mb-6
        "
      >
        <div className="flex items-center gap-2">
          <img src="calendar.svg" alt="" className="w-5" />
          2 Weeks
        </div>

        <div className="flex items-center gap-2">
          <img src="television.svg" alt="" className="w-5" />
          6 Lessons
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 6v6h4m6 6H6a2 2 0 01-2-2V6a2 2 0 012-2h12l4 4v12a2 2 0 01-2 2z"
            />
          </svg>
          Certificate
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-900 leading-snug mb-8">
        Are You Ready to Boost <br className="hidden md:block" />
        Productivity with AI?
      </h1>

      {/* BUTTONS */}
      <div
        className="
          flex flex-col sm:flex-row
          items-center
          justify-center md:justify-start
          gap-4
        "
      >
        <button className="border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-full text-base font-semibold hover:bg-black/10 transition">
          Course Program
        </button>

        <button className="bg-gradient-to-r from-[#6E38F7] to-[#8A3FFC] text-white px-8 py-3 rounded-full text-base font-semibold shadow-md hover:scale-105 transition">
          Enroll Now
        </button>
      </div>

    </div>
  </section>
</div>

{/* 
---------------------------------------------------------------------------- */}

<section
  className="
    px-6
    mt-20
    md:m-32 md:mt-40
  "
>
  <div className="flex flex-col md:flex-row items-center justify-between gap-14">

    {/* TEXT */}
    <div className="max-w-2xl text-center md:text-left">

      <h1 className="text-2xl md:text-3xl text-Section3">
        Comprehensive Online Course
      </h1>

      <h2 className="mt-5 text-3xl sm:text-4xl md:text-6xl text-Homet leading-tight">
        AI Technologies for <br className="hidden md:block" />
        <span>Business Productivity</span>
      </h2>

      <p className="mt-8 text-Section3t text-base sm:text-lg md:text-[20px]">
        In today’s competitive landscape, leveraging technology isn’t just an
        advantage — it’s a necessity.
      </p>

      <p className="mt-6 text-Section3t text-base sm:text-lg md:text-[20px]">
        Our online course equips you with the knowledge and tools to integrate
        AI into your business seamlessly.
      </p>

      <div className="mt-10 flex justify-center md:justify-start">
        <div className="bg-gradient-to-r from-[#6E38F7] to-[#8A3FFC] px-8 py-4 rounded-full text-center font-semibold shadow-md hover:scale-105 transition cursor-pointer">
          <button className="text-white text-lg md:text-xl">
            Meet your Instructor
          </button>
        </div>
      </div>
    </div>

    {/* IMAGE */}
    <div
  className="w-[300px] h-[300px] bg-center bg-cover shadow-[0_0_100px_rgba(144,0,255,0.6),0_0_40px_rgba(0,255,255,0.3),0_0_60px_rgba(255,0,255,0.2)] animate-pulse"
  style={{
    backgroundImage: "url('/square.webp')", // <-- Replace with your actual image path
    borderRadius: '1% 0% 60% 40% / 40% 0% 0% 0%',
    border: '4px solid rgba(255,255,255,0.15)',
  }}
></div>
</div>
</section>

{/* 
---------------------------------------------------------------------------- */}

<section className="px-6 mt-20 md:m-32">
  <div>

    {/* TITLE */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl text-Section3 mt-3 text-center md:text-left">
      <span className="text-Homet">Course</span> Highlights
    </h1>

    {/* GRID */}
    <div
      className="
        mt-12
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10
      "
    >

      {/* CARD 1 */}
      <div className="text-center sm:text-left">
        <img
          src="Section4-1.webp"
          alt=""
          className="w-full h-40 object-cover rounded-2xl"
        />
        <h2 className="text-white text-xl md:text-2xl font-bold mt-5">
          Interactive Learning
        </h2>
        <p className="mt-3 text-Section3t text-sm md:text-[17px]">
          Engage in hands-on projects and live Q&amp;A sessions.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="text-center sm:text-left">
        <img
          src="Section4-2.webp"
          alt=""
          className="w-full h-40 object-cover rounded-2xl"
        />
        <h2 className="text-white text-xl md:text-2xl font-bold mt-5">
          Expert-Led Sessions
        </h2>
        <p className="mt-3 text-Section3t text-sm md:text-[17px]">
          Learn from industry professionals with real-world AI experience.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="text-center sm:text-left">
        <img
          src="Section4-3.webp"
          alt=""
          className="w-full h-40 object-cover rounded-2xl"
        />
        <h2 className="text-white text-xl md:text-2xl font-bold mt-5">
          Flexible Schedule
        </h2>
        <p className="mt-3 text-Section3t text-sm md:text-[17px]">
          Access course materials anytime, anywhere to fit your busy lifestyle.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="text-center sm:text-left">
        <img
          src="Section4-4.webp"
          alt=""
          className="w-full h-40 object-cover rounded-2xl"
        />
        <h2 className="text-white text-xl md:text-2xl font-bold mt-5">
          Community Support
        </h2>
        <p className="mt-3 text-Section3t text-sm md:text-[17px]">
          Join a network of like-minded professionals and collaborate on ideas.
        </p>
      </div>

    </div>
  </div>
</section>

{/* 
---------------------------------------------------------------------------- */}

  <div className="flex mt-20 justify-center px-4">
  <section
    className="
      w-full
      max-w-[1130px]
      bg-gradient-to-br from-[#d5cfff] to-[#e5e0f8]
      rounded-2xl
      md:rounded-tl-[40px]
      shadow-lg
      flex
      flex-col
      md:flex-row
      gap-10
      p-6
      md:p-10
    "
  >
    {/* IMAGE */}
    <div className="w-full md:w-[420px]">
      <img
        src="/Section5.webp"
        alt="AI Productivity Gears"
        className="rounded-2xl w-full h-auto"
      />
    </div>

    {/* CONTENT */}
    <div className="flex-1">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-[40px] text-black font-medium mb-8 text-center md:text-left">
        What Skills You'll Gain
      </h1>

      {/* SKILLS LIST */}
      <div className="flex flex-col gap-8">

        {/* ITEM */}
        <div className="flex flex-col sm:flex-row gap-4">
          <img src="chatgpt-4.svg" alt="" className="w-8 h-8 flex-shrink-0" />

          <div className="flex flex-col sm:flex-row sm:gap-10">
            <h2 className="text-xl font-medium sm:w-[220px]">
              Comprehensive <br className="hidden sm:block" />
              Understanding of AI
            </h2>

            <p className="text-[15px] font-light text-gray-700 mt-2 sm:mt-0">
              Grasp the fundamentals of AI and how it applies to various
              business functions.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <img src="ahead.svg" alt="" className="w-8 h-8 flex-shrink-0" />

          <div className="flex flex-col sm:flex-row sm:gap-10">
            <h2 className="text-xl font-medium sm:w-[220px]">
              Enhanced <br className="hidden sm:block" />
              Efficiency
            </h2>

            <p className="text-[15px] font-light text-gray-700 mt-2 sm:mt-0">
              Learn how to automate tasks and streamline workflows using AI.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <img src="Ai-2.svg" alt="" className="w-8 h-8 flex-shrink-0" />

          <div className="flex flex-col sm:flex-row sm:gap-10">
            <h2 className="text-xl font-medium sm:w-[220px]">
              Improved <br className="hidden sm:block" />
              Customer Engagement
            </h2>

            <p className="text-[15px] font-light text-gray-700 mt-2 sm:mt-0">
              Use AI-driven insights to personalize and improve customer
              experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <img src="flag.svg" alt="" className="w-8 h-8 flex-shrink-0" />

          <div className="flex flex-col sm:flex-row sm:gap-10">
            <h2 className="text-xl font-medium sm:w-[220px]">
              Competitive Edge
            </h2>

            <p className="text-[15px] font-light text-gray-700 mt-2 sm:mt-0">
              Stay ahead of competitors by applying AI strategically in your
              business.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>

{/* 
---------------------------------------------------------------------------- */}
<section className="px-6 mt-20 md:m-20 md:mt-35">
  <div>

    {/* TITLE */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl text-Section3 text-center md:text-left">
      <span className="text-Homet">This Course is</span> Definitely <br className="hidden md:block" />
      for You <span className="text-Homet">if You</span>
    </h1>

    {/* LIST */}
    <div
      className="
        mt-14
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-10
      "
    >

      {/* ITEM */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex-shrink-0">
          <img src="/chatgpt-4.svg" alt="" className="w-7 h-7" />
        </div>
        <p className="text-Homet text-base sm:text-lg">
          Have an interest in AI technology but don’t know where to start
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex-shrink-0">
          <img src="/flag.svg" alt="" className="w-7 h-7" />
        </div>
        <p className="text-Homet text-base sm:text-lg">
          Want clear direction and practical learning paths
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex-shrink-0">
          <img src="/ahead2.svg" alt="" className="w-7 h-7" />
        </div>
        <p className="text-Homet text-base sm:text-lg">
          Want to improve productivity using AI tools
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex-shrink-0">
          <img src="/mic.svg" alt="" className="w-7 h-7" />
        </div>
        <p className="text-Homet text-base sm:text-lg">
          Prefer learning from experts and live discussions
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex-shrink-0">
          <img src="/ahead.svg" alt="" className="w-7 h-7" />
        </div>
        <p className="text-Homet text-base sm:text-lg">
          Are ready to apply AI solutions to real problems
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex-shrink-0">
          <img src="/Ai-2.svg" alt="" className="w-7 h-7" />
        </div>
        <p className="text-Homet text-base sm:text-lg">
          Want to stay competitive in a fast-changing tech world
        </p>
      </div>

    </div>
  </div>
</section>


    {/* ---------------------------------------------------------------------------- */} 
   {/* Instructors Section */}
<section className="m-6 md:m-20">
  <div>
    <h1 className="text-3xl sm:text-4xl md:text-6xl text-Section3 mt-3 text-center md:text-left">
      <span className="text-Homet">You Will Be Taught by</span>
      <br />
      Experienced <span className="text-Homet">Instructors</span>
    </h1>

    {/* Instructors Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Instructor 1 */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img src="persons1.webp" className="h-60 sm:h-72 md:h-80 rounded-2xl" alt="" />
        <h1 className="mt-5 text-Homet text-2xl">Amelia Rivers</h1>
        <h2 className="mt-2 text-Home text-[15px]">AI Startup Founder</h2>
        <h3 className="mt-3 text-Section3t text-[15px] sm:text-[17px]">
          Forward-thinking entrepreneur leading cutting-edge machine learning ventures.
          Her strategic insight helps businesses implement and scale AI solutions effortlessly.
        </h3>
      </div>

      {/* Instructor 2 */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img src="persons2.webp" className="h-60 sm:h-72 md:h-80 rounded-2xl" alt="" />
        <h1 className="mt-5 text-Homet text-2xl">Ethan Carter</h1>
        <h2 className="mt-2 text-Home text-[15px]">Senior AI Engineer</h2>
        <h3 className="mt-3 text-Section3t text-[15px] sm:text-[17px]">
          Expert in designing and refining complex neural networks for real-world impact.
          Known for hands-on guidance, empowering teams to harness AI efficiently.
        </h3>
      </div>

      {/* Instructor 3 */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img src="persons3.webp" className="h-60 sm:h-72 md:h-80 rounded-2xl" alt="" />
        <h1 className="mt-5 text-Homet text-2xl">Sophia Lane</h1>
        <h2 className="mt-2 text-Home text-[15px]">AI Consultant</h2>
        <h3 className="mt-3 text-Section3t text-[15px] sm:text-[17px]">
          Specializes in tailoring AI strategies to diverse industries, ensuring seamless
          integration and tangible growth. Her consultative approach fosters impactful results.
        </h3>
      </div>
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="m-6 md:m-20 mt-10">
  <h1 className="text-3xl sm:text-4xl md:text-6xl text-Section3 mt-3 text-center md:text-left">
    <span className="text-Homet">Hear from Our</span>
    <br />
    Success Stories
  </h1>

  {/* Horizontal Scroll for Small Screens */}
  <div className="mt-10 overflow-x-auto">
    <div className="flex gap-6 snap-x snap-mandatory px-2 pb-6 overflow-x-scroll scrollbar-hide">

      {/* Testimonial Card Example */}
      {[1,2,3,4,5,6,7].map((i) => (
        <div key={i} className="snap-center min-w-[280px] sm:min-w-[320px] bg-gradient-to-b from-[#e4dbff] to-[#f5f1ff] p-6 rounded-3xl shadow-lg flex-shrink-0">
          <p className="text-lg text-gray-800 italic mb-4">
            “This is a sample testimonial #{i}. The course has helped us tremendously!”
          </p>
          <div className="flex items-center">
            <img src={`/persons${(i%3)+1}.webp`} alt={`Person ${i}`} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Person {i}</h3>
              <p className="text-sm text-gray-600">Position {i}</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>



{/* What You'll Specifically Learn */}
<section className="m-4 sm:m-10 md:m-20">
  <div>
    <h1 className="text-3xl sm:text-4xl md:text-6xl text-Section3 mt-3 text-center md:text-left">
      What <span className="text-Homet">You'll <br /> Specifically Learn</span>
    </h1>

    {/* Grid layout for lessons */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Lesson 1 */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        <img src="Ai.jpg" className="h-36 sm:h-40 md:h-44 rounded-2xl" alt="" />
        <div>
          <h1 className="text-2xl text-white">Introduction to Artificial <br /> Intelligence</h1>
          <h3 className="text-Section3t mt-2 text-sm sm:text-base">
            Understanding AI concepts and terminology.
          </h3>
        </div>
      </div>

      {/* Lesson 2 */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        <img src="Drug.jpg" className="h-36 sm:h-40 md:h-44 rounded-2xl" alt="" />
        <div>
          <h1 className="text-2xl text-white">AI in Various Industries</h1>
          <h3 className="text-Section3t mt-2 text-sm sm:text-base">
            Case studies on AI applications from programming to medicine.
          </h3>
        </div>
      </div>

      {/* Lesson 3 */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        <img src="Plant.jpg" className="h-36 sm:h-40 md:h-44 rounded-2xl" alt="" />
        <div>
          <h1 className="text-2xl text-white">Integrating AI Technologies into Your Business</h1>
          <h3 className="text-Section3t mt-2 text-sm sm:text-base">
            Step-by-step guidance on selecting and implementing AI tools.
          </h3>
        </div>
      </div>

      {/* Lesson 4 */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        <img src="Generate.jpg" className="h-36 sm:h-40 md:h-44 rounded-2xl" alt="" />
        <div>
          <h1 className="text-2xl text-white">Automating Business Processes</h1>
          <h3 className="text-Section3t mt-2 text-sm sm:text-base">
            Techniques for streamlining operations using AI technology.
          </h3>
        </div>
      </div>

      {/* Lesson 5 */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        <img src="Brain.jpg" className="h-36 sm:h-40 md:h-44 rounded-2xl" alt="" />
        <div>
          <h1 className="text-2xl text-white">Enhancing Customer Experience</h1>
          <h3 className="text-Section3t mt-2 text-sm sm:text-base">
            Utilizing AI for personalized marketing and support.
          </h3>
        </div>
      </div>

      {/* Lesson 6 */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
        <img src="line.jpg" className="h-36 sm:h-40 md:h-44 rounded-2xl" alt="" />
        <div>
          <h1 className="text-2xl text-white">Data Analysis and Decision-Making</h1>
          <h3 className="text-Section3t mt-2 text-sm sm:text-base">
            Leveraging AI for insightful analytics and forecasting.
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Course Curriculum Section */}
<section className="m-4 sm:m-10 md:m-20">
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left - Curriculum Accordion */}
    <div className="bg-[#240E5C] rounded-3xl w-full lg:w-1/2 max-h-[450px] overflow-y-auto shadow-lg p-4 sm:p-6">
      {[
        {num:1, title:"What is Generative Artificial Intelligence?", desc:"Introduction. Core fundamentals of AI technology."},
        {num:2, title:"AI-Based Services", desc:"Explore robust AI-based solutions, leverage advanced machine intelligence, enhance daily operations with AI analytics, implement synergy within teams."},
        {num:3, title:"AI in Marketing", desc:"Applying AI tools in customer engagement and brand visibility."},
        {num:4, title:"NLP in Business", desc:"Use natural language models for communication, chatbots, and support."},
        {num:5, title:"Predictive Analytics", desc:"Analyze trends and forecast outcomes using AI models."},
        {num:6, title:"AI Ethics", desc:"Understand ethical implications of AI and responsible usage."},
        {num:7, title:"Final Project", desc:"Hands-on project to apply your AI knowledge in a real-world scenario."},
      ].map((item) => (
        <div key={item.num} className="border-b border-[#2C1A5E] py-4">
          <div className="flex items-start space-x-4">
            <div className="text-2xl text-purple-400 font-bold">{item.num}.</div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-purple-300 text-sm">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right - Course Details */}
    <div className="flex flex-col w-full lg:w-1/2 gap-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">Course <span className="text-Home">Curriculum</span></h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-purple-600">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" /* icon omitted */ />
          <span>2 Weeks</span>
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" /* icon omitted */ />
          <span>6 Online Lessons</span>
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" /* icon omitted */ />
          <span>Certificate of Completion</span>
        </div>
      </div>

      <p className="text-Section3t text-base sm:text-lg">
        We have created a course program for the current needs of everyone interested in using AI in marketing.
      </p>
      <p className="text-Section3t text-base sm:text-lg">
        You will have 3 intensive weeks of training and practice with support from experienced specialists.
      </p>
    </div>
  </div>
</section>



{/* Certificate Section */}
<section className="m-4 sm:m-10 md:m-20">
  <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Text */}
    <div className="lg:w-1/2">
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-Section3 mt-3">
        Certificate <span className="text-Homet">of <br /> Completion</span>
      </h1>
      <h3 className="mt-5 sm:mt-10 text-Section3t text-sm sm:text-lg md:text-[20px]">
        After completing the course and the final test, you will receive a certificate that
        certifies you have acquired thorough knowledge and skills in the use of artificial
        intelligence in automating business processes.
      </h3>
    </div>

    {/* Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img src="Certificate-2.webp" alt="Certificate" className="w-full max-w-md h-auto" />
    </div>
  </div>
</section>

{/* Benefits Section */}
<section className="m-4 sm:m-10 md:m-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Benefit 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mt-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/chatgpt-4.svg" alt="ChatGPT Icon" className="w-8 h-8" />
      </div>
      <h1 className="mt-3 text-white text-lg sm:text-xl md:text-2xl">Official Certification</h1>
      <h2 className="mt-1 text-Section3t text-[14px] sm:text-[15px] md:text-[17px]">
        Receive a recognized diploma <br /> verifying your AI proficiency
      </h2>
    </div>

    {/* Benefit 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mt-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/chatgpt-4.svg" alt="ChatGPT Icon" className="w-8 h-8" />
      </div>
      <h1 className="mt-3 text-white text-lg sm:text-xl md:text-2xl">Career Advancement</h1>
      <h2 className="mt-1 text-Section3t text-[14px] sm:text-[15px] md:text-[17px]">
        Enhance your resume and <br /> stand out to employers
      </h2>
    </div>

    {/* Benefit 3 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mt-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/chatgpt-4.svg" alt="ChatGPT Icon" className="w-8 h-8" />
      </div>
      <h1 className="mt-3 text-white text-lg sm:text-xl md:text-2xl">Professional Credibility</h1>
      <h2 className="mt-1 text-Section3t text-[14px] sm:text-[15px] md:text-[17px]">
        Demonstrate your commitment <br /> to continuous learning
      </h2>
    </div>

    {/* Benefit 4 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mt-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-800">
        <img src="/chatgpt-4.svg" alt="ChatGPT Icon" className="w-8 h-8" />
      </div>
      <h1 className="mt-3 text-white text-lg sm:text-xl md:text-2xl">Networking Opportunities</h1>
      <h2 className="mt-1 text-Section3t text-[14px] sm:text-[15px] md:text-[18px]">
        Connect with peers and industry professionals
      </h2>
    </div>
  </div>
</section>



{/* Get Started Section */}
<section className="mt-10 sm:mt-20 px-4">
  <div className="text-center text-Home">
    <h1 className="text-3xl sm:text-4xl md:text-6xl">
      <span className="text-white">Get Started</span> Now
    </h1>
    <h3 className="text-Section3t mt-3 sm:mt-5 text-lg sm:text-xl md:text-[22px]">
      Choose the plan that works best for you
    </h3>
  </div>

  <div className="flex justify-center items-center p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
      {/* One-Time Payment */}
      <div className="bg-gradient-to-b from-[#d6caff] to-[#f1ecff] rounded-3xl p-8 sm:p-10 flex flex-col items-center shadow-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-black">One Time Payment</h2>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full my-3"></div>
        <p className="text-6xl sm:text-[90px] font-light text-black">$247</p>
        <p className="text-purple-600 text-lg sm:text-xl mb-6">Save $50!</p>
        <button className="bg-gradient-to-b from-purple-500 to-indigo-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* 3 Payments */}
      <div className="bg-gradient-to-b from-[#d6caff] to-[#f1ecff] rounded-3xl p-8 sm:p-10 flex flex-col items-center shadow-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-black">3 Payments</h2>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full my-3"></div>
        <p className="text-6xl sm:text-[90px] font-light text-black">
          $99<span className="text-2xl sm:text-4xl">/Week*</span>
        </p>
        <p className="text-purple-600 text-lg sm:text-xl mb-1">Totalling $297</p>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">* first payment due upfront</p>
        <button className="bg-gradient-to-b from-purple-500 to-indigo-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="mt-10 sm:mt-20 px-4">
  <div className="text-center text-Home mb-8">
    <h1 className="text-3xl sm:text-4xl md:text-6xl">
      <span className="text-white">Frequently Asked</span> Questions
    </h1>
  </div>

  <div className="flex justify-center p-4">
    <div className="w-full max-w-3xl space-y-2 sm:space-y-3">
      {[
        "Is this course suitable for beginners?",
        "How long is the course?",
        "Will I receive a certificate upon completion?",
        "What if I have questions during the course?",
        "If the course doesn’t suit me, can I get a refund?"
      ].map((question, i) => (
        <div
          key={i}
          className={`bg-[#2a1060] flex items-center gap-4 p-4 sm:p-5 rounded-lg ${
            i === 0 ? "rounded-t-3xl" : i === 4 ? "rounded-b-3xl" : ""
          } hover:bg-[#3a1780] transition`}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-400 text-purple-300 text-lg">
            ?
          </div>
          <p className="text-white text-sm sm:text-lg">{question}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Contact Section */}
<section className="mt-10 sm:mt-20 px-4 flex flex-col lg:flex-row items-center gap-10">
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-6xl text-white">Have Additional <br />Questions?</h1>
    <h3 className="text-Section3t text-base sm:text-lg md:text-[22px] mt-4 sm:mt-8">
      Get in touch! Our team of support specialists are available to speak with you about our program.
    </h3>

    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row mt-5 gap-6 sm:gap-10 justify-center lg:justify-start">
      {/* Phone */}
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.527 122.88" className="w-6 h-6" fill="#9333EA">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.831,8.606h11.293V0h3.495v8.606h6.991v101.638H11.831V8.606zM4.569,16.135h3.127v93.591c0,3.174,2.599,5.773,5.773,5.773h18.729c3.177,0,5.774-2.6,5.774-5.773V16.135h53.984c2.516,0,4.57,2.057,4.57,4.572v97.604c0,2.515-2.055,4.569-4.57,4.569H4.569c-2.515,0-4.569-2.055-4.569-4.569V20.707C0,18.191,2.055,16.135,4.569,16.135zM49.557,22.87H84.27c1.949,0,3.539,1.589,3.539,3.533v15.951c0,1.948-1.59,3.538-3.539,3.538H49.557c-1.946,0-3.536-1.59-3.536-3.538V26.403C46.021,24.459,47.61,22.87,49.557,22.87z"/>
        </svg>
        <h1 className="text-Homet text-sm sm:text-[20px]">+234-916-131-323-1</h1>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.527 122.88" className="w-6 h-6" fill="#9333EA">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.831,8.606h11.293V0h3.495v8.606h6.991v101.638H11.831V8.606zM4.569,16.135h3.127v93.591c0,3.174,2.599,5.773,5.773,5.773h18.729c3.177,0,5.774-2.6,5.774-5.773V16.135h53.984c2.516,0,4.57,2.057,4.57,4.572v97.604c0,2.515-2.055,4.569-4.57,4.569H4.569c-2.515,0-4.569-2.055-4.569-4.569V20.707C0,18.191,2.055,16.135,4.569,16.135zM49.557,22.87H84.27c1.949,0,3.539,1.589,3.539,3.533v15.951c0,1.948-1.59,3.538-3.539,3.538H49.557c-1.946,0-3.536-1.59-3.536-3.538V26.403C46.021,24.459,47.61,22.87,49.557,22.87z"/>
        </svg>
        <h1 className="text-Homet text-sm sm:text-[20px]">support@yourcourse.com</h1>
      </div>
    </div>

    {/* Input + Button */}
    <div className="flex justify-center lg:justify-start mt-4 sm:mt-5">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input 
          type="tel" 
          placeholder="Enter Your Phone Number" 
          className="flex-1 w-full sm:w-auto bg-[#e8e4ff] text-gray-500 placeholder-gray-500 text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-gradient-to-b from-purple-500 to-indigo-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:opacity-90 transition w-full sm:w-auto">
          Request Callback
        </button>
      </div>
    </div>
  </div>

  {/* AI Chip Image */}
  <div
    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px] mt-8 lg:mt-0 mx-auto lg:mx-0 bg-center bg-cover shadow-[0_0_100px_rgba(144,0,255,0.6),0_0_40px_rgba(0,255,255,0.3),0_0_60px_rgba(255,0,255,0.2)] animate-pulse"
    style={{
      backgroundImage: "url('/Quetion.jpg')",
      borderRadius: '1% 0% 60% 40% / 40% 0% 0% 0%',
      border: '4px solid rgba(255,255,255,0.15)',
    }}
  ></div>
</section>


  <footer>
    <footer class="bg-gradient-to-b from-[#0e0023] to-[#1c0a48] text-gray-300 py-12 px-6 md:px-20 mt-25">
  <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
    
    <div>
       <div className="flex items-center z-10">
    <img src="logo-ai-7-light-bottom.svg" alt="Logo" />
  </div>
      <p class="text-gray-400 leading-relaxed mb-6">
        Stay ahead of industry trends by adopting cutting-edge AI technologies.
      </p>

 
      <div class="flex space-x-5 text-2xl text-gray-400 mb-6">
        <i class="fab fa-facebook hover:text-purple-400 transition"></i>
        <i class="fab fa-youtube hover:text-purple-400 transition"></i>
        <i class="fab fa-x-twitter hover:text-purple-400 transition"></i>
        <i class="fab fa-instagram hover:text-purple-400 transition"></i>
      </div>

     
      <div class="flex items-center bg-[#1b0c3b] px-3 py-2 rounded-lg border border-white/10 w-64">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Search..." class="ml-2 bg-transparent text-gray-300 focus:outline-none w-full placeholder-gray-400"/>
      </div>
    </div>

    
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h2 class="text-white font-semibold mb-4">Explore</h2>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#" class="hover:text-purple-400 transition">About Course</a></li>
          <li><a href="#" class="hover:text-purple-400 transition">Pricing Plans</a></li>
          <li><a href="#" class="hover:text-purple-400 transition">News & Articles</a></li>
          <li><a href="#" class="hover:text-purple-400 transition">Design System</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-white font-semibold mb-4">Support</h2>
        <ul class="space-y-2 text-gray-400">
          <li><a href="#" class="hover:text-purple-400 transition">Terms & Conditions</a></li>
          <li><a href="#" class="hover:text-purple-400 transition">Cookie Policy</a></li>
          <li><a href="#" class="hover:text-purple-400 transition">Maintenance Page</a></li>
          <li><a href="#" class="hover:text-purple-400 transition">404 Error Page</a></li>
        </ul>
      </div>
    </div>

       <div
      class="relative bg-gradient-to-br from-[#0B0124] to-[#0B0124] rounded-3xl p-8 shadow-lg overflow-hidden"
    >
      
      <div
        class="absolute bottom-0 right-0 w-40 h-40 bg-[url('/art-ai-bottom-3.webp')] bg-no-repeat bg-contain bg-bottom-right opacity-90 pointer-events-none"
      ></div>

      
      <h2 class="text-2xl text-purple-300 font-semibold mb-4 relative z-10">Newsletter Signup</h2>
      <p class="text-gray-400 mb-4 relative z-10">
        Sign up to our newsletter and receive a
        <span class="text-purple-300 font-semibold">10% discount</span> on the course fee!
      </p>
      <button
        class="relative z-10 bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
      >
        Sign Up Now
      </button>
    </div>
  </div>
 
  <div class="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
    <p>© Template Usage | No Rights Reserved</p>
    <p>Tomisin <a href="#" class="text-purple-400 hover:underline">Website Template</a> from <a href="https://the7.io/elementor-ai/#intro" class="text-purple-400 hover:underline">https://the7.io/elementor-ai/#topics</a></p>
  </div>
</footer>

  </footer>
</div>

</div>

         
   
    </div>
    </div>
    

    export default Home;