/** Chunk was on 97887 **/
/** chunk id: 821747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk384059 = require("./384059.js"),
  Chunk20504 = require("./20504.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js"),
  Chunk723702 = require("./723702.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk35204 = require("./35204.js");

function g(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: l,
    userId: g,
    context: m,
    currentWindow: b = window,
    location: A
  } = e, {
    currentVolume: y,
    muted: _
  } = (0, s.cf)([u.A], () => ({
    currentVolume: u.A.getLocalVolume(g, m),
    muted: u.A.isLocalMute(g, m)
  }));
  return (0, r.jsx)(h.A, {
    children: (0, r.jsx)(c.A, {
      currentWindow: b,
      iconClassName: i()(n, f.pd),
      sliderClassName: l,
      className: t,
      value: (0, d.M)(y),
      muted: _,
      maxValue: p.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        e > 0 && _ && a.A.toggleLocalMute(g, m), a.A.setLocalVolume(g, (0, d.w)(e), m)
      },
      onToggleMute: () => {
        null != A && (0, o.X)(A, o.O.VOLUME, _), a.A.toggleLocalMute(g, m)
      }
    })
  })
}