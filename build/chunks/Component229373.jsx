/** Chunk was on 26196 **/
/** chunk id: 229373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk135102 = require("./135102.js"),
  Chunk388032 = require("./388032.jsx");
let i = () => {
  let {
    searchText: e,
    updateSearchText: t
  } = (0, Chunk135102.C$)(), n = Chunk647438.useRef(null);
  return (0, Chunk647438.useEffect)(() => {
    null !== require.current && "" === module && require.current.focus()
  }, [module, require]), (0, Chunk951288.jsx)(Chunk481060.E1j, {
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