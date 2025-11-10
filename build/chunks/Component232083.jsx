/** Chunk was on 15582 **/
/** chunk id: 232083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk733231 = require("./733231.jsx"),
  Chunk385153 = require("./385153.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk107442 = require("./107442.js");

function f(e) {
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

function g(e) {
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
    registerItemRef: l,
    manageFocusOnDelete: c
  } = (0, o.C)();
  return (0, r.jsx)("ul", {
    className: d.cardList,
    children: t.map((e, t) => (0, r.jsx)("li", {
      children: (0, r.jsx)(s.Z, f({
        index: t,
        user: n,
        game: e,
        widgetType: i,
        coverRef: l(e.applicationId),
        onRemoveGame: c
      }, a))
    }, e.applicationId))
  })
}

function p(e) {
  var t, n;
  let {
    user: s,
    widgetType: d,
    disableInteraction: p,
    games: m
  } = e, b = (0, a.e7)([l.default], () => l.default.getId() === s.id), {
    getManageButtonForWidget: h
  } = (0, u.j)(), y = h(d), [v, O] = i.useState(false), j = v ? m : m.slice(0, 2), x = m.length > 2, _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g, (t = f({}, e), n = n = {
      games: j
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), x && (0, r.jsx)(c.Z, {
      expanded: v,
      onClick: () => O(e => !e)
    })]
  });
  return b && !p ? (0, r.jsx)(o.d, {
    emptyListFallbackRef: y,
    children: _
  }) : _
}