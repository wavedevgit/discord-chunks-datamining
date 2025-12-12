/** Chunk was on web.js **/
/** chunk id: 17894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk39612 = require("./39612.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk232567 = require("./232567.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js");
async function m(e) {
  var t, n;
  let r = null == (t = i().os) ? true : t.family;
  if ("Android" === r || "iOS" === r) {
    let t = null != (n = u.default.getFingerprint()) ? n : u.default.getId(),
      r = (0, a.WS)();
    if (null == t && u.default.isAuthenticated()) try {
      await (0, l.k)(), t = u.default.getId()
    } catch (e) {}
    return (0, a.ZP)((0, o.Gk)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: r
    })
  }
  return "discord://"
}
async function h(e) {
  let t = await m(e),
    n = (0, a.zS)(t);
  null != n && f.default.track(_.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, s.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), p.Z.launch(t, e => {
    e || (0, c.dL)(d.Z.fallbackRoute)
  })
}