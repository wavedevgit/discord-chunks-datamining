/** Chunk was on web.js **/
/** chunk id: 886891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk390848 = require("./390848.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk134327 = require("./134327.js");

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
  } = (0, _.E)(), A = O === h.d.MODAL_V2, v = f.Ay.getName(n, a, t), {
    trackUserProfileAction: S
  } = (0, p.NJ)(), {
    newestAnalyticsLocation: I
  } = (0, l.Ay)(), {
    acceptFriendRequest: T,
    cancelFriendRequest: C
  } = (0, d.I)({
    userId: t.id,
    applicationId: E,
    isGameRelationship: b,
    location: I
  }), N = i.useCallback(() => {
    T(), S({
      action: b ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST"
    })
  }, [T, b, S]), R = i.useCallback(() => {
    C(), S({
      action: b ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST"
    })
  }, [C, b, S]), w = null != E, P = (0, c.h)(E);
  return w && null == P ? null : (0, r.jsxs)("div", {
    className: s()(g.kL, y),
    children: [w ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(b ? m.t.syHjLL : m.t.V15uUI, {
        username: v,
        applicationIcon: () => (0, r.jsx)(u.A, {
          className: g.Gt,
          game: P,
          size: u.M.XXSMALL
        }, null == P ? true : P.id),
        applicationName: null == P ? true : P.name
      })
    }) : (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(m.t.uIomXw, {
        username: v
      })
    }), (0, r.jsxs)("div", {
      className: g.UD,
      children: [(0, r.jsx)(o.Button, {
        variant: A ? "secondary" : "primary",
        size: "sm",
        onClick: N,
        text: m.intl.string(m.t.Zcibdf)
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        onClick: R,
        text: m.intl.string(m.t.xuio0C)
      })]
    })]
  })
}