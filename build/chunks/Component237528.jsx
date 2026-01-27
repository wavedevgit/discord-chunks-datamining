/** Chunk was on web.js **/
/** chunk id: 237528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk834730 = require("./834730.jsx"),
  Chunk293994 = require("./293994.js");
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
  return (0, r.jsx)(o.E, {
    variant: "eyebrow",
    className: a()(s.chip, s[i]),
    children: t
  })
}