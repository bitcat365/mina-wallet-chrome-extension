function ICON_Address({ fill, stroke }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="13" r="2" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M19 19.5C19 17.2909 17.2091 15.5 15 15.5C12.7909 15.5 11 17.2909 11 19.5"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M7 10V8.5C7 7.39543 7.89543 6.5 9 6.5H21C22.1046 6.5 23 7.39543 23 8.5V20.5C23 22.1569 21.6569 23.5 20 23.5H10C8.34315 23.5 7 22.1569 7 20.5V20"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path d="M6 13H8" stroke={stroke} strokeWidth="1.5" />
      <path d="M6 17H8" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}
export default ICON_Address;
