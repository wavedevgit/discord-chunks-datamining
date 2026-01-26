/** Chunk was on 1636 **/
/** chunk id: 25287, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk485845 = require("./485845.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk966327 = require("./966327.jsx"),
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

function v(e) {
  var t, n, v, j;
  let {
    analyticsLocations: h
  } = (0, d.Ay)(), E = null == (t = e.interactionMetadata) ? true : t.authorizing_integration_owners[l.b.USER_INSTALL], S = null == (n = e.interactionMetadata) ? true : n.authorizing_integration_owners[l.b.GUILD_INSTALL], _ = null == (v = e.interactionMetadata) ? true : v.user.id, D = (0, a.bG)([A.default], () => A.default.getUser(E)), P = (0, a.bG)([b.A], () => b.A.getGuild(S)), T = y.A.getChannel(e.channel_id), I = null == T ? true : T.getGuildId(), x = (0, a.bG)([A.default], () => A.default.getUser(_));
  if (i.useEffect(() => {
      null == D && null != E && (0, c.wz)(E)
    }, [D, E]), !(0, u._)(e)) return null;
  null == x && (x = new f.A(null == (j = e.interactionMetadata) ? true : j.user));
  let w = null;
  return null != P ? w = (0, r.jsx)(o.Drp, {
    className: O.X,
    disabled: true,
    iconLeft: () => (0, r.jsx)(g.A, {
      guild: P,
      size: g.A.Sizes.MINI
    }),
    id: "integration-owner",
    label: P.name,
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  }) : null != D && (w = (0, r.jsx)(o.Drp, {
    action: () => (0, p.openUserProfileModal)({
      userId: D.id,
      guildId: I,
      channelId: e.channel_id,
      sourceAnalyticsLocations: h
    }),
    className: O.X,
    leadingAccessory: {
      type: "avatar",
      src: D.getAvatarURL(I, 18)
    },
    id: "integration-owner",
    label: D.username,
    iconLeft: () => (0, r.jsx)(s.A, {
      user: D,
      size: o._3J.SIZE_20
    }),
    subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
      application: e.author.username
    })
  })), (0, r.jsxs)(o.Drp, {
    id: "view-interaction-info",
    label: m.intl.string(m.t.Rjezbz),
    leadingAccessory: {
      type: "icon",
      icon: o.mir
    },
    children: [w, null != x ? (0, r.jsx)(o.Drp, {
      action: () => (0, p.openUserProfileModal)({
        userId: x.id,
        guildId: I,
        channelId: e.channel_id,
        sourceAnalyticsLocations: h
      }),
      className: O.X,
      leadingAccessory: {
        type: "avatar",
        src: x.getAvatarURL(I, 18)
      },
      iconLeft: () => (0, r.jsx)(s.A, {
        user: x,
        size: o._3J.SIZE_20
      }),
      id: "interaction-user",
      label: x.username,
      subtext: m.intl.string(m.t["04gxNg"])
    }) : null]
  })
}