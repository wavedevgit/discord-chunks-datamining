/** Chunk was on 69813 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let m = (e, t) => {
  a.Z.wait(() => {
    (0, o.Cz)(e, t)
  })
};

function h(e) {
  let t, {
      embedId: n,
      className: a,
      style: o
    } = e,
    h = (0, i.e7)([c.Z], () => c.Z.getWindow(b.KJ3.CHANNEL_CALL_POPOUT)),
    E = (0, p.Z)(),
    _ = (0, i.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null == E || (0, f.Z)((0, d.p)(E.location)) || _ !== g.Ez.PANEL) {
    var v;
    t = null != (v = null == h ? true : h.window) ? v : window
  } else t = window;
  let y = l.useRef(null),
    O = l.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          m(n, null != (r = null == (t = y.current) ? true : t.getBoundingClientRect()) ? r : null), e = null
        }))
      }
    }, [n, t]);
  return l.useEffect(() => (t.addEventListener("resize", O), s.S.subscribe(b.CkL.REMEASURE_TARGET, O), () => {
    t.removeEventListener("resize", O), s.S.unsubscribe(b.CkL.REMEASURE_TARGET, O)
  }), [O, t]), l.useLayoutEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    O();
    let r = new t.ResizeObserver(O);
    return r.observe(e), () => {
      r.disconnect(), m(n, null)
    }
  }, [n, O]), (0, r.jsx)("div", {
    ref: y,
    style: o,
    className: a
  })
}