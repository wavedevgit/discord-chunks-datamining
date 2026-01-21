/** Chunk was on web.js **/
/** chunk id: 30434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk782425 = require("./782425.js"),
  Chunk907331 = require("./907331.js"),
  Chunk607070 = require("./607070.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk63224 = require("./63224.js");

function p(e) {
  let {
    node: t,
    children: n
  } = e, a = i.useRef(false), [p, _] = i.useState(false), h = (0, l.O)(e => {
    a.current = e, e && _(false)
  }, .5), m = i.useRef(null), g = i.useCallback(() => {
    null != m.current && (cancelAnimationFrame(m.current), m.current = null)
  }, []);
  return i.useEffect(() => {
    let e = d.Z.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, e => {
      if (g(), null == e || e.targetKey !== t.key || null != e.targetAccordionKey) return;
      let n = e.animateScroll && !c.Z.useReducedMotion;
      n || t.type === u.Jq.CATEGORY || _(true), m.current = requestAnimationFrame(() => {
        var t, r;
        let i = null != (r = e.scrollBlock) ? r : "start";
        null == (t = h.current) || t.scrollIntoView({
          behavior: n ? "smooth" : "auto",
          block: i
        }), d.Z.setState({
          navTransition: true
        }), a.current && _(false)
      })
    }, {
      equalityFn: s.X,
      fireImmediately: true
    });
    return () => {
      e(), g()
    }
  }, [g, t.key, t.type, h]), (0, r.jsx)("div", {
    ref: h,
    "data-debug-key": t.key,
    className: o()(f.container, p && f.flash),
    children: n
  })
}