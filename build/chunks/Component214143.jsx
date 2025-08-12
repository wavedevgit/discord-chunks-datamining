/** Chunk was on 1272 **/
/** chunk id: 214143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function h(e) {
  let {
    embedId: t,
    className: n,
    style: a
  } = e, o = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()), h = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != o && u.U.FOCUSED, window), f = i.useRef(null), g = i.useCallback(() => {
    null != f.current && p(t, f.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    g()
  });
  let m = i.useMemo(() => new ResizeObserver(() => {
    g()
  }), [g]);
  return i.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return m.observe(e), () => m.unobserve(e)
  }, [m]), i.useLayoutEffect(() => {
    let e = () => g(),
      t = () => g();
    return h.addEventListener("scroll", e, true), h.addEventListener("resize", t), () => {
      h.removeEventListener("scroll", e, true), h.removeEventListener("resize", t)
    }
  }, [g, h]), i.useLayoutEffect(() => (s.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, g), () => {
    s.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, g)
  }), [g]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: f,
    className: n,
    style: a
  })
}