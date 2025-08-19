/** Chunk was on 31930 **/
/** chunk id: 996733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  QH: () => s,
  Z7: () => l,
  yN: () => r
}), require("./781311.js");
let i = (0, require("./972959.js").H)(() => ({
  query: "",
  isActive: false,
  selected: null
}));

function r(e) {
  i.setState({
    query: e
  })
}

function s(e) {
  i.setState({
    isActive: e
  })
}

function l() {
  return i.useField("query")
}