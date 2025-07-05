export default function TopNav({ onCreateJobClick }){
    return (
        <div className="bg-white  py-2 px-8 ">
      <div className="max-w-4xl py-2 mx-auto flex justify-center items-center rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-4">
          <img src="https://ik.imagekit.io/em9ewcgec/logo.jpeg?updatedAt=1751637858730" className="h-10 w-10"/>
          <nav className="flex gap-8 text-gray-700">
            <a href="#" className="hover:text-purple-600">Home</a>
            <a href="#" className="hover:text-purple-600">Find Jobs</a>
            <a href="#" className="hover:text-purple-600">Find Talents</a>
            <a href="#" className="hover:text-purple-600">About us</a>
            <a href="#" className="hover:text-purple-600">Testimonials</a>
          </nav>
           <button
            onClick={onCreateJobClick}
            className="bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700"
          >
            Create Jobs
          </button>
        </div>
        
      </div>
    </div>
    )
}