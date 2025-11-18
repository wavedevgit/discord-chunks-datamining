/** Chunk was on 71264 **/
/** chunk id: 891551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk522651 = require("./522651.js"),
  Chunk793148 = require("./793148.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk358085 = require("./358085.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk842250 = require("./842250.js");

function m(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: r,
    userId: m,
    context: g,
    currentWindow: b = window,
    location: y
  } = e, {
    currentVolume: C,
    muted: v
  } = (0, a.cj)([u.Z], () => ({
    currentVolume: u.Z.getLocalVolume(m, g),
    muted: u.Z.isLocalMute(m, g)
  }));
  return (0, i.jsx)(h.Z, {
    children: (0, i.jsx)(c.Z, {
      currentWindow: b,
      iconClassName: l()(n, f.controlIcon),
      sliderClassName: r,
      className: t,
      value: (0, d.P)(C),
      muted: v,
      maxValue: p.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        e > 0 && v && o.Z.toggleLocalMute(m, g), o.Z.setLocalVolume(m, (0, d.A)(e), g)
      },
      onToggleMute: () => {
        null != y && (0, s.v)(y, s.d.VOLUME, v), o.Z.toggleLocalMute(m, g)
      }
    })
  })
}