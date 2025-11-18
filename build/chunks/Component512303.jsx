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
  Chunk598955 = require("./598955.js");

function v(e) {
  var t, n, v, j;
  let {
    analyticsLocations: S
  } = (0, u.ZP)(), E = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.Y.USER_INSTALL], P = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], Z = null == (v = e.interactionMetadata) ? true : v.user.id, _ = (0, a.e7)([O.default], () => O.default.getUser(E)), T = (0, a.e7)([y.Z], () => y.Z.getGuild(P)), I = p.Z.getChannel(e.channel_id), N = null == I ? true : I.getGuildId(), w = (0, a.e7)([O.default], () => O.default.getUser(Z));
  if (i.useEffect(() => {
      null == _ && null != E && (0, s.PR)(E)
    }, [_, E]), !(0, d.a)(e)) return null;
  null == w && (w = new b.Z(null == (j = e.interactionMetadata) ? true : j.user));
  let A = null;
  return null != T ? A = (0, r.jsx)(o.sNh, {
    className: m.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(f.Z, {
      guild: T,
      size: f.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: T.name,
    subtext: h.intl.formatToPlainString(h.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != _ && (A = (0, r.jsx)(o.sNh, {
    action: () => (0, g.openUserProfileModal)({
      userId: _.id,
      guildId: N,
      channelId: e.channel_id,
      sourceAnalyticsLocations: S
    }),
    className: m.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(c.Z, {
      user: _,
      size: o.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: _.username,
    subtext: h.intl.formatToPlainString(h.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(o.sNh, {
    id: "view-interaction-info",
    label: h.intl.string(h.t.Rjezbz),
    children: [A, null != w ? (0, r.jsx)(o.sNh, {
      action: () => (0, g.openUserProfileModal)({
        userId: w.id,
        guildId: N,
        channelId: e.channel_id,
        sourceAnalyticsLocations: S
      }),
      className: m.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(c.Z, {
        user: w,
        size: o.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: w.username,
      subtext: h.intl.string(h.t["04gxNg"])
    }) : null]
  })
}