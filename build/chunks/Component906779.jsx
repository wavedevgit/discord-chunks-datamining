/** Chunk was on 47841 **/
/** chunk id: 906779, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk11351 = require("./11351.js"),
  Chunk495063 = require("./495063.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    team: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["team"]), o = (0, l.gN)() || null == t ? null : c.intl.format(c.t.d1sCiW, {
    url: a.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id)
  });
  return 0 === n.payoutsByPeriod.length ? (0, r.jsxs)(i.Text, {
    variant: "text-sm/medium",
    children: [c.intl.string(c.t.RrtXuy), " ", o]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.Text, {
      variant: "text-sm/medium",
      children: [c.intl.string(c.t["9Ub4KY"]), " ", o]
    }), (0, r.jsx)(i.hKd, {
      size: 16
    }), (0, r.jsx)(s.A, function(e) {
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