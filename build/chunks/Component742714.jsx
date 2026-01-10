/** Chunk was on 81985 **/
/** chunk id: 742714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk240766 = require("./240766.js");

function g(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: i,
    userId: g,
    context: m,
    currentWindow: b = window,
    location: y
  } = e, {
    currentVolume: v,
    muted: O
  } = (0, a.cj)([u.Z], () => ({
    currentVolume: u.Z.getLocalVolume(g, m),
    muted: u.Z.isLocalMute(g, m)
  }));
  return (0, r.jsx)(f.Z, {
    children: (0, r.jsx)(c.Z, {
      currentWindow: b,
      iconClassName: l()(n, h.controlIcon),
      sliderClassName: i,
      className: t,
      value: (0, d.P)(v),
      muted: O,
      maxValue: p.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        e > 0 && O && o.Z.toggleLocalMute(g, m), o.Z.setLocalVolume(g, (0, d.A)(e), m)
      },
      onToggleMute: () => {
        null != y && (0, s.v)(y, s.d.VOLUME, O), o.Z.toggleLocalMute(g, m)
      }
    })
  })
}