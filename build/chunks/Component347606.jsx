/** Chunk was on 9207 **/
/** chunk id: 347606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk775602 = require("./775602.js"),
  Chunk963935 = require("./963935.js"),
  Chunk894858 = require("./894858.js"),
  Chunk397274 = require("./397274.js"),
  Chunk270952 = require("./270952.js");

function p(e) {
  let {
    node: t,
    children: n
  } = e, l = i.useRef(false), [p, m] = i.useState(false), g = (0, a.K)(e => {
    l.current = e, e && m(false)
  }, .5), A = i.useCallback(async e => {
    null == g.current || null == e || e.targetKey !== t.key || null != e.targetAccordionKey || (e.animateScroll && !o.A.useReducedMotion || t.type === c.Z6.CATEGORY || m(true), l.current && m(false), d.A.setState({
      disableSidebarCategoryAutoSelect: true
    }), u.A.clearInitialScrollListener(), await u.A.scrollIntoView(g.current, {
      animate: e.animateScroll,
      block: e.scrollBlock
    }), u.A.setInitialScrollListener(() => {
      d.A.setState({
        disableSidebarCategoryAutoSelect: false
      })
    }), d.A.setState({
      navTransition: true
    }))
  }, [t.key, t.type, g]);
  return i.useEffect(() => {
    let e = d.A.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, A, {
      equalityFn: (e, t) => e === t,
      fireImmediately: true
    });
    return () => {
      e(), u.A.clearInitialScrollListener()
    }
  }, [A]), (0, r.jsx)("div", {
    ref: g,
    "data-debug-key": t.key,
    className: s()(_.k, p && _.j),
    children: n
  })
}