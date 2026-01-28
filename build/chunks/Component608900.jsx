/** Chunk was on 78528 **/
/** chunk id: 608900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk529414 = require("./529414.js");

function p(e) {
  let {
    width: t = 24,
    height: n = 24,
    isBadged: i = false
  } = e, [s] = l.useState(() => (0, a.A)());
  return (0, r.jsxs)("svg", {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("defs", {
      children: (0, r.jsxs)("mask", {
        id: s,
        children: [(0, r.jsx)("rect", {
          fill: "white",
          width: "100%",
          height: "100%"
        }), i && (0, r.jsx)("circle", {
          cx: "20",
          cy: "19",
          r: "10",
          fill: "black"
        })]
      })
    }), (0, r.jsx)("g", {
      mask: "url(#".concat(s, ")"),
      children: (0, r.jsx)(o.cJi, {})
    })]
  })
}

function h(e) {
  let {
    className: t,
    numRequestToSpeak: n
  } = e, l = n > 0;
  return (0, r.jsxs)("div", {
    className: s()(d.v, t),
    children: [(0, r.jsx)(p, {
      isBadged: l
    }), l ? (0, r.jsx)(o.Text, {
      className: d.F,
      variant: "text-xs/semibold",
      children: n > 99 ? "99+" : n
    }) : null]
  })
}

function f(e) {
  let {
    toggleRequestToSpeakSidebar: t,
    showRequestToSpeakSidebar: n,
    className: i,
    numRequestToSpeak: s,
    onClick: a
  } = e, o = function(e, t) {
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
  }(e, ["toggleRequestToSpeakSidebar", "showRequestToSpeakSidebar", "className", "numRequestToSpeak", "onClick"]), d = l.useCallback(() => {
    null == a || a(), t()
  }, [a, t]);
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
    onClick: d,
    label: n ? u.intl.string(u.t.gKGz7A) : u.intl.string(u.t.ImQ4dW),
    className: i,
    iconComponent: () => (0, r.jsx)(h, {
      numRequestToSpeak: s,
      className: i
    })
  }, o))
}