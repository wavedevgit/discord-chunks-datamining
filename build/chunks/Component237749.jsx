/** Chunk was on 55296 **/
/** chunk id: 237749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk849736 = require("./849736.js"),
  Chunk312006 = require("./312006.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
  var b;
  let f = a.A.getChannel(n),
    m = (0, i.bG)([o.A], () => o.A.getGuild(t), [t]),
    p = (0, i.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
    v = (null == (b = u.default.getCurrentUser()) ? true : b.id) === e.id,
    y = (0, i.bG)([s.A], () => null != n && s.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != f && null != m && (y || v) && p.speaker ? (0, l.jsx)(r.Drp, {
    id: "audience",
    label: v ? g.intl.string(g.t["6C6PJx"]) : g.intl.string(g.t.VK3vQy),
    action: () => {
      v ? (0, d.Tf)(f) : (0, d.gt)(e, f)
    }
  }) : null
}