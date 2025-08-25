/** Chunk was on web.js **/
/** chunk id: 996733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QH: () => o,
  Z7: () => a,
  yN: () => i
}), require("./781311.js");
let r = (0, require("./972959.js").H)(() => ({
  query: "",
  isActive: false,
  selected: null
}));

function i(e) {
  r.setState({
    query: e
  })
}

function o(e) {
  r.setState({
    isActive: e
  })
}

function a() {
  return r.useField("query")
}