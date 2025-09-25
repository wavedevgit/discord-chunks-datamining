/** Chunk was on 50751 **/
/** chunk id: 955978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
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
  Chunk64102 = require("./64102.js");

function y(e, t, n) {
  var y;
  let O = d.default.getUser(e);
  if (null == O) return null;
  let E = c.Z.getCurrentlySelectedChannelId(),
    v = u.Z.getChannel(E),
    S = o.Z.getApplication(t),
    b = a.ZP.getRunningGames().find(e => e.id === t),
    x = null != (y = null == b ? true : b.name) ? y : null == S ? true : S.name,
    j = (0, p.oY)(null == v ? true : v.guild_id, null == v ? true : v.id, O),
    I = (0, i.jsxs)("div", {
      className: g.nowPlayingNotification,
      children: [(0, i.jsx)("div", {
        className: g.nowPlayingNotificationIcon,
        children: (0, i.jsx)(l.Z, {
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
            username: null != j ? j : O.username,
            gameName: x,
            gameIcon: () => null != S || null != b ? (0, i.jsx)(s.Z, {
              game: S,
              pid: null == b ? true : b.pid,
              size: s.A.XSMALL,
              className: g.gameIcon
            }) : null
          })
        })
      })]
    }),
    {
      trackView: C,
      trackClick: Z
    } = (0, h.R)(f.n0.NowPlayingNotification, {
      notif_type: f.n0.NowPlayingNotification,
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
      C()
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}