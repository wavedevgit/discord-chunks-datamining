/** Chunk was on 72651 **/
/** chunk id: 232083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk733231 = require("./733231.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk112794 = require("./112794.js");

function u(e) {
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
}

function d(e) {
  var {
    games: t,
    user: n,
    widgetType: i
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["games", "user", "widgetType"]);
  let {
    registerItemRef: c,
    manageFocusOnDelete: d
  } = (0, l.C)();
  return (0, r.jsx)("ul", {
    className: s.cardList,
    children: t.map((e, t) => (0, r.jsx)("li", {
      children: (0, r.jsx)(o.Z, u({
        index: t,
        user: n,
        game: e,
        widgetType: i,
        coverRef: c(e.applicationId),
        onRemoveGame: d
      }, a))
    }, e.applicationId))
  })
}

function f(e) {
  let {
    user: t,
    widgetType: n,
    disableInteraction: o
  } = e, s = (0, i.e7)([a.default], () => a.default.getId() === t.id), {
    getManageButtonForWidget: f
  } = (0, c.j)(), g = f(n);
  return s && !o ? (0, r.jsx)(l.d, {
    emptyListFallbackRef: g,
    children: (0, r.jsx)(d, u({}, e))
  }) : (0, r.jsx)(d, u({}, e))
}