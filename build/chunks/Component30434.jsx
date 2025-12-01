/** Chunk was on 88569 **/
/** chunk id: 30434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk607070 = require("./607070.js"),
  Chunk996435 = require("./996435.js"),
  Chunk135443 = require("./135443.js");

function c(e) {
  let {
    node: t,
    children: n
  } = e, c = l.useRef(null), u = l.useRef(null), d = l.useCallback(() => {
    null != u.current && (cancelAnimationFrame(u.current), u.current = null)
  }, []);
  return l.useEffect(() => {
    let e = a.Z.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, e => {
      d(), null != e && e.targetKey === t.key && null == e.targetAccordionKey && (u.current = requestAnimationFrame(() => {
        var t, n;
        let r = e.animateScroll && !o.Z.useReducedMotion,
          l = null != (n = e.scrollBlock) ? n : "nearest";
        null == (t = c.current) || t.scrollIntoView({
          behavior: r ? "smooth" : "auto",
          block: l
        }), a.Z.setState({
          navTransition: true
        })
      }))
    }, {
      equalityFn: i.X,
      fireImmediately: true
    });
    return () => {
      e(), d()
    }
  }, [d, t.key]), (0, r.jsx)("div", {
    ref: c,
    "data-debug-key": t.key,
    className: s.container,
    children: n
  })
}