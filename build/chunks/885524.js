/** Chunk was on 55196 **/
n.d(t, {
  Z: () => d
});
var l = n(73800),
  i = n(46973),
  r = n(846519),
  s = n(763520),
  a = n(798681),
  o = n(70956),
  c = n(878001);
let u = 20 * o.Z.Millis.SECOND;

function d(e) {
  let {
    streamId: t,
    userId: n,
    videoSpinnerContext: o,
    streamKey: d,
    loading: p,
    paused: f = !1
  } = e, m = l.useRef(new r.V7), v = o === s.m.SELF_STREAM || o === s.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return l.useEffect(() => {
    if (!p || f || !a.w.isIncomingVideoEnabled()) return;
    let e = m.current;
    return e.start(u, () => {
      (0, c.K)(t, n, v, d)
    }), () => {
      e.stop()
    }
  }, [f, t, p, v, d, n]), {
    onReady: l.useCallback(() => {
      m.current.stop(), (0, c.w)(v, n)
    }, [n, v])
  }
}