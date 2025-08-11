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
  Chunk906732 = require("./906732.js"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.js"),
  Chunk743056 = require("./743056.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.js"),
  Chunk652853 = require("./652853.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk185589 = require("./185589.js");

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
  return P && null == w ? null : <div className={a()(g.container, y)}>{P ? <s.Text variant={"text-sm/normal"}>{m.intl.format(b ? m.t.syHjLC : m.t.V15uUF, {
        username: I,
        applicationIcon: () => (0, r.jsx)(u.Z, {
          className: g.gameIcon,
          game: w,
          size: u.Z.Sizes.XXSMALL
        }, null == w ? true : w.id),
        applicationName: null == w ? true : w.name
      })}</s.Text> : <s.Text variant={"text-sm/normal"}>{m.intl.format(m.t.uIomX1, {
        username: I
      })}</s.Text>}{<div className={g.buttonContainer}>{<s.zxk variant={v ? "secondary" : "primary"} size={"sm"} onClick={C} text={m.intl.string(m.t.ZcibdX)} />}{<s.zxk variant={"secondary"} size={"sm"} onClick={R} text={m.intl.string(m.t.xuio0N)} />}</div>}</div>
}