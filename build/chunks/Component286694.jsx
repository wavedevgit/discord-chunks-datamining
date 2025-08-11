/** Chunk was on 8982 **/
/** chunk id: 286694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  let Z = a.Z.getChannel(n),
    P = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
    E = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
    v = (null == (m = s.default.getCurrentUser()) ? true : m.id) === e.id,
    b = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != Z && null != P && (b || v) && E.speaker ? (0, l.jsx)(r.sNh, {
    id: "audience",
    label: v ? f.intl.string(f.t["6C6PJy"]) : f.intl.string(f.t.VK3vQ0),
    action: () => {
      v ? (0, d.yi)(Z) : (0, d.hz)(e, Z)
    }
  }) : null
}