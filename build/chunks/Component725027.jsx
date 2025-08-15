/** Chunk was on web.js **/
/** chunk id: 725027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nr: () => l,
  pn: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = {
    isRichTooltip: false
  },
  o = Chunk647438.createContext(a);

function s(e) {
  let {
    children: t,
    isRichTooltip: n = false
  } = e, a = i.useMemo(() => ({
    isRichTooltip: n
  }), [n]);
  return (0, r.jsx)(o.Provider, {
    value: a,
    children: t
  })
}

function l() {
  return Chunk647438.useContext(o)
}