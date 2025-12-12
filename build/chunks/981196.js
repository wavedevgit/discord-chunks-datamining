/** Chunk was on web.js **/
/** chunk id: 981196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => l
});
var Chunk812975 = require("./812975.js"),
  Chunk686942 = require("./686942.js"),
  Chunk713267 = require("./713267.js"),
  Chunk695170 = require("./695170.js"),
  Chunk829105 = require("./829105.js");

function l(e) {
  for (var t = [], n = "", s = Object.keys(e), l = Object.keys(r.WN), u = 0; u < s.length; u++)
    if ("tzid" !== s[u] && (0, i.q9)(l, s[u])) {
      var d = s[u].toUpperCase(),
        f = e[s[u]],
        p = "";
      if (!(!(0, i.EN)(f) || (0, i.kJ)(f) && !f.length)) {
        switch (d) {
          case "FREQ":
            p = r.Ci.FREQUENCIES[e.freq];
            break;
          case "WKST":
            p = (0, i.hj)(f) ? new o.O(f).toString() : f.toString();
            break;
          case "BYWEEKDAY":
            d = "BYDAY", p = (0, i.qo)(f).map(function(e) {
              return e instanceof o.O ? e : (0, i.kJ)(e) ? new o.O(e[0], e[1]) : new o.O(e)
            }).toString();
            break;
          case "DTSTART":
            n = c(f, e.tzid);
            break;
          case "UNTIL":
            p = (0, a.Od)(f, !e.tzid);
            break;
          default:
            if ((0, i.kJ)(f)) {
              for (var _ = [], m = 0; m < f.length; m++) _[m] = String(f[m]);
              p = _.toString()
            } else p = String(f)
        }
        p && t.push([d, p])
      }
    } var h = t.map(function(e) {
      var t = e[0],
        n = e[1];
      return "".concat(t, "=").concat(n.toString())
    }).join(";"),
    g = "";
  return "" !== h && (g = "RRULE:".concat(h)), [n, g].filter(function(e) {
    return !!e
  }).join("\n")
}

function c(e, t) {
  return e ? "DTSTART" + new s.M(new Date(e), t).toString() : ""
}