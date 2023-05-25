import { useState } from 'react';
import DownIcon from '../assets/images/down.svg';

function Dropdown({onSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {selected || 'Choose Category'}
          <img src={DownIcon} alt="down" className="ml-2 my-auto h-3" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setSelected('AIML');
                onSelect('AIML');
                setIsOpen(false);
              }}
            >
              AIML
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setSelected('Mechanical');
                onSelect('Mechanical');
                setIsOpen(false);
              }}
            >
              Mechanical
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setSelected('DSA');
                onSelect('DSA');
                setIsOpen(false);
              }}
            >
              DSA
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setSelected('Math');
                onSelect('Math');
                setIsOpen(false);
              }}
            >
              Math
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setSelected('System Software');
                onSelect('System Software');
                setIsOpen(false);
              }}
            >
              System Software
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;