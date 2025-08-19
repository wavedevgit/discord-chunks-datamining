/** Chunk was on 12858 **/
/** chunk id: 404339, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function S(t) {
  let {
    channelId: e,
    blockedUserIds: n,
    ignoredUserIds: S,
    transitionState: N,
    onClose: m,
    onJoin: g
  } = t, L = Array.from(n).map(t => o.default.getUser(t)).filter(t => null !== t), p = Array.from(S).map(t => o.default.getUser(t)).filter(t => null !== t);
  return 0 === L.length && 0 === p.length ? null : (0, r.jsx)(c.Z, {
    headerText: f.intl.string(f.t.zPUmzc),
    descriptionText: ((t, e) => {
      let n = t > 0,
        r = e > 0;
      return n && r ? f.intl.string(f.t["X/iIjo"]) : n ? f.intl.formatToPlainString(f.t.WgQ12t, {
        n: t
      }) : r ? f.intl.formatToPlainString(f.t.bwibp6, {
        n: e
      }) : null
    })(n.size, S.size),
    infoRows: (t => {
      let {
        channelId: e,
        blockedUsers: n,
        ignoredUsers: i
      } = t, o = l.Z.getChannel(e), u = n.length > 0, _ = i.length > 0, c = [{
        icon: (0, r.jsx)("div", {
          className: I.icon,
          children: (0, r.jsx)(s.aNP, {})
        }),
        text: f.intl.string(f.t["7jN3FB"]),
        className: I.row
      }];
      if (u && _) {
        let t = [...n, ...i],
          l = t.slice(0, 2).map(t => t.id);
        c.unshift({
          icon: (0, r.jsx)("div", {
            className: I.icon,
            children: (0, r.jsx)(a.Z, {
              recipients: l,
              size: s.EFr.SIZE_32
            })
          }),
          text: (0, d.a)(l, t.length, null == o ? true : o.guild_id, e),
          className: I.row
        })
      } else {
        let t = u ? n.slice(0, 2).map(t => t.id) : i.slice(0, 2).map(t => t.id),
          s = u ? n.length : i.length;
        c.unshift({
          icon: (0, r.jsx)("div", {
            className: I.icon,
            children: (0, d.r)(t, null == o ? true : o.guild_id)
          }),
          text: (0, d.a)(t, s, null == o ? true : o.guild_id, e),
          className: I.row
        })
      }
      return c
    })({
      channelId: e,
      blockedUsers: L,
      ignoredUsers: p
    }),
    onDismissAndStay: () => {
      g(), m(), (0, _.dI)(new Set([...n, ...S])), u.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: A.q.CLICK_TO_JOIN,
        channel_id: e,
        blocked_user_ids: Array.from(n),
        ignored_user_ids: Array.from(S),
        warning_surface: A.fz.PRE_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      m(), u.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: A.q.CLICK_TO_LEAVE,
        channel_id: e,
        blocked_user_ids: Array.from(n),
        ignored_user_ids: Array.from(S),
        warning_surface: A.fz.PRE_JOIN_MODAL
      })
    },
    leaveButtonText: f.intl.string(f.t.rOXspK),
    stayButtonText: f.intl.string(f.t.VJlc0d),
    transitionState: N,
    onClose: m,
    impression: {
      impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: e,
        blocked_user_ids: Array.from(n),
        warning_surface: A.fz.PRE_JOIN_MODAL
      }
    }
  })
}