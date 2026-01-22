/** Chunk was on web.js **/
/** chunk id: 353171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk303622 = require("./303622.js");
let a = {};

function s(e) {
  let {
    enabled: t = !i.A.get(e)
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a;
  r.h.dispatch({
    type: "LAB_FEATURE_TOGGLE",
    labFeature: e,
    enabled: t
  })
}