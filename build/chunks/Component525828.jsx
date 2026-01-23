/** Chunk was on 32498 **/
/** chunk id: 525828, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954376 = require("./954376.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk549022 = require("./549022.js"),
  Chunk212758 = require("./212758.jsx"),
  Chunk90386 = require("./90386.jsx"),
  Chunk64175 = require("./64175.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk441805 = require("./441805.js");

function N(e) {
  var t, i;
  let N, x, {
      channelId: A,
      blockedUserIds: p,
      ignoredUserIds: E,
      transitionState: C,
      onClose: k,
      onJoin: v
    } = e,
    j = Array.from(p).map(e => o.default.getUser(e)).filter(e => null !== e),
    I = Array.from(E).map(e => o.default.getUser(e)).filter(e => null !== e);
  return 0 === j.length && 0 === I.length ? null : (0, n.jsx)(_.A, {
    headerText: f.intl.string(f.t.zPUmzZ),
    descriptionText: (t = p.size, i = E.size, N = t > 0, x = i > 0, N && x ? f.intl.string(f.t["X/iIjg"]) : N ? f.intl.formatToPlainString(f.t.WgQ12s, {
      n: t
    }) : x ? f.intl.formatToPlainString(f.t.bwibp1, {
      n: i
    }) : null),
    infoRows: (e => {
      let {
        channelId: t,
        blockedUsers: i,
        ignoredUsers: s
      } = e, o = l.A.getChannel(t), d = i.length > 0, c = s.length > 0, _ = [{
        icon: (0, n.jsx)("div", {
          className: h.Kk,
          children: (0, n.jsx)(r.id, {})
        }),
        text: f.intl.string(f.t["7jN3FC"]),
        className: h.nM
      }];
      if (d && c) {
        let e = [...i, ...s],
          l = e.slice(0, 2).map(e => e.id);
        _.unshift({
          icon: (0, n.jsx)("div", {
            className: h.Kk,
            children: (0, n.jsx)(a.A, {
              recipients: l,
              size: r._3J.SIZE_32
            })
          }),
          text: (0, u.T)(l, e.length, null == o ? true : o.guild_id, t),
          className: h.nM
        })
      } else {
        let e = d ? i.slice(0, 2).map(e => e.id) : s.slice(0, 2).map(e => e.id),
          r = d ? i.length : s.length;
        _.unshift({
          icon: (0, n.jsx)("div", {
            className: h.Kk,
            children: (0, u.I)(e, null == o ? true : o.guild_id)
          }),
          text: (0, u.T)(e, r, null == o ? true : o.guild_id, t),
          className: h.nM
        })
      }
      return _
    })({
      channelId: A,
      blockedUsers: j,
      ignoredUsers: I
    }),
    onDismissAndStay: () => {
      v(), k(), (0, c.Cs)(new Set([...p, ...E])), d.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: m.Qi.CLICK_TO_JOIN,
        channel_id: A,
        blocked_user_ids: Array.from(p),
        ignored_user_ids: Array.from(E),
        warning_surface: m.gD.PRE_JOIN_MODAL
      })
    },
    onDismissAndLeave: () => {
      k(), d.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: m.Qi.CLICK_TO_LEAVE,
        channel_id: A,
        blocked_user_ids: Array.from(p),
        ignored_user_ids: Array.from(E),
        warning_surface: m.gD.PRE_JOIN_MODAL
      })
    },
    leaveButtonText: f.intl.string(f.t.rOXspL),
    stayButtonText: f.intl.string(f.t.VJlc0S),
    transitionState: C,
    onClose: k,
    impression: {
      impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: {
        channel_id: A,
        blocked_user_ids: Array.from(p),
        warning_surface: m.gD.PRE_JOIN_MODAL
      }
    }
  })
}