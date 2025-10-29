/** Chunk was on 88647 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk519938 = require("./519938.js"),
  Chunk928518 = require("./928518.js"),
  Chunk585483 = require("./585483.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk716600 = require("./716600.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js");
let g = (e, t) => {
  a.Z.wait(() => {
    (0, o.Cz)(e, t)
  })
};

function b(e) {
  let t, {
      embedId: n,
      className: a,
      style: o
    } = e,
    b = (0, l.e7)([s.Z], () => s.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
    _ = (0, f.Z)(),
    y = (0, l.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null == _ || (0, p.Z)((0, d.p)(_.location)) || y !== h.Ez.PANEL) {
    var C;
    t = null != (C = null == b ? true : b.window) ? C : window
  } else t = window;
  let v = i.useRef(null),
    O = i.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          g(n, null != (r = null == (t = v.current) ? true : t.getBoundingClientRect()) ? r : null), e = null
        }))
      }
    }, [n, t]);
  return i.useEffect(() => (t.addEventListener("resize", O), c.S.subscribe(m.CkL.REMEASURE_TARGET, O), () => {
    t.removeEventListener("resize", O), c.S.unsubscribe(m.CkL.REMEASURE_TARGET, O)
  }), [O, t]), i.useLayoutEffect(() => {
    let e = v.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    O();
    let r = new t.ResizeObserver(O);
    return r.observe(e), () => {
      r.disconnect(), g(n, null)
    }
  }, [n, O]), (0, r.jsx)("div", {
    ref: v,
    style: o,
    className: a
  })
}