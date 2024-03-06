import { ChangeEvent } from "react";

interface StatePickerProps {
  option: any[];
  selectedId?: number;
  onSelectState: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const StatePicker = ({
  options,
  selectedId,
  onSelectState,
}: StatePickerProps) => {
  if (options.length === 0) {
    return <div>no data</div>;
  }

  return (
    <div>
      <h2>Selected State: {selectedId}</h2>
      <select
        value={selectedId}
        className="styles.select"
        onChange={onSelectState}
      >
        {options.map((char) => (
          <option value="char.id" key={char.id}>
            {char.stateName}
          </option>
        ))}
      </select>
    </div>
  );
};
