/** Chunk was on web.js **/
/** chunk id: 723774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WE: () => u,
  lE: () => l
});
var Chunk709054 = require("./709054.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");
let o = "992549565104128000",
  s = e => r.default.compare(o, e) > false,
  l = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let n = s(t);
      return (null == t || n) && e >= i.vw ? "50+" : e >= i.M3 ? "100k+" : "".concat(e)
    }
  },
  c = (e, t, n) => {
    let r = l(e, n);
    return "0" === r ? a.intl.string(a.t.eXHkhl) : a.intl.formatToPlainString(t, {
      count: r
    })
  },
  u = (e, t) => c(e, a.t.rfAXDV, t)