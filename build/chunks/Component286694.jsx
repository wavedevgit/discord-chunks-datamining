/** Chunk was on 8982 **/
/** chunk id: 286694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk471253 = require("./471253.js"),
  Chunk88751 = require("./88751.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  var f;
  let E = a.Z.getChannel(n),
    Z = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
    P = (0, i.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
    v = (null == (f = s.default.getCurrentUser()) ? true : f.id) === e.id,
    b = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != E && null != Z && (b || v) && P.speaker ? (0, l.jsx)(r.sNh, {
    id: "audience",
    label: v ? m.intl.string(m.t["6C6PJx"]) : m.intl.string(m.t.VK3vQy),
    action: () => {
      v ? (0, c.yi)(E) : (0, c.hz)(e, E)
    }
  }) : null
}