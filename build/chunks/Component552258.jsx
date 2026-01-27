/** Chunk was on 59294 **/
/** chunk id: 552258, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function h(e) {
  let {
    channelId: n,
    userId: i,
    transitionState: h,
    onClose: I
  } = e, L = t.useRef(false), T = (0, r.bG)([l.A], () => l.A.isBlocked(i)), m = (0, r.bG)([c.A], () => c.A.getChannel(n));
  if ((0, a.l0)(() => {
      L.current || (0, A.$Y)(i)
    }), null == u.default.getUser(i)) return null;
  let x = [{
      icon: (0, f.I)([i], null == m ? true : m.guild_id),
      text: (0, f.T)([i], 1, null == m ? true : m.guild_id, n),
      className: O.n
    }, {
      icon: (0, s.jsx)("div", {
        className: O.K,
        children: (0, s.jsx)(d.id, {})
      }),
      text: C.intl.string(C.t["+4O9nX"]),
      className: O.n
    }],
    k = T ? C.intl.string(C.t.QnTzrp) : C.intl.string(C.t.QsWbfY);
  return (0, s.jsx)(g.A, {
    headerText: C.intl.string(C.t["1/gpFh"]),
    descriptionText: k,
    infoRows: x,
    onDismissAndStay: () => {
      L.current = true, I(), (0, A.$Y)(i), N.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: p.Qi.CLICK_TO_STAY,
        channel_id: n,
        blocked_user_ids: T ? [i] : [],
        ignored_user_ids: T ? [] : [i],
        warning_surface: p.gD.POST_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      L.current = true, I(), o.default.disconnect(), N.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: p.Qi.CLICK_TO_LEAVE,
        channel_id: n,
        blocked_user_ids: T ? [i] : [],
        ignored_user_ids: T ? [] : [i],
        warning_surface: p.gD.POST_JOIN_MODAL
      })
    },
    leaveButtonText: C.intl.string(C.t["Hi1/aQ"]),
    stayButtonText: C.intl.string(C.t["Z+/hfb"]),
    transitionState: h,
    onClose: I,
    impression: {
      impressionName: _.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: n,
        blocked_user_ids: T ? [i] : [],
        ignored_user_ids: T ? [] : [i],
        warning_surface: p.gD.POST_JOIN_MODAL
      }
    }
  })
}