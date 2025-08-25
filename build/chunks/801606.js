/** Chunk was on web.js **/
/** chunk id: 801606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk388123 = require("./388123.js"),
  Chunk697426 = require("./697426.js"),
  Chunk375954 = require("./375954.js"),
  Chunk710111 = require("./710111.js");

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
  var u, d, f, _;
  let p = l(c, n);
  if (null != p) return (0, i.o3)(p, null != (d = p.guild_id) ? d : a.X8);
  let h = o.Z.getMessage(e, t);
  if (null != h && null != (p = (null == h || null == (u = h.messageReference) ? true : u.type) === r.U.FORWARD ? s(null != (f = null == h ? true : h.messageSnapshots) ? f : [], n) : l(null == h ? true : h.soundboardSounds, n))) return (0, i.o3)(p, null != (_ = p.guild_id) ? _ : a.X8)
}