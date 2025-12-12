/** Chunk was on web.js **/
/** chunk id: 994587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nd: () => a,
  ni: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let o = Chunk473749.createContext(null);

function a() {
  return Chunk473749.useContext(o)
}

function s(e) {
  let {
    tab: t,
    children: n
  } = e, a = i.useMemo(() => ({
    tab: t
  }), [t]);
  return (0, r.jsx)(o.Provider, {
    value: a,
    children: n
  })
}