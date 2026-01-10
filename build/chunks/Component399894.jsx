/** Chunk was on 49131 **/
/** chunk id: 399894, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
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
let h = e => {
  let t, n, {
    rateLimitPerUser: a,
    slowmodeCooldownGuess: l,
    isBypassSlowmode: h,
    leadingIcon: f = false
  } = e;
  if (a >= d.Z.Seconds.HOUR) {
    let e = Math.floor(a / d.Z.Seconds.HOUR),
      t = Math.floor((a - e * d.Z.Seconds.HOUR) / d.Z.Seconds.MINUTE),
      r = a - e * d.Z.Seconds.HOUR - t * d.Z.Seconds.MINUTE;
    n = u.intl.formatToPlainString(u.t.oEwLez, {
      hours: e,
      minutes: t,
      seconds: r
    })
  } else if (a >= 60) {
    let e = Math.floor(a / 60);
    n = u.intl.formatToPlainString(u.t.DARKYm, {
      minutes: e,
      seconds: a - 60 * e
    })
  } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], {
    seconds: a
  });
  if (!h && l > 0) {
    let e = s().duration(l);
    if (l > d.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        r = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(r)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
  let g = (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    }),
    x = (0, r.jsx)(c.ANZ, {
      size: "xs",
      color: "currentColor",
      className: i()(m.slowModeIcon, {
        [m.leadingIcon]: f
      })
    });
  return (0, r.jsx)(o.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: m.cooldownWrapper,
      children: f ? (0, r.jsxs)(r.Fragment, {
        children: [x, g]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [g, x]
      })
    })
  })
}