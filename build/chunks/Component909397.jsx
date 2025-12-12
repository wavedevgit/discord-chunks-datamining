/** Chunk was on web.js **/
/** chunk id: 909397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E,
  o: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk324060 = require("./324060.js"),
  Chunk482617 = require("./482617.js"),
  Chunk883166 = require("./883166.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk916018 = require("./916018.js");
let g = {
  [Chunk612776.yD.WELCOME]: "Entry",
  [Chunk612776.yD.MESSAGES]: "Messages",
  [Chunk612776.yD.EMOJIS]: "Emojis",
  [Chunk612776.yD.VOICE]: "Voice",
  [Chunk612776.yD.GUILDS]: "Servers",
  [Chunk612776.yD.FRIENDS]: "Friends",
  [Chunk612776.yD.GAMING]: "Games",
  [Chunk612776.yD.QUESTS]: "Quests",
  [Chunk612776.yD.END]: "Entry"
};

function E(e) {
  let {
    slide: t,
    className: n
  } = e, o = i.useContext(f.Q), _ = (0, p.Z)((0, c.dQu)(o.primaryColor).hex()), m = (0, d.a7)(_), E = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, r.jsx)("div", {
    className: a()(h.container, n),
    children: (0, r.jsx)(s.xKG, {
      artboard: g[t],
      dataBinding: {
        iconColor: {
          r: m.r,
          g: m.g,
          b: m.b,
          a: 255 * m.a
        },
        reducedMotion: E
      },
      fit: "layout",
      withReducedMotion: "short-loop"
    })
  })
}

function b(e) {
  let {
    slide: t,
    className: n
  } = e, i = (0, _.gl)();
  return (0, r.jsx)(_.QR, {
    spring: i,
    children: (0, r.jsx)(E, {
      slide: t,
      className: n
    })
  })
}