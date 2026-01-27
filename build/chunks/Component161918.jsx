/** Chunk was on web.js **/
/** chunk id: 161918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mk: () => o,
  iM: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let a = Chunk64700.createContext(null);

function o() {
  return i.useContext(a)
}

function s(e) {
  let {
    tab: t,
    children: n
  } = e, o = i.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: n
  })
}