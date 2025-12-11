/** Chunk was on 58973 **/
/** chunk id: 229373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk135102 = require("./135102.js"),
  Chunk388032 = require("./388032.jsx");
let s = () => {
  let {
    searchText: e,
    updateSearchText: t
  } = (0, Chunk135102.C$)(), n = Chunk473749.useRef(null);
  return (0, Chunk473749.useEffect)(() => {
    null !== require.current && "" === module && require.current.focus()
  }, [module, require]), (0, Chunk54381.jsx)(Chunk481060.E1j, {
    ref: require,
    query: module,
    onChange: e => {
      t(e)
    },
    onClear: () => {
      exports("")
    },
    placeholder: Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
    "aria-label": Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
    autoFocus: true
  })
}