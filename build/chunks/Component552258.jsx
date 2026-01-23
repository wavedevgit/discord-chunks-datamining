/** Chunk was on 39679 **/
/** chunk id: 552258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk964486 = require("./964486.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk549022 = require("./549022.js"),
  Chunk212758 = require("./212758.jsx"),
  Chunk90386 = require("./90386.jsx"),
  Chunk64175 = require("./64175.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927884 = require("./927884.js");

function E(e) {
  let {
    channelId: t,
    userId: n,
    transitionState: E,
    onClose: C
  } = e, k = i.useRef(false), O = (0, a.bG)([u.A], () => u.A.isBlocked(n)), v = (0, a.bG)([_.A], () => _.A.getChannel(t));
  if ((0, d.l0)(() => {
      k.current || (0, g.$Y)(n)
    }), null == c.default.getUser(n)) return null;
  let I = [{
      icon: (0, x.I)([n], null == v ? true : v.guild_id),
      text: (0, x.T)([n], 1, null == v ? true : v.guild_id, t),
      className: p.n
    }, {
      icon: (0, s.jsx)("div", {
        className: p.K,
        children: (0, s.jsx)(o.id, {})
      }),
      text: h.intl.string(h.t["+4O9nX"]),
      className: p.n
    }],
    T = O ? h.intl.string(h.t.QnTzrp) : h.intl.string(h.t.QsWbfY);
  return (0, s.jsx)(f.A, {
    headerText: h.intl.string(h.t["1/gpFh"]),
    descriptionText: T,
    infoRows: I,
    onDismissAndStay: () => {
      k.current = true, C(), (0, g.$Y)(n), m.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: N.Qi.CLICK_TO_STAY,
        channel_id: t,
        blocked_user_ids: O ? [n] : [],
        ignored_user_ids: O ? [] : [n],
        warning_surface: N.gD.POST_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      k.current = true, C(), l.default.disconnect(), m.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: N.Qi.CLICK_TO_LEAVE,
        channel_id: t,
        blocked_user_ids: O ? [n] : [],
        ignored_user_ids: O ? [] : [n],
        warning_surface: N.gD.POST_JOIN_MODAL
      })
    },
    leaveButtonText: h.intl.string(h.t["Hi1/aQ"]),
    stayButtonText: h.intl.string(h.t["Z+/hfb"]),
    transitionState: E,
    onClose: C,
    impression: {
      impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: t,
        blocked_user_ids: O ? [n] : [],
        ignored_user_ids: O ? [] : [n],
        warning_surface: N.gD.POST_JOIN_MODAL
      }
    }
  })
}