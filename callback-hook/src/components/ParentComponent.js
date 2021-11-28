import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

// useCallback :  Returns a memoized callback.
//            is  a hook that will return a memoized verison of the
//            callback function that only changes if one of the dependencies
//            has changed.

function ParentComponent() {
  const [age, setAge] = useState(26);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
