import React from "react";

const PostCardHeader = () => {
  return (
    <div className="w-full h-fit flex flex-row items-center justify-between border-b pb-6 ">
      {/* Left two  */}
      <div className="flex">
        {/* Avatar */}
        <div className="flex flex-col ">
          <div className="w-12 h-12 bg-gray-500 rounded-md"></div>
        </div>

        {/* Name and Date */}
        <div className="flex flex-col justify-start ml-4">
          {/* Name */}
          <div className="w-fit h-6 ">
            <p className="leading-none font-semibold">Cameron Williamson</p>
          </div>

          {/* Role Category and times */}
          <div className="flex flex-row gap-2 w-fit h-fit items-center mt-1 ">
            <p className="leading-none text-base text-gray-500">
              UI UX Designer
            </p>{" "}
            <div className=" w-1 h-1 bg-gray7-700  rounded-full"></div>
            <a href="#" className="underline text-green-500">
              <p className="leading-none text-base ">News & events</p>
            </a>{" "}
            <div className=" w-1 h-1 bg-gray-700  rounded-full"></div>
            <p className="leading-none text-base text-gray-500">2 mins ago</p>
          </div>
        </div>
      </div>

      {/* Right two */}
      <div className="inline-flex gap-9 text-green-600">
        {/* Eye */}
        <svg
         className="cursor-pointer hover:fill-green-500"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_140_25166) hover:fill-green-500" >
            <path className="hover:fill-green-500 "
              d="M12.4993 4.1665C7.29102 4.1665 2.8431 7.40609 1.04102 11.979C2.8431 16.5519 7.29102 19.7915 12.4993 19.7915C17.7077 19.7915 22.1556 16.5519 23.9577 11.979C22.1556 7.40609 17.7077 4.1665 12.4993 4.1665ZM12.4993 17.1873C9.62435 17.1873 7.29102 14.854 7.29102 11.979C7.29102 9.104 9.62435 6.77067 12.4993 6.77067C15.3743 6.77067 17.7077 9.104 17.7077 11.979C17.7077 14.854 15.3743 17.1873 12.4993 17.1873ZM12.4993 8.854C10.7702 8.854 9.37435 10.2498 9.37435 11.979C9.37435 13.7082 10.7702 15.104 12.4993 15.104C14.2285 15.104 15.6243 13.7082 15.6243 11.979C15.6243 10.2498 14.2285 8.854 12.4993 8.854Z"
              fill="#495057"
            />
          </g>
          <defs>
            <clipPath id="clip0_140_25166" className="hover:fill-green-500" >
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* <div className="relative mx-2">
    <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
      Tooltip center
      <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
    </div>
  </div> */}
        
        {/* <div className="relative group inline-block">
   <button className="bg-blue-500 text-white px-4 py-2 rounded">Hover me</button>
   
</div>
   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2">
       Tooltip content
   </div> */}

        {/* Three dot Menu */}
        <svg
          width="5"
          height="19"
          viewBox="0 0 5 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 7.125C1.125 7.125 0 8.19375 0 9.5C0 10.8062 1.125 11.875 2.5 11.875C3.875 11.875 5 10.8062 5 9.5C5 8.19375 3.875 7.125 2.5 7.125ZM2.5 0C1.125 0 0 1.06875 0 2.375C0 3.68125 1.125 4.75 2.5 4.75C3.875 4.75 5 3.68125 5 2.375C5 1.06875 3.875 0 2.5 0ZM2.5 14.25C1.125 14.25 0 15.3188 0 16.625C0 17.9312 1.125 19 2.5 19C3.875 19 5 17.9312 5 16.625C5 15.3188 3.875 14.25 2.5 14.25Z"
            fill="#495057"
          />
        </svg>
      </div>

    </div>
  );
};

export default PostCardHeader;
