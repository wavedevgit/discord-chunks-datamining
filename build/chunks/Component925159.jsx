/** Chunk was on 71447 **/
/** chunk id: 925159, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk15285 = require("./15285.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk592598 = require("./592598.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976723 = require("./976723.js");

function A(e, t, n) {
  var A;
  if (p.A.isNotificationDisabled(g.KS.NowPlayingNotification)) return null;
  let v = d.default.getUser(e);
  if (null == v) return null;
  let b = c.A.getCurrentlySelectedChannelId(),
    E = u.A.getChannel(b),
    O = a.A.getApplication(t),
    x = s.Ay.getRunningGames().find(e => e.id === t),
    _ = null != (A = null == x ? true : x.name) ? A : null == O ? true : O.name,
    S = (0, h.mG)(null == E ? true : E.guild_id, null == E ? true : E.id, v),
    I = (0, i.jsxs)("div", {
      className: y.Ql,
      children: [(0, i.jsx)("div", {
        className: y.bf,
        children: (0, i.jsx)(l.A, {
          user: v,
          "aria-hidden": true,
          size: r._3J.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: y.rf,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-text-default",
          className: y.G3,
          children: m.intl.format(m.t["q7/rgv"], {
            username: null != S ? S : v.username,
            gameName: _,
            gameIcon: () => null != O || null != x ? (0, i.jsx)(o.A, {
              game: O,
              pid: null == x ? true : x.pid,
              size: o.M.XSMALL,
              className: y.Gt
            }) : null
          })
        })
      })]
    }),
    {
      trackView: j,
      trackClick: T
    } = (0, f.Y9)(g.KS.NowPlayingNotification, {
      notif_type: g.KS.NowPlayingNotification,
      notif_user_id: v.id,
      activity_type: n.type,
      activity_name: null != _ ? _ : n.name
    });
  return {
    body: I,
    className: y.dn,
    wrapperClassName: y.P6,
    animationWrapperClassName: y.VG,
    maxBodyLines: 1,
    disableClickableRegions: true,
    onNotificationShow: () => {
      j()
    },
    onDismissClick: () => {
      T("dismiss")
    }
  }
}