/** Chunk was on 31748 **/
/** chunk id: 732637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk31728 = require("./31728.js"),
  Chunk869146 = require("./869146.js"),
  Chunk203982 = require("./203982.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk902439 = require("./902439.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js");
let _ = (e, t) => {
  a.h.wait(() => {
    (0, o.I_)(e, t)
  })
};

function h(e) {
  let t, {
      embedId: n,
      className: a,
      style: o
    } = e,
    h = (0, i.bG)([s.A], () => s.A.getWindow(m.MLl.CHANNEL_CALL_POPOUT)),
    y = (0, p.A)(),
    A = (0, i.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
  if (null == y || (0, f.A)((0, d.H)(y.location)) || A !== g.Gd.PANEL) {
    var b;
    t = null != (b = null == h ? true : h.window) ? b : window
  } else t = window;
  let E = l.useRef(null),
    v = l.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          _(n, null != (t = null == (r = E.current) ? true : r.getBoundingClientRect()) ? t : null), e = null
        }))
      }
    }, [n, t]);
  return l.useEffect(() => (t.addEventListener("resize", v), c._.subscribe(m.jej.REMEASURE_TARGET, v), () => {
    t.removeEventListener("resize", v), c._.unsubscribe(m.jej.REMEASURE_TARGET, v)
  }), [v, t]), l.useLayoutEffect(() => {
    let e = E.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    v();
    let r = new t.ResizeObserver(v);
    return r.observe(e), () => {
      r.disconnect(), _(n, null)
    }
  }, [n, v]), (0, r.jsx)("div", {
    ref: E,
    style: o,
    className: a
  })
}