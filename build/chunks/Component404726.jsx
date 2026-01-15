/** Chunk was on web.js **/
/** chunk id: 404726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk662386 = require("./662386.js"),
  Chunk123314 = require("./123314.js"),
  Chunk150677 = require("./150677.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk405404 = require("./405404.js"),
  Chunk860109 = require("./860109.js");

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
    artboard: b,
    withReducedMotion: y = "halt",
    ref: O,
    artboardProperties: v,
    dataBinding: S,
    onDataBindingChange: I,
    touchScrollEnabled: T = true,
    dynamicDataBinding: C,
    listenOnDocumentBody: A,
    eventCapture: N,
    assetLoader: P,
    onLoad: w
  } = e, R = i.useContext(l.S), D = (0, s.C)(), x = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? true : t.call(n)) ? a : D, [L, j] = i.useState(true), M = i.useRef(null), {
    rive: k,
    RiveComponent: U
  } = (0, o.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: f,
    autoplay: p,
    stateMachines: L,
    artboard: b,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != h ? u.M[h] : o.Fit.Cover,
      alignment: null != m ? u.Y[m] : o.Alignment.Center
    }),
    isTouchScrollEnabled: T,
    listenOnDocumentBody: A,
    eventCapture: N,
    assetLoader: P,
    onLoad: w
  });
  i.useImperativeHandle(O, () => ({
    play: () => null == k ? true : k.play(),
    pause: () => null == k ? true : k.pause(),
    stop: () => null == k ? true : k.stop(),
    getProperties: () => {
      var e, t;
      return null != (t = null == k || null == (e = k.viewModelInstance) ? true : e.properties.reduce((e, t) => {
        var n, r, i, a, o;
        return "viewModel" === t.type && (null == k || null == (o = k.viewModelInstance) || null == (a = o.viewModel(t.name)) || a.properties.forEach(n => {
          var r, i, a;
          e[t.name + "/" + n.name] = {
            type: n.type,
            value: null == k || null == (a = k.viewModelInstance) || null == (i = a[n.type]) || null == (r = i.call(a, "".concat(t.name, "/").concat(n.name))) ? true : r.value
          }
        })), e[t.name] = {
          type: t.type,
          value: null == k || null == (i = k.viewModelInstance) || null == (r = i[t.type]) || null == (n = r.call(i, t.name)) ? true : n.value
        }, e
      }, {})) ? t : {}
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
  }), [k]), (0, d.P)({
    rive: k,
    artboard: b,
    artboardProperties: v,
    dataBinding: S,
    dynamicDataBinding: C,
    onDataBindingChange: I
  }), i.useEffect(() => {
    if (null != k && "short-loop" === y && R.reducedMotion.enabled) {
      let e = () => {
          k.isPlaying && (M.current = setTimeout(() => {
            k.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(M.current)
        };
      return k.on(o.EventType.Play, e), k.on(o.EventType.Pause, t), k.on(o.EventType.Stop, t), () => {
        k.off(o.EventType.Play, e), k.off(o.EventType.Pause, t), k.off(o.EventType.Stop, t)
      }
    }
  }, [k, y, R.reducedMotion.enabled]), i.useLayoutEffect(() => {
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
      artboard: b,
      autoBind: true
    }), k.setupRiveListeners())
  }, [k, p, L, b]);
  let G = i.useRef(0);
  i.useEffect(() => {
    if (null == k) return;
    let e = t => {
      null != t.data && "number" == typeof t.data && (G.current = t.data, t.data > 0 && ("halt" === y && R.reducedMotion.enabled && k.isPlaying && k.pause(), k.off(o.EventType.Advance, e)))
    };
    return k.on(o.EventType.Advance, e), p && k.play(), () => {
      k.off(o.EventType.Advance, e)
    }
  }, [k, R.reducedMotion.enabled, y, p]);
  let Z = i.useRef(false);
  return i.useEffect(() => {
    if (null != k) return !x && Z.current && k.isPlaying && G.current > 0 ? k.pause() : x && !k.isPlaying && Z.current && k.play(), () => {
      null != k && x && (Z.current = null != k.frameRequestId)
    }
  }, [k, x]), (0, r.jsx)(U, {
    className: _,
    style: g
  })
}
Chunk123314.RuntimeLoader.setWasmUrl(Chunk662386)