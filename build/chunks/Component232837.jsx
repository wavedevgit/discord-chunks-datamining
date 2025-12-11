/** Chunk was on 85505 **/
/** chunk id: 232837, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk520386 = require("./520386.js");

function C(e) {
  let {
    channelId: n,
    userId: t,
    transitionState: C,
    onClose: k
  } = e, O = r.useRef(false), v = (0, o.e7)([u.Z], () => u.Z.isBlocked(t)), A = (0, o.e7)([d.Z], () => d.Z.getChannel(n));
  if ((0, c.zq)(() => {
      O.current || (0, m.nC)(t)
    }), null == _.default.getUser(t)) return null;
  let w = [{
      icon: (0, N.r)([t], null == A ? true : A.guild_id),
      text: (0, N.a)([t], 1, null == A ? true : A.guild_id, n),
      className: h.row
    }, {
      icon: (0, i.jsx)("div", {
        className: h.icon,
        children: (0, i.jsx)(a.aNP, {})
      }),
      text: E.intl.string(E.t["+4O9nX"]),
      className: h.row
    }],
    I = v ? E.intl.string(E.t.QnTzrp) : E.intl.string(E.t.QsWbfY);
  return (0, i.jsx)(x.Z, {
    headerText: E.intl.string(E.t["1/gpFh"]),
    descriptionText: I,
    infoRows: w,
    onDismissAndStay: () => {
      O.current = true, k(), (0, m.nC)(t), f.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: g.q.CLICK_TO_STAY,
        channel_id: n,
        blocked_user_ids: v ? [t] : [],
        ignored_user_ids: v ? [] : [t],
        warning_surface: g.fz.POST_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      O.current = true, k(), l.default.disconnect(), f.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: g.q.CLICK_TO_LEAVE,
        channel_id: n,
        blocked_user_ids: v ? [t] : [],
        ignored_user_ids: v ? [] : [t],
        warning_surface: g.fz.POST_JOIN_MODAL
      })
    },
    leaveButtonText: E.intl.string(E.t["Hi1/aQ"]),
    stayButtonText: E.intl.string(E.t["Z+/hfb"]),
    transitionState: C,
    onClose: k,
    impression: {
      impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: n,
        blocked_user_ids: v ? [t] : [],
        ignored_user_ids: v ? [] : [t],
        warning_surface: g.fz.POST_JOIN_MODAL
      }
    }
  })
}