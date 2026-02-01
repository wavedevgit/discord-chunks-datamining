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
  } = e, h = (0, l.bG)([c.A], () => c.A.getConnectedFrame()), g = (0, l.bG)([c.A], () => c.A.getFrameLayoutMode()), m = null != h && g === u.y.FOCUSED ? window : null != s ? s : window, f = i.useRef(null), A = i.useCallback(() => {
    null == f.current || p(t, f.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    A()
  });
  let _ = i.useMemo(() => new ResizeObserver(() => {
    A()
  }), [A]);
  return i.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return _.observe(e), () => _.unobserve(e)
  }, [_]), i.useLayoutEffect(() => {
    let e = () => A(),
      t = () => A();
    return m.addEventListener("scroll", e, true), m.addEventListener("resize", t), () => {
      m.removeEventListener("scroll", e, true), m.removeEventListener("resize", t)
    }
  }, [A, m]), i.useLayoutEffect(() => (o._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, A), () => {
    o._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, A)
  }), [A]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: f,
    className: n,
    style: a
  })
}