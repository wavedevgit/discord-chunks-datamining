/** Chunk was on web.js **/
/** chunk id: 780439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => l
});
var Chunk317374 = require("./317374.js"),
  Chunk681456 = require("./681456.js"),
  Chunk492597 = require("./492597.js"),
  Chunk441870 = require("./441870.js"),
  Chunk988440 = require("./988440.js");

function l() {
  arguments.length > 0 && true !== arguments[0] ? arguments[0] : s.x3;
  var e = arguments.length > 1 ? arguments[1] : true;
  switch (e.type) {
    case r.l6:
      break;
    case i.Yd:
    case i.SO:
    case i.v4:
    case i.n_:
      return s.x3;
    case r.Vw:
    case r.BS:
    case r.dU:
    case r.q2:
    default:
      return s.y2
  }
  var t = e.payload,
    n = t.targetIds,
    l = true === n ? [] : n,
    c = t.prevTargetIds,
    u = true === c ? [] : c,
    d = (0, o.I8)(l, u);
  if (!(d.length > 0 || !(0, a.BI)(l, u))) return s.x3;
  var f = u[u.length - 1],
    p = l[l.length - 1];
  return f !== p && (f && d.push(f), p && d.push(p)), d
}