/** Chunk was on 78528 **/
/** chunk id: 346061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => m,
  h: () => b
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk97808 = require("./97808.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk398094 = require("./398094.js"),
  Chunk778712 = require("./778712.js"),
  Chunk920466 = require("./920466.js");

function h(e) {
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

function f(e, t) {
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
    onClick: i,
    onMouseDown: a,
    onKeyDown: d,
    onContextMenu: h,
    onMouseEnter: f,
    onMouseLeave: g,
    className: m,
    ariaHidden: b,
    avatarDecoration: A,
    specs: _,
    cornerIconUrl: O,
    cornerIconOffsetX: j,
    cornerIconOffsetY: v,
    ariaLabel: x
  } = e, E = {
    width: (0, o.FT9)(n),
    height: (0, o.FT9)(n)
  }, C = (0, l.useId)(), S = _.size * u.Xq, I = null != A && (0, r.jsxs)("svg", {
    width: S,
    height: S,
    viewBox: "0 0 ".concat(S, " ").concat(S),
    className: p.DX,
    "aria-hidden": true,
    children: [(0, r.jsxs)("mask", {
      id: C,
      children: [(0, r.jsx)("rect", {
        x: 0,
        y: 0,
        width: S,
        height: S,
        fill: "white"
      }), null != O && function(e, t) {
        let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0,
          l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0,
          {
            height: i,
            width: s,
            x: a,
            y: o
          } = function(e, t, n, r) {
            let {
              height: l,
              width: i,
              x: s,
              y: a
            } = y(e, n, r), o = (t - e.size) / 2;
            return {
              width: i,
              height: l,
              x: s + o,
              y: a + o
            }
          }(e, t, n, l);
        return (0, r.jsx)("rect", {
          mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
          height: i,
          width: s,
          x: a,
          y: o,
          rx: e.stroke,
          fill: "black"
        })
      }(_, S, j, v)]
    }), (0, r.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: S,
      height: S,
      mask: "url(#".concat(C, ")"),
      children: (0, r.jsx)("img", {
        className: p.M,
        src: A,
        alt: " ",
        "aria-hidden": true
      })
    })]
  });
  return null != i || null != a ? (0, r.jsxs)(o.DUT, {
    className: s()(p.iE, p.Wn, m),
    style: E,
    onClick: i,
    onContextMenu: h,
    onMouseDown: a,
    onKeyDown: d,
    onMouseEnter: null != f ? f : true,
    onMouseLeave: null != g ? g : true,
    "aria-label": null != x ? x : true,
    "aria-hidden": b,
    children: [t, I]
  }) : (0, r.jsxs)("div", {
    className: s()(p.iE, m),
    style: E,
    onContextMenu: null != h ? h : true,
    onMouseEnter: null != f ? f : true,
    onMouseLeave: null != g ? g : true,
    role: "img",
    "aria-label": null != x ? x : true,
    "aria-hidden": b,
    children: [t, I]
  })
}

function m(e) {
  let {
    src: t,
    size: n,
    "aria-hidden": i = false,
    "aria-label": o,
    imageClassName: u,
    cornerIconUrl: m,
    cornerIconOffsetX: b = 0,
    cornerIconOffsetY: _ = 0
  } = e, O = (0, d.Kj)(n), j = O.size, v = (0, l.useId)();
  return (0, r.jsx)(g, f(h({}, e), {
    ariaLabel: o,
    ariaHidden: i,
    specs: O,
    children: (0, r.jsxs)("svg", {
      width: j + b,
      height: j + _,
      viewBox: "0 0 ".concat(j + b, " ").concat(j + _),
      className: s()(p.dK, p.JW),
      "aria-hidden": true,
      children: [(0, r.jsxs)("mask", {
        id: v,
        children: [(0, r.jsx)("circle", {
          cx: O.size / 2,
          cy: O.size / 2,
          r: O.size / 2,
          fill: "white"
        }), null != m && function(e, t, n) {
          let {
            height: l,
            width: i,
            x: s,
            y: a
          } = y(e, t, n);
          return (0, r.jsx)("rect", {
            mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
            height: l,
            width: i,
            x: s,
            y: a,
            fill: "black"
          })
        }(O, b, _)]
      }), (0, r.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: O.size,
        height: O.size,
        mask: "url(#".concat(v, ")"),
        children: (0, r.jsx)(a.d9, {
          src: t,
          className: u,
          isSpeaking: false
        })
      }), null != m && (0, r.jsx)("foreignObject", f(h({}, A(O, b, _)), {
        mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
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
    "aria-hidden": i = false,
    "aria-label": a,
    cornerIconUrl: o,
    cornerIconOffsetX: u = 0,
    cornerIconOffsetY: m = 0
  } = e, b = (0, l.useId)(), _ = (0, l.useId)(), O = (0, d.Kj)(n), j = O.size + u, v = O.size + m, x = y(O, u, m), E = A(O, u, m);
  return (0, r.jsx)(g, f(h({}, e), {
    ariaLabel: a,
    ariaHidden: i,
    specs: O,
    children: (0, r.jsxs)("svg", {
      width: j,
      height: v,
      viewBox: "0 0 ".concat(j, " ").concat(v),
      className: s()(p.dK, p.JW),
      "aria-hidden": true,
      children: [(0, r.jsxs)("mask", {
        id: b,
        children: [(0, r.jsx)("rect", {
          x: 0,
          y: 0,
          width: O.size,
          height: O.size,
          fill: "white",
          mask: "url(#".concat(c.hW.SQUIRCLE, ")")
        }), (0, r.jsx)("circle", {
          cx: x.x + x.width / 2,
          cy: x.y + x.height / 2,
          r: x.width / 2,
          fill: "black"
        })]
      }), (0, r.jsx)("mask", {
        id: _,
        children: (0, r.jsx)("circle", {
          cx: E.x + E.width / 2,
          cy: E.y + E.height / 2,
          r: E.width / 2,
          fill: "white"
        })
      }), (0, r.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: O.size,
        height: O.size,
        mask: "url(#".concat(b, ")"),
        children: (0, r.jsx)("div", {
          className: p.yA,
          children: (0, r.jsx)("img", {
            src: null != t ? t : true,
            alt: " ",
            className: p.my,
            "aria-hidden": true
          })
        }, t)
      }), null != o && (0, r.jsx)("foreignObject", f(h({}, E), {
        mask: "url(#".concat(_, ")"),
        children: (0, r.jsx)("img", {
          src: o,
          height: 16,
          width: 16,
          alt: " "
        })
      }))]
    })
  }))
}

function A(e, t, n) {
  return {
    width: 16,
    height: 16,
    x: e.size - 16 - e.offset + t,
    y: e.size - 16 - e.offset + n
  }
}

function y(e, t, n) {
  let r = A(e, t, n),
    l = r.x - 2,
    i = r.y - 2;
  return {
    width: r.height + 4,
    height: r.width + 4,
    x: l,
    y: i
  }
}