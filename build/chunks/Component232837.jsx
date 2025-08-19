/** Chunk was on 85505 **/
/** chunk id: 232837, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function g(t) {
  let {
    channelId: e,
    userId: n,
    transitionState: g,
    onClose: p
  } = t, m = i.useRef(false), h = (0, a.e7)([c.Z], () => c.Z.isBlocked(n)), C = (0, a.e7)([_.Z], () => _.Z.getChannel(e));
  if ((0, u.zq)(() => {
      m.current || (0, E.nC)(n)
    }), null == d.default.getUser(n)) return null;
  let P = [{
      icon: (0, I.r)([n], null == C ? true : C.guild_id),
      text: (0, I.a)([n], 1, null == C ? true : C.guild_id, e),
      className: O.row
    }, {
      icon: (0, r.jsx)("div", {
        className: O.icon,
        children: (0, r.jsx)(l.aNP, {})
      }),
      text: L.intl.string(L.t["+4O9nZ"]),
      className: O.row
    }],
    x = h ? L.intl.string(L.t.QnTzrq) : L.intl.string(L.t.QsWbfX);
  return (0, r.jsx)(f.Z, {
    headerText: L.intl.string(L.t["1/gpFh"]),
    descriptionText: x,
    infoRows: P,
    onDismissAndStay: () => {
      m.current = true, p(), (0, E.nC)(n), A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: S.q.CLICK_TO_STAY,
        channel_id: e,
        blocked_user_ids: h ? [n] : [],
        ignored_user_ids: h ? [] : [n],
        warning_surface: S.fz.POST_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      m.current = true, p(), o.default.disconnect(), A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: S.q.CLICK_TO_LEAVE,
        channel_id: e,
        blocked_user_ids: h ? [n] : [],
        ignored_user_ids: h ? [] : [n],
        warning_surface: S.fz.POST_JOIN_MODAL
      })
    },
    leaveButtonText: L.intl.string(L.t["Hi1/aW"]),
    stayButtonText: L.intl.string(L.t["Z+/hfX"]),
    transitionState: g,
    onClose: p,
    impression: {
      impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: e,
        blocked_user_ids: h ? [n] : [],
        ignored_user_ids: h ? [] : [n],
        warning_surface: S.fz.POST_JOIN_MODAL
      }
    }
  })
}