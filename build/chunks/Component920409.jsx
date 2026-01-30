/** Chunk was on 49559 **/
/** chunk id: 920409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk155718 = require("./155718.js"),
  Chunk594808 = require("./594808.jsx"),
  Chunk207963 = require("./207963.jsx"),
  Chunk953756 = require("./953756.jsx"),
  Chunk292366 = require("./292366.jsx"),
  Chunk324877 = require("./324877.jsx"),
  Chunk996017 = require("./996017.js");

function m(e) {
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

function f(e) {
  let {
    components: t,
    accessory: n,
    renderComponents: l
  } = e, {
    message: f
  } = (0, s.jc)(), [O, b] = (0, c.zn)(), y = (0, c.Hq)(b), h = n.type === i.I5.BUTTON;
  return (0, r.jsxs)("div", {
    className: p.uW,
    ref: O,
    children: [(0, r.jsxs)("div", {
      className: p.Y_,
      children: [(0, r.jsx)("div", {
        className: a()(p.zt, {
          [p.uf]: h
        }),
        children: l(t)
      }), (0, r.jsx)("div", {
        className: a()(p.LP, {
          [p.HQ]: y
        }),
        children: function(e) {
          switch (e.type) {
            case i.I5.BUTTON:
              return (0, r.jsx)(u.A, m({}, e));
            case i.I5.THUMBNAIL:
              return (0, r.jsx)(d.A, m({}, e))
          }
        }(n)
      })]
    }), null != f ? (0, r.jsx)(o.Ay, {
      message: f,
      component: e
    }) : null]
  })
}