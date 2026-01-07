/** Chunk was on web.js **/
/** chunk id: 97820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
});
var Chunk964742 = require("./964742.js"),
  Chunk40284 = require("./40284.js"),
  Chunk304832 = require("./304832.js"),
  Chunk603565 = require("./603565.js"),
  Chunk144459 = require("./144459.js");

function l() {
  arguments.length > 0 && true !== arguments[0] ? arguments[0] : o.Hn;
  var e = arguments.length > 1 ? arguments[1] : true;
  switch (e.type) {
    case r.$T:
      break;
    case i.fu:
    case i.Rd:
    case i.IS:
    case i.SG:
      return o.Hn;
    case r.qu:
    case r.js:
    case r.Bs:
    case r.rp:
    default:
      return o.QN
  }
  var t = e.payload,
    n = t.targetIds,
    l = true === n ? [] : n,
    c = t.prevTargetIds,
    u = true === c ? [] : c,
    d = (0, s.dl)(l, u);
  if (!(d.length > 0 || !(0, a.Hj)(l, u))) return o.Hn;
  var f = u[u.length - 1],
    p = l[l.length - 1];
  return f !== p && (f && d.push(f), p && d.push(p)), d
}