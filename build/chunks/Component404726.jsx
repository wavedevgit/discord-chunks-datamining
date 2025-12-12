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
  var t, n, o;
  let {
    buffer: f,
    autoplay: p = true,
    className: _,
    fit: m,
    alignment: h,
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
    onLoad: R
  } = e, w = i.useContext(l.S), D = (0, s.C)(), x = null != (o = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? true : t.call(n)) ? o : D, [L, j] = i.useState(true), M = i.useRef(null), {
    rive: k,
    RiveComponent: U
  } = (0, a.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: f,
    autoplay: p,
    stateMachines: L,
    artboard: b,
    useOffscreenRenderer: true,
    layout: new a.Layout({
      fit: null != m ? u.M[m] : a.Fit.Cover,
      alignment: null != h ? u.Y[h] : a.Alignment.Center
    }),
    isTouchScrollEnabled: T,
    listenOnDocumentBody: A,
    eventCapture: N,
    assetLoader: P,
    onLoad: R
  });
  i.useImperativeHandle(O, () => ({
    play: () => null == k ? true : k.play(),
    pause: () => null == k ? true : k.pause(),
    stop: () => null == k ? true : k.stop(),
    getProperties: () => {
      var e, t;
      return null != (t = null == k || null == (e = k.viewModelInstance) ? true : e.properties.reduce((e, t) => {
        var n, r, i, o, a;
        return "viewModel" === t.type && (null == k || null == (a = k.viewModelInstance) || null == (o = a.viewModel(t.name)) || o.properties.forEach(n => {
          var r, i, o;
          e[t.name + "/" + n.name] = {
            type: n.type,
            value: null == k || null == (o = k.viewModelInstance) || null == (i = o[n.type]) || null == (r = i.call(o, "".concat(t.name, "/").concat(n.name))) ? true : r.value
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
    if (null != k && "short-loop" === y && w.reducedMotion.enabled) {
      let e = () => {
          k.isPlaying && (M.current = setTimeout(() => {
            k.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(M.current)
        };
      return k.on(a.EventType.Play, e), k.on(a.EventType.Pause, t), k.on(a.EventType.Stop, t), () => {
        k.off(a.EventType.Play, e), k.off(a.EventType.Pause, t), k.off(a.EventType.Stop, t)
      }
    }
  }, [k, y, w.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != k && "layout" === m && (k.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      k.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [k, m]), i.useEffect(() => {
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
      null != t.data && "number" == typeof t.data && (G.current = t.data, t.data > 0 && ("halt" === y && w.reducedMotion.enabled && k.isPlaying && k.pause(), k.off(a.EventType.Advance, e)))
    };
    return k.on(a.EventType.Advance, e), p && k.play(), () => {
      k.off(a.EventType.Advance, e)
    }
  }, [k, w.reducedMotion.enabled, y, p]);
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