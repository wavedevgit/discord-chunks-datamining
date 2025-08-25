/** Chunk was on web.js **/
/** chunk id: 725027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nr: () => l,
  pn: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let o = {
    isRichTooltip: false
  },
  a = Chunk647438.createContext(o);

function s(e) {
  let {
    children: t,
    isRichTooltip: n = false
  } = e, o = i.useMemo(() => ({
    isRichTooltip: n
  }), [n]);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: t
  })
}

function l() {
  return Chunk647438.useContext(a)
}