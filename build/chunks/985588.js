/** Chunk was on web.js **/
/** chunk id: 985588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => g,
  s: () => h
});
var Chunk442837 = require("./442837.js"),
  Chunk387343 = require("./387343.js"),
  Chunk66999 = require("./66999.js"),
  Chunk163612 = require("./163612.js"),
  Chunk314897 = require("./314897.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk607744 = require("./607744.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk979651 = require("./979651.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "useCanRing",
    n = arguments.length > 2 ? arguments[2] : true,
    i = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
    a = (0, r.e7)([s.default], () => s.default.getId() === e.id),
    o = (0, r.e7)([p.Z], () => p.Z.isFriend(e.id)),
    l = null == i ? true : i.type,
    u = null != l && m.TPd.CALLABLE.has(l),
    d = E(e, t, i) || u;
  return o && !a && !e.bot && !e.system && !e.isProvisional && d
}

function g(e) {
  let t = m.TPd.CALLABLE.has(e.type),
    n = e.type === m.d4z.GUILD_VOICE;
  if (t) {
    let t = l.Z.getCall(e.id);
    return null != t && null != t.messageId && !l.Z.isCallUnavailable(e.id)
  }
  if (n) {
    let {
      enabled: t
    } = o.Z.getCurrentConfig({
      guildId: e.guild_id,
      location: "ring"
    }), n = _.Z.getVoiceState(e.guild_id, s.default.getId());
    return t && null != n && n.channelId === e.id
  }
  returnfalse
}

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "useCanRingToGuildVoiceChannel",
    n = arguments.length > 2 ? arguments[2] : true,
    s = (0, r.e7)([f.Z], () => null != n && (0, i.Z)(n, f.Z)),
    l = (0, r.e7)([u.ZP, d.Z], () => {
      let t = null == n ? true : n.guild_id;
      if (null == t) returnfalse;
      let r = null != u.ZP.getMember(t, e.id),
        i = d.Z.getCheck(t).canChat;
      return r && i
    }),
    {
      needSubscriptionToAccess: c
    } = (0, a.Z)(null == n ? true : n.id),
    {
      enabled: p
    } = o.Z.useExperiment({
      guildId: null == n ? true : n.guild_id,
      location: t
    }),
    _ = (null == n ? true : n.type) === m.d4z.GUILD_VOICE;
  return p && _ && l && s && !c
}