import { useState } from "react";

function FormatSwitcher({ format }) {
  const [formatValue, setFormatValue] = useState(24);

  function changeFormat() {
    const newFormat = formatValue == 24 ? 12 : 24;
    setFormatValue(newFormat);
    format(newFormat);
  }

  return (
    <>
      <button className="format-btn" onClick={changeFormat}>
        {formatValue} Format
      </button>
    </>
  );
}

export default FormatSwitcher;
