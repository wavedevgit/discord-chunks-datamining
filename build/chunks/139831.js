/** Chunk was on 31748 **/
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
    fallbackColor: o,
    outlineColorDark: s,
    outlineColorLight: c,
    linesDrawnAt: u,
    deadDrawables: d
  } = e;
  null == u.current[t.id] && (u.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let f = t.points.map(e => (0, r.RT)(e, i, a)),
    p = u.current[t.id],
    g = e => p + e.deltaTime + 1500 >= Date.now(),
    m = e => p + e.deltaTime <= Date.now() && g(e),
    _ = f.find(m);
  if (null == _) {
    g(t.points[t.points.length - 1]) || d.push(t);
    return
  }
  let h = (e, t) => {
      let r = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(_.x, _.y);
      for (let e = 1; e < f.length; e++) {
        let t = f[e];
        m(t) && (n.lineTo(t.x, t.y), r = t)
      }
      return n.stroke(), r
    },
    {
      fillColor: y,
      outlineColor: A
    } = (0, r.yO)(t.userId, s, c, o),
    b = h(A, 9),
    E = null != b && m(b);
  E && (0, l.y)(n, b.x, b.y, A, 3), h(y, 6), E && (0, l.k)(n, b.x, b.y, t.userId)
}
require("./824217.js")