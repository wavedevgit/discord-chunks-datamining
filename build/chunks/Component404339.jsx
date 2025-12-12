/** Chunk was on 12858 **/
/** chunk id: 404339, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785232 = require("./785232.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk33194 = require("./33194.js"),
  Chunk343544 = require("./343544.jsx"),
  Chunk14251 = require("./14251.jsx"),
  Chunk110223 = require("./110223.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405842 = require("./405842.js");

function x(e) {
  let {
    channelId: t,
    blockedUserIds: n,
    ignoredUserIds: x,
    transitionState: h,
    onClose: p,
    onJoin: E
  } = e, v = Array.from(n).map(e => l.default.getUser(e)).filter(e => null !== e), A = Array.from(x).map(e => l.default.getUser(e)).filter(e => null !== e);
  return 0 === v.length && 0 === A.length ? null : (0, i.jsx)(u.Z, {
    headerText: g.intl.string(g.t.zPUmzZ),
    descriptionText: ((e, t) => {
      let n = e > 0,
        i = t > 0;
      return n && i ? g.intl.string(g.t["X/iIjg"]) : n ? g.intl.formatToPlainString(g.t.WgQ12s, {
        n: e
      }) : i ? g.intl.formatToPlainString(g.t.bwibp1, {
        n: t
      }) : null
    })(n.size, x.size),
    infoRows: (e => {
      let {
        channelId: t,
        blockedUsers: n,
        ignoredUsers: r
      } = e, l = o.Z.getChannel(t), d = n.length > 0, c = r.length > 0, u = [{
        icon: (0, i.jsx)("div", {
          className: N.icon,
          children: (0, i.jsx)(s.aNP, {})
        }),
        text: g.intl.string(g.t["7jN3FC"]),
        className: N.row
      }];
      if (d && c) {
        let e = [...n, ...r],
          o = e.slice(0, 2).map(e => e.id);
        u.unshift({
          icon: (0, i.jsx)("div", {
            className: N.icon,
            children: (0, i.jsx)(a.Z, {
              recipients: o,
              size: s.EFr.SIZE_32
            })
          }),
          text: (0, m.a)(o, e.length, null == l ? true : l.guild_id, t),
          className: N.row
        })
      } else {
        let e = d ? n.slice(0, 2).map(e => e.id) : r.slice(0, 2).map(e => e.id),
          s = d ? n.length : r.length;
        u.unshift({
          icon: (0, i.jsx)("div", {
            className: N.icon,
            children: (0, m.r)(e, null == l ? true : l.guild_id)
          }),
          text: (0, m.a)(e, s, null == l ? true : l.guild_id, t),
          className: N.row
        })
      }
      return u
    })({
      channelId: t,
      blockedUsers: v,
      ignoredUsers: A
    }),
    onDismissAndStay: () => {
      E(), p(), (0, c.dI)(new Set([...n, ...x])), d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: _.q.CLICK_TO_JOIN,
        channel_id: t,
        blocked_user_ids: Array.from(n),
        ignored_user_ids: Array.from(x),
        warning_surface: _.fz.PRE_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      p(), d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: _.q.CLICK_TO_LEAVE,
        channel_id: t,
        blocked_user_ids: Array.from(n),
        ignored_user_ids: Array.from(x),
        warning_surface: _.fz.PRE_JOIN_MODAL
      })
    },
    leaveButtonText: g.intl.string(g.t.rOXspL),
    stayButtonText: g.intl.string(g.t.VJlc0S),
    transitionState: h,
    onClose: p,
    impression: {
      impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: t,
        blocked_user_ids: Array.from(n),
        warning_surface: _.fz.PRE_JOIN_MODAL
      }
    }
  })
}