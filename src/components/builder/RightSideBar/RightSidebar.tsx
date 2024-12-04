import React from 'react';
import Costumize from './Costumize';
import LayersPanel from './LayersPanel';
import MetaDataContainer from './MetadataPanel';

const RightSidebar: React.FC = () => {

    return (
        <div className="w-74 border-l border-gray-300 p-4 bg-red-500">
          <Costumize/>
          <LayersPanel/>
          <MetaDataContainer /> 
        </div>
    );
};

export default RightSidebar;
