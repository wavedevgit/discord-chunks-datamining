/** Chunk was on web.js **/
/** chunk id: 725027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nr: () => l,
  pn: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let o = {
    isRichTooltip: false
  },
  a = Chunk73800.createContext(o);

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
  return Chunk73800.useContext(a)
}