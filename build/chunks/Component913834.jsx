/** Chunk was on web.js **/
/** chunk id: 913834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk873128 = require("./873128.js"),
  Chunk704041 = require("./704041.jsx"),
  Chunk986398 = require("./986398.jsx"),
  Chunk463031 = require("./463031.js"),
  Chunk607439 = require("./607439.js");

function f(e) {
  let {
    guild: t,
    message: n
  } = e, f = i.useRef(null), [_, p] = i.useState(false), h = i.useRef(false), m = (0, s.Z)({
    guildId: t.id,
    leaderboardId: u.z,
    intervalOffset: 0
  }), g = i.useMemo(() => {
    var e;
    if ((null == m || null == (e = m.guild_settings) ? true : e.show_winner_crown) !== true) returnfalse;
    let t = m.users[0];
    return n.author.id === (null == t ? true : t.user_id)
  }, [m, n]);
  if (null == m || !g) return null;
  let E = () => {
      h.current = true, p(true)
    },
    b = () => {
      h.current = false, setTimeout(() => {
        h.current || p(false)
      }, 100)
    };
  return (0, r.jsx)("div", {
    className: d.badge,
    onMouseEnter: E,
    onMouseLeave: b,
    children: (0, r.jsx)(o.yRy, {
      targetElementRef: f,
      animation: o.yRy.Animation.TRANSLATE,
      align: "center",
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "top",
      shouldShow: _,
      renderPopout: () => (0, r.jsx)(l.Z, {
        guildId: t.id,
        previewMode: true,
        source: a.Z.MEMBER_LIST,
        leaderboardId: m.leaderboard_id
      }),
      children: () => (0, r.jsx)(c.Z, {
        leaderboard: m,
        className: d.image,
        ref: f
      })
    })
  })
}