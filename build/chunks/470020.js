/** Chunk was on web.js **/
/** chunk id: 470020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk762230 = require("./762230.js"),
  Chunk807348 = require("./807348.js"),
  Chunk320501 = require("./320501.js"),
  Chunk980504 = require("./980504.js");

function s(e, t) {
  let n;
  for (let i of e) {
    var r;
    let e = l(null == (r = i.message) ? true : r.soundboardSounds, t);
    if (null != e) {
      n = e;
      break
    }
  }
  return n
}

function l(e, t) {
  return null == e ? true : e.find(e => String(e.sound_id) === String(t))
}

function c(e, t, n, c) {
  var u, d, f, p;
  let _ = l(c, n);
  if (null != _) return (0, i.N0)(_, null != (p = _.guild_id) ? p : o.mV);
  let h = a.A.getMessage(e, t);
  if (null != h && null != (_ = (null == h || null == (f = h.messageReference) ? true : f.type) === r.S.FORWARD ? s(null != (u = null == h ? true : h.messageSnapshots) ? u : [], n) : l(null == h ? true : h.soundboardSounds, n))) return (0, i.N0)(_, null != (d = _.guild_id) ? d : o.mV)
}