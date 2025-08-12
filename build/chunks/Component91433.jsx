/** Chunk was on web.js **/
/** chunk id: 91433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk743056 = require("./743056.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk752186 = require("./752186.js");

function E(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    applicationId: E,
    isGameRelationship: b = false,
    className: y
  } = e, {
    themeType: O
  } = (0, p.z)(), v = O === h.lY.MODAL_V2, I = f.ZP.getName(n, o, t), {
    trackUserProfileAction: T
  } = (0, _.KZ)(), {
    newestAnalyticsLocation: S
  } = (0, l.ZP)(), {
    acceptFriendRequest: A,
    cancelFriendRequest: N
  } = (0, d.u)({
    userId: t.id,
    applicationId: E,
    isGameRelationship: b,
    location: S
  }), C = i.useCallback(() => {
    A(), T({
      action: b ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST"
    })
  }, [A, b, T]), R = i.useCallback(() => {
    N(), T({
      action: b ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST"
    })
  }, [N, b, T]), P = null != E, w = (0, c.q)(E);
  return P && null == w ? null : (0, r.jsxs)("div", {
    className: a()(g.container, y),
    children: [P ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(b ? m.t.syHjLC : m.t.V15uUF, {
        username: I,
        applicationIcon: () => (0, r.jsx)(u.Z, {
          className: g.gameIcon,
          game: w,
          size: u.Z.Sizes.XXSMALL
        }, null == w ? true : w.id),
        applicationName: null == w ? true : w.name
      })
    }) : (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(m.t.uIomX1, {
        username: I
      })
    }), (0, r.jsxs)("div", {
      className: g.buttonContainer,
      children: [(0, r.jsx)(s.zxk, {
        variant: v ? "secondary" : "primary",
        size: "sm",
        onClick: C,
        text: m.intl.string(m.t.ZcibdX)
      }), (0, r.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        onClick: R,
        text: m.intl.string(m.t.xuio0N)
      })]
    })]
  })
}