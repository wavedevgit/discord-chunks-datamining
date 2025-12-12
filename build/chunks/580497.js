/** Chunk was on 27978 **/
/** chunk id: 580497, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk525654 = require("./525654.js"),
  l = require.n(Chunk525654),
  Chunk39612 = require("./39612.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let t = function(e) {
      var t;
      let n = null == (t = l().os) ? true : t.family;
      if ("Android" === n || "iOS" === n) {
        let t = d.default.getFingerprint(),
          n = (0, o.WS)();
        return i()(null != e, "generateAppPath: guildId cannot be null"), (0, o.ZP)((0, a.z0)(e), {
          utmSource: "verify_hub_email",
          fingerprint: t,
          attemptId: n
        })
      }
      return "discord://"
    }(e),
    n = (0, o.zS)(t);
  null != n && g.default.track(p.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, c.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), m.Z.launch(t, e => {
    e || (0, u.dL)(h.Z.fallbackRoute)
  })
}