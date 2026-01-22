/** Chunk was on web.js **/
/** chunk id: 347606, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, a = i.useRef(false), [p, _] = i.useState(false), h = (0, l.K)(e => {
    a.current = e, e && _(false)
  }, .5), m = i.useRef(null), g = i.useCallback(() => {
    null != m.current && (cancelAnimationFrame(m.current), m.current = null)
  }, []);
  return i.useEffect(() => {
    let e = d.A.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, e => {
      if (g(), null == e || e.targetKey !== t.key || null != e.targetAccordionKey) return;
      let n = e.animateScroll && !c.A.useReducedMotion;
      n || t.type === u.Z6.CATEGORY || _(true), m.current = requestAnimationFrame(() => {
        var t, r;
        let i = null != (t = e.scrollBlock) ? t : "start";
        null == (r = h.current) || r.scrollIntoView({
          behavior: n ? "smooth" : "auto",
          block: i
        }), d.A.setState({
          navTransition: true
        }), a.current && _(false)
      })
    }, {
      equalityFn: o.x,
      fireImmediately: true
    });
    return () => {
      e(), g()
    }
  }, [g, t.key, t.type, h]), (0, r.jsx)("div", {
    ref: h,
    "data-debug-key": t.key,
    className: s()(f.k, p && f.j),
    children: n
  })
}