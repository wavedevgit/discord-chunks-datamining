/** Chunk was on web.js **/
/** chunk id: 994587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nd: () => o,
  ni: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = Chunk473749.createContext(null);

function o() {
  return Chunk473749.useContext(a)
}

function s(e) {
  let {
    tab: t,
    children: n
  } = e, o = i.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: n
  })
}