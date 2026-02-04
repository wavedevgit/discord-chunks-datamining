/** Chunk was on 71447 **/
/** chunk id: 925159, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk15285 = require("./15285.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk222506 = require("./222506.js"),
  Chunk145567 = require("./145567.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976723 = require("./976723.js");

function x(e, t, n) {
  var x;
  if (m.A.isNotificationDisabled(b.KS.NowPlayingNotification)) return null;
  let I = h.default.getUser(e);
  if (null == I) return null;
  let j = d.A.getCurrentlySelectedChannelId(),
    C = c.A.getChannel(j),
    T = o.A.getApplication(t),
    w = s.Ay.getRunningGames().find(e => e.id === t),
    N = null != (x = null == w ? true : w.name) ? x : null == T ? true : T.name,
    P = (0, p.mG)(null == C ? true : C.guild_id, null == C ? true : C.id, I),
    D = (0, i.jsxs)("div", {
      className: S.Ql,
      children: [(0, i.jsx)("div", {
        className: S.bf,
        children: (0, i.jsx)(a.A, {
          user: I,
          "aria-hidden": true,
          size: r._3J.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: S.rf,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-text-default",
          className: S.G3,
          children: _.intl.format(_.t["q7/rgv"], {
            username: null != P ? P : I.username,
            gameName: N,
            gameIcon: () => null != T || null != w ? (0, i.jsx)(u.A, {
              game: T,
              pid: null == w ? true : w.pid,
              size: u.M.XSMALL,
              className: S.Gt
            }) : null
          })
        })
      })]
    }),
    {
      trackView: R,
      trackClick: L
    } = (0, v.Y9)(b.KS.NowPlayingNotification, {
      notif_type: b.KS.NowPlayingNotification,
      notif_user_id: I.id,
      activity_type: n.type,
      activity_name: null != N ? N : n.name
    }),
    {
      hasChat: k
    } = (0, g.NI)("nowPlayingNotification");
  return {
    body: D,
    className: S.dn,
    wrapperClassName: S.P6,
    animationWrapperClassName: S.VG,
    maxBodyLines: 1,
    disableClickableRegions: !k,
    onNotificationShow: () => {
      R()
    },
    onNotificationClick: (e, t) => {
      k && (async () => {
        try {
          let e = await (0, O.D$)({
            target: {
              kind: O.bB.DM_USER,
              userId: I.id,
              messageId: null
            },
            source: f.B9.NOTIFICATION_CLICK,
            widgetType: E.uss.NOTIFICATIONS
          });
          if (null == e) return;
          let n = A.A.getTargetPID();
          y.A.isInputLocked(n) ? (L("unlock"), l.A.setInputLocked(false, n)) : L("jump"), l.A.updateNotificationStatus(t, E.yFH.DISMISSED)
        } catch (e) {}
      })()
    },
    onDismissClick: () => {
      L("dismiss")
    }
  }
}