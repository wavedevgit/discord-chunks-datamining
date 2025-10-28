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
  } = e, s = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()), f = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != s && u.U.FOCUSED, window), m = i.useRef(null), h = i.useCallback(() => {
    null != m.current && p(t, m.current.getBoundingClientRect())
  }, [t]);
  i.useLayoutEffect(() => {
    h()
  });
  let g = i.useMemo(() => new ResizeObserver(() => {
    h()
  }), [h]);
  return i.useLayoutEffect(() => {
    let e = m.current;
    if (null != e) return g.observe(e), () => g.unobserve(e)
  }, [g]), i.useLayoutEffect(() => {
    let e = () => h(),
      t = () => h();
    return f.addEventListener("scroll", e, true), f.addEventListener("resize", t), () => {
      f.removeEventListener("scroll", e, true), f.removeEventListener("resize", t)
    }
  }, [h, f]), i.useLayoutEffect(() => (o.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, h), () => {
    o.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, h)
  }), [h]), i.useLayoutEffect(() => () => {
    p(t, null)
  }, [t]), (0, r.jsx)("div", {
    ref: m,
    className: n,
    style: a
  })
}