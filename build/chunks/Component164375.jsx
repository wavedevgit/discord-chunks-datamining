/** Chunk was on 87337 **/
/** chunk id: 164375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk785232 = require("./785232.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk799352 = require("./799352.js"),
  Chunk343544 = require("./343544.jsx"),
  Chunk14251 = require("./14251.jsx"),
  Chunk110223 = require("./110223.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405842 = require("./405842.js");

function g(e) {
  let {
    channelId: t,
    blockedUserIds: n,
    ignoredUserIds: g = [],
    transitionState: N,
    onClose: E
  } = e;
  return s.useEffect(() => {
    d.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: t,
      warning_medium: m.WR.MODAL,
      blocked_user_ids: n,
      ignored_user_ids: g
    })
  }, [t, n, g]), (0, i.jsx)(u.Z, {
    headerText: f.intl.string(f.t["mwJJ+f"]),
    descriptionText: ((e, t) => {
      let n = e > 0,
        i = t > 0;
      return n && i ? f.intl.string(f.t["0dP7Fk"]) : n ? f.intl.formatToPlainString(f.t.OpIG9d, {
        n: e
      }) : i ? f.intl.formatToPlainString(f.t["D+V4jI"], {
        n: t
      }) : null
    })(n.length, g.length),
    infoRows: (e => {
      let {
        channelId: t,
        blockedUserIds: n,
        ignoredUserIds: s
      } = e, a = o.Z.getChannel(t), d = n.length > 0, c = s.length > 0, u = [{
        icon: (0, i.jsx)("div", {
          className: h.icon,
          children: (0, i.jsx)(r.owK, {})
        }),
        text: f.intl.string(f.t.RIMw54),
        className: h.row
      }, {
        icon: (0, i.jsx)("div", {
          className: h.icon,
          children: (0, i.jsx)(r.d3s, {})
        }),
        text: f.intl.string(f.t.bejNWN),
        className: h.row
      }];
      if (d && c) {
        let e = [...n, ...s],
          o = e.slice(0, 2);
        u.unshift({
          icon: (0, i.jsx)("div", {
            className: h.icon,
            children: (0, i.jsx)(l.Z, {
              recipients: o,
              size: r.EFr.SIZE_32
            })
          }),
          text: (0, _.a)(o, e.length, null == a ? true : a.guild_id, t),
          className: h.row
        })
      } else {
        let e = d ? [...n].slice(0, 2) : [...s].slice(0, 2),
          r = d ? n.length : s.length;
        u.unshift({
          icon: (0, i.jsx)("div", {
            className: h.icon,
            children: (0, _.r)(e, null == a ? true : a.guild_id)
          }),
          text: (0, _.a)(e, r, null == a ? true : a.guild_id, t),
          className: h.row
        })
      }
      return u
    })({
      channelId: t,
      blockedUserIds: n,
      ignoredUserIds: g
    }),
    onDismissAndStay: () => {
      E(), (0, c.O)(t), d.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: m.q.CLICK_TO_STAY,
        channel_id: t,
        warning_medium: m.WR.MODAL,
        blocked_user_ids: n,
        ignored_user_ids: g
      })
    },
    onDismissAndLeave: () => {
      E(), (0, c.O)(t), a.Z.closePrivateChannel(t, true, true), d.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: m.q.CLICK_TO_LEAVE,
        channel_id: t,
        warning_medium: m.WR.MODAL,
        blocked_user_ids: n,
        ignored_user_ids: g
      })
    },
    leaveButtonText: f.intl.string(f.t["Hi1/aQ"]),
    stayButtonText: f.intl.string(f.t.SW3lpH),
    transitionState: N,
    onClose: E
  })
}