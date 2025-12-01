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
  arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk603565.Hn;
  var e = arguments.length > 1 ? arguments[1] : true;
  switch (module.type) {
    case Chunk964742.$T:
      break;
    case Chunk40284.fu:
    case Chunk40284.Rd:
    case Chunk40284.IS:
    case Chunk40284.SG:
      return Chunk603565.Hn;
    case Chunk964742.qu:
    case Chunk964742.js:
    case Chunk964742.Bs:
    case Chunk964742.rp:
    default:
      return Chunk603565.QN
  }
  var t = module.payload,
    n = exports.targetIds,
    l = true === require ? [] : require,
    c = exports.prevTargetIds,
    u = true === c ? [] : c,
    d = (0, Chunk144459.dl)(l, u);
  if (!(d.length > 0 || !(0, Chunk304832.Hj)(l, u))) return Chunk603565.Hn;
  var f = u[u.length - 1],
    p = l[l.length - 1];
  return f !== p && (f && d.push(f), p && d.push(p)), d
}