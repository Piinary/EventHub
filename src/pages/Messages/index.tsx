import DefaultLayout from "../../layouts/DefaultLayout";

function Messages() {
  return (
    <DefaultLayout>
      <h1>Messages</h1>
      <button className="group relative border 
            border-solid 
            flex items-center justify-center 
            transition-all duration-600 ease-in-out">  
            content  
            <div className="
            absolute top-[-50px] left-[-75px] w-[50px] h-[155px] bg-red opacity-20 
            transform rotate-[35deg] transition-all duration-550 
            ease-in-out z-[-10] after:content-[''] group-hover:left-[160%]" />  
        </button>
    </DefaultLayout>
  );
}

export default Messages;
