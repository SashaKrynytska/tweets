import React from 'react';
import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '10',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',

      }}
    >
       <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="blocks-loading"
       wrapperStyle={{}}
       wrapperClass="blocks-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
     />
    </div>
  );
};

export default Loader;