import React from "react";

type LocationInputProps = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LocationInput({
  input,
  handleInputChange,
}: LocationInputProps) {
  return (
    <section>
      <h2>Weather Forecast</h2>
      <h3>Type in your city!</h3>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="London"
      />
    </section>
  );
}
