/** Chunk was on 21738 **/
/** chunk id: 898879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    embedId: t,
    className: n,
    style: a,
    currentWindow: s
  } = e, h = (0, l.bG)([c.A], () => c.A.getConnectedFrame()), f = (0, l.bG)([c.A], () => c.A.getFrameLayoutMode()), g = null != h && f === u.y.FOCUSED ? window : null != s ? s : window, m = i.useRef(null), A = i.useCallback(() => {
    null == m.current || p(t, m.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    A()
  });
  let _ = i.useMemo(() => new ResizeObserver(() => {
    A()
  }), [A]);
  return i.useLayoutEffect(() => {
    let e = m.current;
    if (null != e) return _.observe(e), () => _.unobserve(e)
  }, [_]), i.useLayoutEffect(() => {
    let e = () => A(),
      t = () => A();
    return g.addEventListener("scroll", e, true), g.addEventListener("resize", t), () => {
      g.removeEventListener("scroll", e, true), g.removeEventListener("resize", t)
    }
  }, [A, g]), i.useLayoutEffect(() => (o._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, A), () => {
    o._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, A)
  }), [A]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: m,
    className: n,
    style: a
  })
}