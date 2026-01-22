/** Chunk was on 21738 **/
/** chunk id: 187696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk901517 = require("./901517.js"),
  Chunk397244 = require("./397244.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893750 = require("./893750.js");
let d = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: d,
    status: p,
    user: f,
    userIgnored: h
  } = e, {
    voiceActivityStatusEnabled: A
  } = (0, i.G)({
    location: "StatusText"
  }), {
    voiceChannel: g
  } = (0, a.A)({
    userId: null == f ? true : f.id
  }), m = A ? g : true;
  return h ? (0, r.jsx)("div", {
    className: u.Q,
    children: c.intl.string(c.t.tFY5Zb)
  }) : (0, l.A)({
    activities: n,
    status: p,
    applicationStream: d,
    voiceChannel: m
  }) ? (0, r.jsx)(s.A, {
    textClassName: u.q,
    activities: n,
    applicationStream: d,
    voiceChannel: m,
    animateEmoji: t,
    user: f,
    textSize: "sm"
  }) : (0, r.jsx)("div", {
    className: u.Q,
    children: (0, o.MU)(p)
  })
}