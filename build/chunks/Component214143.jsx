/** Chunk was on 1272 **/
/** chunk id: 214143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk585483 = require("./585483.js"),
  Chunk591472 = require("./591472.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js");
let p = (e, t) => {
  a.Z.wait(() => {
    (0, s.Cz)(e, t)
  })
};

function f(e) {
  let {
    embedId: t,
    className: n,
    style: a
  } = e, s = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()), f = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != s && u.U.FOCUSED, window), h = i.useRef(null), g = i.useCallback(() => {
    null != h.current && p(t, h.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    g()
  });
  let m = i.useMemo(() => new ResizeObserver(() => {
    g()
  }), [g]);
  return i.useLayoutEffect(() => {
    let e = h.current;
    if (null != e) return m.observe(e), () => m.unobserve(e)
  }, [m]), i.useLayoutEffect(() => {
    let e = () => g(),
      t = () => g();
    return f.addEventListener("scroll", e, true), f.addEventListener("resize", t), () => {
      f.removeEventListener("scroll", e, true), f.removeEventListener("resize", t)
    }
  }, [g, f]), i.useLayoutEffect(() => (o.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, g), () => {
    o.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, g)
  }), [g]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: h,
    className: n,
    style: a
  })
}