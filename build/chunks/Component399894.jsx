/** Chunk was on 76892 **/
/** chunk id: 399894, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750358 = require("./750358.js");
let h = e => {
  let t, n, {
    rateLimitPerUser: i,
    slowmodeCooldownGuess: l,
    isBypassSlowmode: h,
    leadingIcon: g = false
  } = e;
  if (i >= d.Z.Seconds.HOUR) {
    let e = Math.floor(i / d.Z.Seconds.HOUR),
      t = Math.floor((i - e * d.Z.Seconds.HOUR) / d.Z.Seconds.MINUTE),
      r = i - e * d.Z.Seconds.HOUR - t * d.Z.Seconds.MINUTE;
    n = u.intl.formatToPlainString(u.t.oEwLez, {
      hours: e,
      minutes: t,
      seconds: r
    })
  } else if (i >= 60) {
    let e = Math.floor(i / 60);
    n = u.intl.formatToPlainString(u.t.DARKYm, {
      minutes: e,
      seconds: i - 60 * e
    })
  } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], {
    seconds: i
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
  let f = (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    }),
    x = (0, r.jsx)(c.ANZ, {
      size: "xs",
      color: "currentColor",
      className: a()(m.slowModeIcon, {
        [m.leadingIcon]: g
      })
    });
  return (0, r.jsx)(o.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: m.cooldownWrapper,
      children: g ? (0, r.jsxs)(r.Fragment, {
        children: [x, f]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [f, x]
      })
    })
  })
}