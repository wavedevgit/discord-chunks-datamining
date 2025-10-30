/** Chunk was on 29679 **/
/** chunk id: 909667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk723047 = require("./723047.js"),
  Chunk463939 = require("./463939.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var {
    team: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["team"]);
  let c = (0, l.mY)() || null == t ? null : o.intl.format(o.t.d1sCiW, {
    url: s.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id)
  });
  return 0 === n.payoutsByPeriod.length ? (0, r.jsxs)(i.Text, {
    variant: "text-sm/medium",
    children: [o.intl.string(o.t.RrtXuy), " ", c]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.Text, {
      variant: "text-sm/medium",
      children: [o.intl.string(o.t["9Ub4KY"]), " ", c]
    }), (0, r.jsx)(i.LZC, {
      size: 16
    }), (0, r.jsx)(a.Z, function(e) {
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
    }({}, n))]
  })
}