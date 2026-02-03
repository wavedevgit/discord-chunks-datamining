/** Chunk was on 71447 **/
/** chunk id: 925159, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
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

function S(e, t, n) {
  var S;
  if (m.A.isNotificationDisabled(E.KS.NowPlayingNotification)) return null;
  let I = h.default.getUser(e);
  if (null == I) return null;
  let j = d.A.getCurrentlySelectedChannelId(),
    T = c.A.getChannel(j),
    C = s.A.getApplication(t),
    N = o.Ay.getRunningGames().find(e => e.id === t),
    w = null != (S = null == N ? true : N.name) ? S : null == C ? true : C.name,
    P = (0, p.mG)(null == T ? true : T.guild_id, null == T ? true : T.id, I),
    D = (0, i.jsxs)("div", {
      className: _.Ql,
      children: [(0, i.jsx)("div", {
        className: _.bf,
        children: (0, i.jsx)(a.A, {
          user: I,
          "aria-hidden": true,
          size: r._3J.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: _.rf,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-text-default",
          className: _.G3,
          children: x.intl.format(x.t["q7/rgv"], {
            username: null != P ? P : I.username,
            gameName: w,
            gameIcon: () => null != C || null != N ? (0, i.jsx)(u.A, {
              game: C,
              pid: null == N ? true : N.pid,
              size: u.M.XSMALL,
              className: _.Gt
            }) : null
          })
        })
      })]
    }),
    {
      trackView: R,
      trackClick: k
    } = (0, b.Y9)(E.KS.NowPlayingNotification, {
      notif_type: E.KS.NowPlayingNotification,
      notif_user_id: I.id,
      activity_type: n.type,
      activity_name: null != w ? w : n.name
    }),
    {
      hasChat: M
    } = (0, g.NI)("nowPlayingNotification");
  return {
    body: D,
    className: _.dn,
    wrapperClassName: _.P6,
    animationWrapperClassName: _.VG,
    maxBodyLines: 1,
    disableClickableRegions: !M,
    onNotificationShow: () => {
      R()
    },
    onNotificationClick: (e, t) => {
      M && (async () => {
        try {
          let e = await (0, v.D$)({
            target: {
              kind: v.bB.DM_USER,
              userId: I.id,
              messageId: null
            },
            source: f.B9.NOTIFICATION_CLICK,
            widgetType: O.uss.NOTIFICATIONS
          });
          if (null == e) return;
          let n = y.A.getTargetPID();
          A.A.isInputLocked(n) ? (k("unlock"), l.A.setInputLocked(false, n)) : k("jump"), l.A.updateNotificationStatus(t, O.yFH.DISMISSED)
        } catch (e) {}
      })()
    },
    onDismissClick: () => {
      k("dismiss")
    }
  }
}