/** Chunk was on 86642 **/
/** chunk id: 400321, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./539854.js");
var Chunk88315 = require("./88315.js"),
  Chunk199766 = require("./199766.js"),
  Chunk813900 = require("./813900.js");

function a(e) {
  let {
    line: t,
    context: n,
    canvasWidth: a,
    canvasHeight: o,
    fallbackColor: s,
    outlineColorDark: c,
    outlineColorLight: u,
    linesDrawnAt: d,
    deadDrawables: p
  } = e;
  null == d.current[t.id] && (d.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let f = t.points.map(e => (0, i.RR)(e, a, o)),
    h = d.current[t.id],
    m = e => h + e.deltaTime + 1500 >= Date.now(),
    g = e => h + e.deltaTime <= Date.now() && m(e),
    b = f.find(g);
  if (null == b) {
    m(t.points[t.points.length - 1]) || p.push(t);
    return
  }
  let y = (e, t) => {
      let i = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(b.x, b.y);
      for (let e = 1; e < f.length; e++) {
        let t = f[e];
        g(t) && (n.lineTo(t.x, t.y), i = t)
      }
      return n.stroke(), i
    },
    {
      fillColor: C,
      outlineColor: _
    } = (0, i.bg)(t.userId, c, u, s),
    v = y(_, 6 + l.q2),
    x = null != v && g(v);
  x && (0, r.I)(n, v.x, v.y, _, l.q2), y(C, 6), x && (0, r.T)(n, v.x, v.y, t.userId)
}