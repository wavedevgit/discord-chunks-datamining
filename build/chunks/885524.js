/** Chunk was on 82510 **/
n.d(t, {
  Z: () => d
});
var r = n(73800),
  l = n(46973),
  i = n(846519),
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
    loading: f,
    paused: p = !1
  } = e, m = r.useRef(new i.V7), h = s === a.m.SELF_STREAM || s === a.m.REMOTE_STREAM ? l.Yn.STREAM : l.Yn.DEFAULT;
  return r.useEffect(() => {
    if (!f || p || !o.w.isIncomingVideoEnabled()) return;
    let e = m.current;
    return e.start(u, () => {
      (0, c.K)(t, n, h, d)
    }), () => {
      e.stop()
    }
  }, [p, t, f, h, d, n]), {
    onReady: r.useCallback(() => {
      m.current.stop(), (0, c.w)(h, n)
    }, [n, h])
  }
}