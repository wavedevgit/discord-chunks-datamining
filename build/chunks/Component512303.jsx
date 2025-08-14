/** Chunk was on web.js **/
/** chunk id: 512303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function y(e) {
  var t, n, y, O;
  let {
    analyticsLocations: v
  } = (0, u.ZP)(), I = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[o.Y.USER_INSTALL], T = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[o.Y.GUILD_INSTALL], S = null == (y = e.interactionMetadata) ? true : y.user.id, A = (0, a.e7)([g.default], () => g.default.getUser(I)), N = (0, a.e7)([m.Z], () => m.Z.getGuild(T)), C = h.Z.getChannel(e.channel_id), R = null == C ? true : C.getGuildId(), P = (0, a.e7)([g.default], () => g.default.getUser(S));
  if (i.useEffect(() => {
      null == A && null != I && (0, l.PR)(I)
    }, [A, I]), !(0, d.a)(e)) return null;
  null == P && (P = new p.Z(null == (O = e.interactionMetadata) ? true : O.user));
  let w = null;
  return null != N ? w = (0, r.jsx)(s.sNh, {
    className: b.interactionInfoMenuItem,
    disabled: true,
    iconLeft: () => (0, r.jsx)(f.Z, {
      guild: N,
      size: f.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: N.name,
    subtext: E.intl.formatToPlainString(E.t.ShLXXF, {
      application: e.author.username
    })
  }) : null != A && (w = (0, r.jsx)(s.sNh, {
    action: () => (0, _.openUserProfileModal)({
      userId: A.id,
      guildId: R,
      channelId: e.channel_id,
      sourceAnalyticsLocations: v
    }),
    className: b.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(c.Z, {
      user: A,
      size: s.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: A.username,
    subtext: E.intl.formatToPlainString(E.t.ShLXXF, {
      application: e.author.username
    })
  })), (0, r.jsxs)(s.sNh, {
    id: "view-interaction-info",
    label: E.intl.string(E.t.Rjezb2),
    children: [w, null != P ? (0, r.jsx)(s.sNh, {
      action: () => (0, _.openUserProfileModal)({
        userId: P.id,
        guildId: R,
        channelId: e.channel_id,
        sourceAnalyticsLocations: v
      }),
      className: b.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(c.Z, {
        user: P,
        size: s.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: P.username,
      subtext: E.intl.string(E.t["04gxNj"])
    }) : null]
  })
}