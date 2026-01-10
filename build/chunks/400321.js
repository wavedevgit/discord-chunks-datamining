/** Chunk was on 69813 **/
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
    fallbackColor: c,
    outlineColorDark: s,
    outlineColorLight: u,
    linesDrawnAt: d,
    deadDrawables: f
  } = e;
  null == d.current[t.id] && (d.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let p = t.points.map(e => (0, r.RR)(e, a, o)),
    g = d.current[t.id],
    b = e => g + e.deltaTime + 1500 >= Date.now(),
    m = e => g + e.deltaTime <= Date.now() && b(e),
    h = p.find(m);
  if (null == h) {
    b(t.points[t.points.length - 1]) || f.push(t);
    return
  }
  let E = (e, t) => {
      let r = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(h.x, h.y);
      for (let e = 1; e < p.length; e++) {
        let t = p[e];
        m(t) && (n.lineTo(t.x, t.y), r = t)
      }
      return n.stroke(), r
    },
    {
      fillColor: v,
      outlineColor: _
    } = (0, r.bg)(t.userId, s, u, c),
    y = E(_, 6 + i.q2),
    O = null != y && m(y);
  O && (0, l.I)(n, y.x, y.y, _, i.q2), E(v, 6), O && (0, l.T)(n, y.x, y.y, t.userId)
}