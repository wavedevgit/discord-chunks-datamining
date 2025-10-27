/** Chunk was on web.js **/
/** chunk id: 91433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk976794 = require("./976794.js");

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
  } = (0, p.z)(), v = O === h.l.MODAL_V2, I = f.ZP.getName(n, a, t), {
    trackUserProfileAction: T
  } = (0, _.KZ)(), {
    newestAnalyticsLocation: S
  } = (0, l.ZP)(), {
    acceptFriendRequest: A,
    cancelFriendRequest: C
  } = (0, d.u)({
    userId: t.id,
    applicationId: E,
    isGameRelationship: b,
    location: S
  }), N = i.useCallback(() => {
    A(), T({
      action: b ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST"
    })
  }, [A, b, T]), R = i.useCallback(() => {
    C(), T({
      action: b ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST"
    })
  }, [C, b, T]), P = null != E, D = (0, c.q)(E);
  return P && null == D ? null : (0, r.jsxs)("div", {
    className: o()(g.container, y),
    children: [P ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(b ? m.t.syHjLL : m.t.V15uUI, {
        username: I,
        applicationIcon: () => (0, r.jsx)(u.Z, {
          className: g.gameIcon,
          game: D,
          size: u.A.XXSMALL
        }, null == D ? true : D.id),
        applicationName: null == D ? true : D.name
      })
    }) : (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(m.t.uIomXw, {
        username: I
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
        onClick: R,
        text: m.intl.string(m.t.xuio0C)
      })]
    })]
  })
}