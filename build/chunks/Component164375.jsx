/** Chunk was on 87337 **/
/** chunk id: 164375, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function S(t) {
  let {
    channelId: e,
    blockedUserIds: n,
    ignoredUserIds: S = [],
    transitionState: g,
    onClose: L
  } = t;
  return r.useEffect(() => {
    u.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: e,
      warning_medium: A.WR.MODAL,
      blocked_user_ids: n,
      ignored_user_ids: S
    })
  }, [e, n, S]), (0, i.jsx)(_.Z, {
    headerText: I.intl.string(I.t["mwJJ+f"]),
    descriptionText: ((t, e) => {
      let n = t > 0,
        i = e > 0;
      return n && i ? I.intl.string(I.t["0dP7Fh"]) : n ? I.intl.formatToPlainString(I.t.OpIG9f, {
        n: t
      }) : i ? I.intl.formatToPlainString(I.t["D+V4jI"], {
        n: e
      }) : null
    })(n.length, S.length),
    infoRows: (t => {
      let {
        channelId: e,
        blockedUserIds: n,
        ignoredUserIds: r
      } = t, a = o.Z.getChannel(e), u = n.length > 0, c = r.length > 0, _ = [{
        icon: (0, i.jsx)("div", {
          className: f.icon,
          children: (0, i.jsx)(s.owK, {})
        }),
        text: I.intl.string(I.t["RIMw5+"]),
        className: f.row
      }, {
        icon: (0, i.jsx)("div", {
          className: f.icon,
          children: (0, i.jsx)(s.d3s, {})
        }),
        text: I.intl.string(I.t.bejNWF),
        className: f.row
      }];
      if (u && c) {
        let t = [...n, ...r],
          o = t.slice(0, 2);
        _.unshift({
          icon: (0, i.jsx)("div", {
            className: f.icon,
            children: (0, i.jsx)(l.Z, {
              recipients: o,
              size: s.EFr.SIZE_32
            })
          }),
          text: (0, d.a)(o, t.length, null == a ? true : a.guild_id, e),
          className: f.row
        })
      } else {
        let t = u ? [...n].slice(0, 2) : [...r].slice(0, 2),
          s = u ? n.length : r.length;
        _.unshift({
          icon: (0, i.jsx)("div", {
            className: f.icon,
            children: (0, d.r)(t, null == a ? true : a.guild_id)
          }),
          text: (0, d.a)(t, s, null == a ? true : a.guild_id, e),
          className: f.row
        })
      }
      return _
    })({
      channelId: e,
      blockedUserIds: n,
      ignoredUserIds: S
    }),
    onDismissAndStay: () => {
      L(), (0, c.O)(e), u.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: A.q.CLICK_TO_STAY,
        channel_id: e,
        warning_medium: A.WR.MODAL,
        blocked_user_ids: n,
        ignored_user_ids: S
      })
    },
    onDismissAndLeave: () => {
      L(), (0, c.O)(e), a.Z.closePrivateChannel(e, true, true), u.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: A.q.CLICK_TO_LEAVE,
        channel_id: e,
        warning_medium: A.WR.MODAL,
        blocked_user_ids: n,
        ignored_user_ids: S
      })
    },
    leaveButtonText: I.intl.string(I.t["Hi1/aW"]),
    stayButtonText: I.intl.string(I.t.SW3lpK),
    transitionState: g,
    onClose: L
  })
}