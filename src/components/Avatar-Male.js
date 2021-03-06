import React from 'react';
import { motion } from "framer-motion";
import PropTypes from "prop-types";
//import Animation from "../Animation";

//const [isAnimating, setIsAnimating] = useState(false);

function SvgComponent(props) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 972 662" fill="none" {...props}>
      <g id="prefix__helpdesk" clipPath="url(#prefix__clip0)">
        <g id="prefix__plant">
          <path
            id="prefix__Vector"
            d="M145.834 534.809c-6.984 26.598-31.459 43.22-31.459 43.22s-13.15-26.502-6.166-53.1c6.985-26.598 31.459-43.219 31.459-43.219s13.151 26.501 6.166 53.099z"
            fill="#743D3D"
          />
          <path
            id="prefix__Vector_2"
            d="M135.24 529.183c-19.562 19.327-21.751 48.831-21.751 48.831s29.528-1.831 49.091-21.159c19.563-19.327 21.751-48.831 21.751-48.831s-29.528 1.832-49.091 21.159z"
            fill="#CB5555"
          />
          <path
            id="prefix__Vector_3"
            d="M159.772 570.241H83.251c-8.393 0-15.198 6.804-15.198 15.198v15.101c0 8.393 6.805 15.197 15.198 15.197h76.521c8.393 0 15.197-6.804 15.197-15.197v-15.101c0-8.394-6.804-15.198-15.197-15.198z"
            fill="#CB5555"
          />
        </g>
        <g id="prefix__body">
          <path
            id="prefix__Vector_4"
            d="M489.331 521.722c48.896 0 128.814-14.574 166.796-39.613-4.114-22.484-13.579-58.867-22.55-91.428-11.424-41.468-83.527-70.216-126.54-70.216h-41.449c-43.146 0-115.353 28.915-126.633 70.56-8.597 31.736-17.773 66.589-22.339 87.052 39.135 27.498 121.252 43.645 172.715 43.645z"
            fill="#CB3B3B"
          />
          <path
            id="prefix__Rectangle_1"
            fill="#9E2828"
            d="M475 369h24v74h-24z"
          />
          <path
            id="prefix__Vector_5"
            d="M485.306 310c-19.73 0-51.979 4.272-67.306 11.613 1.66 6.591 5.48 17.257 9.099 26.803 4.61 12.156 33.706 20.584 51.062 20.584h16.726c17.41 0 46.547-8.477 51.099-20.685 3.469-9.304 7.172-19.521 9.014-25.52C539.208 314.733 506.072 310 485.306 310z"
            fill="#9E2828"
          />
          <path
            id="prefix__Vector_7"
            opacity={0.1}
            d="M449.291 261.311h74.479v59.583a37.235 37.235 0 01-37.239 37.239 37.236 37.236 0 01-37.24-37.239v-59.583z"
            fill="#000"
          />
          <motion.g 
            animate={{
              //scaleY: [1, 0.1, 1],
              //translateY : [1,10,1]
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              repeatDelay: 1
            }}
          >
          <path
            id="prefix__Vector_8"
            d="M459.974 258.553h53.113a10.68 10.68 0 0110.683 10.683v48.9a37.239 37.239 0 01-37.239 37.239 37.24 37.24 0 01-37.24-37.239v-48.9a10.683 10.683 0 0110.683-10.683z"
            fill="#FDA57D"
          />
          <path
            id="prefix__Vector_6"
            d="M486.806 280.733c64.196 0 116.236-52.041 116.236-116.236 0-64.195-52.04-116.236-116.236-116.236-64.195 0-116.235 52.041-116.235 116.236 0 64.195 52.04 116.236 116.235 116.236z"
            fill="#72351C"
          />
          <path
            id="prefix__Vector_9"
            opacity={0.1}
            d="M449.429 289.434a107.2 107.2 0 0074.479.206v-9.15h-74.479v8.944z"
            fill="#000"
          />
          <path
            id="prefix__Vector_10"
            d="M486.806 294.421c58.958 0 106.753-47.795 106.753-106.753S545.764 80.915 486.806 80.915c-58.957 0-106.752 47.795-106.752 106.753s47.795 106.753 106.752 106.753z"
            fill="#FDA57D"
          />
          <path
            id="prefix__Vector_11"
            opacity={0.1}
            d="M410.766 90.565s44.99 91.323 171.902 38.275l-29.546-46.333-52.376-18.802-89.98 26.86z"
            fill="#000"
          />
          <path
            id="prefix__Vector_12"
            d="M410.766 89.222s44.99 91.323 171.902 38.275l-29.546-46.333-52.376-18.802-89.98 26.86z"
            fill="#72351C"
          />
          <path
            id="prefix__Vector_13"
            d="M428.627 52.267a61.665 61.665 0 0123.398-17.445c27.19-11.515 60.79-2.853 85.949-18.31 1.51 7.67-5.274 15.841-13.091 15.767 15.736 6.148 34.52 12.034 48.555 2.63a31.636 31.636 0 01-17.317 29.068c13.678 6.18 24.778 21.552 20.137 35.826-3.091 9.51-12.399 15.973-22.135 18.256-9.735 2.283-19.924 1.054-29.793-.558-28.808-4.706-134.377-18.388-95.703-65.234z"
            fill="#72351C"
          />
          <path
            id="prefix__Vector_14"
            d="M592.458 202h-2.831l-55.062 49.019c-53.048-24.845-91.994 0-91.994 0l-57.748-47.005-5.823.732a106.752 106.752 0 00108.081 103.735A106.754 106.754 0 00592.458 202zm-106.912 67.82c-20.767 0-37.603-4.209-37.603-9.4 0-5.192 16.836-9.401 37.603-9.401 20.768 0 37.604 4.209 37.604 9.401s-16.836 9.4-37.604 9.4z"
            fill="#72351C"
          />
          <path
            id="prefix__Vector_15"
            d="M380.011 206.186c5.485 0 9.931-8.336 9.931-18.62 0-10.283-4.446-18.619-9.931-18.619-5.484 0-9.93 8.336-9.93 18.619 0 10.284 4.446 18.62 9.93 18.62z"
            fill="#FDA57D"
          />
          <path
            id="prefix__Vector_16"
            d="M593.545 206.186c5.485 0 9.931-8.336 9.931-18.62 0-10.283-4.446-18.619-9.931-18.619-5.484 0-9.93 8.336-9.93 18.619 0 10.284 4.446 18.62 9.93 18.62z"
            fill="#FDA57D"
          />
          </motion.g>
        </g>
        <g id="prefix__desk">
          <path
            id="prefix__Vector_17"
            d="M971.44 615.598H0v32.931h971.44v-32.931z"
            fill="#CFCCCC"
          />
          <path
            id="prefix__Vector_18"
            d="M930.278 648.529H41.163V662h889.115v-13.471z"
            fill="#D5D0D0"
          />
          <path
            id="prefix__Vector_19"
            opacity={0.1}
            d="M930.278 648.529H41.163v4.49h889.115v-4.49z"
            fill="#0A0A0A"
          />
        </g>
        
        <g id="prefix__cup">
          <path
            id="prefix__Vector_20"
            d="M892.857 546.744a19.46 19.46 0 00-13.759 33.219 19.459 19.459 0 1013.759-33.219zm0 31.434a11.975 11.975 0 110-23.948 11.975 11.975 0 010 23.948z"
            fill="#EE4F4F"
          />
          <path
            id="prefix__Vector_21"
            opacity={0.1}
            d="M892.459 547a19.46 19.46 0 10-.001 38.92 19.46 19.46 0 00.001-38.92zm0 31.433a11.972 11.972 0 01-11.063-7.392 11.968 11.968 0 012.595-13.05 11.968 11.968 0 0113.05-2.595 11.97 11.97 0 017.392 11.063 11.973 11.973 0 01-11.974 11.974z"
            fill="#000"
          />
          <path
            id="prefix__Vector_22"
            d="M818.016 531.776h74.841v74.072a9.75 9.75 0 01-9.75 9.75h-55.341a9.754 9.754 0 01-6.895-2.855 9.754 9.754 0 01-2.855-6.895v-74.072z"
            fill="#EE4F4F"
          />
          <path
            id="prefix__Vector_23"
            opacity={0.1}
            d="M879.386 531.776v69.228a14.595 14.595 0 01-14.594 14.594h7.484a14.593 14.593 0 0014.594-14.594v-69.228h-7.484z"
            fill="#000"
          />
        </g>
        <path
          id="prefix__cup_smoke"
          d="M832.615 455.66c-1.272.299-2.708.773-3.332 2.329-.989 2.471.804 5.257 2.441 6.955 3.023 3.137 6.209 6.218 8.265 10.596 2.055 4.378 2.7 10.488.454 14.683-2.934 5.479-9.932 6.658-10.609 13.401-.435 4.329 2.282 8.022 5.036 10.195 6.795 5.361 15.556 6.791 20.478 15.181 2.036-5.767 6.591-9.101 11.131-10.524 4.539-1.424 9.256-1.318 13.859-2.283 1.486-.312 3.16-.937 3.824-2.794 1.287-3.597-2.38-7.91-1.114-11.521.963-2.748 3.793-2.535 5.859-3.635 3.365-1.792 4.753-7.757 3.798-12.548-.955-4.792-3.653-8.537-6.49-11.607-7.645-8.274-16.837-13.14-26.135-16.64-4.325-1.628-9.401-4.18-13.892-4.427-4.336-.238-9.281 1.627-13.573 2.639z"
          fill="#EEE"
        />
        <motion.g 
            animate={{
              //scaleY: [1, 0.1, 1],
              translateY : [1,props.eyesBrows_translateY,1]
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              repeatDelay: 1
            }}
          >
        <g id="prefix__eyebrows" fill="#72351C">
          <ellipse
            id="prefix__left-eyebrow"
            cx={449.89}
            cy={170.5}
            rx={5.5}
            ry={13.89}
            transform="rotate(90 449.89 170.5)"
          />
          <ellipse
            id="prefix__right-eyebrow"
            cx={522.89}
            cy={170.5}
            rx={5.5}
            ry={13.89}
            transform="rotate(90 522.89 170.5)"
          />
        </g>
        </motion.g>

        
        <motion.g 
            animate={{
              scaleY: [1, props.eyes_scaleY, 1],
              translateY : [1,props.eyes_translateY,1]
            }}
            transition={{
              duration: 5,
              loop: Infinity,
              repeatDelay: 1
            }}
          >
          
        <g id="prefix__eyes" fill="#000">
          <ellipse id="prefix__left-eye" cx={450.5} cy={191} rx={5.5} ry={9} />
          <ellipse id="prefix__right-eye" cx={521.5} cy={191} rx={5.5} ry={9} />
        </g>
        </motion.g>

        <g id="prefix__pc">
          <path
            id="prefix__Vector_24"
            d="M657.963 382.093H313.477c-14.82 0-26.835 12.015-26.835 26.835v179.835c0 14.821 12.015 26.835 26.835 26.835h344.486c14.821 0 26.835-12.014 26.835-26.835V408.928c0-14.82-12.014-26.835-26.835-26.835z"
            fill="#393942"
          />
          <path
            id="prefix__Vector_25"
            d="M486.72 511.317c7.44 0 13.472-6.031 13.472-13.471s-6.032-13.472-13.472-13.472c-7.44 0-13.471 6.032-13.471 13.472 0 7.44 6.031 13.471 13.471 13.471z"
            fill="#fff"
          />
          <path
            id="prefix__Vector_26"
            d="M486.459 478a19.46 19.46 0 10-.001 38.92 19.46 19.46 0 00.001-38.92zm0 31.433a11.972 11.972 0 01-11.063-7.392 11.968 11.968 0 012.595-13.05 11.968 11.968 0 0113.05-2.595 11.97 11.97 0 017.392 11.063 11.973 11.973 0 01-11.974 11.974z"
            fill="#B85757"
          />
        {/* Mouth Animation */}
        </g>
        <motion.g 
            animate={{
              scaleY: [1, props.mouth_scaleY, 1]
            }}
            transition={{
              duration: 0.5,
              loop: props.mouth_duration,
              repeatDelay: 0
            }}
        >
        <path
          id="prefix__mouth"
          d="M511 255.5c0 3.05-2.634 5.975-7.322 8.132C498.989 265.788 492.63 267 486 267c-6.63 0-12.989-1.212-17.678-3.368-4.688-2.157-7.322-5.082-7.322-8.132h50z"
          fill="#E89068"
        /> </motion.g>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h971.44v662H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

SvgComponent.propTypes = {
  width : PropTypes.number,
  height : PropTypes.number,
  eyes_scaleY: PropTypes.number,
  eyes_translateY: PropTypes.number,
  mouth_scaleY: PropTypes.number,
  mouth_duration: PropTypes.number,
  eyesBrows_translateY: PropTypes.number
};

SvgComponent.defaultProps = {
  width: 972, 
  height: 662,
  eyes_scaleY: 0.5,
  eyes_translateY: 17,
  mouth_scaleY: 0,
  mouth_duration: 1,
  eyesBrows_translateY: 17
}

// const controls = useAnimation()

// useEffect(() => {
//   controls.start(i => ({
//     opacity: 0,
//     x: 100,
//     transition: { delay: i * 0.3 },
//   }))
// }, [])

// return (
//   <ul>
//     <motion.li custom={0} animate={controls} />
//     <motion.li custom={1} animate={controls} />
//     <motion.li custom={2} animate={controls} />
//   </ul>
// )

export default SvgComponent;
