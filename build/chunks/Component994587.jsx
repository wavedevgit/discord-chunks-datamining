/** Chunk was on 45620 **/
/** chunk id: 994587, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Nd: () => a,
  ni: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let i = Chunk647438.createContext(null);

function a() {
  return Chunk647438.useContext(i)
}

function s(e) {
  let {
    tab: t,
    children: n
  } = e, a = l.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(i.Provider, {
    value: a,
    children: n
  })
}