/** Chunk was on 82124 **/
/** chunk id: 586694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => b,
  q: () => m
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk974674 = require("./974674.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk419061 = require("./419061.js"),
  Chunk268685 = require("./268685.js"),
  Chunk649674 = require("./649674.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    children: t,
    size: n,
    onClick: l,
    onMouseDown: o,
    onKeyDown: d,
    onContextMenu: f,
    onMouseEnter: h,
    onMouseLeave: g,
    className: m,
    ariaHidden: b,
    avatarDecoration: y,
    specs: O,
    cornerIconUrl: j,
    cornerIconOffsetX: x,
    cornerIconOffsetY: C,
    ariaLabel: E
  } = e, S = {
    width: (0, s.dcp)(n),
    height: (0, s.dcp)(n)
  }, _ = (0, i.useId)(), I = O.size * u.hs, P = null != y && (0, r.jsxs)("svg", {
    width: I,
    height: I,
    viewBox: "0 0 ".concat(I, " ").concat(I),
    className: p.avatarDecorationContainer,
    "aria-hidden": true,
    children: [(0, r.jsxs)("mask", {
      id: _,
      children: [(0, r.jsx)("rect", {
        x: 0,
        y: 0,
        width: I,
        height: I,
        fill: "white"
      }), null != j && function(e, t) {
        let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0,
          i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0,
          {
            height: l,
            width: a,
            x: o,
            y: s
          } = function(e, t, n, r) {
            let {
              height: i,
              width: l,
              x: a,
              y: o
            } = v(e, n, r), s = (t - e.size) / 2;
            return {
              width: l,
              height: i,
              x: a + s,
              y: o + s
            }
          }(e, t, n, i);
        return (0, r.jsx)("rect", {
          mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
          height: l,
          width: a,
          x: o,
          y: s,
          rx: e.stroke,
          fill: "black"
        })
      }(O, I, x, C)]
    }), (0, r.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: I,
      height: I,
      mask: "url(#".concat(_, ")"),
      children: (0, r.jsx)("img", {
        className: p.avatarDecoration,
        src: y,
        alt: " ",
        "aria-hidden": true
      })
    })]
  });
  return null != l || null != o ? (0, r.jsxs)(s.P3F, {
    className: a()(p.wrapper, p.pointer, m),
    style: S,
    onClick: l,
    onContextMenu: f,
    onMouseDown: o,
    onKeyDown: d,
    onMouseEnter: null != h ? h : true,
    onMouseLeave: null != g ? g : true,
    "aria-label": null != E ? E : true,
    "aria-hidden": b,
    children: [t, P]
  }) : (0, r.jsxs)("div", {
    className: a()(p.wrapper, m),
    style: S,
    onContextMenu: null != f ? f : true,
    onMouseEnter: null != h ? h : true,
    onMouseLeave: null != g ? g : true,
    role: "img",
    "aria-label": null != E ? E : true,
    "aria-hidden": b,
    children: [t, P]
  })
}

function m(e) {
  let {
    src: t,
    size: n,
    "aria-hidden": l = false,
    "aria-label": s,
    imageClassName: u,
    cornerIconUrl: m,
    cornerIconOffsetX: b = 0,
    cornerIconOffsetY: O = 0
  } = e, j = (0, d.UC)(n), x = j.size, C = (0, i.useId)();
  return (0, r.jsx)(g, h(f({}, e), {
    ariaLabel: s,
    ariaHidden: l,
    specs: j,
    children: (0, r.jsxs)("svg", {
      width: x + b,
      height: x + O,
      viewBox: "0 0 ".concat(x + b, " ").concat(x + O),
      className: a()(p.mask, p.svg),
      "aria-hidden": true,
      children: [(0, r.jsxs)("mask", {
        id: C,
        children: [(0, r.jsx)("circle", {
          cx: j.size / 2,
          cy: j.size / 2,
          r: j.size / 2,
          fill: "white"
        }), null != m && function(e, t, n) {
          let {
            height: i,
            width: l,
            x: a,
            y: o
          } = v(e, t, n);
          return (0, r.jsx)("rect", {
            mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
            height: i,
            width: l,
            x: a,
            y: o,
            fill: "black"
          })
        }(j, b, O)]
      }), (0, r.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: j.size,
        height: j.size,
        mask: "url(#".concat(C, ")"),
        children: (0, r.jsx)(o.qe, {
          src: t,
          className: u,
          isSpeaking: false
        })
      }), null != m && (0, r.jsx)("foreignObject", h(f({}, y(j, b, O)), {
        mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
        children: (0, r.jsx)("img", {
          src: m,
          height: 16,
          width: 16,
          alt: " "
        })
      }))]
    })
  }))
}

function b(e) {
  let {
    src: t,
    size: n,
    "aria-hidden": l = false,
    "aria-label": o,
    cornerIconUrl: s,
    cornerIconOffsetX: u = 0,
    cornerIconOffsetY: m = 0
  } = e, b = (0, i.useId)(), O = (0, i.useId)(), j = (0, d.UC)(n), x = j.size + u, C = j.size + m, E = v(j, u, m), S = y(j, u, m);
  return (0, r.jsx)(g, h(f({}, e), {
    ariaLabel: o,
    ariaHidden: l,
    specs: j,
    children: (0, r.jsxs)("svg", {
      width: x,
      height: C,
      viewBox: "0 0 ".concat(x, " ").concat(C),
      className: a()(p.mask, p.svg),
      "aria-hidden": true,
      children: [(0, r.jsxs)("mask", {
        id: b,
        children: [(0, r.jsx)("rect", {
          x: 0,
          y: 0,
          width: j.size,
          height: j.size,
          fill: "white",
          mask: "url(#".concat(c.QS.SQUIRCLE, ")")
        }), (0, r.jsx)("circle", {
          cx: E.x + E.width / 2,
          cy: E.y + E.height / 2,
          r: E.width / 2,
          fill: "black"
        })]
      }), (0, r.jsx)("mask", {
        id: O,
        children: (0, r.jsx)("circle", {
          cx: S.x + S.width / 2,
          cy: S.y + S.height / 2,
          r: S.width / 2,
          fill: "white"
        })
      }), (0, r.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: j.size,
        height: j.size,
        mask: "url(#".concat(b, ")"),
        children: (0, r.jsx)("div", {
          className: p.avatarStack,
          children: (0, r.jsx)("img", {
            src: null != t ? t : true,
            alt: " ",
            className: p.avatar,
            "aria-hidden": true
          })
        }, t)
      }), null != s && (0, r.jsx)("foreignObject", h(f({}, S), {
        mask: "url(#".concat(O, ")"),
        children: (0, r.jsx)("img", {
          src: s,
          height: 16,
          width: 16,
          alt: " "
        })
      }))]
    })
  }))
}

function y(e, t, n) {
  return {
    width: 16,
    height: 16,
    x: e.size - 16 - e.offset + t,
    y: e.size - 16 - e.offset + n
  }
}

function v(e, t, n) {
  let r = y(e, t, n),
    i = r.x - 2,
    l = r.y - 2;
  return {
    width: r.height + 4,
    height: r.width + 4,
    x: i,
    y: l
  }
}