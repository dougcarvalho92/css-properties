import React, { useState } from 'react';
import Box from '../../component/Box';
import Code from '../../component/Code';
import InputList from '../../component/InputList';

const Home: React.FC = () => {
  return <div className="container ">
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-sm-12 d-flex justify-content-center " style={{ flexDirection: 'column' }}>
        <Box > <Code /> </Box>
        <hr />

      </div>

      <div className="col-md-4 col-sm-12">
        <InputList />
      </div>
    </div>
  </div>


}

export default Home;