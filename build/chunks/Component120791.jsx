/** Chunk was on 51693 **/
/** chunk id: 120791, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function g(e) {
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
  return (0, r.jsx)(o.A, {
    games: t,
    renderGame: (e, t) => (0, r.jsx)(d.h, p({
      index: t,
      game: e,
      coverRef: l(e.applicationId),
      onRemoveGame: i
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
  } = e, y = (0, l.bG)([i.default], () => i.default.getId() === o), {
    getManageButtonForWidget: O
  } = (0, f.r)(), j = O(d), {
    expanded: h,
    setExpanded: x
  } = (0, c.B)(), v = h ? b : b.slice(0, 8), _ = b.length > 8, I = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g, (t = p({}, e), n = n = {
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
    }), t)), _ && (0, r.jsx)(u.A, {
      expanded: h,
      onClick: () => x(e => !e)
    })]
  });
  return y && !m ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.A, {
      widgetType: d,
      gameCount: b.length
    }), (0, r.jsx)(a.B, {
      emptyListFallbackRef: j,
      children: I
    })]
  }) : I
}