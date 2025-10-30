/** Chunk was on 95017 **/
/** chunk id: 220141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk371286 = require("./371286.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk836197 = require("./836197.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk247397 = require("./247397.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk285932 = require("./285932.js");

function p(e) {
  var t, n, {
      handleOpenUserProfileModal: p,
      markAsDismissed: h
    } = e,
    x = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["handleOpenUserProfileModal", "markAsDismissed"]);
  let {
    trackUserProfileEditAction: g
  } = (0, i.KZ)(), f = c.rR.filter(e => o.Ki.includes(e)), b = r.useCallback(() => {
    h(d.L.TAKE_ACTION), g({
      action: "PRESS_ADD_WIDGET"
    }), p()
  }, [p, h, g]);
  return (0, a.jsx)(l.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    heading: u.intl.string(u.t["oqalC+"]),
    subheading: u.intl.string(u.t.O9SQ1c),
    markAsDismissed: h
  }, x), n = n = {
    children: (0, a.jsx)("ul", {
      "aria-label": u.intl.string(u.t["+EIBSA"]),
      className: m.options,
      children: f.map(e => (0, a.jsx)(s.Z, {
        widgetType: e,
        size: "medium",
        onAddWidget: b,
        trackUserProfileEditAction: g
      }, e))
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}