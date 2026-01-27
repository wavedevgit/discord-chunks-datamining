/** Chunk was on web.js **/
/** chunk id: 112317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bc: () => s,
  w6: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let a = {
    isRichTooltip: false
  },
  o = Chunk64700.createContext(a);

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
  return i.useContext(o)
}