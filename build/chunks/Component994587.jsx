/** Chunk was on 45620 **/
/** chunk id: 994587, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Nd: () => s,
  ni: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let i = Chunk647438.createContext(null);

function s() {
  return Chunk647438.useContext(i)
}

function a(e) {
  let {
    tab: t,
    children: n
  } = e, s = l.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(i.Provider, {
    value: s,
    children: n
  })
}