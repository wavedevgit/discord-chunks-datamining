/** Chunk was on 37832 **/
/** chunk id: 90753, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js");
var Chunk647438 = require("./647438.js"),
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
let g = 1e3 / 60;

function b(e, t, n, b) {
  let S = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
    v = (0, a.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
    h = (0, a.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
    O = r.useRef({}),
    y = r.useRef(new l.Xp),
    _ = r.useCallback(t => {
      let n = c.Z.getDrawables(t);
      (0, f.UN)(e),
      function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: r,
          linesDrawnAt: l,
          streamerId: i,
          channelId: a,
          outlineColorDark: o,
          outlineColorLight: c
        } = e;
        if (0 === n.length) return;
        let f = t.current;
        if (null == f) return;
        let E = f.getContext("2d");
        if (null == E) return;
        let {
          width: g,
          height: b
        } = f.getBoundingClientRect(), S = [];
        n.forEach(e => {
          if (null == u.Z.getVoiceStateForChannel(a, e.userId)) return void S.push(e);
          ! function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: r,
              canvasHeight: l,
              fallbackColor: i,
              outlineColorDark: a,
              outlineColorLight: o,
              linesDrawnAt: u,
              streamerId: s,
              deadDrawables: c
            } = e;
            switch (t.type) {
              case d.W.LINE:
                return (0, m.Z)({
                  line: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: l,
                  fallbackColor: i,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  linesDrawnAt: u,
                  deadDrawables: c
                });
              case d.W.EMOJI_HOSE:
                return (0, p.Z)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: l,
                  fallbackColor: i,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  streamerId: s,
                  deadDrawables: c
                })
            }
          }({
            drawable: e,
            context: E,
            canvasWidth: g,
            canvasHeight: b,
            fallbackColor: r,
            outlineColorDark: o,
            outlineColorLight: c,
            linesDrawnAt: l,
            deadDrawables: S,
            streamerId: i
          })
        }), S.length > 0 && (0, s.fW)(S, i)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: S,
        linesDrawnAt: O,
        streamerId: t,
        outlineColorDark: v,
        outlineColorLight: h,
        channelId: b
      })
    }, [e, b, S, v, h]);
  r.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: r,
        height: l
      } = t.getBoundingClientRect();
      t.width = r * window.devicePixelRatio, t.height = l * window.devicePixelRatio, _(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, _, n]);
  let j = r.useCallback(() => {
    let t = c.Z.getDrawables(n),
      r = p.U.getState().particles,
      l = t.length > 0 || Object.keys(r).length > 0;
    l && null == y.current._ref && (null == y.current._ref ? (_(n), y.current.start(g, () => _(n))) : l || null == y.current._ref || (y.current.stop(), (0, f.UN)(e)))
  }, [e, _, n]);
  r.useEffect(() => {
    let e = y.current;
    return c.Z.addChangeListener(j), j(), (0, o.vM)(t.getAvatarURL(null, E.Ks)), () => {
      c.Z.removeChangeListener(j), e.stop()
    }
  })
}