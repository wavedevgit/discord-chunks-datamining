/** Chunk was on web.js **/
/** chunk id: 727049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => l
});
var Chunk90727 = require("./90727.js"),
  Chunk391898 = require("./391898.js"),
  Chunk734481 = require("./734481.js"),
  Chunk222367 = require("./222367.js"),
  Chunk551253 = require("./551253.js");

function l(e) {
  for (var t = [], n = "", o = Object.keys(e), l = Object.keys(r.lp), u = 0; u < o.length; u++)
    if ("tzid" !== o[u] && (0, i.mK)(l, o[u])) {
      var d = o[u].toUpperCase(),
        f = e[o[u]],
        p = "";
      if (!(!(0, i.Wo)(f) || (0, i.cy)(f) && !f.length)) {
        switch (d) {
          case "FREQ":
            p = r.p3.FREQUENCIES[e.freq];
            break;
          case "WKST":
            p = (0, i.Et)(f) ? new a.B(f).toString() : f.toString();
            break;
          case "BYWEEKDAY":
            d = "BYDAY", p = (0, i.$r)(f).map(function(e) {
              return e instanceof a.B ? e : (0, i.cy)(e) ? new a.B(e[0], e[1]) : new a.B(e)
            }).toString();
            break;
          case "DTSTART":
            n = c(f, e.tzid);
            break;
          case "UNTIL":
            p = (0, s.w)(f, !e.tzid);
            break;
          default:
            if ((0, i.cy)(f)) {
              for (var _ = [], h = 0; h < f.length; h++) _[h] = String(f[h]);
              p = _.toString()
            } else p = String(f)
        }
        p && t.push([d, p])
      }
    } var m = t.map(function(e) {
      var t = e[0],
        n = e[1];
      return "".concat(t, "=").concat(n.toString())
    }).join(";"),
    g = "";
  return "" !== m && (g = "RRULE:".concat(m)), [n, g].filter(function(e) {
    return !!e
  }).join("\n")
}

function c(e, t) {
  return e ? "DTSTART" + new o.x(new Date(e), t).toString() : ""
}