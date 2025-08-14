/** Chunk was on 77512 **/
/** chunk id: 996733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QH: () => l,
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

function l(e) {
  r.setState({
    isActive: e
  })
}

function o() {
  return r.useField("query")
}