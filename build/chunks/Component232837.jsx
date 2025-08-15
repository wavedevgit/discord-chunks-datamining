/** Chunk was on 85505 **/
/** chunk id: 232837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk493773 = require("./493773.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk33194 = require("./33194.js"),
  Chunk343544 = require("./343544.jsx"),
  Chunk14251 = require("./14251.jsx"),
  Chunk110223 = require("./110223.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk623146 = require("./623146.js");

function h(e) {
  let {
    channelId: t,
    userId: n,
    transitionState: h,
    onClose: x
  } = e, p = s.useRef(false), L = (0, a.e7)([_.Z], () => _.Z.isBlocked(n)), O = (0, a.e7)([c.Z], () => c.Z.getChannel(t));
  if ((0, u.zq)(() => {
      p.current || (0, f.nC)(n)
    }), null == d.default.getUser(n)) return null;
  let C = [{
      icon: (0, I.r)([n], null == O ? true : O.guild_id),
      text: (0, I.a)([n], 1, null == O ? true : O.guild_id, t),
      className: m.row
    }, {
      icon: (0, r.jsx)("div", {
        className: m.icon,
        children: (0, r.jsx)(l.aNP, {})
      }),
      text: g.intl.string(g.t["+4O9nZ"]),
      className: m.row
    }],
    j = L ? (0, r.jsxs)(r.Fragment, {
      children: [g.intl.string(g.t.cpgfFh), (0, r.jsx)("br", {}), g.intl.string(g.t.UKQ4Cg)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [g.intl.string(g.t["xj3j4+"]), (0, r.jsx)("br", {}), g.intl.string(g.t.wWueRU)]
    });
  return (0, r.jsx)(E.Z, {
    headerText: g.intl.string(g.t["1/gpFh"]),
    descriptionText: j,
    infoRows: C,
    onDismissAndStay: () => {
      p.current = true, x(), (0, f.nC)(n), A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: S.q.CLICK_TO_STAY,
        channel_id: t,
        blocked_user_ids: L ? [n] : [],
        ignored_user_ids: L ? [] : [n],
        warning_surface: S.fz.POST_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      p.current = true, x(), o.default.disconnect(), A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: S.q.CLICK_TO_LEAVE,
        channel_id: t,
        blocked_user_ids: L ? [n] : [],
        ignored_user_ids: L ? [] : [n],
        warning_surface: S.fz.POST_JOIN_MODAL
      })
    },
    leaveButtonText: g.intl.string(g.t["Y56/oK"]),
    stayButtonText: g.intl.string(g.t["Z+/hfX"]),
    transitionState: h,
    onClose: x,
    impression: {
      impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: t,
        blocked_user_ids: L ? [n] : [],
        ignored_user_ids: L ? [] : [n],
        warning_surface: S.fz.POST_JOIN_MODAL
      }
    }
  })
}