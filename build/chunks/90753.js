/** Chunk was on 11010 **/
/** chunk id: 90753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk979651 = require("./979651.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk262433 = require("./262433.js"),
  Chunk400321 = require("./400321.js"),
  Chunk813900 = require("./813900.js");
let b = 1e3 / 60;

function h(e, t, n, h) {
  let v = (0, a.dQu)(l.Z.unsafe_rawColors.BRAND_500).hex(),
    E = (0, a.dQu)(l.Z.unsafe_rawColors.BLACK).hex(),
    y = (0, a.dQu)(l.Z.unsafe_rawColors.WHITE).hex(),
    _ = r.useRef({}),
    O = r.useRef(new i.Xp),
    C = r.useCallback(t => {
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
        let m = f.getContext("2d");
        if (null == m) return;
        let {
          width: b,
          height: h
        } = f.getBoundingClientRect(), v = [];
        n.forEach(e => {
          if (null == c.Z.getVoiceStateForChannel(a, e.userId)) return void v.push(e);
          ! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: r,
              canvasHeight: i,
              fallbackColor: l,
              outlineColorDark: a,
              outlineColorLight: o,
              linesDrawnAt: c,
              streamerId: s,
              deadDrawables: u
            } = e;
            switch (t.type) {
              case d.W.LINE:
                return (0, g.Z)({
                  line: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: i,
                  fallbackColor: l,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  linesDrawnAt: c,
                  deadDrawables: u
                });
              case d.W.EMOJI_HOSE:
                return (0, p.Z)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: i,
                  fallbackColor: l,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  streamerId: s,
                  deadDrawables: u
                })
            }
          }({
            drawable: e,
            context: m,
            canvasWidth: b,
            canvasHeight: h,
            fallbackColor: r,
            outlineColorDark: o,
            outlineColorLight: u,
            linesDrawnAt: i,
            deadDrawables: v,
            streamerId: l
          })
        }), v.length > 0 && (0, s.fW)(v, l)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: v,
        linesDrawnAt: _,
        streamerId: t,
        outlineColorDark: E,
        outlineColorLight: y,
        channelId: h
      })
    }, [e, h, v, E, y]);
  r.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: r,
        height: i
      } = t.getBoundingClientRect();
      t.width = r * window.devicePixelRatio, t.height = i * window.devicePixelRatio, C(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, C, n]);
  let S = r.useCallback(() => {
    let t = u.Z.getDrawables(n),
      r = p.U.getState().particles,
      i = t.length > 0 || Object.keys(r).length > 0;
    i && null == O.current._ref && (null == O.current._ref ? (C(n), O.current.start(b, () => C(n))) : i || null == O.current._ref || (O.current.stop(), (0, f.UN)(e)))
  }, [e, C, n]);
  r.useEffect(() => {
    let e = O.current;
    return u.Z.addChangeListener(S), S(), (0, o.vM)(t.getAvatarURL(null, m.Ks)), () => {
      u.Z.removeChangeListener(S), e.stop()
    }
  })
}