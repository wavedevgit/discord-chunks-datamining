/** Chunk was on web.js **/
/** chunk id: 648339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk814656 = require("./814656.jsx"),
  Chunk94576 = require("./94576.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  let t = e.controls,
    n = {};
  return null != t && Object.entries(t).forEach(e => {
    let [t, r] = e;
    n[t] = r.defaultValue
  }), n
}

function f(e) {
  let {
    story: t,
    controlsLayout: n
  } = e, a = i.useMemo(() => d(t), [t]), [c, f] = i.useState(a);
  i.useEffect(() => {
    f(d(t))
  }, [t]);
  let p = () => {
      let e = t.component;
      return (0, r.jsx)(e, u({}, c))
    },
    _ = "hidden" !== n && null != t.controls;
  return (0, r.jsxs)("div", {
    className: o()(l.iW, {
      [l.vT]: "bottom" === n,
      [l.Ix]: "right" === n
    }),
    children: [(0, r.jsx)("div", {
      className: l.Ji,
      children: (0, r.jsx)("div", {
        className: l.Dw,
        children: p()
      })
    }), _ && null != t.controls && (0, r.jsx)("div", {
      className: o()(l.ne, {
        [l.WK]: "bottom" === n,
        [l.BT]: "right" === n
      }),
      children: (0, r.jsx)(s.i, {
        controls: t.controls,
        props: c,
        onPropsChange: f
      })
    })]
  })
}