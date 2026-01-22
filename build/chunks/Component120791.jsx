/** Chunk was on 38663 **/
/** chunk id: 120791, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk823016 = require("./823016.jsx"),
  Chunk507247 = require("./507247.jsx"),
  Chunk750492 = require("./750492.jsx"),
  Chunk253798 = require("./253798.jsx"),
  Chunk622249 = require("./622249.jsx"),
  Chunk676526 = require("./676526.jsx"),
  Chunk192 = require("./192.jsx");

function p(e) {
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

function b(e) {
  let {
    games: t
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
  }(e, ["games"]), {
    registerItemRef: l,
    manageFocusOnDelete: i
  } = (0, a.r)();
  return (0, r.jsx)(s.A, {
    games: t,
    renderGame: (e, t) => (0, r.jsx)(d.h, p({
      index: t,
      game: e,
      coverRef: l(e.applicationId),
      onRemoveGame: i
    }, n))
  })
}

function g(e) {
  var t, n;
  let {
    userId: s,
    widgetType: d,
    disableInteraction: g,
    games: m
  } = e, y = (0, l.bG)([i.default], () => i.default.getId() === s), {
    getManageButtonForWidget: O
  } = (0, f.r)(), j = O(d), {
    expanded: x,
    setExpanded: h
  } = (0, c.B)(), v = x ? m : m.slice(0, 8), A = m.length > 8, w = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b, (t = p({}, e), n = n = {
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
    }), t)), A && (0, r.jsx)(u.A, {
      expanded: x,
      onClick: () => h(e => !e)
    })]
  });
  return y && !g ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.A, {
      widgetType: d,
      gameCount: m.length
    }), (0, r.jsx)(a.B, {
      emptyListFallbackRef: j,
      children: w
    })]
  }) : w
}