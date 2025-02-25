/** Chunk was on 12416 **/
n.d(t, {
  Z: () => b
}), n(653041);
var r = n(192379),
  i = n(846519),
  l = n(692547),
  a = n(481060),
  o = n(220082),
  s = n(979651),
  c = n(125268),
  u = n(673125),
  d = n(984063),
  f = n(88315),
  m = n(262433),
  p = n(400321),
  h = n(813900);
let v = 1e3 / 60;

function b(e, t, n, b) {
  let g = (0, a.dQu)(l.Z.unsafe_rawColors.BRAND_500).hex(),
    y = (0, a.dQu)(l.Z.unsafe_rawColors.BLACK_500).hex(),
    E = (0, a.dQu)(l.Z.unsafe_rawColors.WHITE_500).hex(),
    O = r.useRef({}),
    S = r.useRef(new i.Xp),
    j = r.useCallback(t => {
      let n = u.Z.getDrawables(t);
      (0, f.UN)(e),
      function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: r,
          linesDrawnAt: i,
          streamerId: l,
          channelId: a,
          outlineColorDark: o,
          outlineColorLight: u
        } = e;
        if (0 === n.length) return;
        let f = t.current;
        if (null == f) return;
        let h = f.getContext("2d");
        if (null == h) return;
        let {
          width: v,
          height: b
        } = f.getBoundingClientRect(), g = [];
        n.forEach(e => {
          if (null == s.Z.getVoiceStateForChannel(a, e.userId)) {
            g.push(e);
            return
          }! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: r,
              canvasHeight: i,
              fallbackColor: l,
              outlineColorDark: a,
              outlineColorLight: o,
              linesDrawnAt: s,
              streamerId: c,
              deadDrawables: u
            } = e;
            switch (t.type) {
              case d.W.LINE:
                return (0, p.Z)({
                  line: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: i,
                  fallbackColor: l,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  linesDrawnAt: s,
                  deadDrawables: u
                });
              case d.W.EMOJI_HOSE:
                return (0, m.Z)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: i,
                  fallbackColor: l,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  streamerId: c,
                  deadDrawables: u
                })
            }
          }({
            drawable: e,
            context: h,
            canvasWidth: v,
            canvasHeight: b,
            fallbackColor: r,
            outlineColorDark: o,
            outlineColorLight: u,
            linesDrawnAt: i,
            deadDrawables: g,
            streamerId: l
          })
        }), g.length > 0 && (0, c.fW)(g, l)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: g,
        linesDrawnAt: O,
        streamerId: t,
        outlineColorDark: y,
        outlineColorLight: E,
        channelId: b
      })
    }, [e, b, g, y, E]);
  r.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: r,
        height: i
      } = t.getBoundingClientRect();
      t.width = r * window.devicePixelRatio, t.height = i * window.devicePixelRatio, j(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, j, n]);
  let x = r.useCallback(() => {
    let t = u.Z.getDrawables(n),
      r = m.U.getState().particles,
      i = t.length > 0 || Object.keys(r).length > 0;
    i && null == S.current._ref && (null == S.current._ref ? (j(n), S.current.start(v, () => j(n))) : i || null == S.current._ref || (S.current.stop(), (0, f.UN)(e)))
  }, [e, j, n]);
  r.useEffect(() => {
    let e = S.current;
    return u.Z.addChangeListener(x), x(), (0, o.vM)(t.getAvatarURL(null, h.Ks)), () => {
      u.Z.removeChangeListener(x), e.stop()
    }
  })
}