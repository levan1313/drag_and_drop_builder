import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import MetadataContent from './MetadataContent';

const MetaDataContainer = () => {
  return (
    <div className="w-64 bg-gray-100 border-l border-gray-300 p-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-left text-sm font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Metadata</span>
              {open ? (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 mt-2 bg-white rounded-lg">
              <MetadataContent />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MetaDataContainer;
