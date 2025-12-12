/** Chunk was on web.js **/
/** chunk id: 439944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i
}), require("./388685.js"), require("./642613.js");
var Chunk992261 = require("./992261.js");

function i(e, t, n) {
  let i = (0, r.HG)(n);
  return null == i ? e : "vc_probability" === i ? [...e].sort((e, n) => {
    var r, i, o, a;
    return (null != (o = null == (r = t.get(n.id)) ? true : r.vcProbability) ? o : 0) - (null != (a = null == (i = t.get(e.id)) ? true : i.vcProbability) ? a : 0)
  }) : [...e].sort((e, n) => {
    var r, i, o, a;
    return (null != (o = null == (r = t.get(n.id)) ? true : r.communicationProbability) ? o : 0) - (null != (a = null == (i = t.get(e.id)) ? true : i.communicationProbability) ? a : 0)
  })
}