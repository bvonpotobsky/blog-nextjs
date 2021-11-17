import { useEffect, useState } from "react";

export const useTypeSuperPower = (superpower) => {
  const [typeSuperPower, setTypeSuperPower] = useState("");

  useEffect(() => {
    // const nextTypeSuperPower = superpower.slice(0, typeSuperPower.length + 1);
    // if (nextTypeSuperPower !== typeSuperPower) return;

    const timeout = setTimeout(() => {
      setTypeSuperPower(superpower.slice(0, typeSuperPower.length + 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [superpower, typeSuperPower]);
  return superpower.slice(0, typeSuperPower.length);
};
