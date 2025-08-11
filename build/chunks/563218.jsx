/** Chunk was on web.js **/
/** chunk id: 563218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    (0, s.Cz)(e, t)
  })
};

function g(e) {
  let t, {
      embedId: n,
      className: a,
      style: s
    } = e,
    g = (0, o.e7)([l.Z], () => l.Z.getWindow(h.KJ3.CHANNEL_CALL_POPOUT)),
    E = (0, _.Z)(),
    b = (0, o.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null == E || (0, f.Z)((0, d.p)(E.location)) || b !== p.Ez.PANEL) {
    var y;
    t = null != (y = null == g ? true : g.window) ? y : window
  } else t = window;
  let O = i.useRef(null),
    v = i.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          m(n, null != (r = null == (t = O.current) ? true : t.getBoundingClientRect()) ? r : null), e = null
        }))
      }
    }, [n, t]);
  return i.useEffect(() => (t.addEventListener("resize", v), c.S.subscribe(h.CkL.REMEASURE_TARGET, v), () => {
    t.removeEventListener("resize", v), c.S.unsubscribe(h.CkL.REMEASURE_TARGET, v)
  }), [v, t]), i.useLayoutEffect(() => {
    let e = O.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    v();
    let r = new t.ResizeObserver(v);
    return r.observe(e), () => {
      r.disconnect(), m(n, null)
    }
  }, [n, v]), <div ref={O} style={s} className={a} />
}