/** Chunk was on 50751 **/
/** chunk id: 955978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk439419 = require("./439419.js");

function O(e, t, n) {
  var O;
  if (p.Z.isNotificationDisabled(m.n0.NowPlayingNotification)) return null;
  let v = d.default.getUser(e);
  if (null == v) return null;
  let E = u.Z.getCurrentlySelectedChannelId(),
    b = c.Z.getChannel(E),
    _ = o.Z.getApplication(t),
    S = a.ZP.getRunningGames().find(e => e.id === t),
    x = null != (O = null == S ? true : S.name) ? O : null == _ ? true : _.name,
    I = (0, h.oY)(null == b ? true : b.guild_id, null == b ? true : b.id, v),
    C = (0, i.jsxs)("div", {
      className: y.nowPlayingNotification,
      children: [(0, i.jsx)("div", {
        className: y.nowPlayingNotificationIcon,
        children: (0, i.jsx)(l.Z, {
          user: v,
          "aria-hidden": true,
          size: r.EFr.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: y.body,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-text-default",
          className: y.bodyText,
          children: g.intl.format(g.t["q7/rgv"], {
            username: null != I ? I : v.username,
            gameName: x,
            gameIcon: () => null != _ || null != S ? (0, i.jsx)(s.Z, {
              game: _,
              pid: null == S ? true : S.pid,
              size: s.A.XSMALL,
              className: y.gameIcon
            }) : null
          })
        })
      })]
    }),
    {
      trackView: j,
      trackClick: Z
    } = (0, f.Rg)(m.n0.NowPlayingNotification, {
      notif_type: m.n0.NowPlayingNotification,
      notif_user_id: v.id,
      activity_type: n.type,
      activity_name: null != x ? x : n.name
    });
  return {
    body: C,
    className: y.nowPlayingNotificationContainer,
    wrapperClassName: y.nowPlayingNotificationWrapper,
    animationWrapperClassName: y.nowPlayingNotificationAnimationWrapper,
    maxBodyLines: 1,
    disableClickableRegions: true,
    onNotificationShow: () => {
      j()
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}