/** Chunk was on web.js **/
/** chunk id: 155286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E,
  e: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk998304 = require("./998304.js"),
  Chunk854987 = require("./854987.js"),
  Chunk40333 = require("./40333.js"),
  Chunk398225 = require("./398225.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk79020 = require("./79020.js");
let g = {
  [Chunk532294.P7.WELCOME]: "Entry",
  [Chunk532294.P7.MESSAGES]: "Messages",
  [Chunk532294.P7.EMOJIS]: "Emojis",
  [Chunk532294.P7.VOICE]: "Voice",
  [Chunk532294.P7.GUILDS]: "Servers",
  [Chunk532294.P7.FRIENDS]: "Friends",
  [Chunk532294.P7.GAMING]: "Games",
  [Chunk532294.P7.QUESTS]: "Quests",
  [Chunk532294.P7.END]: "Entry"
};

function E(e) {
  let {
    slide: t,
    className: n
  } = e, a = i.useContext(f.P), _ = (0, p.A)((0, c.rdh)(a.primaryColor).hex()), h = (0, d.j5)(_), E = (0, l.bG)([u.A], () => u.A.useReducedMotion);
  return (0, r.jsx)("div", {
    className: s()(m.k, n),
    children: (0, r.jsx)(o.UR3, {
      artboard: g[t],
      dataBinding: {
        iconColor: {
          r: h.r,
          g: h.g,
          b: h.b,
          a: 255 * h.a
        },
        reducedMotion: E
      },
      fit: "layout",
      withReducedMotion: "short-loop"
    })
  })
}

function y(e) {
  let {
    slide: t,
    className: n
  } = e, i = (0, _.vy)();
  return (0, r.jsx)(_.vw, {
    spring: i,
    children: (0, r.jsx)(E, {
      slide: t,
      className: n
    })
  })
}