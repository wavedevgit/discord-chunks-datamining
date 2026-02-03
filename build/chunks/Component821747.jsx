/** Chunk was on 44669 **/
/** chunk id: 821747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: l,
    userId: f,
    context: m,
    currentWindow: b = window,
    location: A
  } = e, {
    currentVolume: y,
    muted: O
  } = (0, s.cf)([u.A], () => ({
    currentVolume: u.A.getLocalVolume(f, m),
    muted: u.A.isLocalMute(f, m)
  }));
  return (0, r.jsx)(h.A, {
    children: (0, r.jsx)(c.A, {
      currentWindow: b,
      iconClassName: i()(n, g.pd),
      sliderClassName: l,
      className: t,
      value: (0, d.M)(y),
      muted: O,
      maxValue: p.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        e > 0 && O && a.A.toggleLocalMute(f, m), a.A.setLocalVolume(f, (0, d.w)(e), m)
      },
      onToggleMute: () => {
        null != A && (0, o.X)(A, o.O.VOLUME, O), a.A.toggleLocalMute(f, m)
      }
    })
  })
}