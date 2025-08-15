/** Chunk was on web.js **/
/** chunk id: 725027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nr: () => l,
  pn: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let a = {
    isRichTooltip: false
  },
  o = Chunk73800.createContext(a);

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
  return Chunk73800.useContext(o)
}