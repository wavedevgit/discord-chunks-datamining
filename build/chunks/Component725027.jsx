/** Chunk was on web.js **/
/** chunk id: 725027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nr: () => l,
  pn: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let o = {
    isRichTooltip: false
  },
  a = Chunk473749.createContext(o);

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
  return Chunk473749.useContext(a)
}