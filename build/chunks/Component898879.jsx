/** Chunk was on 21738 **/
/** chunk id: 898879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk31728 = require("./31728.js"),
  Chunk203982 = require("./203982.js"),
  Chunk91242 = require("./91242.js"),
  Chunk165610 = require("./165610.js"),
  Chunk652215 = require("./652215.js");
let p = (e, t) => {
  a.h.wait(() => {
    (0, s.I_)(e, t)
  })
};

function f(e) {
  let {
    embedId: t,
    className: n,
    style: a,
    currentWindow: s
  } = e, f = (0, l.bG)([c.A], () => c.A.getConnectedFrame()), h = (0, l.bG)([c.A], () => c.A.getFrameLayoutMode()), A = null != f && h === u.y.FOCUSED ? window : null != s ? s : window, g = i.useRef(null), m = i.useCallback(() => {
    null == g.current || p(t, g.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    m()
  });
  let b = i.useMemo(() => new ResizeObserver(() => {
    m()
  }), [m]);
  return i.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return b.observe(e), () => b.unobserve(e)
  }, [b]), i.useLayoutEffect(() => {
    let e = () => m(),
      t = () => m();
    return A.addEventListener("scroll", e, true), A.addEventListener("resize", t), () => {
      A.removeEventListener("scroll", e, true), A.removeEventListener("resize", t)
    }
  }, [m, A]), i.useLayoutEffect(() => (o._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, m), () => {
    o._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, m)
  }), [m]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: g,
    className: n,
    style: a
  })
}