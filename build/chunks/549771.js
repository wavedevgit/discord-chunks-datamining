/** Chunk was on web.js **/
/** chunk id: 549771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => d
}), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function d(e, t) {
  var n;
  let d = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    f = null != (n = null == e ? true : e.guild_id) ? n : c.lds,
    p = (0, i.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
    _ = (0, i.e7)([o.Z], () => null == e || null == e.guild_id || o.Z.can(u.Pl.USE_EXTERNAL_SOUNDS, e));
  return r.useMemo(() => {
    if ((l.ZP.canUseSoundboardEverywhere(d) || !t) && _) {
      let e = "" !== f,
        t = e ? p.filter(e => e !== f) : p;
      return e && t.unshift(f), t
    }
    return [f]
  }, [d, t, f, p, _])
}