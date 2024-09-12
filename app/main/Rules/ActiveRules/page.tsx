'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import QuesIcon from '@/public/ProjectsImg/QuesIcon.png';
import searchIcon from '@/public/ProjectsImg/searchicon.png';
import filterIcon from '@/public/ProjectsImg/filtericon.png';
import sortIcon from '@/public/ProjectsImg/sorticon.png';
import adoptIcon from '@/public/ProjectsImg/adopticon.png';
import relevanceIcon from '@/public/ProjectsImg/rel1.png';
import relevanceIcon2 from '@/public/ProjectsImg/rel2.png';
import moreIcon from '@/public/ProjectsImg/more.png';
import upDownImg from '@/public/ProjectsImg/updown.png';
import CreateProject from '@/app/Components/Projects/CreateProject';
import { ongoingProjects, allProjects, globalProjects, myProjects, ProjectData } from '@/app/Components/Projects/ProjectData';
import RuleTable from './RuleTable';


const ActiveRules: React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>('Active Rules(12)');
  const [projects, setProjects] = useState<ProjectData[]>([]);
  

  const PopupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleIconClick = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
      console.log(`${option} clicked`);
      setIsOpen(false);
    };
   
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    return (
      <td className="p-3 text-xs relative">
        <Image
          src={moreIcon}
          alt="More"
          width={4}
          height={16}
          className="ml-4 cursor-pointer"
          onClick={handleIconClick}
        />
        {isOpen && (
          <div
            ref={popupRef}
            className="absolute mt-1 z-50 right-0 w-[20vh] bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <ul className="">
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Select')}>
                Select
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Edit')}>
                Edit
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Copy Link')}>
                Copy Link
              </li>
              <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Delete')}>
                Delete
              </li>
            </ul>
          </div>
        )}
      </td>
    );
  };
  useEffect(() => {
    handleTabChange('Active Rules(12)');
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Active Rules(12)':
        setProjects(ongoingProjects);
        break;
      case 'Proposed Rules(182)':
        setProjects(allProjects);
        break;
      case 'Global Library(2M)':
        setProjects(globalProjects);
        break;
      case 'Suggested Rules (2.36k)':
        setProjects(myProjects);
        break;
        case 'My Rules (2.36k)':
            setProjects(myProjects);
            break;
      default:
        setProjects([]);
    }
  };


  return (
    <div className="p-2 overflow-x-auto max-w-full">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800 flex items-center">
          Rules and Regulations
          <span className="ml-1">
            <Image src={QuesIcon} alt="Search" width={16} height={16} />
          </span>
        </h1>
        <p className="text-gray-500 text-xs mt-1">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at egestas. Iaculis semper risus sit egestas.
        </p>
      </div>
        <>
         <div className="flex space-x-4 mb-6 border-b-2 border-gray-300">
  {['Active Rules(12)', 'Proposed Rules(182)', 'Global Library(2M)', 'Suggested Rules (2.36k)', 'My rules(36)'].map(tab => (
    <button
      key={tab}
      onClick={() => handleTabChange(tab)}
      className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
    >
      {tab}
    </button>
  ))}
        </div>

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center flex-1 mx-4">
              <div className="flex items-center border rounded-lg px-4 py-1.5 bg-white flex-1">
                <Image src={searchIcon} alt="Search" width={10} height={10} />
                <input
                  type="text"
                  placeholder="Search for rules..."
                  className="outline-none flex-1 ml-2 text-xs"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-white border border-gray-300 flex items-center rounded-lg justify-center">
                <Image src={filterIcon} alt="Filter" width={10} height={150} />
              </div>

              <div className="p-2 bg-white border border-gray-300 flex items-center rounded-lg justify-center">
                <Image src={sortIcon} alt="Sort" width={10} height={10} />
              </div>
            </div>
          </div>
          <RuleTable/>
          <div className="mt-6 text-center flex items-center justify-center">
            <span className="text-gray-500 text-xs">Total 85 items</span>
            <div className="flex items-center ml-4 hover:bg-[#FFFFFF00]">
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">&lt;</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">1</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">...</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">4</button>
              <button className="px-4 py-3.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs"></button>
              <button className="px-4 py-3.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs"></button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">&gt;</button>

              <select className="px-3 py-2 ml-4 border rounded w-32 text-xs">
                <option value="" disabled selected>10 / page</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <label className="ml-2 text-xs">Go to</label>
              <input
                type="number"
                placeholder=""
                className="px-3 py-1.5 border rounded w-20 text-xs"
              />
            </div>
          </div>
        </>
    </div>
  );
};

export default ActiveRules;
