/** Chunk was on 50751 **/
/** chunk id: 955978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk562811 = require("./562811.js");

function y(e, t, n) {
  var y;
  if (h.Z.isNotificationDisabled(m.n0.NowPlayingNotification)) return null;
  let O = d.default.getUser(e);
  if (null == O) return null;
  let v = u.Z.getCurrentlySelectedChannelId(),
    E = c.Z.getChannel(v),
    S = l.Z.getApplication(t),
    x = o.ZP.getRunningGames().find(e => e.id === t),
    I = null != (y = null == x ? true : x.name) ? y : null == S ? true : S.name,
    j = (0, f.oY)(null == E ? true : E.guild_id, null == E ? true : E.id, O),
    C = (0, i.jsxs)("div", {
      className: b.nowPlayingNotification,
      children: [(0, i.jsx)("div", {
        className: b.nowPlayingNotificationIcon,
        children: (0, i.jsx)(a.Z, {
          user: O,
          "aria-hidden": true,
          size: r.EFr.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: b.body,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-text-default",
          className: b.bodyText,
          children: g.intl.format(g.t["q7/rgv"], {
            username: null != j ? j : O.username,
            gameName: I,
            gameIcon: () => null != S || null != x ? (0, i.jsx)(s.Z, {
              game: S,
              pid: null == x ? true : x.pid,
              size: s.A.XSMALL,
              className: b.gameIcon
            }) : null
          })
        })
      })]
    }),
    {
      trackView: _,
      trackClick: Z
    } = (0, p.Rg)(m.n0.NowPlayingNotification, {
      notif_type: m.n0.NowPlayingNotification,
      notif_user_id: O.id,
      activity_type: n.type,
      activity_name: null != I ? I : n.name
    });
  return {
    body: C,
    className: b.nowPlayingNotificationContainer,
    wrapperClassName: b.nowPlayingNotificationWrapper,
    animationWrapperClassName: b.nowPlayingNotificationAnimationWrapper,
    maxBodyLines: 1,
    disableClickableRegions: true,
    onNotificationShow: () => {
      _()
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}