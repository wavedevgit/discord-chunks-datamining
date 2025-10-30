/** Chunk was on web.js **/
/** chunk id: 98763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk405283 = require("./405283.jsx"),
  Chunk894793 = require("./894793.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  let t = e.controls,
    n = {};
  return null != t && Object.entries(t).forEach(e => {
    let [t, r] = e;
    n[t] = r.defaultValue
  }), n
}

function u(e) {
  let {
    story: t
  } = e, n = i.useMemo(() => c(t), [t]), [s, u] = i.useState(n);
  i.useEffect(() => {
    u(c(t))
  }, [t]);
  let d = () => {
    let e = t.component;
    return (0, r.jsx)(e, l({}, s))
  };
  return (0, r.jsxs)("div", {
    className: o.main,
    children: [(0, r.jsx)("div", {
      className: o.canvas,
      children: (0, r.jsx)("div", {
        className: o.storyContent,
        children: d()
      })
    }), null != t.controls && (0, r.jsx)("div", {
      className: o.controls,
      children: (0, r.jsx)(a.a, {
        controls: t.controls,
        props: s,
        onPropsChange: u
      })
    })]
  })
}