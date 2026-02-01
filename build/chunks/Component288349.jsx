/** Chunk was on 21738 **/
/** chunk id: 288349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk366999 = require("./366999.js"),
  Chunk160761 = require("./160761.js"),
  Chunk953727 = require("./953727.js"),
  Chunk795269 = require("./795269.jsx"),
  Chunk248201 = require("./248201.js");

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
let h = "premium_tier_gradient",
  g = "smaller_sparkle_gradient";

function m(e) {
  var t, n;
  let {
    width: i = 14,
    height: l = 15,
    color: a = "white",
    foreground: s
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["width", "height", "color", "foreground"]);
  return (0, r.jsxs)("svg", (t = p({}, (0, c.A)(p({}, o))), n = n = {
    preserveAspectRatio: "none",
    width: i,
    height: l,
    viewBox: "0 0 14 15",
    className: s,
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, r.jsx)("defs", {
      children: (0, r.jsxs)("linearGradient", {
        id: h,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        children: [(0, r.jsx)("stop", {
          offset: "0%",
          stopColor: "#8547C6"
        }), (0, r.jsx)("stop", {
          offset: "50%",
          stopColor: "#B845C1"
        }), (0, r.jsx)("stop", {
          offset: "100%",
          stopColor: "#AB5D8A"
        })]
      })
    }), (0, r.jsxs)("linearGradient", {
      id: g,
      x1: "-4.95474",
      y1: "5.44067",
      x2: "11.2384",
      y2: "8.58386",
      gradientUnits: "userSpaceOnUse",
      children: [(0, r.jsx)("stop", {
        stopColor: "#8547C6"
      }), (0, r.jsx)("stop", {
        offset: "0.52899",
        stopColor: "#B845C1"
      }), (0, r.jsx)("stop", {
        offset: "1",
        stopColor: "#AB5D8A"
      })]
    }), (0, r.jsx)("path", {
      d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
      fill: a
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function f(e) {
  let {
    className: t,
    startsAt: n,
    endsAt: i,
    messageStyle: c,
    upperCase: p,
    showSparkles: f
  } = e, [A] = (0, o.Bo)(a.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL, {
    showAfterTimestamp: n.valueOf(),
    cooldownDurationMs: 0
  }), _ = (0, s.Ay)(i, c);
  return "" === _ ? null : (p && (_ = _.toUpperCase()), (0, r.jsxs)("div", {
    className: l()(t, d.Iv),
    children: [f ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m, {
        foreground: d.QX,
        color: "url(#".concat(g, ")")
      }), (0, r.jsx)(m, {
        foreground: d.J0,
        color: "url(#".concat(h, ")")
      })]
    }) : null, (0, r.jsx)(u.R, {
      text: _,
      colorOptions: A === a.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL ? u.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL : u.at.PREMIUM_TIER_2_GREY_FILL
    })]
  }))
}