import Image from "next/image";
import { CSSProperties } from "react";

const containerSyles: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#ffff",
  zIndex: 99999999,
};
const imageContainer: CSSProperties = {
  position: "fixed",
  top: "30%",
  left: "50%",
  width: "20rem",
  height: "20rem",
  transform: "translate(-50%, -50%)",
};
const svgStyles: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const PageLoading = () => {
  return (
    <div>
      <div style={containerSyles}>
        <div style={imageContainer}>
          <Image src="/logo.svg" alt="logo" fill priority />
        </div>
        <svg
          style={svgStyles}
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          className="lds-dual-ring"
        >
          <circle
            cx="50"
            cy="50"
            ng-attr-r="{{config.radius}}"
            ng-attr-stroke-width="{{config.width}}"
            ng-attr-stroke="{{config.stroke}}"
            ng-attr-stroke-dasharray="{{config.dasharray}}"
            fill="none"
            strokeLinecap="round"
            r="40"
            strokeWidth="4"
            stroke="#3498db"
            strokeDasharray="62.83185307179586 62.83185307179586"
            transform="rotate(271.712 50 50)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default PageLoading;
