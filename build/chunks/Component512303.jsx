/** Chunk was on 37220 **/
/** chunk id: 512303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk327420 = require("./327420.js");

function h(e) {
  var t, n, h, j;
  let {
    analyticsLocations: S
  } = (0, u.ZP)(), E = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.Y.USER_INSTALL], P = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], T = null == (h = e.interactionMetadata) ? true : h.user.id, _ = (0, o.e7)([y.default], () => y.default.getUser(E)), I = (0, o.e7)([O.Z], () => O.Z.getGuild(P)), Z = p.Z.getChannel(e.channel_id), w = null == Z ? true : Z.getGuildId(), A = (0, o.e7)([y.default], () => y.default.getUser(T));
  if (i.useEffect(() => {
      null == _ && null != E && (0, c.PR)(E)
    }, [_, E]), !(0, d.a)(e)) return null;
  null == A && (A = new b.Z(null == (j = e.interactionMetadata) ? true : j.user));
  let N = null;
  return null != I ? N = (0, r.jsx)(a.sNh, {
    className: v.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(f.Z, {
      guild: I,
      size: f.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: I.name,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != _ && (N = (0, r.jsx)(a.sNh, {
    action: () => (0, g.openUserProfileModal)({
      userId: _.id,
      guildId: w,
      channelId: e.channel_id,
      sourceAnalyticsLocations: S
    }),
    className: v.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(s.Z, {
      user: _,
      size: a.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: _.username,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(a.sNh, {
    id: "view-interaction-info",
    label: m.intl.string(m.t.Rjezbz),
    children: [N, null != A ? (0, r.jsx)(a.sNh, {
      action: () => (0, g.openUserProfileModal)({
        userId: A.id,
        guildId: w,
        channelId: e.channel_id,
        sourceAnalyticsLocations: S
      }),
      className: v.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(s.Z, {
        user: A,
        size: a.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: A.username,
      subtext: m.intl.string(m.t["04gxNg"])
    }) : null]
  })
}