/** Chunk was on 47218 **/
n.d(t, {
  Z: () => d
});
var l = n(73800),
  i = n(46973),
  r = n(846519),
  a = n(763520),
  o = n(798681),
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
  } = e, m = l.useRef(new r.V7), h = s === a.m.SELF_STREAM || s === a.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return l.useEffect(() => {
    if (!p || f || !o.w.isIncomingVideoEnabled()) return;
    let e = m.current;
    return e.start(u, () => {
      (0, c.K)(t, n, h, d)
    }), () => {
      e.stop()
    }
  }, [f, t, p, h, d, n]), {
    onReady: l.useCallback(() => {
      m.current.stop(), (0, c.w)(h, n)
    }, [n, h])
  }
}