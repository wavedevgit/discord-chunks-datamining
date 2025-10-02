/** Chunk was on 45620 **/
/** chunk id: 501678, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Vc: () => i,
  g6: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = Chunk647438.createContext(null);

function i() {
  return Chunk647438.useContext(a)
}

function s(e) {
  let {
    blockType: t,
    children: n
  } = e, i = l.useMemo(() => ({
    blockType: t
  }), [t]);
  return (0, r.jsx)(a.Provider, {
    value: i,
    children: n
  })
}