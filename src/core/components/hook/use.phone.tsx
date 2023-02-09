import { useState } from "react";

export type UsePhoneStructure = ReturnType<typeof usePhone>;

export function usePhone() {
  const initialKeyboard: string = "";
  const [keyboard, setKeyboard] = useState(initialKeyboard);
  const handleClickNumber = (number: string) => {
    setKeyboard(keyboard + number);
  };

  return {
    keyboard,
    handleClickNumber,
  };
}
