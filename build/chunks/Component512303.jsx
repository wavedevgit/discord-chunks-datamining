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
  var t, n, h, v;
  let {
    analyticsLocations: j
  } = (0, c.ZP)(), S = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.Y.USER_INSTALL], E = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], P = null == (h = e.interactionMetadata) ? true : h.user.id, T = (0, o.e7)([m.default], () => m.default.getUser(S)), I = (0, o.e7)([b.Z], () => b.Z.getGuild(E)), _ = p.Z.getChannel(e.channel_id), Z = null == _ ? true : _.getGuildId(), A = (0, o.e7)([m.default], () => m.default.getUser(P));
  if (i.useEffect(() => {
      null == T && null != S && (0, s.PR)(S)
    }, [T, S]), !(0, u.a)(e)) return null;
  null == A && (A = new g.Z(null == (v = e.interactionMetadata) ? true : v.user));
  let w = null;
  return null != I ? w = (0, r.jsx)(a.sNh, {
    className: O.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(d.Z, {
      guild: I,
      size: d.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: I.name,
    subtext: y.intl.formatToPlainString(y.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != T && (w = (0, r.jsx)(a.sNh, {
    action: () => (0, f.openUserProfileModal)({
      userId: T.id,
      guildId: Z,
      channelId: e.channel_id,
      sourceAnalyticsLocations: j
    }),
    className: O.interactionInfoMenuItem,
    leadingAccessory: {
      type: "avatar",
      src: T.getAvatarURL(Z, 18)
    },
    id: "integration-owner",
    label: T.username,
    subtext: y.intl.formatToPlainString(y.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(a.sNh, {
    id: "view-interaction-info",
    label: y.intl.string(y.t.Rjezbz),
    children: [w, null != A ? (0, r.jsx)(a.sNh, {
      action: () => (0, f.openUserProfileModal)({
        userId: A.id,
        guildId: Z,
        channelId: e.channel_id,
        sourceAnalyticsLocations: j
      }),
      className: O.interactionInfoMenuItem,
      leadingAccessory: {
        type: "avatar",
        src: A.getAvatarURL(Z, 18)
      },
      id: "interaction-user",
      label: A.username,
      subtext: y.intl.string(y.t["04gxNg"])
    }) : null]
  })
}