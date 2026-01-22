/** Chunk was on 31748 **/
/** chunk id: 427160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk654107 = require("./654107.js"),
  Chunk977997 = require("./977997.js"),
  Chunk318937 = require("./318937.js"),
  Chunk533117 = require("./533117.js"),
  Chunk134753 = require("./134753.js"),
  Chunk666717 = require("./666717.js"),
  Chunk921652 = require("./921652.js"),
  Chunk139831 = require("./139831.js");
require("./824217.js");
let g = 1e3 / 60;

function m(e, t, n, m) {
  let h = (0, a.rdh)(i.A.unsafe_rawColors.BRAND_500).hex(),
    A = (0, a.rdh)(i.A.unsafe_rawColors.BLACK).hex(),
    y = (0, a.rdh)(i.A.unsafe_rawColors.WHITE).hex(),
    _ = l.useRef({}),
    E = l.useRef(new r.IX),
    v = l.useCallback(t => {
      let n = u.A.getDrawables(t);
      (0, f.iV)(e),
      function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: l,
          linesDrawnAt: r,
          streamerId: i,
          channelId: a,
          outlineColorDark: s,
          outlineColorLight: u
        } = e;
        if (0 === n.length) return;
        let f = t.current;
        if (null == f) return;
        let g = f.getContext("2d");
        if (null == g) return;
        let {
          width: m,
          height: h
        } = f.getBoundingClientRect(), A = [];
        n.forEach(e => {
          null == o.A.getVoiceStateForChannel(a, e.userId) ? A.push(e) : function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: l,
              canvasHeight: r,
              fallbackColor: i,
              outlineColorDark: a,
              outlineColorLight: s,
              linesDrawnAt: o,
              streamerId: c,
              deadDrawables: u
            } = e;
            switch (t.type) {
              case d.Z.LINE:
                return (0, b.A)({
                  line: t,
                  context: n,
                  canvasWidth: l,
                  canvasHeight: r,
                  fallbackColor: i,
                  outlineColorDark: a,
                  outlineColorLight: s,
                  linesDrawnAt: o,
                  deadDrawables: u
                });
              case d.Z.EMOJI_HOSE:
                return (0, p.A)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: l,
                  canvasHeight: r,
                  fallbackColor: i,
                  outlineColorDark: a,
                  outlineColorLight: s,
                  streamerId: c,
                  deadDrawables: u
                })
            }
          }({
            drawable: e,
            context: g,
            canvasWidth: m,
            canvasHeight: h,
            fallbackColor: l,
            outlineColorDark: s,
            outlineColorLight: u,
            linesDrawnAt: r,
            deadDrawables: A,
            streamerId: i
          })
        }), A.length > 0 && (0, c.Nm)(A, i)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: h,
        linesDrawnAt: _,
        streamerId: t,
        outlineColorDark: A,
        outlineColorLight: y,
        channelId: m
      })
    }, [e, m, h, A, y]);
  l.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: l,
        height: r
      } = t.getBoundingClientRect();
      t.width = l * window.devicePixelRatio, t.height = r * window.devicePixelRatio, v(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, v, n]);
  let O = l.useCallback(() => {
    let t = u.A.getDrawables(n),
      l = p.m.getState().particles,
      r = t.length > 0 || Object.keys(l).length > 0;
    r && null == E.current._ref && (null == E.current._ref ? (v(n), E.current.start(g, () => v(n))) : r || null == E.current._ref || (E.current.stop(), (0, f.iV)(e)))
  }, [e, v, n]);
  l.useEffect(() => {
    let e = E.current;
    return u.A.addChangeListener(O), O(), (0, s.l0)(t.getAvatarURL(null, 80)), () => {
      u.A.removeChangeListener(O), e.stop()
    }
  })
}