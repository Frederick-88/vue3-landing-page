<script setup></script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
      <defs>
        <path
          d="M 130 45.547 C 142.376 38.402 157.624 38.402 170 45.547 L 229.593 79.953 C 241.969 87.098 249.593 100.303 249.593 114.594 L 249.593 183.406 C 249.593 197.697 241.969 210.902 229.593 218.047 L 170 252.453 C 157.624 259.598 142.376 259.598 130 252.453 L 70.407 218.047 C 58.031 210.902 50.407 197.697 50.407 183.406 L 50.407 114.594 C 50.407 100.303 58.031 87.098 70.407 79.953 Z"
          id="a1070z"
        ></path>
        <filter id="a1072z" x="-18.3%" y="-18.3%" width="136.5%" height="136.5%" filterUnits="objectBoundingBox">
          <feOffset dx="0" dy="0" in="SourceAlpha" result="a1074z"></feOffset>
          <feGaussianBlur stdDeviation="10" in="a1074z" result="a1075z"></feGaussianBlur>
          <feColorMatrix
            color-interpolation-filters="sRGB"
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="a1075z"
            result="a1076z"
          ></feColorMatrix>
        </filter>
        <filter id="a1077z" x="-1.3%" y="-1.3%" width="102.6%" height="102.6%" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="a1079z"></feGaussianBlur>
          <feOffset dx="1" dy="1" in="a1079z" result="a1080z"></feOffset>
          <feComposite in="a1080z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1081z"></feComposite>
          <feColorMatrix
            color-interpolation-filters="sRGB"
            values="0 0 0 0 0.9098039215686274   0 0 0 0 0.8901960784313725   0 0 0 0 0.9921568627450981  0 0 0 0.25 0"
            type="matrix"
            in="a1081z"
            result="a1082z"
          ></feColorMatrix>
        </filter>
        <linearGradient id="idvKX43FGfsg-1946554159" gradientTransform="rotate(64, 0.5, 0.5)">
          <stop offset="0" stop-color="hsl(260, 6%, 19%)" stop-opacity="1"></stop>
          <stop offset="1" stop-color="rgb(23, 20, 27)" stop-opacity="1"></stop>
        </linearGradient>
      </defs>
      <g filter="url(#a1072z)">
        <use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" stroke-width="0" xlink:href="#a1070z" clip-path="url(#a1071z)"></use>
      </g>
      <use xlink:href="#a1070z" fill="url(#idvKX43FGfsg-1946554159)" clip-path="url(#a1071z)"></use>
      <use fill="black" fill-opacity="1" filter="url(#a1077z)" xlink:href="#a1070z"></use>
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
