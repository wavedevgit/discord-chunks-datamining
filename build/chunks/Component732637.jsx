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
let m = (e, t) => {
  a.h.wait(() => {
    (0, s.I_)(e, t)
  })
};

function h(e) {
  let t, {
      embedId: n,
      className: a,
      style: s
    } = e,
    h = (0, i.bG)([o.A], () => o.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
    A = (0, p.A)(),
    y = (0, i.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
  if (null == A || (0, f.A)((0, d.H)(A.location)) || y !== b.Gd.PANEL) {
    var _;
    t = null != (_ = null == h ? true : h.window) ? _ : window
  } else t = window;
  let E = r.useRef(null),
    v = r.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, l;
          m(n, null != (t = null == (l = E.current) ? true : l.getBoundingClientRect()) ? t : null), e = null
        }))
      }
    }, [n, t]);
  return r.useEffect(() => (t.addEventListener("resize", v), c._.subscribe(g.jej.REMEASURE_TARGET, v), () => {
    t.removeEventListener("resize", v), c._.unsubscribe(g.jej.REMEASURE_TARGET, v)
  }), [v, t]), r.useLayoutEffect(() => {
    let e = E.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    v();
    let l = new t.ResizeObserver(v);
    return l.observe(e), () => {
      l.disconnect(), m(n, null)
    }
  }, [n, v]), (0, l.jsx)("div", {
    ref: E,
    style: s,
    className: a
  })
}