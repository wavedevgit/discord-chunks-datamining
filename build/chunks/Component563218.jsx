/** Chunk was on 11010 **/
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
let b = (e, t) => {
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
    h = (0, l.e7)([c.Z], () => c.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
    v = (0, p.Z)(),
    E = (0, l.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null == v || (0, f.Z)((0, d.p)(v.location)) || E !== g.Ez.PANEL) {
    var y;
    t = null != (y = null == h ? true : h.window) ? y : window
  } else t = window;
  let _ = i.useRef(null),
    O = i.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          b(n, null != (r = null == (t = _.current) ? true : t.getBoundingClientRect()) ? r : null), e = null
        }))
      }
    }, [n, t]);
  return i.useEffect(() => (t.addEventListener("resize", O), s.S.subscribe(m.CkL.REMEASURE_TARGET, O), () => {
    t.removeEventListener("resize", O), s.S.unsubscribe(m.CkL.REMEASURE_TARGET, O)
  }), [O, t]), i.useLayoutEffect(() => {
    let e = _.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    O();
    let r = new t.ResizeObserver(O);
    return r.observe(e), () => {
      r.disconnect(), b(n, null)
    }
  }, [n, O]), (0, r.jsx)("div", {
    ref: _,
    style: o,
    className: a
  })
}