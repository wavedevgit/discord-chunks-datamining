/** Chunk was on 87337 **/
/** chunk id: 164375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let m = e => {
  let {
    numOfBlockedUsers: t,
    numOfIgnoredUsers: n
  } = e, s = t > 0, i = n > 0;
  return s && i ? (0, r.jsxs)(r.Fragment, {
    children: [f.intl.string(f.t.xbRNIy), (0, r.jsx)("br", {}), f.intl.string(f.t["Bp2/np"])]
  }) : s ? (0, r.jsxs)(r.Fragment, {
    children: [f.intl.format(f.t.iKtixc, {
      n: t
    }), (0, r.jsx)("br", {}), f.intl.string(f.t.SN1hrq)]
  }) : i ? (0, r.jsxs)(r.Fragment, {
    children: [f.intl.format(f.t["6IRwub"], {
      n: n
    }), (0, r.jsx)("br", {}), f.intl.string(f.t["6AKLRk"])]
  }) : null
};

function g(e) {
  let {
    channelId: t,
    blockedUserIds: n,
    ignoredUserIds: g = [],
    transitionState: h,
    onClose: x
  } = e;
  return s.useEffect(() => {
    c.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: t,
      warning_medium: A.WR.MODAL,
      blocked_user_ids: n,
      ignored_user_ids: g
    })
  }, [t, n, g]), (0, r.jsx)(d.Z, {
    headerText: f.intl.string(f.t["mwJJ+f"]),
    descriptionText: (0, r.jsx)(m, {
      numOfBlockedUsers: n.length,
      numOfIgnoredUsers: g.length
    }),
    infoRows: (e => {
      let {
        channelId: t,
        blockedUserIds: n,
        ignoredUserIds: s
      } = e, a = o.Z.getChannel(t), c = n.length > 0, u = s.length > 0, d = [{
        icon: (0, r.jsx)("div", {
          className: I.icon,
          children: (0, r.jsx)(i.owK, {})
        }),
        text: f.intl.string(f.t["RIMw5+"]),
        className: I.row
      }, {
        icon: (0, r.jsx)("div", {
          className: I.icon,
          children: (0, r.jsx)(i.d3s, {})
        }),
        text: f.intl.string(f.t.bejNWF),
        className: I.row
      }];
      if (c && u) {
        let e = [...n, ...s],
          o = e.slice(0, 2);
        d.unshift({
          icon: (0, r.jsx)("div", {
            className: I.icon,
            children: (0, r.jsx)(l.Z, {
              recipients: o,
              size: i.EFr.SIZE_32
            })
          }),
          text: (0, _.a)(o, e.length, null == a ? true : a.guild_id, t),
          className: I.row
        })
      } else {
        let e = c ? [...n].slice(0, 2) : [...s].slice(0, 2),
          i = c ? n.length : s.length;
        d.unshift({
          icon: (0, r.jsx)("div", {
            className: I.icon,
            children: (0, _.r)(e, null == a ? true : a.guild_id)
          }),
          text: (0, _.a)(e, i, null == a ? true : a.guild_id, t),
          className: I.row
        })
      }
      return d
    })({
      channelId: t,
      blockedUserIds: n,
      ignoredUserIds: g
    }),
    onDismissAndStay: () => {
      x(), (0, u.O)(t), c.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: A.q.CLICK_TO_STAY,
        channel_id: t,
        warning_medium: A.WR.MODAL,
        blocked_user_ids: n,
        ignored_user_ids: g
      })
    },
    onDismissAndLeave: () => {
      x(), (0, u.O)(t), a.Z.closePrivateChannel(t, true, true), c.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: A.q.CLICK_TO_LEAVE,
        channel_id: t,
        warning_medium: A.WR.MODAL,
        blocked_user_ids: n,
        ignored_user_ids: g
      })
    },
    leaveButtonText: f.intl.string(f.t.I4q1kJ),
    stayButtonText: f.intl.string(f.t.DRJhmZ),
    transitionState: h,
    onClose: x
  })
}