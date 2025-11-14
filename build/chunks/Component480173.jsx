/** Chunk was on 99904 **/
/** chunk id: 480173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk7093 = require("./7093.js"),
  Chunk817466 = require("./817466.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119290 = require("./119290.js");
let m = Chunk647438.lazy(() => require.e("77898").then(require.bind(require, 739859)));

function p() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    t = (0, Chunk7093.Z)(e => e.shouldRenderTenureLevelUp),
    n = (0, Chunk817466.Z)();
  return module || !exports || null == require ? null : (0, Chunk951288.jsx)(h, {
    levelUpData: require
  })
}

function h(e) {
  let {
    levelUpData: t
  } = e, n = r.useRef(null), i = r.useCallback(() => {
    s.Z.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return r.useEffect(() => i, [i]), (0, a.jsx)(l.EqS, {
    containerRef: n,
    children: (0, a.jsxs)("div", {
      className: u.wrapper,
      children: [(0, a.jsx)("div", {
        className: u.closeButton,
        children: (0, a.jsx)(l.aML, {
          text: d.intl.string(d.t.cpT0Cq),
          children: e => {
            var t, n;
            return (0, a.jsx)(l.hU, (t = function(e) {
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
            }({}, e), n = n = {
              icon: l.Dio,
              variant: "secondary",
              size: "sm",
              onClick: i,
              "aria-label": d.intl.string(d.t.cpT0Cq)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n.push.apply(n, a)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })
      }), (0, a.jsx)(r.Suspense, {
        fallback: null,
        children: (0, a.jsx)(m, {
          levelUpData: t
        })
      })]
    })
  })
}