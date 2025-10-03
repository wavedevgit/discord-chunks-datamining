/** Chunk was on web.js **/
/** chunk id: 994587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nd: () => o,
  ni: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = Chunk647438.createContext(null);

function o() {
  return Chunk647438.useContext(a)
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