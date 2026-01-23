/** Chunk was on 24958 **/
/** chunk id: 876717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk954376 = require("./954376.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk105600 = require("./105600.js"),
  Chunk212758 = require("./212758.jsx"),
  Chunk90386 = require("./90386.jsx"),
  Chunk64175 = require("./64175.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk441805 = require("./441805.js");

function f(e) {
  var t, n;
  let f, k, {
    channelId: N,
    blockedUserIds: A,
    ignoredUserIds: v = [],
    transitionState: j,
    onClose: E
  } = e;
  return s.useEffect(() => {
    d.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: N,
      warning_medium: m.W_.MODAL,
      blocked_user_ids: A,
      ignored_user_ids: v
    })
  }, [N, A, v]), (0, i.jsx)(u.A, {
    headerText: g.intl.string(g.t["mwJJ+f"]),
    descriptionText: (t = A.length, n = v.length, f = t > 0, k = n > 0, f && k ? g.intl.string(g.t["0dP7Fk"]) : f ? g.intl.formatToPlainString(g.t.OpIG9d, {
      n: t
    }) : k ? g.intl.formatToPlainString(g.t["D+V4jI"], {
      n: n
    }) : null),
    infoRows: (e => {
      let {
        channelId: t,
        blockedUserIds: n,
        ignoredUserIds: s
      } = e, r = o.A.getChannel(t), d = n.length > 0, c = s.length > 0, u = [{
        icon: (0, i.jsx)("div", {
          className: x.Kk,
          children: (0, i.jsx)(l.yr3, {})
        }),
        text: g.intl.string(g.t.RIMw54),
        className: x.nM
      }, {
        icon: (0, i.jsx)("div", {
          className: x.Kk,
          children: (0, i.jsx)(l.mir, {})
        }),
        text: g.intl.string(g.t.bejNWN),
        className: x.nM
      }];
      if (d && c) {
        let e = [...n, ...s],
          o = e.slice(0, 2);
        u.unshift({
          icon: (0, i.jsx)("div", {
            className: x.Kk,
            children: (0, i.jsx)(a.A, {
              recipients: o,
              size: l._3J.SIZE_32
            })
          }),
          text: (0, _.T)(o, e.length, null == r ? true : r.guild_id, t),
          className: x.nM
        })
      } else {
        let e = d ? [...n].slice(0, 2) : [...s].slice(0, 2),
          l = d ? n.length : s.length;
        u.unshift({
          icon: (0, i.jsx)("div", {
            className: x.Kk,
            children: (0, _.I)(e, null == r ? true : r.guild_id)
          }),
          text: (0, _.T)(e, l, null == r ? true : r.guild_id, t),
          className: x.nM
        })
      }
      return u
    })({
      channelId: N,
      blockedUserIds: A,
      ignoredUserIds: v
    }),
    onDismissAndStay: () => {
      E(), (0, c.U)(N), d.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: m.Qi.CLICK_TO_STAY,
        channel_id: N,
        warning_medium: m.W_.MODAL,
        blocked_user_ids: A,
        ignored_user_ids: v
      })
    },
    onDismissAndLeave: () => {
      E(), (0, c.U)(N), r.A.closePrivateChannel(N, true, true), d.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: m.Qi.CLICK_TO_LEAVE,
        channel_id: N,
        warning_medium: m.W_.MODAL,
        blocked_user_ids: A,
        ignored_user_ids: v
      })
    },
    leaveButtonText: g.intl.string(g.t["Hi1/aQ"]),
    stayButtonText: g.intl.string(g.t.SW3lpH),
    transitionState: j,
    onClose: E
  })
}