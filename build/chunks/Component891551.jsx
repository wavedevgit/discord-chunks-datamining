/** Chunk was on web.js **/
/** chunk id: 891551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk522651 = require("./522651.js"),
  Chunk793148 = require("./793148.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk358085 = require("./358085.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk119421 = require("./119421.js");

function h(e, t, n, r) {
  e > 0 && n && s.Z.toggleLocalMute(t, r), s.Z.setLocalVolume(t, (0, d.A)(e), r)
}

function m(e, t) {
  s.Z.toggleLocalMute(e, t)
}

function g(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: i,
    userId: s,
    context: g,
    currentWindow: E = window,
    location: b
  } = e, {
    currentVolume: y,
    muted: O
  } = (0, a.cj)([u.Z], () => ({
    currentVolume: u.Z.getLocalVolume(s, g),
    muted: u.Z.isLocalMute(s, g)
  }));
  return (0, r.jsx)(_.Z, {
    children: (0, r.jsx)(c.Z, {
      currentWindow: E,
      iconClassName: o()(n, p.controlIcon),
      sliderClassName: i,
      className: t,
      value: (0, d.P)(y),
      muted: O,
      maxValue: f.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => h(e, s, O, g),
      onToggleMute: () => {
        null != b && (0, l.v)(b, l.d.VOLUME, O), m(s, g)
      }
    })
  })
}