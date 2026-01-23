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
    onLoad: R
  } = e, P = i.useContext(l.C), D = (0, o.R)(), x = null != (t = null == (n = (a = (0, c.G9)()).isWindowFocused) ? true : n.call(a)) ? t : D, [L, j] = i.useState(true), M = i.useRef(null), {
    rive: k,
    RiveComponent: U
  } = (0, s.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: f,
    autoplay: p,
    stateMachines: L,
    artboard: y,
    useOffscreenRenderer: true,
    layout: new s.Layout({
      fit: null != h ? u.i[h] : s.Fit.Cover,
      alignment: null != m ? u.y[m] : s.Alignment.Center
    }),
    isTouchScrollEnabled: S,
    listenOnDocumentBody: C,
    eventCapture: N,
    assetLoader: w,
    onLoad: R
  });
  i.useImperativeHandle(O, () => ({
    play: () => null == k ? true : k.play(),
    pause: () => null == k ? true : k.pause(),
    stop: () => null == k ? true : k.stop(),
    getProperties: () => {
      var e, t;
      return null != (e = null == k || null == (t = k.viewModelInstance) ? true : t.properties.reduce((e, t) => {
        var n, r, i, a, s;
        return "viewModel" === t.type && (null == k || null == (s = k.viewModelInstance) || null == (a = s.viewModel(t.name)) || a.properties.forEach(n => {
          var r, i, a;
          e[t.name + "/" + n.name] = {
            type: n.type,
            value: null == k || null == (a = k.viewModelInstance) || null == (i = a[n.type]) || null == (r = i.call(a, "".concat(t.name, "/").concat(n.name))) ? true : r.value
          }
        })), e[t.name] = {
          type: t.type,
          value: null == k || null == (i = k.viewModelInstance) || null == (r = i[t.type]) || null == (n = r.call(i, t.name)) ? true : n.value
        }, e
      }, {})) ? e : {}
    },
    getArtboards: () => {
      if (null == k) return [];
      let e = new Set,
        t = k.riveFile.getInstance();
      for (let n = 0; n < t.artboardCount(); n++) {
        let r = t.artboardByIndex(n);
        e.add(r.name)
      }
      return Array.from(e)
    }
  }), [k]), (0, d.J)({
    rive: k,
    artboard: y,
    artboardProperties: v,
    dataBinding: A,
    dynamicDataBinding: T,
    onDataBindingChange: I
  }), i.useEffect(() => {
    if (null != k && "short-loop" === b && P.reducedMotion.enabled) {
      let e = () => {
          k.isPlaying && (M.current = setTimeout(() => {
            k.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(M.current)
        };
      return k.on(s.EventType.Play, e), k.on(s.EventType.Pause, t), k.on(s.EventType.Stop, t), () => {
        k.off(s.EventType.Play, e), k.off(s.EventType.Pause, t), k.off(s.EventType.Stop, t)
      }
    }
  }, [k, b, P.reducedMotion.enabled]), i.useLayoutEffect(() => {
    if (null != k && "layout" === h) {
      k.resizeDrawingSurfaceToCanvas();
      let e = setTimeout(() => {
        null != k.canvas && k.resizeDrawingSurfaceToCanvas()
      }, 100);
      return () => clearTimeout(e)
    }
  }, [k, h]), i.useEffect(() => {
    null != k && null == L && (j(k.stateMachineNames), k.reset({
      stateMachines: k.stateMachineNames,
      autoplay: p,
      artboard: y,
      autoBind: true
    }), k.setupRiveListeners())
  }, [k, p, L, y]);
  let G = i.useRef(0);
  i.useEffect(() => {
    if (null == k) return;
    let e = t => {
      null != t.data && "number" == typeof t.data && (G.current = t.data, t.data > 0 && ("halt" === b && P.reducedMotion.enabled && k.isPlaying && k.pause(), k.off(s.EventType.Advance, e)))
    };
    return k.on(s.EventType.Advance, e), p && k.play(), () => {
      k.off(s.EventType.Advance, e)
    }
  }, [k, P.reducedMotion.enabled, b, p]);
  let V = i.useRef(false);
  return i.useEffect(() => {
    if (null != k) return !x && V.current && k.isPlaying && G.current > 0 ? k.pause() : x && !k.isPlaying && V.current && k.play(), () => {
      null != k && x && (V.current = null != k.frameRequestId)
    }
  }, [k, x]), (0, r.jsx)(U, {
    className: _,
    style: g
  })
}
Chunk647307.RuntimeLoader.setWasmUrl(Chunk389544)