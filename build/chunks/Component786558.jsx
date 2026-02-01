/** Chunk was on web.js **/
/** chunk id: 786558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk389544 = require("./389544.js"),
  Chunk647307 = require("./647307.js"),
  Chunk941861 = require("./941861.js"),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk605752 = require("./605752.js"),
  Chunk270597 = require("./270597.js");

function f(e) {
  var t, n, a;
  let {
    buffer: f,
    autoplay: p = true,
    className: _,
    fit: h,
    alignment: m,
    style: g,
    eventTargetRef: E,
    artboard: y,
    withReducedMotion: b = "halt",
    ref: O,
    artboardProperties: v,
    dataBinding: A,
    onDataBindingChange: I,
    touchScrollEnabled: S = true,
    dynamicDataBinding: T,
    listenOnDocumentBody: C,
    eventCapture: N,
    assetLoader: w,
    onLoad: R,
    stateMachine: P
  } = e, D = i.useContext(l.C), L = (0, s.R)(), x = null != (t = null == (n = (a = (0, c.G9)()).isWindowFocused) ? true : n.call(a)) ? t : L, [M, j] = i.useState(true), k = i.useRef(null), {
    rive: U,
    RiveComponent: G
  } = (0, o.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: f,
    autoplay: p,
    stateMachines: null != P ? [P] : M,
    artboard: y,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != h ? u.i[h] : o.Fit.Cover,
      alignment: null != m ? u.y[m] : o.Alignment.Center
    }),
    isTouchScrollEnabled: S,
    listenOnDocumentBody: C,
    eventCapture: N,
    assetLoader: w,
    onLoad: R
  });
  i.useImperativeHandle(O, () => ({
    play: () => null == U ? true : U.play(),
    pause: () => null == U ? true : U.pause(),
    stop: () => null == U ? true : U.stop(),
    getProperties: () => {
      var e, t;
      return null != (e = null == U || null == (t = U.viewModelInstance) ? true : t.properties.reduce((e, t) => {
        var n, r, i, a, o;
        return "viewModel" === t.type && (null == U || null == (o = U.viewModelInstance) || null == (a = o.viewModel(t.name)) || a.properties.forEach(n => {
          var r, i, a;
          e[t.name + "/" + n.name] = {
            type: n.type,
            value: null == U || null == (a = U.viewModelInstance) || null == (i = a[n.type]) || null == (r = i.call(a, "".concat(t.name, "/").concat(n.name))) ? true : r.value
          }
        })), e[t.name] = {
          type: t.type,
          value: null == U || null == (i = U.viewModelInstance) || null == (r = i[t.type]) || null == (n = r.call(i, t.name)) ? true : n.value
        }, e
      }, {})) ? e : {}
    },
    getArtboards: () => {
      if (null == U) return [];
      let e = new Set,
        t = U.riveFile.getInstance();
      for (let n = 0; n < t.artboardCount(); n++) {
        let r = t.artboardByIndex(n);
        e.add(r.name)
      }
      return Array.from(e)
    }
  }), [U]), (0, d.J)({
    rive: U,
    artboard: y,
    artboardProperties: v,
    dataBinding: A,
    dynamicDataBinding: T,
    onDataBindingChange: I
  }), i.useEffect(() => {
    if (null != U && "short-loop" === b && D.reducedMotion.enabled) {
      let e = () => {
          U.isPlaying && (k.current = setTimeout(() => {
            U.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(k.current)
        };
      return U.on(o.EventType.Play, e), U.on(o.EventType.Pause, t), U.on(o.EventType.Stop, t), () => {
        U.off(o.EventType.Play, e), U.off(o.EventType.Pause, t), U.off(o.EventType.Stop, t)
      }
    }
  }, [U, b, D.reducedMotion.enabled]), i.useLayoutEffect(() => {
    if (null != U && "layout" === h) {
      U.resizeDrawingSurfaceToCanvas();
      let e = setTimeout(() => {
        null != U.canvas && U.resizeDrawingSurfaceToCanvas()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [U, h]), i.useEffect(() => {
    null != U && null == M && null == P && (j(U.stateMachineNames), U.reset({
      stateMachines: U.stateMachineNames,
      autoplay: p,
      artboard: y,
      autoBind: true
    }), U.setupRiveListeners())
  }, [U, p, M, y, P]);
  let V = i.useRef(0);
  i.useEffect(() => {
    if (null == U) return;
    let e = t => {
      null != t.data && "number" == typeof t.data && (V.current = t.data, t.data > 0 && ("halt" === b && D.reducedMotion.enabled && U.isPlaying && U.pause(), U.off(o.EventType.Advance, e)))
    };
    return U.on(o.EventType.Advance, e), p && U.play(), () => {
      U.off(o.EventType.Advance, e)
    }
  }, [U, D.reducedMotion.enabled, b, p]);
  let F = i.useRef(false);
  return i.useEffect(() => {
    if (null != U) return !x && F.current && U.isPlaying && V.current > 0 ? U.pause() : x && !U.isPlaying && F.current && U.play(), () => {
      null != U && x && (F.current = null != U.frameRequestId)
    }
  }, [U, x]), (0, r.jsx)(G, {
    className: _,
    style: g
  })
}
Chunk647307.RuntimeLoader.setWasmUrl(Chunk389544)