/** Chunk was on 1636 **/
/** chunk id: 25287, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk485845 = require("./485845.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk597929 = require("./597929.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk79924 = require("./79924.js");

function A(e) {
  var t, n, A, v;
  let {
    analyticsLocations: j
  } = (0, s.Ay)(), h = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[i.b.USER_INSTALL], E = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[i.b.GUILD_INSTALL], S = null == (A = e.interactionMetadata) ? true : A.user.id, _ = (0, o.bG)([m.default], () => m.default.getUser(h)), D = (0, o.bG)([b.A], () => b.A.getGuild(E)), I = p.A.getChannel(e.channel_id), P = null == I ? true : I.getGuildId(), T = (0, o.bG)([m.default], () => m.default.getUser(S));
  if (l.useEffect(() => {
      null == _ && null != h && (0, c.wz)(h)
    }, [_, h]), !(0, d._)(e)) return null;
  null == T && (T = new g.A(null == (v = e.interactionMetadata) ? true : v.user));
  let x = null;
  return null != D ? x = (0, r.jsx)(a.Drp, {
    className: O.X,
    disabled: true,
    iconLeft: () => (0, r.jsx)(u.A, {
      guild: D,
      size: u.A.Sizes.MINI
    }),
    id: "integration-owner",
    label: D.name,
    subtext: y.intl.formatToPlainString(y.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != _ && (x = (0, r.jsx)(a.Drp, {
    action: () => (0, f.openUserProfileModal)({
      userId: _.id,
      guildId: P,
      channelId: e.channel_id,
      sourceAnalyticsLocations: j
    }),
    className: O.X,
    leadingAccessory: {
      type: "avatar",
      src: _.getAvatarURL(P, 18)
    },
    id: "integration-owner",
    label: _.username,
    subtext: y.intl.formatToPlainString(y.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(a.Drp, {
    id: "view-interaction-info",
    label: y.intl.string(y.t.Rjezbz),
    children: [x, null != T ? (0, r.jsx)(a.Drp, {
      action: () => (0, f.openUserProfileModal)({
        userId: T.id,
        guildId: P,
        channelId: e.channel_id,
        sourceAnalyticsLocations: j
      }),
      className: O.X,
      leadingAccessory: {
        type: "avatar",
        src: T.getAvatarURL(P, 18)
      },
      id: "interaction-user",
      label: T.username,
      subtext: y.intl.string(y.t["04gxNg"])
    }) : null]
  })
}