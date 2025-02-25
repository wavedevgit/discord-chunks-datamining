/** Chunk was on 12416 **/
n.d(t, {
  Z: () => o
}), n(653041);
var r = n(88315),
  i = n(199766),
  l = n(813900);

function o(e) {
  let {
    line: t,
    context: n,
    canvasWidth: o,
    canvasHeight: a,
    fallbackColor: s,
    outlineColorDark: c,
    outlineColorLight: u,
    linesDrawnAt: d,
    deadDrawables: f
  } = e;
  null == d.current[t.id] && (d.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let m = t.points.map(e => (0, r.RR)(e, o, a)),
    p = d.current[t.id],
    h = e => p + e.deltaTime,
    v = e => h(e) + 1500 >= Date.now(),
    b = e => h(e) <= Date.now() && v(e),
    g = m.find(b);
  if (null == g) {
    v(t.points[t.points.length - 1]) || f.push(t);
    return
  }
  let y = (e, t) => {
      let r = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(g.x, g.y);
      for (let e = 1; e < m.length; e++) {
        let t = m[e];
        b(t) && (n.lineTo(t.x, t.y), r = t)
      }
      return n.stroke(), r
    },
    {
      fillColor: E,
      outlineColor: O
    } = (0, r.bg)(t.userId, c, u, s),
    S = y(O, 6 + l.q2),
    j = null != S && b(S);
  j && (0, i.I)(n, S.x, S.y, O, l.q2), y(E, 6), j && (0, i.T)(n, S.x, S.y, t.userId)
}