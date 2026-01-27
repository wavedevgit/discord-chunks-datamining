/** Chunk was on 60667 **/
/** chunk id: 347606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk172218 = require("./172218.js"),
  Chunk775602 = require("./775602.js"),
  Chunk963935 = require("./963935.js"),
  Chunk894858 = require("./894858.js"),
  Chunk270952 = require("./270952.js");

function p(e) {
  let {
    node: t,
    children: n
  } = e, l = i.useRef(false), [p, m] = i.useState(false), g = (0, o.K)(e => {
    l.current = e, e && m(false)
  }, .5), A = i.useRef(null), f = i.useCallback(() => {
    null != A.current && (cancelAnimationFrame(A.current), A.current = null)
  }, []);
  return i.useEffect(() => {
    let e = u.A.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, e => {
      if (f(), null == e || e.targetKey !== t.key || null != e.targetAccordionKey) return;
      let n = e.animateScroll && !c.A.useReducedMotion;
      n || t.type === d.Z6.CATEGORY || m(true), A.current = requestAnimationFrame(() => {
        var t, r;
        let i = null != (t = e.scrollBlock) ? t : "start";
        null == (r = g.current) || r.scrollIntoView({
          behavior: n ? "smooth" : "auto",
          block: i
        }), u.A.setState({
          navTransition: true
        }), l.current && m(false)
      })
    }, {
      equalityFn: a.x,
      fireImmediately: true
    });
    return () => {
      e(), f()
    }
  }, [f, t.key, t.type, g]), (0, r.jsx)("div", {
    ref: g,
    "data-debug-key": t.key,
    className: s()(_.k, p && _.j),
    children: n
  })
}