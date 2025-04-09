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
    paused: m = !1
  } = e, p = n.useRef(new s.V7), f = o === r.m.SELF_STREAM || o === r.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return n.useEffect(() => {
    if (m || !a.w.isIncomingVideoEnabled()) return;
    let e = p.current;
    return e.start(u, () => {
      (0, c.K)(l, t, f, d)
    }), () => {
      e.stop()
    }
  }, [m, l, f, d, t]), {
    onReady: n.useCallback(() => {
      p.current.stop(), (0, c.w)(f, t)
    }, [t, f])
  }
}