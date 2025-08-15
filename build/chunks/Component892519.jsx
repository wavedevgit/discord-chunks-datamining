/** Chunk was on 30243 **/
/** chunk id: 892519, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk987106 = require("./987106.jsx"),
  Chunk568248 = require("./568248.jsx"),
  Chunk695796 = require("./695796.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function b(e) {
  let {
    components: t,
    accessory: r,
    renderComponents: l
  } = e, {
    message: b
  } = (0, c.CJ)(), [m, O] = (0, s.e4)(), y = (0, s.$Y)(O), j = r.type === o.re.BUTTON;
  return (0, n.jsxs)("div", {
    className: p.section,
    ref: m,
    children: [(0, n.jsxs)("div", {
      className: p.children,
      children: [(0, n.jsx)("div", {
        className: i()(p.textChildren, {
          [p.verticallyCenterAlign]: j
        }),
        children: l(t)
      }), (0, n.jsx)("div", {
        className: i()(p.accessory, {
          [p.restrictWidth]: y
        }),
        children: function(e) {
          switch (e.type) {
            case o.re.BUTTON:
              return (0, n.jsx)(u.Z, f({}, e));
            case o.re.THUMBNAIL:
              return (0, n.jsx)(d.Z, f({}, e))
          }
        }(r)
      })]
    }), null != b ? (0, n.jsx)(a.ZP, {
      message: b,
      component: e
    }) : null]
  })
}