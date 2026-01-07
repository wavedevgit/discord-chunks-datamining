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
  } = (0, l.C$)(), n = a.useRef(null);
  return (0, a.useEffect)(() => {
    null !== n.current && "" === e && n.current.focus()
  }, [e, n]), (0, r.jsx)(o.E1j, {
    ref: n,
    query: e,
    onChange: e => {
      t(e)
    },
    onClear: () => {
      t("")
    },
    placeholder: c.intl.string(c.t["5h0QOP"]),
    "aria-label": c.intl.string(c.t["5h0QOP"]),
    autoFocus: true
  })
}