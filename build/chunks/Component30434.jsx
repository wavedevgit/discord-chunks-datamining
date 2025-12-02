/** Chunk was on web.js **/
/** chunk id: 30434, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, c = i.useRef(null), u = i.useRef(null), d = i.useCallback(() => {
    null != u.current && (cancelAnimationFrame(u.current), u.current = null)
  }, []);
  return i.useEffect(() => {
    let e = s.Z.subscribe(e => {
      let {
        navTransition: t
      } = e;
      return t
    }, e => {
      d(), null != e && e.targetKey === t.key && null == e.targetAccordionKey && (u.current = requestAnimationFrame(() => {
        var t, n;
        let r = e.animateScroll && !o.Z.useReducedMotion,
          i = null != (n = e.scrollBlock) ? n : "start";
        null == (t = c.current) || t.scrollIntoView({
          behavior: r ? "smooth" : "auto",
          block: i
        }), s.Z.setState({
          navTransition: true
        })
      }))
    }, {
      equalityFn: a.X,
      fireImmediately: true
    });
    return () => {
      e(), d()
    }
  }, [d, t.key]), (0, r.jsx)("div", {
    ref: c,
    "data-debug-key": t.key,
    className: l.container,
    children: n
  })
}