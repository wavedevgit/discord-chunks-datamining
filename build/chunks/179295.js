/** Chunk was on web.js **/
/** chunk id: 179295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk959457 = require("./959457.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function u(e, t, n) {
  s.default.track(l.rMx.PREMIUM_FEATURE_USAGE, {
    feature_name: "".concat(c.QP.SHARED_CANVAS, "_").concat(e.type),
    feature_tier: c.h1.FREE,
    media_session_id: t.getMediaSessionId(),
    parent_media_session_id: t.parentMediaSessionId,
    guild_id: t.guildId,
    duration: n
  })
}

function d(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: s,
    handleMouseUp: l,
    handleMouseEnter: c
  } = e, d = r.useRef(null), f = (0, i.e7)([a.Z], () => a.Z.getRTCConnection((0, o.V9)(t))), _ = r.useCallback((e, t, r) => {
    d.current = Date.now(), n(e, t, r)
  }, [n]);
  return {
    handleMouseUp: r.useCallback((e, t, n) => {
      l(e, t, n), null != d.current && (null != f && u(e, f, Date.now() - d.current), d.current = null)
    }, [l, f]),
    handleMouseDown: _,
    handleMouseMove: s,
    handleMouseEnter: c
  }
}