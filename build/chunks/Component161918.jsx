/** Chunk was on web.js **/
/** chunk id: 161918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mk: () => s,
  iM: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let a = Chunk64700.createContext(null);

function s() {
  return i.useContext(a)
}

function o(e) {
  let {
    tab: t,
    children: n
  } = e, s = i.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(a.Provider, {
    value: s,
    children: n
  })
}