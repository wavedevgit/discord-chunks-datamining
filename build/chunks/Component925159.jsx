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
  if (h.A.isNotificationDisabled(m.KS.NowPlayingNotification)) return null;
  let O = d.default.getUser(e);
  if (null == O) return null;
  let E = u.A.getCurrentlySelectedChannelId(),
    v = c.A.getChannel(E),
    b = a.A.getApplication(t),
    S = o.Ay.getRunningGames().find(e => e.id === t),
    x = null != (A = null == S ? true : S.name) ? A : null == b ? true : b.name,
    j = (0, p.mG)(null == v ? true : v.guild_id, null == v ? true : v.id, O),
    I = (0, i.jsxs)("div", {
      className: y.Ql,
      children: [(0, i.jsx)("div", {
        className: y.bf,
        children: (0, i.jsx)(l.A, {
          user: O,
          "aria-hidden": true,
          size: r._3J.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: y.rf,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-text-default",
          className: y.G3,
          children: g.intl.format(g.t["q7/rgv"], {
            username: null != j ? j : O.username,
            gameName: x,
            gameIcon: () => null != b || null != S ? (0, i.jsx)(s.A, {
              game: b,
              pid: null == S ? true : S.pid,
              size: s.M.XSMALL,
              className: y.Gt
            }) : null
          })
        })
      })]
    }),
    {
      trackView: N,
      trackClick: w
    } = (0, f.Y9)(m.KS.NowPlayingNotification, {
      notif_type: m.KS.NowPlayingNotification,
      notif_user_id: O.id,
      activity_type: n.type,
      activity_name: null != x ? x : n.name
    });
  return {
    body: I,
    className: y.dn,
    wrapperClassName: y.P6,
    animationWrapperClassName: y.VG,
    maxBodyLines: 1,
    disableClickableRegions: true,
    onNotificationShow: () => {
      N()
    },
    onDismissClick: () => {
      w("dismiss")
    }
  }
}