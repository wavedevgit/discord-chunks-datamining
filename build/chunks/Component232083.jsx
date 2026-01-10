/** Chunk was on 65414 **/
/** chunk id: 232083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk733231 = require("./733231.jsx"),
  Chunk262804 = require("./262804.jsx"),
  Chunk141014 = require("./141014.jsx"),
  Chunk385153 = require("./385153.jsx"),
  Chunk623132 = require("./623132.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk553087 = require("./553087.js");

function g(e) {
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

function p(e) {
  var {
    games: t,
    user: n,
    widgetType: i
  } = e, l = function(e, t) {
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
  }(e, ["games", "user", "widgetType"]);
  let {
    registerItemRef: o,
    manageFocusOnDelete: c
  } = (0, a.C)();
  return (0, r.jsx)("ul", {
    className: f.cardList,
    children: t.map((e, t) => (0, r.jsx)("li", {
      children: (0, r.jsx)(u.Z, g({
        index: t,
        user: n,
        game: e,
        widgetType: i,
        coverRef: o(e.applicationId),
        onRemoveGame: c
      }, l))
    }, e.applicationId))
  })
}

function m(e) {
  var t, n;
  let {
    user: u,
    widgetType: f,
    disableInteraction: m,
    games: b
  } = e, y = (0, i.e7)([l.default], () => l.default.getId() === u.id), {
    getManageButtonForWidget: j
  } = (0, d.j)(), h = j(f), {
    expanded: O,
    setExpanded: v
  } = (0, c.g)(), x = O ? b : b.slice(0, 2), P = b.length > 2, I = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p, (t = g({}, e), n = n = {
      games: x
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), P && (0, r.jsx)(s.Z, {
      expanded: O,
      onClick: () => v(e => !e)
    })]
  });
  return y && !m ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Z, {
      widgetType: f,
      gameCount: b.length
    }), (0, r.jsx)(a.d, {
      emptyListFallbackRef: h,
      children: I
    })]
  }) : I
}