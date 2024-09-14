'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
        <svg width="5" height="16" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
          </svg>
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.38321 0 0 5.38321 0 12.0001C0 18.6169 5.38321 24 12 24C18.6168 24 24 18.6169 24 12C24 5.38314 18.6168 0 12 0ZM12 21.981C6.49646 21.981 2.01896 17.5036 2.01896 12.0001C2.01896 6.49653 6.49646 2.01896 12 2.01896C17.5035 2.01896 21.981 6.49646 21.981 12.0001C21.981 17.5037 17.5035 21.981 12 21.981Z" fill="#212529"/>
<path d="M11.9998 4.50586C9.60532 4.50586 7.65723 6.45395 7.65723 8.84843C7.65723 9.40593 8.1092 9.85791 8.66671 9.85791C9.22421 9.85791 9.67618 9.40593 9.67618 8.84843C9.67618 7.5672 10.7186 6.52482 11.9998 6.52482C13.281 6.52482 14.3234 7.5672 14.3234 8.84843C14.3234 10.1297 13.281 11.172 11.9998 11.172C11.4423 11.172 10.9903 11.624 10.9903 12.1815V14.464C10.9903 15.0215 11.4423 15.4734 11.9998 15.4734C12.5573 15.4734 13.0093 15.0215 13.0093 14.464V13.0726C14.9186 12.6163 16.3424 10.8955 16.3424 8.84836C16.3424 6.45395 14.3943 4.50586 11.9998 4.50586Z" fill="#212529"/>
<path d="M12.0001 19.3069C12.7806 19.3069 13.4133 18.6742 13.4133 17.8937C13.4133 17.1132 12.7806 16.4805 12.0001 16.4805C11.2196 16.4805 10.5869 17.1132 10.5869 17.8937C10.5869 18.6742 11.2196 19.3069 12.0001 19.3069Z" fill="#212529"/>
</svg>

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
                <div className="flex items-center border rounded-md px-3 py-1.5 bg-white flex-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 16.5005C11.2879 16.5005 12.0682 16.3453 12.7961 16.0438C13.5241 15.7423 14.1855 15.3003 14.7427 14.7431C15.2998 14.186 15.7418 13.5246 16.0433 12.7966C16.3448 12.0687 16.5 11.2884 16.5 10.5005C16.5 9.71257 16.3448 8.93236 16.0433 8.2044C15.7418 7.47645 15.2998 6.81501 14.7427 6.25786C14.1855 5.70071 13.5241 5.25875 12.7961 4.95723C12.0682 4.6557 11.2879 4.5005 10.5 4.5005C8.90872 4.5005 7.38259 5.13264 6.25737 6.25786C5.13216 7.38308 4.50002 8.9092 4.50002 10.5005C4.50002 12.0918 5.13216 13.6179 6.25737 14.7431C7.38259 15.8684 8.90872 16.5005 10.5 16.5005ZM16.82 15.4065L20.4 18.9865C20.4955 19.0788 20.5716 19.1892 20.6239 19.3113C20.6762 19.4333 20.7037 19.5645 20.7048 19.6973C20.7058 19.8301 20.6804 19.9618 20.63 20.0846C20.5797 20.2075 20.5053 20.3191 20.4114 20.4129C20.3174 20.5067 20.2057 20.5809 20.0828 20.6311C19.9599 20.6813 19.8282 20.7065 19.6954 20.7052C19.5626 20.704 19.4314 20.6763 19.3095 20.6238C19.1875 20.5713 19.0772 20.4951 18.985 20.3995L15.405 16.8195C13.7975 18.0674 11.7748 18.6557 9.74877 18.4647C7.72273 18.2737 5.84562 17.3178 4.49957 15.7916C3.15351 14.2653 2.4397 12.2834 2.50344 10.2494C2.56718 8.2154 3.40368 6.28213 4.84266 4.84315C6.28164 3.40417 8.21492 2.56767 10.2489 2.50393C12.283 2.44019 14.2648 3.154 15.7911 4.50005C17.3173 5.84611 18.2732 7.72322 18.4642 9.74926C18.6552 11.7753 18.0669 13.798 16.819 15.4055L16.82 15.4065Z" fill="#6C757D"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for Projects..."
                    className="outline-none flex-1 ml-1 text-xs"                  />
                </div>
            </div>

          <div className="flex items-center space-x-2">
              <div className="p-2 bg-white border border-gray-200 flex items-center rounded-md justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.11111 16C6.75556 16 6.48889 15.913 6.13333 15.7391C5.6 15.3913 5.33333 14.8696 5.33333 14.2609V9.04348L0.533333 4.34783C0.177778 4 0 3.56522 0 3.13043V1.73913C0 0.782609 0.8 0 1.77778 0H14.2222C15.2 0 16 0.782609 16 1.73913V3.13043C16 3.56522 15.8222 4 15.4667 4.34783L10.6667 9.04348V13.3913C10.6667 14.087 10.3111 14.6087 9.68889 14.9565L7.91111 15.8261C7.64444 15.913 7.37778 16 7.11111 16ZM1.77778 1.73913V3.13043L6.57778 7.82609C6.93333 8.17391 7.11111 8.6087 7.11111 9.04348V14.2609L8.88889 13.3913V9.04348C8.88889 8.6087 9.06667 8.17391 9.42222 7.82609L14.2222 3.13043V1.73913H1.77778Z" fill="#6C757D"/>
                </svg>
              </div>

              <div className="p-2 bg-white border border-gray-200 flex items-center rounded-md justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00077 0C0.735344 0 0.480799 0.120413 0.293115 0.334736C0.105441 0.549071 0 0.839761 0 1.14287C0 1.44599 0.105441 1.73668 0.293115 1.95101C0.480799 2.16533 0.735344 2.28575 1.00077 2.28575H12.0092C12.2746 2.28575 12.5292 2.16533 12.7168 1.95101C12.9045 1.73668 13.01 1.44599 13.01 1.14287C13.01 0.839761 12.9045 0.549071 12.7168 0.334736C12.5292 0.120413 12.2746 0 12.0092 0H1.00077ZM1.00077 4.57149C0.735344 4.57149 0.480799 4.69191 0.293115 4.90623C0.105441 5.12056 0 5.41125 0 5.71437C0 6.01748 0.105441 6.30817 0.293115 6.52251C0.480799 6.73683 0.735344 6.85724 1.00077 6.85724H8.00614C8.27154 6.85724 8.52613 6.73683 8.71378 6.52251C8.90142 6.30817 9.0069 6.01748 9.0069 5.71437C9.0069 5.41125 8.90142 5.12056 8.71378 4.90623C8.52613 4.69191 8.27154 4.57149 8.00614 4.57149H1.00077ZM1.00077 9.14299C0.735344 9.14299 0.480799 9.26345 0.293115 9.47774C0.105441 9.69203 0 9.98277 0 10.2859C0 10.589 0.105441 10.8797 0.293115 11.094C0.480799 11.3083 0.735344 11.4287 1.00077 11.4287H5.00383C5.26926 11.4287 5.5238 11.3083 5.71149 11.094C5.89916 10.8797 6.0046 10.589 6.0046 10.2859C6.0046 9.98277 5.89916 9.69203 5.71149 9.47774C5.5238 9.26345 5.26926 9.14299 5.00383 9.14299H1.00077ZM13.01 5.71437C13.01 5.41125 12.9045 5.12056 12.7168 4.90623C12.5292 4.69191 12.2746 4.57149 12.0092 4.57149C11.7438 4.57149 11.4892 4.69191 11.3016 4.90623C11.1139 5.12056 11.0084 5.41125 11.0084 5.71437V12.0985L9.71445 10.6207C9.5257 10.4125 9.27291 10.2973 9.01051 10.2999C8.74811 10.3025 8.49711 10.4228 8.31157 10.6347C8.12603 10.8466 8.02075 11.1332 8.01845 11.4328C8.01614 11.7325 8.11702 12.0212 8.29936 12.2367L11.3017 15.6654C11.4893 15.8797 11.7438 16 12.0092 16C12.2746 16 12.5291 15.8797 12.7167 15.6654L15.719 12.2367C15.9014 12.0212 16.0023 11.7325 16 11.4328C15.9977 11.1332 15.8924 10.8466 15.7068 10.6347C15.5213 10.4228 15.2703 10.3025 15.0079 10.2999C14.7455 10.2973 14.4927 10.4125 14.304 10.6207L13.01 12.0985V5.71437Z" fill="#6C757D"/>
                </svg>
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
