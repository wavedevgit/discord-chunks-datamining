/** Chunk was on 76892 **/
/** chunk id: 399894, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750358 = require("./750358.js");
let m = e => {
  let t, n, {
    rateLimitPerUser: i,
    slowmodeCooldownGuess: l,
    isBypassSlowmode: m,
    leadingIcon: h = false
  } = e;
  if (i >= c.Z.Seconds.HOUR) {
    let e = Math.floor(i / c.Z.Seconds.HOUR),
      t = Math.floor((i - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
      r = i - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
    n = d.intl.formatToPlainString(d.t.oEwLe3, {
      hours: e,
      minutes: t,
      seconds: r
    })
  } else if (i >= 60) {
    let e = Math.floor(i / 60);
    n = d.intl.formatToPlainString(d.t.DARKYm, {
      minutes: e,
      seconds: i - 60 * e
    })
  } else n = d.intl.formatToPlainString(d.t["9yE8GR"], {
    seconds: i
  });
  if (!m && l > 0) {
    let e = s().duration(l);
    if (l > c.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        r = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(r)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = m ? d.intl.string(d.t.SSzXvb) : d.intl.string(d.t.Icu3bW);
  let g = (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    }),
    f = (0, r.jsx)(o.ANZ, {
      size: "xs",
      color: "currentColor",
      className: a()(u.slowModeIcon, {
        [u.leadingIcon]: h
      })
    });
  return (0, r.jsx)(o.ua7, {
    text: n,
    children: e => {
      var t, n;
      return (0, r.jsx)("div", (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        className: u.cooldownWrapper
      }, e), n = n = {
        children: h ? (0, r.jsxs)(r.Fragment, {
          children: [f, g]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [g, f]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}