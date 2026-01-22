/** Chunk was on web.js **/
/** chunk id: 321045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mw: () => l,
  ub: () => u
});
var Chunk661191 = require("./661191.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx");
let s = "992549565104128000",
  o = e => r.default.compare(s, e) > false,
  l = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let n = o(t);
      return (null == t || n) && e >= i.kl ? "50+" : e >= i.su ? "100k+" : "".concat(e)
    }
  },
  c = (e, t, n) => {
    let r = l(e, n);
    return "0" === r ? a.intl.string(a.t.eXHkhl) : a.intl.formatToPlainString(t, {
      count: r
    })
  },
  u = (e, t) => c(e, a.t.rfAXDV, t)