/** Chunk was on 50751 **/
/** chunk id: 955978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk439419 = require("./439419.js");

function O(e, t, n) {
  var O;
  if (h.Z.isNotificationDisabled(m.n0.NowPlayingNotification)) return null;
  let E = d.default.getUser(e);
  if (null == E) return null;
  let v = c.Z.getCurrentlySelectedChannelId(),
    S = u.Z.getChannel(v),
    b = o.Z.getApplication(t),
    x = a.ZP.getRunningGames().find(e => e.id === t),
    j = null != (O = null == x ? true : x.name) ? O : null == b ? true : b.name,
    I = (0, p.oY)(null == S ? true : S.guild_id, null == S ? true : S.id, E),
    C = (0, i.jsxs)("div", {
      className: y.nowPlayingNotification,
      children: [(0, i.jsx)("div", {
        className: y.nowPlayingNotificationIcon,
        children: (0, i.jsx)(l.Z, {
          user: E,
          "aria-hidden": true,
          size: r.EFr.SIZE_24
        })
      }), (0, i.jsx)("div", {
        className: y.body,
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "interactive-normal",
          className: y.bodyText,
          children: g.intl.format(g.t["q7/rgv"], {
            username: null != I ? I : E.username,
            gameName: j,
            gameIcon: () => null != b || null != x ? (0, i.jsx)(s.Z, {
              game: b,
              pid: null == x ? true : x.pid,
              size: s.A.XSMALL,
              className: y.gameIcon
            }) : null
          })
        })
      })]
    }),
    {
      trackView: Z,
      trackClick: N
    } = (0, f.R)(m.n0.NowPlayingNotification, {
      notif_type: m.n0.NowPlayingNotification,
      notif_user_id: E.id,
      activity_type: n.type,
      activity_name: null != j ? j : n.name
    });
  return {
    body: C,
    className: y.nowPlayingNotificationContainer,
    wrapperClassName: y.nowPlayingNotificationWrapper,
    animationWrapperClassName: y.nowPlayingNotificationAnimationWrapper,
    maxBodyLines: 1,
    disableClickableRegions: true,
    onNotificationShow: () => {
      Z()
    },
    onDismissClick: () => {
      N("dismiss")
    }
  }
}