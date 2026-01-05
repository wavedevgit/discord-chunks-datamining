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
    style: a
  } = e, o = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()), f = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != o && u.U.FOCUSED, window), g = i.useRef(null), m = i.useCallback(() => {
    null != g.current && p(t, g.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    m()
  });
  let h = i.useMemo(() => new ResizeObserver(() => {
    m()
  }), [m]);
  return i.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return h.observe(e), () => h.unobserve(e)
  }, [h]), i.useLayoutEffect(() => {
    let e = () => m(),
      t = () => m();
    return f.addEventListener("scroll", e, true), f.addEventListener("resize", t), () => {
      f.removeEventListener("scroll", e, true), f.removeEventListener("resize", t)
    }
  }, [m, f]), i.useLayoutEffect(() => (s.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, m), () => {
    s.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, m)
  }), [m]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: g,
    className: n,
    style: a
  })
}