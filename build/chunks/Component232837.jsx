/** Chunk was on 85505 **/
/** chunk id: 232837, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => E
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
  Chunk868269 = require("./868269.js");

function E(e) {
  let {
    channelId: n,
    userId: t,
    transitionState: E,
    onClose: C
  } = e, k = s.useRef(false), v = (0, a.e7)([u.Z], () => u.Z.isBlocked(t)), O = (0, a.e7)([d.Z], () => d.Z.getChannel(n));
  if ((0, c.zq)(() => {
      k.current || (0, x.nC)(t)
    }), null == _.default.getUser(t)) return null;
  let I = [{
      icon: (0, h.r)([t], null == O ? true : O.guild_id),
      text: (0, h.a)([t], 1, null == O ? true : O.guild_id, n),
      className: j.row
    }, {
      icon: (0, r.jsx)("div", {
        className: j.icon,
        children: (0, r.jsx)(o.aNP, {})
      }),
      text: p.intl.string(p.t["+4O9nZ"]),
      className: j.row
    }],
    b = v ? (0, r.jsxs)(r.Fragment, {
      children: [p.intl.string(p.t.cpgfFh), (0, r.jsx)("br", {}), p.intl.string(p.t.UKQ4Cg)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [p.intl.string(p.t["xj3j4+"]), (0, r.jsx)("br", {}), p.intl.string(p.t.wWueRU)]
    });
  return (0, r.jsx)(f.Z, {
    headerText: p.intl.string(p.t["1/gpFh"]),
    descriptionText: b,
    infoRows: I,
    onDismissAndStay: () => {
      k.current = true, C(), (0, x.nC)(t), m.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: g.q.CLICK_TO_STAY,
        channel_id: n,
        blocked_user_ids: v ? [t] : [],
        ignored_user_ids: v ? [] : [t],
        warning_surface: g.fz.POST_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      k.current = true, C(), l.default.disconnect(), m.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: g.q.CLICK_TO_LEAVE,
        channel_id: n,
        blocked_user_ids: v ? [t] : [],
        ignored_user_ids: v ? [] : [t],
        warning_surface: g.fz.POST_JOIN_MODAL
      })
    },
    leaveButtonText: p.intl.string(p.t["Y56/oK"]),
    stayButtonText: p.intl.string(p.t["Z+/hfX"]),
    transitionState: E,
    onClose: C,
    impression: {
      impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: n,
        blocked_user_ids: v ? [t] : [],
        ignored_user_ids: v ? [] : [t],
        warning_surface: g.fz.POST_JOIN_MODAL
      }
    }
  })
}