/** Chunk was on web.js **/
/** chunk id: 805143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => d
}), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk576705 = require("./576705.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function d(e, t) {
  var n;
  let d = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
    f = null != (n = null == e ? true : e.guild_id) ? n : c.dJq,
    p = (0, i.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
    _ = (0, i.bG)([a.A], () => null == e || null == e.guild_id || a.A.can(u.xB.USE_EXTERNAL_SOUNDS, e));
  return r.useMemo(() => {
    if ((l.Ay.canUseSoundboardEverywhere(d) || !t) && _) {
      let e = "" !== f,
        t = e ? p.filter(e => e !== f) : p;
      return e && t.unshift(f), t
    }
    return [f]
  }, [d, t, f, p, _])
}