/** Chunk was on 89298 **/
/** chunk id: 955978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484762 = require("./484762.js");

function y(e, t, n) {
  var y;
  let O = d.default.getUser(e);
  if (null == O) return null;
  let b = u.Z.getCurrentlySelectedChannelId(),
    v = c.Z.getChannel(b),
    E = l.Z.getApplication(t),
    _ = a.ZP.getRunningGames().find(e => e.id === t),
    x = null != (y = null == _ ? true : _.name) ? y : null == E ? true : E.name,
    S = (0, p.oY)(null == v ? true : v.guild_id, null == v ? true : v.id, O),
    I = (0, i.jsxs)("div", {
      className: g.nowPlayingNotification,
      children: [(0, i.jsx)("div", {
        className: g.nowPlayingNotificationIcon,
        children: (0, i.jsx)(o.Z, {
          user: O,
          "aria-hidden": true,
          size: r.EFr.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: g.body,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          className: g.bodyText,
          children: m.intl.format(m.t["q7/rgo"], {
            username: null != S ? S : O.username,
            gameName: x,
            gameIcon: () => null != E || null != _ ? (0, i.jsx)(s.Z, {
              game: E,
              pid: null == _ ? true : _.pid,
              size: s.Z.Sizes.XSMALL,
              className: g.gameIcon
            }) : null
          })
        })
      })]
    }),
    {
      trackView: j,
      trackClick: C
    } = (0, f.R)(h.n0.NowPlayingNotification, {
      notif_type: h.n0.NowPlayingNotification,
      notif_user_id: O.id,
      activity_type: n.type,
      activity_name: null != x ? x : n.name
    });
  return {
    body: I,
    className: g.nowPlayingNotificationContainer,
    wrapperClassName: g.nowPlayingNotificationWrapper,
    animationWrapperClassName: g.nowPlayingNotificationAnimationWrapper,
    maxBodyLines: 1,
    disableClickableRegions: true,
    onNotificationShow: () => {
      j()
    },
    onDismissClick: () => {
      C("dismiss")
    }
  }
}