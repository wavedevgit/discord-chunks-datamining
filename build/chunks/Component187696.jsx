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
    user: h,
    userIgnored: g
  } = e, {
    voiceActivityStatusEnabled: m
  } = (0, i.G)({
    location: "StatusText"
  }), {
    voiceChannel: f
  } = (0, a.A)({
    userId: null == h ? true : h.id
  }), A = m ? f : true;
  return g ? (0, r.jsx)("div", {
    className: u.Q,
    children: c.intl.string(c.t.tFY5Zb)
  }) : (0, l.A)({
    activities: n,
    status: p,
    applicationStream: d,
    voiceChannel: A
  }) ? (0, r.jsx)(s.A, {
    textClassName: u.q,
    activities: n,
    applicationStream: d,
    voiceChannel: A,
    animateEmoji: t,
    user: h,
    textSize: "sm"
  }) : (0, r.jsx)("div", {
    className: u.Q,
    children: (0, o.MU)(p)
  })
}