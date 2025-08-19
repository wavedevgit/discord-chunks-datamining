/** Chunk was on 66181 **/
/** chunk id: 954003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => r
}), require("./388685.js"), require("./467055.js");
var Chunk647438 = require("./647438.js");
let r = function(e) {
  let {
    scrollOffset: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    scrollOffset: 60
  }, n = (0, i.useCallback)(e => {
    let n = o.current[e];
    null != n && (n.style.scrollMarginTop = "".concat(t, "px"), n.scrollIntoView({
      behavior: "smooth",
      block: "start"
    }))
  }, [t]), [r, s] = (0, i.useState)(Object.fromEntries(e.map(e => [e, false]))), [a, l] = (0, i.useState)(e[0]);
  (0, i.useEffect)(() => {
    let e = Object.keys(r).filter(e => r[e]);
    e.length > 0 && l(e[0])
  }, [r]);
  let o = (0, i.useRef)({});
  return (0, i.useEffect)(() => {
    let e = new IntersectionObserver(e => {
      e.forEach(e => {
        s(t => {
          var n, i;
          return n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, t), i = i = {
            [e.target.id]: e.isIntersecting
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n
        })
      })
    });
    return Object.values(o.current).forEach(t => {
      null != t && e.observe(t)
    }), () => e.disconnect()
  }, []), {
    navBarSections: (0, i.useMemo)(() => e.reduce((e, t, i) => (e[t] = {
      id: t,
      ref: e => {
        o.current[t] = e, null != e && (e.id = t)
      },
      scrollToSection: () => n(t),
      order: i
    }, e), {}), [e, n]),
    activeSectionId: a,
    setActiveSectionId: l
  }
}