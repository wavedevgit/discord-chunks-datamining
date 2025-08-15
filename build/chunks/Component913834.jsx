/** Chunk was on 31978 **/
/** chunk id: 913834, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk873128 = require("./873128.js"),
  Chunk704041 = require("./704041.jsx"),
  Chunk986398 = require("./986398.jsx"),
  Chunk463031 = require("./463031.js"),
  Chunk607439 = require("./607439.js");

function p(e) {
  let {
    guild: t,
    message: n
  } = e, p = l.useRef(null), [m, g] = l.useState(false), f = l.useRef(false), b = (0, a.Z)({
    guildId: t.id,
    leaderboardId: u.z,
    intervalOffset: 0
  }), h = l.useMemo(() => {
    var e;
    if ((null == b || null == (e = b.guild_settings) ? true : e.show_winner_crown) !== true) returnfalse;
    let t = b.users[0];
    return n.author.id === (null == t ? true : t.user_id)
  }, [b, n]);
  return null != b && h ? (0, r.jsx)("div", {
    className: d.badge,
    onMouseEnter: () => {
      f.current = true, g(true)
    },
    onMouseLeave: () => {
      f.current = false, setTimeout(() => {
        f.current || g(false)
      }, 100)
    },
    children: (0, r.jsx)(o.yRy, {
      targetElementRef: p,
      animation: o.yRy.Animation.TRANSLATE,
      align: "center",
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "top",
      shouldShow: m,
      renderPopout: () => (0, r.jsx)(s.Z, {
        guildId: t.id,
        previewMode: true,
        source: i.Z.MEMBER_LIST,
        leaderboardId: b.leaderboard_id
      }),
      children: () => (0, r.jsx)(c.Z, {
        leaderboard: b,
        className: d.image,
        ref: p
      })
    })
  }) : null
}