/** Chunk was on web.js **/
/** chunk id: 325909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => m,
  p: () => g
});
var Chunk311907 = require("./311907.js"),
  Chunk890615 = require("./890615.js"),
  Chunk721592 = require("./721592.js"),
  Chunk164891 = require("./164891.js"),
  Chunk961350 = require("./961350.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk834942 = require("./834942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk977997 = require("./977997.js"),
  Chunk652215 = require("./652215.js");

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "useCanRing",
    n = arguments.length > 2 ? arguments[2] : true,
    i = (0, r.bG)([c.A], () => c.A.getChannel(n)),
    a = (0, r.bG)([o.default], () => o.default.getId() === e.id),
    s = (0, r.bG)([p.A], () => p.A.isFriend(e.id)),
    l = null == i ? true : i.type,
    u = null != l && h.kvI.CALLABLE.has(l),
    d = E(e, t, i) || u;
  return s && !a && !e.bot && !e.system && !e.isProvisional && d
}

function g(e) {
  let t = h.kvI.CALLABLE.has(e.type),
    n = e.type === h.rbe.GUILD_VOICE;
  if (t) {
    let t = l.A.getCall(e.id);
    return null != t && null != t.messageId && !l.A.isCallUnavailable(e.id)
  }
  if (n) {
    let {
      enabled: t
    } = s.A.getCurrentConfig({
      guildId: e.guild_id,
      location: "ring"
    }), n = _.A.getVoiceState(e.guild_id, o.default.getId());
    return t && null != n && n.channelId === e.id
  }
  returnfalse
}

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
    n = arguments.length > 2 ? arguments[2] : true,
    o = (0, r.bG)([f.A], () => null != n && (0, i.A)(n, f.A)),
    l = (0, r.bG)([u.Ay, d.A], () => {
      let t = null == n ? true : n.guild_id;
      if (null == t) returnfalse;
      let r = null != u.Ay.getMember(t, e.id),
        i = d.A.getCheck(t).canChat;
      return r && i
    }),
    {
      needSubscriptionToAccess: c
    } = (0, a.A)(null == n ? true : n.id),
    {
      enabled: p
    } = s.A.useExperiment({
      guildId: null == n ? true : n.guild_id,
      location: t
    }),
    _ = (null == n ? true : n.type) === h.rbe.GUILD_VOICE;
  return p && _ && l && o && !c
}