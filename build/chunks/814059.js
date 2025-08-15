/** Chunk was on web.js **/
/** chunk id: 814059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => s
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  let t = Math.max(0, i()(e).diff(i()(), "s"));
  if (t < 2 * a.Z.Seconds.HOUR) {
    let e = Math.round(t / a.Z.Seconds.MINUTE);
    return o.intl.formatToPlainString(o.t["2JbxRE"], {
      count: e
    })
  }
  if (t < a.Z.Seconds.DAY) {
    let e = Math.round(t / a.Z.Seconds.HOUR);
    return o.intl.formatToPlainString(o.t.V9Ebys, {
      count: e
    })
  } {
    let e = Math.round(t / a.Z.Seconds.DAY);
    return o.intl.formatToPlainString(o.t.OQFxHh, {
      count: e
    })
  }
}