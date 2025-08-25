/** Chunk was on web.js **/
/** chunk id: 375657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk638395 = require("./638395.js");
let o = {};

function a(e) {
  let {
    enabled: t = !i.Z.get(e)
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o;
  r.Z.dispatch({
    type: "LAB_FEATURE_TOGGLE",
    labFeature: e,
    enabled: t
  })
}