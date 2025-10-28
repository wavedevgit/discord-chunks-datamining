/** Chunk was on 72651 **/
/** chunk id: 30344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk733231 = require("./733231.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk753436 = require("./753436.jsx"),
  Chunk34335 = require("./34335.jsx");

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
    games: t
  } = e, n = function(e, t) {
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
  }(e, ["games"]);
  let {
    registerItemRef: i,
    manageFocusOnDelete: a
  } = (0, l.C)();
  return (0, r.jsx)(o.Z, {
    games: t,
    renderGame: (e, t) => (0, r.jsx)(c.S, u({
      index: t,
      game: e,
      coverRef: i(e.applicationId),
      onRemoveGame: a
    }, n))
  })
}

function f(e) {
  let {
    userId: t,
    widgetType: n,
    disableInteraction: o
  } = e, c = (0, i.e7)([a.default], () => a.default.getId() === t), {
    getManageButtonForWidget: f
  } = (0, s.j)(), g = f(n);
  return c && !o ? (0, r.jsx)(l.d, {
    emptyListFallbackRef: g,
    children: (0, r.jsx)(d, u({}, e))
  }) : (0, r.jsx)(d, u({}, e))
}