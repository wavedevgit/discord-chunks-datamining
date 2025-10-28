/** Chunk was on 36182 **/
/** chunk id: 988587, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk255432 = require("./255432.jsx"),
  Chunk624315 = require("./624315.js");

function i(e) {
  let t = e.controls,
    n = {};
  return null != t && Object.entries(t).forEach(e => {
    let [t, r] = e;
    n[t] = r.defaultValue
  }), n
}

function c(e) {
  let {
    story: t
  } = e, n = l.useMemo(() => i(t), [t]), [c, u] = l.useState(n);
  return l.useEffect(() => {
    u(i(t))
  }, [t]), (0, r.jsxs)("div", {
    className: a.main,
    children: [(0, r.jsx)("div", {
      className: a.canvas,
      children: (0, r.jsx)("div", {
        className: a.storyContent,
        children: (() => {
          let e = t.component;
          return (0, r.jsx)(e, function(e) {
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
          }({}, c))
        })()
      })
    }), null != t.controls && (0, r.jsx)("div", {
      className: a.controls,
      children: (0, r.jsx)(o.a, {
        controls: t.controls,
        props: c,
        onPropsChange: u
      })
    })]
  })
}