/** Chunk was on 37832 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk523238 = require("./523238.js"),
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
    b = (0, i.e7)([u.Z], () => u.Z.getWindow(E.KJ3.CHANNEL_CALL_POPOUT)),
    S = (0, p.Z)(),
    v = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
  if (null == S || (0, f.Z)((0, d.p)(S.location)) || v !== m.Ez.PANEL) {
    var h;
    t = null != (h = null == b ? true : b.window) ? h : window
  } else t = window;
  let O = l.useRef(null),
    y = l.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          g(n, null != (r = null == (t = O.current) ? true : t.getBoundingClientRect()) ? r : null), e = null
        }))
      }
    }, [n, t]);
  return l.useEffect(() => (t.addEventListener("resize", y), s.S.subscribe(E.CkL.REMEASURE_TARGET, y), () => {
    t.removeEventListener("resize", y), s.S.unsubscribe(E.CkL.REMEASURE_TARGET, y)
  }), [y, t]), l.useLayoutEffect(() => {
    let e = O.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    y();
    let r = new t.ResizeObserver(y);
    return r.observe(e), () => {
      r.disconnect(), g(n, null)
    }
  }, [n, y]), (0, r.jsx)("div", {
    ref: O,
    style: o,
    className: a
  })
}