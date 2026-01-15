/** Chunk was on web.js **/
/** chunk id: 91433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk743056 = require("./743056.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk97057 = require("./97057.js");

function E(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    applicationId: E,
    isGameRelationship: b = false,
    className: y
  } = e, {
    themeType: O
  } = (0, _.z)(), v = O === h.l.MODAL_V2, S = f.ZP.getName(n, a, t), {
    trackUserProfileAction: I
  } = (0, p.KZ)(), {
    newestAnalyticsLocation: T
  } = (0, l.ZP)(), {
    acceptFriendRequest: C,
    cancelFriendRequest: A
  } = (0, d.u)({
    userId: t.id,
    applicationId: E,
    isGameRelationship: b,
    location: T
  }), N = i.useCallback(() => {
    C(), I({
      action: b ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST"
    })
  }, [C, b, I]), P = i.useCallback(() => {
    A(), I({
      action: b ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST"
    })
  }, [A, b, I]), w = null != E, R = (0, c.q)(E);
  return w && null == R ? null : (0, r.jsxs)("div", {
    className: o()(g.container, y),
    children: [w ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(b ? m.t.syHjLL : m.t.V15uUI, {
        username: S,
        applicationIcon: () => (0, r.jsx)(u.Z, {
          className: g.gameIcon,
          game: R,
          size: u.A.XXSMALL
        }, null == R ? true : R.id),
        applicationName: null == R ? true : R.name
      })
    }) : (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(m.t.uIomXw, {
        username: S
      })
    }), (0, r.jsxs)("div", {
      className: g.buttonContainer,
      children: [(0, r.jsx)(s.Button, {
        variant: v ? "secondary" : "primary",
        size: "sm",
        onClick: N,
        text: m.intl.string(m.t.Zcibdf)
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        onClick: P,
        text: m.intl.string(m.t.xuio0C)
      })]
    })]
  })
}