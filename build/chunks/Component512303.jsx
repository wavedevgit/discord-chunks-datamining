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
  } = (0, u.ZP)(), S = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.Y.USER_INSTALL], _ = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], P = null == (v = e.interactionMetadata) ? true : v.user.id, Z = (0, a.e7)([y.default], () => y.default.getUser(S)), T = (0, a.e7)([O.Z], () => O.Z.getGuild(_)), I = p.Z.getChannel(e.channel_id), w = null == I ? true : I.getGuildId(), A = (0, a.e7)([y.default], () => y.default.getUser(P));
  if (i.useEffect(() => {
      null == Z && null != S && (0, s.PR)(S)
    }, [Z, S]), !(0, d.a)(e)) return null;
  null == A && (A = new b.Z(null == (j = e.interactionMetadata) ? true : j.user));
  let N = null;
  return null != T ? N = (0, r.jsx)(o.sNh, {
    className: h.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(f.Z, {
      guild: T,
      size: f.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: T.name,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != Z && (N = (0, r.jsx)(o.sNh, {
    action: () => (0, g.openUserProfileModal)({
      userId: Z.id,
      guildId: w,
      channelId: e.channel_id,
      sourceAnalyticsLocations: E
    }),
    className: h.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(c.Z, {
      user: Z,
      size: o.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: Z.username,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(o.sNh, {
    id: "view-interaction-info",
    label: m.intl.string(m.t.Rjezbz),
    children: [N, null != A ? (0, r.jsx)(o.sNh, {
      action: () => (0, g.openUserProfileModal)({
        userId: A.id,
        guildId: w,
        channelId: e.channel_id,
        sourceAnalyticsLocations: E
      }),
      className: h.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(c.Z, {
        user: A,
        size: o.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: A.username,
      subtext: m.intl.string(m.t["04gxNg"])
    }) : null]
  })
}