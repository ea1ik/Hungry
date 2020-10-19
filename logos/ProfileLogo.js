import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

class ProfileLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Svg viewBox="0 0 369.946 369.946" width={25} height={25}>
        <Path
          d="M265.114 228.612c16.624-22.525 25.771-50.903 25.771-80.988 0-68.452-47.514-124.141-105.912-124.141-58.404 0-105.912 55.689-105.912 124.141 0 30.085 9.147 58.457 25.777 80.988C40.891 249.174 0 292.392 0 340.496v5.967h369.946v-5.967c0-48.099-40.891-91.317-104.832-111.884zM184.973 35.416c51.822 0 93.978 50.337 93.978 112.207 0 30.431-10.072 58.923-28.361 80.236-17.686 20.616-40.986 31.965-65.618 31.965-24.625 0-47.926-11.349-65.618-31.959-18.288-21.32-28.361-49.823-28.361-80.242.002-61.87 42.158-112.207 93.98-112.207zM12.178 334.53c3.395-41.464 42.043-78.47 100.691-95.995.919 1.002 1.915 1.88 2.858 2.846 1.175 1.193 2.339 2.393 3.55 3.526 1.474 1.366 2.989 2.637 4.517 3.908 1.235 1.032 2.452 2.082 3.717 3.043 1.587 1.205 3.228 2.303 4.857 3.401 1.277.865 2.542 1.76 3.849 2.56 1.701 1.038 3.449 1.945 5.197 2.87 1.313.692 2.602 1.438 3.938 2.07 1.82.865 3.682 1.575 5.543 2.315 1.319.525 2.613 1.116 3.956 1.581 1.969.68 3.98 1.199 5.979 1.748 1.277.346 2.53.77 3.825 1.068 2.238.507 4.511.835 6.784 1.169 1.098.161 2.172.412 3.276.543 3.389.376 6.814.585 10.263.585s6.868-.203 10.263-.585c1.128-.125 2.232-.388 3.359-.555 2.244-.34 4.493-.656 6.701-1.158 1.325-.304 2.613-.734 3.914-1.098 1.975-.537 3.95-1.05 5.883-1.718 1.372-.471 2.703-1.08 4.063-1.617 1.82-.728 3.646-1.426 5.43-2.273 1.366-.644 2.685-1.402 4.028-2.118 1.712-.907 3.431-1.802 5.102-2.816 1.331-.817 2.613-1.724 3.914-2.608 1.617-1.092 3.228-2.166 4.797-3.359 1.277-.967 2.506-2.029 3.747-3.067 1.522-1.271 3.037-2.536 4.499-3.896 1.205-1.122 2.363-2.321 3.526-3.503.955-.973 1.957-1.856 2.882-2.864 58.642 17.531 97.29 54.537 100.685 96.001H12.178v-.004z"
          fill={props.color}
        />
      </Svg>
    );
  }
}

export default ProfileLogo;
