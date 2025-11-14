/** Chunk was on 99904 **/
/** chunk id: 714167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk945909 = require("./945909.js"),
  Chunk481060 = require("./481060.js"),
  Chunk158235 = require("./158235.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    title: t,
    body: n
  } = e;
  return (0, a.jsxs)("div", {
    className: h.header,
    children: [(0, a.jsx)(p.Heading, {
      variant: "heading-md/semibold",
      className: h.title,
      children: t
    }), (0, a.jsx)("div", {
      className: h.headerBody,
      children: (0, a.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: n
      })
    })]
  })
}
let b = function(e) {
  var t, n, {
      title: i,
      body: p,
      graphic: b,
      size: v = "md",
      actions: j,
      gradientColor: _,
      onRequestClose: y,
      popoverRef: C,
      position: S,
      caretConfig: E,
      scrollBehavior: O
    } = e,
    T = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["title", "body", "graphic", "size", "actions", "gradientColor", "onRequestClose", "popoverRef", "position", "caretConfig", "scrollBehavior"]);
  let [N, P] = r.useState(null != S ? S : "top"), [I, w] = r.useState({
    position: (0, m.z)(N),
    align: null != (t = null == E ? true : E.align) ? t : "center",
    customOffset: null == E ? true : E.customOffset
  }), k = r.useCallback((e, t) => {
    null == y || y(t)
  }, [y]), R = r.useCallback(() => {
    null == y || y("user:explicit")
  }, [y]), A = r.useCallback(e => {
    P(e), w(t => g(x({}, t), {
      position: (0, m.z)(e)
    }))
  }, []);
  return (0, a.jsx)(s.m, g(x({}, T), {
    position: N,
    onRequestClose: k,
    gradientColor: _,
    onPositionChange: A,
    scrollBehavior: O,
    children: (0, a.jsxs)("div", {
      ref: C,
      "data-mana-component": "popover",
      children: [(0, a.jsx)(u.u, {
        onClick: R,
        variant: null != _ ? "color-mix" : true
      }), null != b && (0, a.jsx)("div", {
        className: l()(h.graphic, {
          [h["graphic--".concat(v)]]: null != v
        }),
        children: (0, a.jsx)(o.zsu, g(x({}, b), {
          aspectRatio: null != (n = b.aspectRatio) ? n : "sm" === v ? "2/1" : "16/9"
        }))
      }), (0, a.jsx)(f, {
        title: i,
        body: p
      }), null != j && j.length > 0 ? (0, a.jsx)(c.k, {
        actions: j
      }) : null, (0, a.jsx)(d.$, {
        caretConfig: I
      })]
    })
  }))
}