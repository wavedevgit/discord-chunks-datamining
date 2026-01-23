/** Chunk was on 83006 **/
/** chunk id: 254608, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  l: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk457417 = require("./457417.js"),
  Chunk985018 = require("./985018.jsx");
let i = () => {
  let {
    searchText: e,
    updateSearchText: t
  } = (0, o.Vw)(), r = a.useRef(null);
  return (0, a.useEffect)(() => {
    null !== r.current && "" === e && r.current.focus()
  }, [e, r]), (0, n.jsx)(l.IWV, {
    ref: r,
    query: e,
    onChange: e => {
      t(e)
    },
    onClear: () => {
      t("")
    },
    placeholder: s.intl.string(s.t["5h0QOP"]),
    "aria-label": s.intl.string(s.t["5h0QOP"]),
    autoFocus: true
  })
}