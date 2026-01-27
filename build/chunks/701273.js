/** Chunk was on web.js **/
/** chunk id: 701273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk481613 = require("./481613.js"),
  i = require.n(Chunk481613),
  Chunk400253 = require("./400253.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk803306 = require("./803306.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk954571 = require("./954571.js"),
  Chunk877062 = require("./877062.js"),
  Chunk652215 = require("./652215.js");
async function h(e) {
  var t, n;
  let r = null == (t = i().os) ? true : t.family;
  if ("Android" === r || "iOS" === r) {
    let t = null != (n = u.default.getFingerprint()) ? n : u.default.getId(),
      r = (0, o.I_)();
    if (null == t && u.default.isAuthenticated()) try {
      await (0, l.rQ)(), t = u.default.getId()
    } catch (e) {}
    return (0, o.Ay)((0, a.BH)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: r
    })
  }
  return "discord://"
}
async function m(e) {
  let t = await h(e),
    n = (0, o.X7)(t);
  null != n && f.default.track(_.HAw.DEEP_LINK_CLICKED, {
    fingerprint: (0, s.v)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), p.A.launch(t, e => {
    e || (0, c.bG)(d.A.fallbackRoute)
  })
}