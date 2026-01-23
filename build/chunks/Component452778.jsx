/** Chunk was on 46875 **/
/** chunk id: 452778, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk927813 = require("./927813.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk612605 = require("./612605.js");
let h = e => {
  let t, n, {
    rateLimitPerUser: r,
    slowmodeCooldownGuess: a,
    isBypassSlowmode: h,
    leadingIcon: g = false
  } = e;
  if (r >= d.A.Seconds.HOUR) {
    let e = Math.floor(r / d.A.Seconds.HOUR),
      t = Math.floor((r - e * d.A.Seconds.HOUR) / d.A.Seconds.MINUTE),
      l = r - e * d.A.Seconds.HOUR - t * d.A.Seconds.MINUTE;
    n = u.intl.formatToPlainString(u.t.oEwLez, {
      hours: e,
      minutes: t,
      seconds: l
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
  if (!h && a > 0) {
    let e = s().duration(a);
    if (a > d.A.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        l = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(l)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
  let x = (0, l.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    }),
    f = (0, l.jsx)(c.xbX, {
      size: "xs",
      color: "currentColor",
      className: i()(m.Eq, {
        [m.iE]: g
      })
    });
  return (0, l.jsx)(o.m, {
    text: n,
    children: (0, l.jsx)("div", {
      className: m.ns,
      children: g ? (0, l.jsxs)(l.Fragment, {
        children: [f, x]
      }) : (0, l.jsxs)(l.Fragment, {
        children: [x, f]
      })
    })
  })
}