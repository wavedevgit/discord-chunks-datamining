/** Chunk was on 87337 **/
/** chunk id: 164375, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
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
let g = e => {
  let {
    numOfBlockedUsers: n,
    numOfIgnoredUsers: t
  } = e, i = n > 0, r = t > 0;
  return i && r ? (0, s.jsxs)(s.Fragment, {
    children: [_.intl.string(_.t.xbRNIy), (0, s.jsx)("br", {}), _.intl.string(_.t["Bp2/np"])]
  }) : i ? (0, s.jsxs)(s.Fragment, {
    children: [_.intl.format(_.t.iKtixc, {
      n: n
    }), (0, s.jsx)("br", {}), _.intl.string(_.t.SN1hrq)]
  }) : r ? (0, s.jsxs)(s.Fragment, {
    children: [_.intl.format(_.t["6IRwub"], {
      n: t
    }), (0, s.jsx)("br", {}), _.intl.string(_.t["6AKLRk"])]
  }) : null
};

function j(e) {
  let {
    channelId: n,
    blockedUserIds: t,
    ignoredUserIds: j = [],
    transitionState: N,
    onClose: p
  } = e;
  return i.useEffect(() => {
    d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: n,
      warning_medium: x.WR.MODAL,
      blocked_user_ids: t,
      ignored_user_ids: j
    })
  }, [n, t, j]), (0, s.jsx)(u.Z, {
    headerText: _.intl.string(_.t["mwJJ+f"]),
    descriptionText: (0, s.jsx)(g, {
      numOfBlockedUsers: t.length,
      numOfIgnoredUsers: j.length
    }),
    infoRows: (e => {
      let {
        channelId: n,
        blockedUserIds: t,
        ignoredUserIds: i
      } = e, a = o.Z.getChannel(n), d = t.length > 0, c = i.length > 0, u = [{
        icon: (0, s.jsx)("div", {
          className: f.icon,
          children: (0, s.jsx)(r.owK, {})
        }),
        text: _.intl.string(_.t["RIMw5+"]),
        className: f.row
      }, {
        icon: (0, s.jsx)("div", {
          className: f.icon,
          children: (0, s.jsx)(r.d3s, {})
        }),
        text: _.intl.string(_.t.bejNWF),
        className: f.row
      }];
      if (d && c) {
        let e = [...t, ...i],
          o = e.slice(0, 2);
        u.unshift({
          icon: (0, s.jsx)("div", {
            className: f.icon,
            children: (0, s.jsx)(l.Z, {
              recipients: o,
              size: r.EFr.SIZE_32
            })
          }),
          text: (0, m.a)(o, e.length, null == a ? true : a.guild_id, n),
          className: f.row
        })
      } else {
        let e = d ? [...t].slice(0, 2) : [...i].slice(0, 2),
          r = d ? t.length : i.length;
        u.unshift({
          icon: (0, s.jsx)("div", {
            className: f.icon,
            children: (0, m.r)(e, null == a ? true : a.guild_id)
          }),
          text: (0, m.a)(e, r, null == a ? true : a.guild_id, n),
          className: f.row
        })
      }
      return u
    })({
      channelId: n,
      blockedUserIds: t,
      ignoredUserIds: j
    }),
    onDismissAndStay: () => {
      p(), (0, c.O)(n), d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: x.q.CLICK_TO_STAY,
        channel_id: n,
        warning_medium: x.WR.MODAL,
        blocked_user_ids: t,
        ignored_user_ids: j
      })
    },
    onDismissAndLeave: () => {
      p(), (0, c.O)(n), a.Z.closePrivateChannel(n, true, true), d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: x.q.CLICK_TO_LEAVE,
        channel_id: n,
        warning_medium: x.WR.MODAL,
        blocked_user_ids: t,
        ignored_user_ids: j
      })
    },
    leaveButtonText: _.intl.string(_.t.I4q1kJ),
    stayButtonText: _.intl.string(_.t.DRJhmZ),
    transitionState: N,
    onClose: p
  })
}