/** Chunk was on 22477 **/
/** chunk id: 162942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk687173 = require("./687173.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk289173 = require("./289173.js"),
  Chunk624160 = require("./624160.jsx"),
  Chunk229231 = require("./229231.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk210400 = require("./210400.js");

function p(e) {
  var t, n;
  let {
    handleOpenUserProfileModal: p,
    markAsDismissed: h
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, a, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          i = Object.getOwnPropertyNames(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
    return i
  }(e, ["handleOpenUserProfileModal", "markAsDismissed"]), {
    trackUserProfileEditAction: x
  } = (0, r.NJ)(), b = l.useMemo(() => c.Zc.filter(s.hL).map(e => new s.Yy({
    type: e,
    games: []
  })), []), g = l.useCallback(() => {
    h(d.i.TAKE_ACTION), x({
      action: "PRESS_ADD_WIDGET"
    }), p()
  }, [p, h, x]);
  return (0, a.jsx)(i.A, (t = function(e) {
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
  }, f), n = n = {
    children: (0, a.jsx)("ul", {
      "aria-label": u.intl.string(u.t["+EIBSA"]),
      className: m.f,
      children: b.map(e => (0, a.jsx)(o.A, {
        widget: e,
        size: "medium",
        onAddWidget: g,
        trackUserProfileEditAction: x
      }, e.getUniqueKey()))
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