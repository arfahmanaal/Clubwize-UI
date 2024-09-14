import React, { useState } from 'react';

interface FormValues {
  title: string;
  name:string;
  designation:string;
  variableTitle:string;
  units:string;
  region: string;
  budget: string;
  deadline: string;
  champions:string;
  significance: string;
  relatedEvent: string;
  closingRemark: string;
  solutionDetails: string;
  files: File | null;
}

const ToggleSwitch: React.FC<{ checked: boolean, onChange: () => void }> = ({ checked, onChange }) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-7 h-3.5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#22B573] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#22B573]"></div>
      </label>
    );
  };

const CreateProject: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    name:'',
    designation:'',
    champions:'',
    variableTitle:'',
    units: '',
    region: '',
    budget: '',
    deadline: '',
    significance: '',
    relatedEvent: '',
    closingRemark: '',
    solutionDetails: '',
    files: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormValues({ ...formValues, files: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const [isPublic, setIsPublic] = useState(false);
  const [canBeAdopted, setCanBeAdopted] = useState(false);
  return (
    
    <div className="gap-1">
        <div className="text-xs mb-2"><span className="underline text-gray-800">
    <a href="/main/Projects" className="text-gray-800 hover:text-blue-600">Projects</a>
  </span> &gt; Create new Project</div>
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-6">create new project</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="title" className="block text-xs font-medium text-gray-700 mb-1">
            Project Title <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter title"
          />
        </div>

        <div>
          <label htmlFor="region" className="block text-xs font-medium text-gray-700 mb-1">
            Project Region <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <select
            name="region"
            id="region"
            value={formValues.region}
            onChange={handleSelectChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          >
            <option value="">select region</option>
            <option value="Region 1">region 1</option>
            <option value="Region 2">region 2</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-medium text-gray-700 mb-1">
            Project budget <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>

          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            value={formValues.budget}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter budget"
          />
        </div>

        <div>
          <label htmlFor="deadline" className="block text-xs font-medium text-gray-700 mb-1">
            Deadline if any <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            value={formValues.deadline}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="col-span-2">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
            Significance <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Significance"
          />
        </div>

        <div>
          <label htmlFor="relatedEvent" className="block text-xs font-medium text-gray-700 mb-1">
            Related event <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="text"
            name="relatedEvent"
            id="relatedEvent"
            value={formValues.relatedEvent}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="write related event"
          />
        </div>

        <div>
          <label htmlFor="closingRemark" className="block text-xs font-medium text-gray-700 mb-1">
            closing remark <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="text"
            name="closingRemark"
            id="closingRemark"
            value={formValues.closingRemark}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter closing remark"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="solutionDetails" className="block text-xs font-medium text-gray-700 mb-1">
          Project solution in details
        </label>
        <textarea
          name="solutionDetails"
          id="solutionDetails"
          value={formValues.solutionDetails}
          onChange={handleInputChange}
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200 h-28"
          placeholder="write here..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Files/media <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <div className="w-full border border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-100">
          <input type="file" name="files" id="files" onChange={handleFileChange} className="hidden" />
          <label htmlFor="files" className="cursor-pointer text-xs">
            + drag or upload a file
          </label>
        </div>
      </div>

      
    </form>
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mt-2 mx-auto">
      <p className="text-xs mb-6 text-gray-400">Project committee</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
           Name<span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label htmlFor="designation" className="block text-xs font-medium text-gray-700 mb-1">
            Designation <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            name="designation"
            id="designation"
            value={formValues.designation}
            onChange={handleInputChange}
            placeholder="Enter Designation"
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          />
         
        </div>

        <div>
          <label htmlFor="designation" className="block text-xs font-medium text-gray-700 mb-1">
            Designation <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            name="designation"
            id="designation"
            value={formValues.designation}
            onChange={handleInputChange}
            placeholder="Enter Designation"
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          />
         
        </div>

        <div>
          <label htmlFor="designation" className="block text-xs font-medium text-gray-700 mb-1">
            Designation <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            name="designation"
            id="designation"
            value={formValues.designation}
            onChange={handleInputChange}
            placeholder="Enter Designation"
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          />
         
        </div>
        </div>
        <div className="flex justify-center">
  <button className="text-green-500 text-[0.7rem] hover:text-black">
    +Add New
  </button>
</div>

    </form>
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mt-2 mx-auto">
      <p className="text-xs mb-6 text-gray-400">Celebrity champions</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
           Celebrity champions<span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <input
            type="text"
            name="champions"
            id="champions"
            value={formValues.champions}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter champions"
          />
        </div>
        </div>
        </form>
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mt-2 mx-auto">
            <p className="text-xs mb-6 text-gray-400">Target and Tracking Parameters</p>
            <div className="space-y-6">
    
            <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
         <label htmlFor="name1" className="block text-xs font-medium text-gray-700 mb-1">
          Name
          <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
         </label>
            <input
          type="text"
          name="name1"
          id="name1"
          value={formValues.name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label htmlFor="variableTitle1" className="block text-xs font-medium text-gray-700 mb-1">
          Variable Title
          <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <input
          type="text"
          name="variableTitle1"
          id="variableTitle1"
          value={formValues.variableTitle}
          onChange={handleInputChange}
          placeholder="Enter Variable Name"
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label htmlFor="units1" className="block text-xs font-medium text-gray-700 mb-1">
          Units
          <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <select
          name="units1"
          id="units1"
          value={formValues.units}
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
        >
          <option value="option1">kg</option>
          <option value="option2">pic</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div>
        <label htmlFor="name2" className="block text-xs font-medium text-gray-700 mb-1">
          Name
          <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <input
          type="text"
          name="name2"
          id="name2"
          value={formValues.name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label htmlFor="variableTitle2" className="block text-xs font-medium text-gray-700 mb-1">
          Variable Title
          <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <input
          type="text"
          name="variableTitle2"
          id="variableTitle2"
          value={formValues.variableTitle}
          onChange={handleInputChange}
          placeholder="Enter Variable Name"
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label htmlFor="units2" className="block text-xs font-medium text-gray-700 mb-1">
          Units
          <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <select
          name="units2"
          id="units2"
          value={formValues.units}
          className="w-full border border-gray-300 text-xs rounded-md p-2 focus:ring focus:ring-blue-200"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div className="flex justify-center">
  <button className="text-green-500 text-[0.7rem] hover:text-black">
    +Add New
  </button>
</div>

</div></form>
<form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mt-2 mx-auto">
<p className="text-xs mb-6 text-gray-400">Others</p>
<div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
            How to take part in this project <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 mb-2 focus:ring focus:ring-blue-200"
            placeholder="write here..."
          />
        </div>
        <div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
            About the Promoters <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md mb-2 p-2 focus:ring focus:ring-blue-200"
            placeholder="write here..."
          />
        </div>
        <div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
            Funding received details<span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md mb-2 p-2 focus:ring focus:ring-blue-200"
            placeholder="write here..."
          />
        </div>
        <div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
           Key Takeaway<span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md mb-2 p-2 focus:ring focus:ring-blue-200"
            placeholder="write here..."
          />
        </div>
        <div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
           Risks & Challenges<span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md mb-2 p-2 focus:ring focus:ring-blue-200"
            placeholder="write here..."
          />
        </div>
</form>
<form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mt-2 mx-auto">
<p className="text-xs mb-6 text-gray-400">FAQs</p>
<div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
           Write a Question <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md p-2 mb-2 focus:ring focus:ring-blue-200"
            placeholder="Add a question"
          />
        </div>
        <div className="">
          <label htmlFor="significance" className="block text-xs font-medium text-gray-700 mb-1">
           Answer <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
          </label>
          <textarea
            name="significance"
            id="significance"
            value={formValues.significance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-xs rounded-md mb-2 p-2 focus:ring focus:ring-blue-200"
            placeholder="Add an answer"
          />
          <div className="flex justify-center">
  <button className="text-green-500 text-[0.7rem] hover:text-black">
    +Add New
  </button>
</div>

        </div>
        </form>
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-4xl mt-2 mx-auto">
      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Files/media <span className="inline-flex text-[0.5rem] items-center justify-center w-3 h-3 border border-black rounded-full text-black">i</span>
        </label>
        <div className="w-full border border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-100">
          <input type="file" name="files" id="files" onChange={handleFileChange} className="hidden" />
          <label htmlFor="files" className="cursor-pointer text-xs">
            + Drag or upload a file
          </label>
        </div>
      </div>

      <div className="mb-6 flex items-center space-x-2">
        <label htmlFor="public" className="block text-xs font-medium text-gray-700 flex-1">
          Make this Project public
        </label>
        <ToggleSwitch checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
      </div>

      <div className="mb-6 flex items-center space-x-2">
        <label htmlFor="adopt" className="block text-xs font-medium text-gray-700 flex-1">
          Whether Initiative can be adopted outside the region?
        </label>
        <ToggleSwitch checked={canBeAdopted} onChange={() => setCanBeAdopted(!canBeAdopted)} />
      </div>

      <div className="flex justify-end space-x-2">
        <button type="button" className="px-8 py-1 text-xs bg-white text-red-500 rounded-md" onClick={onCancel}>Cancel</button>
        <button type="button" className="px-8 py-1 text-xs bg-white text-black border rounded-md">Save draft</button>
        <button type="submit" className="px-8 py-1 text-xs bg-[#22B573] text-white rounded-md">Publish</button>
      </div>
    </form>


    </div>
  );
};

export default CreateProject;
