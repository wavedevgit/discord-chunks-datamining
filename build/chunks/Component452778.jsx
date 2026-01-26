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
    rateLimitPerUser: l,
    slowmodeCooldownGuess: a,
    isBypassSlowmode: h,
    leadingIcon: g = false
  } = e;
  if (l >= d.A.Seconds.HOUR) {
    let e = Math.floor(l / d.A.Seconds.HOUR),
      t = Math.floor((l - e * d.A.Seconds.HOUR) / d.A.Seconds.MINUTE),
      r = l - e * d.A.Seconds.HOUR - t * d.A.Seconds.MINUTE;
    n = u.intl.formatToPlainString(u.t.oEwLez, {
      hours: e,
      minutes: t,
      seconds: r
    })
  } else if (l >= 60) {
    let e = Math.floor(l / 60);
    n = u.intl.formatToPlainString(u.t.DARKYm, {
      minutes: e,
      seconds: l - 60 * e
    })
  } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], {
    seconds: l
  });
  if (!h && a > 0) {
    let e = s().duration(a);
    if (a > d.A.Millis.HOUR) {
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
    x = (0, r.jsx)(c.xbX, {
      size: "xs",
      color: "currentColor",
      className: i()(m.Eq, {
        [m.iE]: g
      })
    });
  return (0, r.jsx)(o.m, {
    text: n,
    children: (0, r.jsx)("div", {
      className: m.ns,
      children: g ? (0, r.jsxs)(r.Fragment, {
        children: [x, f]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [f, x]
      })
    })
  })
}