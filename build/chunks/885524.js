/** Chunk was on 47218 **/
n.d(t, {
  Z: () => d
});
var l = n(73800),
  i = n(46973),
  r = n(846519),
  o = n(763520),
  a = n(798681),
  s = n(70956),
  c = n(878001);
let u = 20 * s.Z.Millis.SECOND;

function d(e) {
  let {
    streamId: t,
    userId: n,
    videoSpinnerContext: s,
    streamKey: d,
    loading: p,
    paused: f = !1
  } = e, m = l.useRef(new r.V7), v = s === o.m.SELF_STREAM || s === o.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
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