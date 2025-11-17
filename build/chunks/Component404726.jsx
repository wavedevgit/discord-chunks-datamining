/** Chunk was on web.js **/
/** chunk id: 404726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk902778 = require("./902778.js"),
  Chunk865288 = require("./865288.js"),
  Chunk150677 = require("./150677.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk405404 = require("./405404.js"),
  Chunk860109 = require("./860109.js");

function f(e) {
  var t, n, a;
  let {
    buffer: f,
    autoplay: _ = true,
    className: p,
    fit: h,
    alignment: m,
    style: g,
    eventTargetRef: E,
    artboard: b,
    withReducedMotion: y = "halt",
    ref: O,
    artboardProperties: v,
    dataBinding: I,
    onDataBindingChange: T,
    touchScrollEnabled: S = true,
    dynamicDataBinding: A,
    listenOnDocumentBody: C,
    eventCapture: N,
    assetLoader: R,
    onLoad: P
  } = e, D = i.useContext(l.S), w = (0, s.C)(), x = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? true : t.call(n)) ? a : w, [L, M] = i.useState(true), k = i.useRef(null), {
    rive: j,
    RiveComponent: U
  } = (0, o.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: f,
    autoplay: _,
    stateMachines: L,
    artboard: b,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != h ? u.M[h] : o.Fit.Cover,
      alignment: null != m ? u.Y[m] : o.Alignment.Center
    }),
    isTouchScrollEnabled: S,
    listenOnDocumentBody: C,
    eventCapture: N,
    assetLoader: R,
    onLoad: P
  });
  i.useImperativeHandle(O, () => ({
    play: () => null == j ? true : j.play(),
    pause: () => null == j ? true : j.pause(),
    stop: () => null == j ? true : j.stop(),
    getProperties: () => {
      var e, t;
      return null != (t = null == j || null == (e = j.viewModelInstance) ? true : e.properties.reduce((e, t) => {
        var n, r, i;
        return e[t.name] = {
          type: t.type,
          value: null == j || null == (i = j.viewModelInstance) || null == (r = i[t.type]) || null == (n = r.call(i, t.name)) ? true : n.value
        }, e
      }, {})) ? t : {}
    }
  }), [j]), (0, d.P)({
    rive: j,
    artboard: b,
    artboardProperties: v,
    dataBinding: I,
    dynamicDataBinding: A,
    onDataBindingChange: T
  }), i.useEffect(() => {
    if (null != j && "short-loop" === y && D.reducedMotion.enabled) {
      let e = () => {
          j.isPlaying && (k.current = setTimeout(() => {
            j.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(k.current)
        };
      return j.on(o.EventType.Play, e), j.on(o.EventType.Pause, t), j.on(o.EventType.Stop, t), () => {
        j.off(o.EventType.Play, e), j.off(o.EventType.Pause, t), j.off(o.EventType.Stop, t)
      }
    }
  }, [j, y, D.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != j && "layout" === h && (j.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      j.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [j, h]), i.useEffect(() => {
    null != j && null == L && (M(j.stateMachineNames), j.reset({
      stateMachines: j.stateMachineNames,
      autoplay: _,
      artboard: b,
      autoBind: true
    }), j.setupRiveListeners())
  }, [j, _, L, b]);
  let G = i.useRef(0);
  i.useEffect(() => {
    if (null == j) return;
    j.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (G.current = t.data, t.data > 0 && ("halt" === y && D.reducedMotion.enabled && j.isPlaying && j.pause(), j.off(o.EventType.Advance, e)))
    };
    return j.on(o.EventType.Advance, e), () => {
      j.off(o.EventType.Advance, e)
    }
  }, [j, D.reducedMotion.enabled, y]);
  let B = i.useRef(false);
  return i.useEffect(() => {
    if (null != j) return !x && B.current && j.isPlaying && G.current > 0 ? j.pause() : x && !j.isPlaying && B.current && j.play(), () => {
      null != j && x && (B.current = null != j.frameRequestId)
    }
  }, [j, x]), (0, r.jsx)(U, {
    className: p,
    style: g
  })
}
Chunk865288.RuntimeLoader.setWasmUrl(Chunk902778)