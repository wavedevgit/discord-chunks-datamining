/** Chunk was on web.js **/
/** chunk id: 824988, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s,
  r: () => o
}), require("./388685.js"), require("./415506.js");
var Chunk524437 = require("./524437.js"),
  Chunk960048 = require("./960048.js"),
  Chunk874893 = require("./874893.js"),
  o = function(e) {
    return e.BACKGROUND_GRADIENT_PRESET = "backgroundGradientPreset", e.STANDARD_BACKGROUND_THEME = "standardBackgroundTheme", e.CUSTOM_BACKGROUND_GRADIENT = "customBackgroundGradient", e
  }({});
let s = e => {
  let t = Object.entries(a.yW).find(t => {
    let [n, r] = t;
    return r === e
  });
  return true === t ? (i.Z.captureException(Error("No ProtoTheme found for base theme: ".concat(e))), r.Q2.UNSET) : parseInt(t[0])
}