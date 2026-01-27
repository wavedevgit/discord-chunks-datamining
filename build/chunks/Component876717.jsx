/** Chunk was on 94731 **/
/** chunk id: 876717, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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

function x(e) {
  var i, n;
  let x, A, {
    channelId: f,
    blockedUserIds: E,
    ignoredUserIds: k = [],
    transitionState: p,
    onClose: M
  } = e;
  return s.useEffect(() => {
    r.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: f,
      warning_medium: g.W_.MODAL,
      blocked_user_ids: E,
      ignored_user_ids: k
    })
  }, [f, E, k]), (0, t.jsx)(o.A, {
    headerText: m.intl.string(m.t["mwJJ+f"]),
    descriptionText: (i = E.length, n = k.length, x = i > 0, A = n > 0, x && A ? m.intl.string(m.t["0dP7Fk"]) : x ? m.intl.formatToPlainString(m.t.OpIG9d, {
      n: i
    }) : A ? m.intl.formatToPlainString(m.t["D+V4jI"], {
      n: n
    }) : null),
    infoRows: (e => {
      let {
        channelId: i,
        blockedUserIds: n,
        ignoredUserIds: s
      } = e, _ = a.A.getChannel(i), r = n.length > 0, c = s.length > 0, o = [{
        icon: (0, t.jsx)("div", {
          className: N.Kk,
          children: (0, t.jsx)(l.yr3, {})
        }),
        text: m.intl.string(m.t.RIMw54),
        className: N.nM
      }, {
        icon: (0, t.jsx)("div", {
          className: N.Kk,
          children: (0, t.jsx)(l.mir, {})
        }),
        text: m.intl.string(m.t.bejNWN),
        className: N.nM
      }];
      if (r && c) {
        let e = [...n, ...s],
          a = e.slice(0, 2);
        o.unshift({
          icon: (0, t.jsx)("div", {
            className: N.Kk,
            children: (0, t.jsx)(d.A, {
              recipients: a,
              size: l._3J.SIZE_32
            })
          }),
          text: (0, u.T)(a, e.length, null == _ ? true : _.guild_id, i),
          className: N.nM
        })
      } else {
        let e = r ? [...n].slice(0, 2) : [...s].slice(0, 2),
          l = r ? n.length : s.length;
        o.unshift({
          icon: (0, t.jsx)("div", {
            className: N.Kk,
            children: (0, u.I)(e, null == _ ? true : _.guild_id)
          }),
          text: (0, u.T)(e, l, null == _ ? true : _.guild_id, i),
          className: N.nM
        })
      }
      return o
    })({
      channelId: f,
      blockedUserIds: E,
      ignoredUserIds: k
    }),
    onDismissAndStay: () => {
      M(), (0, c.U)(f), r.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: g.Qi.CLICK_TO_STAY,
        channel_id: f,
        warning_medium: g.W_.MODAL,
        blocked_user_ids: E,
        ignored_user_ids: k
      })
    },
    onDismissAndLeave: () => {
      M(), (0, c.U)(f), _.A.closePrivateChannel(f, true, true), r.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: g.Qi.CLICK_TO_LEAVE,
        channel_id: f,
        warning_medium: g.W_.MODAL,
        blocked_user_ids: E,
        ignored_user_ids: k
      })
    },
    leaveButtonText: m.intl.string(m.t["Hi1/aQ"]),
    stayButtonText: m.intl.string(m.t.SW3lpH),
    transitionState: p,
    onClose: M
  })
}