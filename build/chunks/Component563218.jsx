/** Chunk was on 17360 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  let t, {
      embedId: n,
      className: a,
      style: o
    } = e,
    v = (0, l.e7)([c.Z], () => c.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
    b = (0, p.Z)(),
    E = (0, l.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null == b || (0, f.Z)((0, d.p)(b.location)) || E !== _.Ez.PANEL) {
    var h;
    t = null != (h = null == v ? true : v.window) ? h : window
  } else t = window;
  let S = i.useRef(null),
    y = i.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          g(n, null != (r = null == (t = S.current) ? true : t.getBoundingClientRect()) ? r : null), e = null
        }))
      }
    }, [n, t]);
  return i.useEffect(() => (t.addEventListener("resize", y), s.S.subscribe(m.CkL.REMEASURE_TARGET, y), () => {
    t.removeEventListener("resize", y), s.S.unsubscribe(m.CkL.REMEASURE_TARGET, y)
  }), [y, t]), i.useLayoutEffect(() => {
    let e = S.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    y();
    let r = new t.ResizeObserver(y);
    return r.observe(e), () => {
      r.disconnect(), g(n, null)
    }
  }, [n, y]), (0, r.jsx)("div", {
    ref: S,
    style: o,
    className: a
  })
}