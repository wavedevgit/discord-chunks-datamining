/** Chunk was on 17534 **/
/** chunk id: 827975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk919638 = require("./919638.js"),
  Chunk71393 = require("./71393.js"),
  Chunk900848 = require("./900848.jsx"),
  Chunk550591 = require("./550591.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk697491 = require("./697491.js");

function g() {
  var e, t;
  let n = (0, i.bG)([a.A, o.A], () => a.A.unavailableGuilds.filter(e => null == o.A.getGuild(e)).length),
    g = (0, l.Vd)("unavailable-guilds-button");
  return n <= 0 ? null : (0, r.jsx)(c.c, {
    children: (0, r.jsx)(u.A, {
      text: h.intl.format(h.t["TnH05/"], {
        count: n
      }),
      children: (0, r.jsx)(s.MzZ, (e = function(e) {
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
        href: d.qF.STATUS,
        target: "_blank",
        className: p.h,
        "aria-label": h.intl.formatToPlainString(h.t["MEpX+2"], {
          count: n
        })
      }, g), t = t = {
        children: (0, r.jsx)(s.EpV, {
          color: "currentColor",
          "aria-hidden": true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    })
  })
}