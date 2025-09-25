/** Chunk was on 88856 **/
/** chunk id: 862065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk625651 = require("./625651.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk593997 = require("./593997.js");

function u(e) {
  var {
    guildId: t,
    gameInstance: n
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["guildId", "gameInstance"]);
  let [d, f] = o.useState(false), [m, b] = o.useState(true);
  return (0, r.jsx)(a.f, function(e) {
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
    size: "sm",
    title: n.name,
    body: (0, r.jsx)("div", {
      className: l.imageContainer,
      children: (0, r.jsx)("img", {
        alt: "",
        src: "",
        className: l.image
      })
    }),
    warningText: s.intl.string(c.default.oHNuWl),
    isLoading: d,
    error: m,
    onDeactivate: () => {
      b(true), f(true), (0, i.s9)(t, n.planId, n.entitlementId).then(() => {
        u.onClose()
      }).catch(e => {
        var t;
        b(null != (t = e.body.message) ? t : e.message)
      }).finally(() => {
        f(false)
      })
    }
  }, u))
}