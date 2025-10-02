/** Chunk was on 45620 **/
/** chunk id: 994587, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Nd: () => i,
  ni: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = Chunk647438.createContext(null);

function i() {
  return Chunk647438.useContext(a)
}

function s(e) {
  let {
    tab: t,
    children: n
  } = e, i = l.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(a.Provider, {
    value: i,
    children: n
  })
}