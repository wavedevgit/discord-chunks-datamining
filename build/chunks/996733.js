/** Chunk was on 72762 **/
/** chunk id: 996733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QH: () => l,
  Z7: () => s,
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

function l(e) {
  r.setState({
    isActive: e
  })
}

function s() {
  return r.useField("query")
}