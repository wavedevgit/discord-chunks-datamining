/** Chunk was on web.js **/
/** chunk id: 725027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nr: () => l,
  pn: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = {
    isRichTooltip: false
  },
  o = Chunk473749.createContext(a);

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
  return Chunk473749.useContext(o)
}