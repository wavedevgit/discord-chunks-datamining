/** Chunk was on web.js **/
/** chunk id: 767434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f,
  y: () => d
}), require("./314940.js");
var Chunk73800 = require("./73800.js"),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk125900 = require("./125900.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  d = function(e) {
    return e[e.JOIN_GUILD = 0] = "JOIN_GUILD", e[e.GET_NITRO = 1] = "GET_NITRO", e[e.NONE = 2] = "NONE", e
  }({});

function f(e, t, n, d) {
  let f = e.guildId === c.X8,
    _ = (0, a.e7)([o.default], () => s.ZP.canUseSoundboardEverywhere(o.default.getCurrentUser())),
    p = (0, l.V2)({
      location: "useSoundmojiGuildInfoData"
    }),
    h = e.guildId !== (null == t ? true : t.guild_id);
  return {
    buttonType: r.useMemo(() => f || !p ? 2 : p && !_ ? 1 : n || null == d ? 2 : 0, [f, _, p, n, d]),
    description: r.useMemo(() => {
      let e = null != d;
      return (0, i.EQ)({
        hasSoundmojiPermissions: _,
        isInGuild: n,
        isGuildDiscoverable: e,
        isSoundFromDifferentGuild: h,
        canSendSoundmojis: p,
        isDefaultSound: f
      }).with({
        canSendSoundmojis: false
      }, () => u.intl.string(u.t.x2kyyM)).with({
        isDefaultSound: true
      }, () => u.intl.string(u.t.AabHen)).with({
        isInGuild: false,
        isGuildDiscoverable: false
      }, () => u.intl.string(u.t.MRYt09)).with({
        hasSoundmojiPermissions: true,
        isInGuild: true,
        isSoundFromDifferentGuild: false
      }, () => u.intl.string(u.t.p17MQE)).with({
        hasSoundmojiPermissions: true,
        isInGuild: true,
        isSoundFromDifferentGuild: true
      }, () => u.intl.string(u.t.Lkbm5u)).with({
        hasSoundmojiPermissions: true,
        isInGuild: false,
        isGuildDiscoverable: true
      }, () => u.intl.string(u.t.GTJmaW)).with({
        hasSoundmojiPermissions: false,
        isInGuild: true,
        isSoundFromDifferentGuild: false
      }, () => u.intl.string(u.t["sj/imZ"])).with({
        hasSoundmojiPermissions: false,
        isInGuild: true,
        isSoundFromDifferentGuild: true,
        canSendSoundmojis: true
      }, () => u.intl.string(u.t["3Ru2//"])).with({
        hasSoundmojiPermissions: false,
        isInGuild: false,
        isGuildDiscoverable: true
      }, () => u.intl.string(u.t.qRkWhY)).exhaustive()
    }, [f, d, _, n, h, p])
  }
}