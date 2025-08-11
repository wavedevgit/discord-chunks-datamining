/** Chunk was on web.js **/
/** chunk id: 666572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => o,
  e: () => r
}), require("./388685.js"), require("./35282.js");
var r = function(e) {
  return e[e.MANAGED = 0] = "MANAGED", e[e.QUICK = 1] = "QUICK", e
}({});

function i(e) {
  switch (e) {
    case "0":
      return 0;
    case "1":
      return 1;
    default:
      return null
  }
}

function o(e) {
  if (null == e) return null;
  let [t, n] = e.split("-"), r = i(t);
  return null == r ? null : {
    type: r,
    encodedLinkId: e,
    decodedLinkId: n
  }
}