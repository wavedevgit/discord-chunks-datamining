/** Chunk was on 1272 **/
/** chunk id: 214143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk585483 = require("./585483.js"),
  Chunk591472 = require("./591472.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js");
let p = (e, t) => {
  a.Z.wait(() => {
    (0, o.Cz)(e, t)
  })
};

function f(e) {
  let {
    embedId: t,
    className: n,
    style: a,
    currentWindow: o
  } = e, f = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()), g = (0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), m = null != f && g === u.U.FOCUSED ? window : null != o ? o : window, h = i.useRef(null), b = i.useCallback(() => {
    null != h.current && p(t, h.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    b()
  });
  let _ = i.useMemo(() => new ResizeObserver(() => {
    b()
  }), [b]);
  return i.useLayoutEffect(() => {
    let e = h.current;
    if (null != e) return _.observe(e), () => _.unobserve(e)
  }, [_]), i.useLayoutEffect(() => {
    let e = () => b(),
      t = () => b();
    return m.addEventListener("scroll", e, true), m.addEventListener("resize", t), () => {
      m.removeEventListener("scroll", e, true), m.removeEventListener("resize", t)
    }
  }, [b, m]), i.useLayoutEffect(() => (s.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, b), () => {
    s.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, b)
  }), [b]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: h,
    className: n,
    style: a
  })
}