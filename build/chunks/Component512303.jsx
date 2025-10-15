/** Chunk was on 37220 **/
/** chunk id: 512303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk373793 = require("./373793.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk592180 = require("./592180.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk121271 = require("./121271.js");

function v(e) {
  var t, n, v, j;
  let {
    analyticsLocations: E
  } = (0, u.ZP)(), S = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.Y.USER_INSTALL], P = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], _ = null == (v = e.interactionMetadata) ? true : v.user.id, T = (0, a.e7)([y.default], () => y.default.getUser(S)), Z = (0, a.e7)([O.Z], () => O.Z.getGuild(P)), w = p.Z.getChannel(e.channel_id), I = null == w ? true : w.getGuildId(), N = (0, a.e7)([y.default], () => y.default.getUser(_));
  if (i.useEffect(() => {
      null == T && null != S && (0, s.PR)(S)
    }, [T, S]), !(0, d.a)(e)) return null;
  null == N && (N = new b.default(null == (j = e.interactionMetadata) ? true : j.user));
  let A = null;
  return null != Z ? A = (0, r.jsx)(o.sNh, {
    className: h.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(f.Z, {
      guild: Z,
      size: f.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: Z.name,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != T && (A = (0, r.jsx)(o.sNh, {
    action: () => (0, g.openUserProfileModal)({
      userId: T.id,
      guildId: I,
      channelId: e.channel_id,
      sourceAnalyticsLocations: E
    }),
    className: h.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(c.Z, {
      user: T,
      size: o.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: T.username,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(o.sNh, {
    id: "view-interaction-info",
    label: m.intl.string(m.t.Rjezbz),
    children: [A, null != N ? (0, r.jsx)(o.sNh, {
      action: () => (0, g.openUserProfileModal)({
        userId: N.id,
        guildId: I,
        channelId: e.channel_id,
        sourceAnalyticsLocations: E
      }),
      className: h.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(c.Z, {
        user: N,
        size: o.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: N.username,
      subtext: m.intl.string(m.t["04gxNg"])
    }) : null]
  })
}