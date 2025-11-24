/** Chunk was on 37220 **/
/** chunk id: 512303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    analyticsLocations: S
  } = (0, u.ZP)(), E = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.Y.USER_INSTALL], P = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], Z = null == (v = e.interactionMetadata) ? true : v.user.id, _ = (0, a.e7)([y.default], () => y.default.getUser(E)), I = (0, a.e7)([m.Z], () => m.Z.getGuild(P)), T = p.Z.getChannel(e.channel_id), N = null == T ? true : T.getGuildId(), w = (0, a.e7)([y.default], () => y.default.getUser(Z));
  if (i.useEffect(() => {
      null == _ && null != E && (0, s.PR)(E)
    }, [_, E]), !(0, d.a)(e)) return null;
  null == w && (w = new b.Z(null == (j = e.interactionMetadata) ? true : j.user));
  let M = null;
  return null != I ? M = (0, r.jsx)(o.sNh, {
    className: h.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(f.Z, {
      guild: I,
      size: f.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: I.name,
    subtext: O.intl.formatToPlainString(O.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != _ && (M = (0, r.jsx)(o.sNh, {
    action: () => (0, g.openUserProfileModal)({
      userId: _.id,
      guildId: N,
      channelId: e.channel_id,
      sourceAnalyticsLocations: S
    }),
    className: h.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(c.Z, {
      user: _,
      size: o.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: _.username,
    subtext: O.intl.formatToPlainString(O.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(o.sNh, {
    id: "view-interaction-info",
    label: O.intl.string(O.t.Rjezbz),
    children: [M, null != w ? (0, r.jsx)(o.sNh, {
      action: () => (0, g.openUserProfileModal)({
        userId: w.id,
        guildId: N,
        channelId: e.channel_id,
        sourceAnalyticsLocations: S
      }),
      className: h.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(c.Z, {
        user: w,
        size: o.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: w.username,
      subtext: O.intl.string(O.t["04gxNg"])
    }) : null]
  })
}