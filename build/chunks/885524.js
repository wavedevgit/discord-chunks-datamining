/** Chunk was on 55196 **/
t.d(l, {
  Z: () => d
});
var n = t(192379),
  i = t(46973),
  s = t(846519),
  r = t(763520),
  a = t(798681),
  o = t(70956),
  c = t(878001);
let u = 20 * o.Z.Millis.SECOND;

function d(e) {
  let {
    streamId: l,
    userId: t,
    videoSpinnerContext: o,
    streamKey: d,
    loading: m,
    paused: p = !1
  } = e, f = n.useRef(new s.V7), v = o === r.m.SELF_STREAM || o === r.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return n.useEffect(() => {
    if (!m || p || !a.w.isIncomingVideoEnabled()) return;
    let e = f.current;
    return e.start(u, () => {
      (0, c.K)(l, t, v, d)
    }), () => {
      e.stop()
    }
  }, [p, l, m, v, d, t]), {
    onReady: n.useCallback(() => {
      f.current.stop(), (0, c.w)(v, t)
    }, [t, v])
  }
}