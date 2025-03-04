/** Chunk was on 12416 **/
n.d(t, {
  Z: () => b
}), n(653041);
var r = n(192379),
  l = n(846519),
  i = n(692547),
  o = n(481060),
  a = n(220082),
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
  let g = (0, o.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
    y = (0, o.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
    E = (0, o.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
    O = r.useRef({}),
    S = r.useRef(new l.Xp),
    x = r.useCallback(t => {
      let n = u.Z.getDrawables(t);
      (0, f.UN)(e),
      function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: r,
          linesDrawnAt: l,
          streamerId: i,
          channelId: o,
          outlineColorDark: a,
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
          if (null == s.Z.getVoiceStateForChannel(o, e.userId)) {
            g.push(e);
            return
          }! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: r,
              canvasHeight: l,
              fallbackColor: i,
              outlineColorDark: o,
              outlineColorLight: a,
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
                  canvasHeight: l,
                  fallbackColor: i,
                  outlineColorDark: o,
                  outlineColorLight: a,
                  linesDrawnAt: s,
                  deadDrawables: u
                });
              case d.W.EMOJI_HOSE:
                return (0, m.Z)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: l,
                  fallbackColor: i,
                  outlineColorDark: o,
                  outlineColorLight: a,
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
            outlineColorDark: a,
            outlineColorLight: u,
            linesDrawnAt: l,
            deadDrawables: g,
            streamerId: i
          })
        }), g.length > 0 && (0, c.fW)(g, i)
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
        height: l
      } = t.getBoundingClientRect();
      t.width = r * window.devicePixelRatio, t.height = l * window.devicePixelRatio, x(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, x, n]);
  let j = r.useCallback(() => {
    let t = u.Z.getDrawables(n),
      r = m.U.getState().particles,
      l = t.length > 0 || Object.keys(r).length > 0;
    l && null == S.current._ref && (null == S.current._ref ? (x(n), S.current.start(v, () => x(n))) : l || null == S.current._ref || (S.current.stop(), (0, f.UN)(e)))
  }, [e, x, n]);
  r.useEffect(() => {
    let e = S.current;
    return u.Z.addChangeListener(j), j(), (0, a.vM)(t.getAvatarURL(null, h.Ks)), () => {
      u.Z.removeChangeListener(j), e.stop()
    }
  })
}