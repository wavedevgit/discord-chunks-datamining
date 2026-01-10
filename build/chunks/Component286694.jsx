/** Chunk was on 92524 **/
/** chunk id: 286694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function m(e, t, n) {
  var m;
  let b = a.Z.getChannel(n),
    Z = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
    v = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
    p = (null == (m = s.default.getCurrentUser()) ? true : m.id) === e.id,
    E = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != b && null != Z && (E || p) && v.speaker ? (0, l.jsx)(r.sNh, {
    id: "audience",
    label: p ? f.intl.string(f.t["6C6PJx"]) : f.intl.string(f.t.VK3vQy),
    action: () => {
      p ? (0, d.yi)(b) : (0, d.hz)(e, b)
    }
  }) : null
}