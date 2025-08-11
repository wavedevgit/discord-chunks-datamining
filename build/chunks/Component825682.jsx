/** Chunk was on 1272 **/
/** chunk id: 825682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk468363 = require("./468363.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk771173 = require("./771173.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk223009 = require("./223009.js");
let d = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: d,
    status: p,
    user: f,
    userIgnored: h
  } = e, {
    voiceActivityStatusEnabled: g
  } = (0, i.U)({
    location: "StatusText"
  }), {
    voiceChannel: m
  } = (0, a.Z)({
    userId: null == f ? true : f.id
  }), b = g ? m : true;
  return h ? (0, r.jsx)("div", {
    className: u.text,
    children: c.intl.string(c.t.tFY5ZW)
  }) : (0, l.Z)({
    activities: n,
    status: p,
    applicationStream: d,
    voiceChannel: b
  }) ? (0, r.jsx)(o.Z, {
    location: "StatusText",
    textClassName: u.statusText,
    activities: n,
    applicationStream: d,
    voiceChannel: b,
    animateEmoji: t,
    user: f,
    textSize: "sm"
  }) : (0, r.jsx)("div", {
    className: u.text,
    children: (0, s.u5)(p)
  })
}