/** Chunk was on 17869 **/
/** chunk id: 139831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./321073.js");
var Chunk666717 = require("./666717.js"),
  Chunk202894 = require("./202894.js");

function i(e) {
  let {
    line: t,
    context: n,
    canvasWidth: i,
    canvasHeight: a,
    fallbackColor: s,
    outlineColorDark: o,
    outlineColorLight: c,
    linesDrawnAt: u,
    deadDrawables: d
  } = e;
  null == u.current[t.id] && (u.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let h = t.points.map(e => (0, l.RT)(e, i, a)),
    p = u.current[t.id],
    f = e => p + e.deltaTime + 1500 >= Date.now(),
    m = e => p + e.deltaTime <= Date.now() && f(e),
    g = h.find(m);
  if (null == g) {
    f(t.points[t.points.length - 1]) || d.push(t);
    return
  }
  let A = (e, t) => {
      let l = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(g.x, g.y);
      for (let e = 1; e < h.length; e++) {
        let t = h[e];
        m(t) && (n.lineTo(t.x, t.y), l = t)
      }
      return n.stroke(), l
    },
    {
      fillColor: b,
      outlineColor: _
    } = (0, l.yO)(t.userId, o, c, s),
    y = A(_, 9),
    E = null != y && m(y);
  E && (0, r.y)(n, y.x, y.y, _, 3), A(b, 6), E && (0, r.k)(n, y.x, y.y, t.userId)
}
require("./824217.js")