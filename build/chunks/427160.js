/** Chunk was on 31748 **/
/** chunk id: 427160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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
let m = 1e3 / 60;

function _(e, t, n, _) {
  let h = (0, a.rdh)(i.A.unsafe_rawColors.BRAND_500).hex(),
    y = (0, a.rdh)(i.A.unsafe_rawColors.BLACK).hex(),
    A = (0, a.rdh)(i.A.unsafe_rawColors.WHITE).hex(),
    b = r.useRef({}),
    E = r.useRef(new l.IX),
    v = r.useCallback(t => {
      let n = u.A.getDrawables(t);
      (0, f.iV)(e),
      function(e) {
        let {
          canvasRef: t,
          drawables: n,
          fallbackColor: r,
          linesDrawnAt: l,
          streamerId: i,
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
          width: _,
          height: h
        } = f.getBoundingClientRect(), y = [];
        n.forEach(e => {
          null == s.A.getVoiceStateForChannel(a, e.userId) ? y.push(e) : function(e) {
            let {
              drawable: t,
              context: n,
              canvasWidth: r,
              canvasHeight: l,
              fallbackColor: i,
              outlineColorDark: a,
              outlineColorLight: o,
              linesDrawnAt: s,
              streamerId: c,
              deadDrawables: u
            } = e;
            switch (t.type) {
              case d.Z.LINE:
                return (0, g.A)({
                  line: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: l,
                  fallbackColor: i,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  linesDrawnAt: s,
                  deadDrawables: u
                });
              case d.Z.EMOJI_HOSE:
                return (0, p.A)({
                  emojiHose: t,
                  context: n,
                  canvasWidth: r,
                  canvasHeight: l,
                  fallbackColor: i,
                  outlineColorDark: a,
                  outlineColorLight: o,
                  streamerId: c,
                  deadDrawables: u
                })
            }
          }({
            drawable: e,
            context: m,
            canvasWidth: _,
            canvasHeight: h,
            fallbackColor: r,
            outlineColorDark: o,
            outlineColorLight: u,
            linesDrawnAt: l,
            deadDrawables: y,
            streamerId: i
          })
        }), y.length > 0 && (0, c.Nm)(y, i)
      }({
        canvasRef: e,
        drawables: n,
        fallbackColor: h,
        linesDrawnAt: b,
        streamerId: t,
        outlineColorDark: y,
        outlineColorLight: A,
        channelId: _
      })
    }, [e, _, h, y, A]);
  r.useEffect(() => {
    let t = new ResizeObserver(() => {
      let t = e.current;
      if (null == t) return;
      let {
        width: r,
        height: l
      } = t.getBoundingClientRect();
      t.width = r * window.devicePixelRatio, t.height = l * window.devicePixelRatio, v(n)
    });
    return null != e.current && t.observe(e.current), () => t.disconnect()
  }, [e, v, n]);
  let O = r.useCallback(() => {
    let t = u.A.getDrawables(n),
      r = p.m.getState().particles,
      l = t.length > 0 || Object.keys(r).length > 0;
    l && null == E.current._ref && (null == E.current._ref ? (v(n), E.current.start(m, () => v(n))) : l || null == E.current._ref || (E.current.stop(), (0, f.iV)(e)))
  }, [e, v, n]);
  r.useEffect(() => {
    let e = E.current;
    return u.A.addChangeListener(O), O(), (0, o.l0)(t.getAvatarURL(null, 80)), () => {
      u.A.removeChangeListener(O), e.stop()
    }
  })
}