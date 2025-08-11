/** Chunk was on 7654 **/
/** chunk id: 259473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk399606 = require("./399606.js"),
  Chunk430824 = require("./430824.js"),
  Chunk971130 = require("./971130.js"),
  Chunk956829 = require("./956829.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let {
    guildId: t
  } = e, n = s.h.useExperiment({
    guildId: null != t ? t : a.lds,
    location: "6798be_2"
  }), o = (0, l.e7)([i.Z], () => i.Z.getGuild(t));
  return null != t && function(e) {
    var t;
    let {
      guild: n,
      experimentConfig: l
    } = e, {
      defaultInvitesToNeverExpire: i
    } = null != l ? l : s.h.getCurrentConfig({
      guildId: null != (t = null == n ? true : n.id) ? t : a.lds,
      location: "6798be_1"
    });
    if ((null == n ? true : n.features.has(a.oNc.HUB)) || (null == n ? true : n.features.has(a.oNc.COMMUNITY)) && i) return r.ZP.INVITE_OPTIONS_FOREVER.value
  }({
    guild: o,
    experimentConfig: n
  })
}