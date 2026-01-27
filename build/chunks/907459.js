/** Chunk was on web.js **/
/** chunk id: 907459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => i
}), require("./896048.js"), require("./638769.js");
var Chunk57985 = require("./57985.js");

function i(e, t, n) {
  let i = (0, r.Y1)(n);
  return null == i ? e : "vc_probability" === i ? [...e].sort((e, n) => {
    var r, i, a, o;
    return (null != (r = null == (a = t.get(n.id)) ? true : a.vcProbability) ? r : 0) - (null != (i = null == (o = t.get(e.id)) ? true : o.vcProbability) ? i : 0)
  }) : [...e].sort((e, n) => {
    var r, i, a, o;
    return (null != (r = null == (a = t.get(n.id)) ? true : a.communicationProbability) ? r : 0) - (null != (i = null == (o = t.get(e.id)) ? true : o.communicationProbability) ? i : 0)
  })
}