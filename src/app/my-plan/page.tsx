import React, { Suspense } from 'react';
import MyPlanContent from './MyPlanContent';


const MyPlanPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MyPlanContent />
    </Suspense>
  );
};

export default MyPlanPage;