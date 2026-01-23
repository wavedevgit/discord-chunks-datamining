/** Chunk was on 58197 **/
/** chunk id: 161918, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Mk: () => s,
  iM: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let l = Chunk64700.createContext(null);

function s() {
  return r.useContext(l)
}

function o(e) {
  let {
    tab: t,
    children: i
  } = e, s = r.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, n.jsx)(l.Provider, {
    value: s,
    children: i
  })
}