import { Input } from "antd";
const { Search } = Input;

interface AutocompleteSearchProps {
  onChange: (value: string) => void;
}

export default function AutocompleteSearch({
  onChange
}): AutocompleteSearchProps {

  return (
    // <input
    //   type="text"
    //   onChange={(e) => onChange(e.target.value)}
    //   placeholder="Input search company name"
    // />
    <Search
      style={{ marginBottom: "20px", width: 'calc(80vw - 20px)'}}
      size='large'
      placeholder="Input search company name"
      onChange={(e) => onChange(e.target.value)}
      enterButton
    />
  );
}
