/** Chunk was on 88569 **/
/** chunk id: 30434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk607070 = require("./607070.js"),
  Chunk996435 = require("./996435.js");

function s(e) {
  let {
    node: t,
    children: n
  } = e, s = l.useRef(null), c = l.useRef(null), u = l.useCallback(() => {
    null != c.current && (cancelAnimationFrame(c.current), c.current = null)
  }, []);
  return l.useEffect(() => {
    let e = a.Z.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, e => {
      u(), null != e && e.targetKey === t.key && null == e.targetAccordionKey && (c.current = requestAnimationFrame(() => {
        var t;
        null == (t = s.current) || t.scrollIntoView({
          behavior: e.animateScroll && !o.Z.useReducedMotion ? "smooth" : "auto",
          block: "start"
        }), a.Z.setState({
          navTransition: true
        })
      }))
    }, {
      equalityFn: i.X,
      fireImmediately: true
    });
    return () => {
      e(), u()
    }
  }, [u, t.key]), (0, r.jsx)("div", {
    ref: s,
    "data-debug-key": t.key,
    children: n
  })
}