/** Chunk was on 193 **/
/** chunk id: 399894, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk95136 = require("./95136.js");
let f = e => {
  let t, n, {
    rateLimitPerUser: r,
    slowmodeCooldownGuess: l,
    isBypassSlowmode: f,
    leadingIcon: h = false
  } = e;
  if (r >= d.Z.Seconds.HOUR) {
    let e = Math.floor(r / d.Z.Seconds.HOUR),
      t = Math.floor((r - e * d.Z.Seconds.HOUR) / d.Z.Seconds.MINUTE),
      a = r - e * d.Z.Seconds.HOUR - t * d.Z.Seconds.MINUTE;
    n = u.intl.formatToPlainString(u.t.oEwLez, {
      hours: e,
      minutes: t,
      seconds: a
    })
  } else if (r >= 60) {
    let e = Math.floor(r / 60);
    n = u.intl.formatToPlainString(u.t.DARKYm, {
      minutes: e,
      seconds: r - 60 * e
    })
  } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], {
    seconds: r
  });
  if (!f && l > 0) {
    let e = s().duration(l);
    if (l > d.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        a = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(a)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = f ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
  let g = (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    }),
    x = (0, a.jsx)(c.ANZ, {
      size: "xs",
      color: "currentColor",
      className: i()(m.slowModeIcon, {
        [m.leadingIcon]: h
      })
    });
  return (0, a.jsx)(o.u, {
    text: n,
    children: (0, a.jsx)("div", {
      className: m.cooldownWrapper,
      children: h ? (0, a.jsxs)(a.Fragment, {
        children: [x, g]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [g, x]
      })
    })
  })
}