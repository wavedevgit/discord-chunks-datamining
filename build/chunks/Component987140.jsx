/** Chunk was on 60118 **/
/** chunk id: 987140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk958338 = require("./958338.js"),
  Chunk253798 = require("./253798.jsx"),
  Chunk224360 = require("./224360.jsx");

function u(e) {
  let {
    widgetType: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["widgetType"]), {
    games: u,
    onAddGame: d
  } = (0, o.S)(t), {
    setExpanded: f
  } = (0, s.B)(), {
    trackUserProfileEditAction: p
  } = (0, i.NJ)(), g = l.useCallback(e => {
    d(e), f(true), (0, a.ew)({
      widgetType: t,
      game: {
        applicationId: e
      }
    }), p({
      action: "GAME_ADDED",
      gameId: e,
      widgetEdited: t
    })
  }, [d, t, p, f]);
  return (0, r.jsx)(c.A, function(e) {
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
    games: u,
    onClick: g
  }, n))
}