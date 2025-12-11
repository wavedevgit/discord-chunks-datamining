/** Chunk was on web.js **/
/** chunk id: 598869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk777207 = require("./777207.jsx"),
  Chunk282029 = require("./282029.js");
let l = {
  blurpleLight: "blurple-light",
  blurpleMedium: "blurple-medium",
  blurpleDark: "blurple-dark",
  purpleLight: "purple-light",
  purpleMedium: "purple-medium",
  purpleDark: "purple-dark",
  greenLight: "green-light",
  greenMedium: "green-medium",
  greenDark: "green-dark",
  orangeLight: "orange-light",
  orangeMedium: "orange-medium",
  orangeDark: "orange-dark",
  yellowLight: "yellow-light",
  yellowMedium: "yellow-medium",
  yellowDark: "yellow-dark",
  pinkLight: "pink-light",
  pinkMedium: "pink-medium",
  pinkDark: "pink-dark",
  redLight: "red-light",
  redMedium: "red-medium",
  redDark: "red-dark",
  grayLight: "gray-light",
  grayMedium: "gray-medium",
  grayDark: "gray-dark"
};

function c(e) {
  let {
    text: t,
    variant: n = "grayLight"
  } = e, i = l[n];
  return (0, r.jsx)(o.x, {
    variant: "eyebrow",
    className: a()(s.chip, s[i]),
    children: t
  })
}