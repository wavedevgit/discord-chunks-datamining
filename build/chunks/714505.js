/** Chunk was on 86142 **/
/** chunk id: 714505, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk481613 = require("./481613.js"),
  l = require.n(Chunk481613),
  Chunk400253 = require("./400253.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk954571 = require("./954571.js"),
  Chunk877062 = require("./877062.js"),
  Chunk652215 = require("./652215.js");

function _(e) {
  let t = function(e) {
      var t;
      let n = null == (t = l().os) ? true : t.family;
      if ("Android" === n || "iOS" === n) {
        let t = d.default.getFingerprint(),
          n = (0, o.I_)();
        return i()(null != e, "generateAppPath: guildId cannot be null"), (0, o.Ay)((0, a.jN)(e), {
          utmSource: "verify_hub_email",
          fingerprint: t,
          attemptId: n
        })
      }
      return "discord://"
    }(e),
    n = (0, o.X7)(t);
  null != n && p.default.track(f.HAw.DEEP_LINK_CLICKED, {
    fingerprint: (0, c.v)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), g.A.launch(t, e => {
    e || (0, u.bG)(h.A.fallbackRoute)
  })
}