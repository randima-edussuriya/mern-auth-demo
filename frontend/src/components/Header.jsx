
function Header() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 px-4 text-center text-gray-800">
      <img className="w-18 sm:w-22" src="favicon.svg" alt="header img png" />
      <h1 className="text-xl font-medium sm:text-2xl">Hey, User 👋</h1>
      <h1 className="text-3xl font-black text-transparent sm:text-5xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
        Welcome to MERN - Auth Demo App
      </h1>
      <p className="max-w-md">
        This is a simple authentication app built using the MERN stack (MongoDB,
        Express.js, React.js, Node.js) with JWT (JSON Web Tokens) for secure
        user authentication and authorization.
      </p>
      <p>Feel free to explore the app and test its features!</p>
      <p>Happy coding! 😊</p>
      <button className="px-6 py-2 text-green-700 border border-green-700 rounded-full cursor-pointer hover:bg-green-200 transition-all">
        Get Started
      </button>
    </div>
  );
}

export default Header;
