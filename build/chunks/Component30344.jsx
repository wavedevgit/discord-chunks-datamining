/** Chunk was on 52708 **/
/** chunk id: 30344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk733231 = require("./733231.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk141014 = require("./141014.jsx"),
  Chunk385153 = require("./385153.jsx"),
  Chunk753436 = require("./753436.jsx"),
  Chunk34335 = require("./34335.jsx");

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
    renderGame: (e, t) => (0, r.jsx)(u.S, f({
      index: t,
      game: e,
      coverRef: i(e.applicationId),
      onRemoveGame: a
    }, n))
  })
}

function p(e) {
  var t, n;
  let {
    userId: o,
    widgetType: u,
    disableInteraction: p,
    games: m
  } = e, b = (0, i.e7)([a.default], () => a.default.getId() === o), {
    getManageButtonForWidget: h
  } = (0, d.j)(), y = h(u), {
    expanded: O,
    setExpanded: v
  } = (0, c.g)(), j = O ? m : m.slice(0, 8), x = m.length > 8, _ = (0, r.jsxs)(r.Fragment, {
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
    }), t)), x && (0, r.jsx)(s.Z, {
      expanded: O,
      onClick: () => v(e => !e)
    })]
  });
  return b && !p ? (0, r.jsx)(l.d, {
    emptyListFallbackRef: y,
    children: _
  }) : _
}