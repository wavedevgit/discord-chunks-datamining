/** Chunk was on 88856 **/
/** chunk id: 862065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk625651 = require("./625651.jsx"),
  Chunk744993 = require("./744993.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk775488 = require("./775488.js");

function l(e) {
  var {
    guildId: t,
    gameInstance: n
  } = e, l = function(e, t) {
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
  return (0, r.jsx)(o.f, function(e) {
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
      className: s.imageContainer,
      children: (0, r.jsx)("img", {
        alt: "",
        src: "",
        className: s.image
      })
    }),
    warningText: c.intl.string(i.default.oHNuWl),
    isLoading: false,
    onDeactivate: () => {
      (0, a.s9)(t, n.planId, n.entitlementId).then(() => {
        l.onClose()
      })
    }
  }, l))
}