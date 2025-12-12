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
  var u, d, f, p;
  let _ = l(c, n);
  if (null != _) return (0, i.o3)(_, null != (d = _.guild_id) ? d : a.X8);
  let m = o.Z.getMessage(e, t);
  if (null != m && null != (_ = (null == m || null == (u = m.messageReference) ? true : u.type) === r.U.FORWARD ? s(null != (f = null == m ? true : m.messageSnapshots) ? f : [], n) : l(null == m ? true : m.soundboardSounds, n))) return (0, i.o3)(_, null != (p = _.guild_id) ? p : a.X8)
}