/** Chunk was on web.js **/
/** chunk id: 996733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QH: () => a,
  Z7: () => o,
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

function a(e) {
  r.setState({
    isActive: e
  })
}

function o() {
  return r.useField("query")
}