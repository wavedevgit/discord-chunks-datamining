/** Chunk was on 90882 **/
/** chunk id: 30344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk733231 = require("./733231.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk262804 = require("./262804.jsx"),
  Chunk141014 = require("./141014.jsx"),
  Chunk385153 = require("./385153.jsx"),
  Chunk753436 = require("./753436.jsx"),
  Chunk34335 = require("./34335.jsx");

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
    games: t
  } = e, n = function(e, t) {
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
  }(e, ["games"]);
  let {
    registerItemRef: i,
    manageFocusOnDelete: l
  } = (0, a.C)();
  return (0, r.jsx)(o.Z, {
    games: t,
    renderGame: (e, t) => (0, r.jsx)(d.S, g({
      index: t,
      game: e,
      coverRef: i(e.applicationId),
      onRemoveGame: l
    }, n))
  })
}

function m(e) {
  var t, n;
  let {
    userId: o,
    widgetType: d,
    disableInteraction: m,
    games: b
  } = e, y = (0, i.e7)([l.default], () => l.default.getId() === o), {
    getManageButtonForWidget: h
  } = (0, f.j)(), j = h(d), {
    expanded: O,
    setExpanded: x
  } = (0, s.g)(), v = O ? b : b.slice(0, 8), P = b.length > 8, I = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p, (t = g({}, e), n = n = {
      games: v
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), P && (0, r.jsx)(u.Z, {
      expanded: O,
      onClick: () => x(e => !e)
    })]
  });
  return y && !m ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      widgetType: d,
      gameCount: b.length
    }), (0, r.jsx)(a.d, {
      emptyListFallbackRef: j,
      children: I
    })]
  }) : I
}