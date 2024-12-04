import React from 'react';
import { useEditor } from '@craftjs/core';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const Costumize: React.FC = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();

    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.displayName,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  if (!selected) {
    return null
  }

  const { id, name, isDeletable } = selected;

  return (
    <div className="w-64 bg-gray-100 border-l border-gray-300 p-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-left text-sm font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{name} Properties</span>
              {open ? (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 mt-2 bg-white rounded-lg">
              {selected.settings && React.createElement(selected.settings, {id})}
              {isDeletable ? (
                <button
                  className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-2 py-1 mt-4`}
                  onClick={() => actions.delete(id)}
                >
                  Delete
                </button>
              ) : null}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Costumize;
