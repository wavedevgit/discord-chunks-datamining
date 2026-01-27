/** Chunk was on web.js **/
/** chunk id: 586652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f,
  E: () => d
}), require("./801541.js");
var Chunk64700 = require("./64700.js"),
  Chunk889137 = require("./889137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk704591 = require("./704591.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  d = function(e) {
    return e[e.JOIN_GUILD = 0] = "JOIN_GUILD", e[e.GET_NITRO = 1] = "GET_NITRO", e[e.NONE = 2] = "NONE", e
  }({});

function f(e, t, n, d) {
  let f = e.guildId === c.mV,
    p = (0, a.bG)([o.default], () => s.Ay.canUseSoundboardEverywhere(o.default.getCurrentUser())),
    _ = (0, l.tj)({
      location: "useSoundmojiGuildInfoData"
    }),
    h = e.guildId !== (null == t ? true : t.guild_id);
  return {
    buttonType: r.useMemo(() => f || !_ ? 2 : _ && !p ? 1 : n || null == d ? 2 : 0, [f, p, _, n, d]),
    description: r.useMemo(() => {
      let e = null != d;
      return (0, i.YW)({
        hasSoundmojiPermissions: p,
        isInGuild: n,
        isGuildDiscoverable: e,
        isSoundFromDifferentGuild: h,
        canSendSoundmojis: _,
        isDefaultSound: f
      }).with({
        canSendSoundmojis: false
      }, () => u.intl.string(u.t.x2kyyJ)).with({
        isDefaultSound: true
      }, () => u.intl.string(u.t.AabHep)).with({
        isInGuild: false,
        isGuildDiscoverable: false
      }, () => u.intl.string(u.t.MRYt06)).with({
        hasSoundmojiPermissions: true,
        isInGuild: true,
        isSoundFromDifferentGuild: false
      }, () => u.intl.string(u.t.p17MQJ)).with({
        hasSoundmojiPermissions: true,
        isInGuild: true,
        isSoundFromDifferentGuild: true
      }, () => u.intl.string(u.t.Lkbm5s)).with({
        hasSoundmojiPermissions: true,
        isInGuild: false,
        isGuildDiscoverable: true
      }, () => u.intl.string(u.t.GTJmaS)).with({
        hasSoundmojiPermissions: false,
        isInGuild: true,
        isSoundFromDifferentGuild: false
      }, () => u.intl.string(u.t["sj/imS"])).with({
        hasSoundmojiPermissions: false,
        isInGuild: true,
        isSoundFromDifferentGuild: true,
        canSendSoundmojis: true
      }, () => u.intl.string(u.t["3Ru2/x"])).with({
        hasSoundmojiPermissions: false,
        isInGuild: false,
        isGuildDiscoverable: true
      }, () => u.intl.string(u.t.qRkWhZ)).exhaustive()
    }, [f, d, p, n, h, _])
  }
}