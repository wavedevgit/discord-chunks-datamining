/** Chunk was on web.js **/
/** chunk id: 931989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk572721 = require("./572721.js"),
  Chunk995803 = require("./995803.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk912811 = require("./912811.js");

function f(e) {
  let {
    buffer: t,
    autoplay: n = true,
    className: a,
    fit: s,
    alignment: c,
    style: u,
    eventTargetRef: f,
    artboard: h,
    withReducedMotion: m = "halt",
    ref: g,
    artboardProperties: E,
    dataBinding: b
  } = e, y = i.useContext(l.Sfi), O = _(), [v, I] = i.useState(true), T = i.useRef(null), {
    rive: S,
    RiveComponent: A
  } = (0, o.useRive)({
    eventTarget: null == f ? true : f.current,
    buffer: t,
    autoplay: n,
    stateMachines: v,
    artboard: h,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != s ? d.L[s] : o.Fit.Cover,
      alignment: null != c ? d.E[c] : o.Alignment.Center
    })
  });
  i.useImperativeHandle(g, () => ({
    play: () => null == S ? true : S.play(),
    pause: () => null == S ? true : S.pause(),
    stop: () => null == S ? true : S.stop()
  }), [S]), p({
    rive: S,
    artboard: h,
    artboardProperties: E,
    dataBinding: b
  }), i.useEffect(() => {
    if (null != S && "short-loop" === m && y.reducedMotion.enabled) {
      let e = () => {
          S.isPlaying && (T.current = setTimeout(() => {
            S.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(T.current)
        };
      return S.on(o.EventType.Play, e), S.on(o.EventType.Pause, t), S.on(o.EventType.Stop, t), () => {
        S.off(o.EventType.Play, e), S.off(o.EventType.Pause, t), S.off(o.EventType.Stop, t)
      }
    }
  }, [S, m, y.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != S && "layout" === s && (S.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      S.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [S, s]), i.useEffect(() => {
    null != S && null == v && (I(S.stateMachineNames), S.reset({
      stateMachines: S.stateMachineNames,
      autoplay: n,
      artboard: h,
      autoBind: true
    }), S.setupRiveListeners())
  }, [S, n, v, h]);
  let C = i.useRef(0);
  i.useEffect(() => {
    if (null == S) return;
    S.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (C.current = t.data, t.data > 0 && ("halt" === m && y.reducedMotion.enabled && S.isPlaying && S.pause(), S.off(o.EventType.Advance, e)))
    };
    return S.on(o.EventType.Advance, e), () => {
      S.off(o.EventType.Advance, e)
    }
  }, [S, y.reducedMotion.enabled, m]);
  let N = i.useRef(false);
  return i.useEffect(() => {
    if (null != S) return !O && N.current && S.isPlaying && C.current > 0 ? S.pause() : O && !S.isPlaying && N.current && S.play(), () => {
      null != S && O && (N.current = null != S.frameRequestId)
    }
  }, [S, O]), (0, r.jsx)(A, {
    className: a,
    style: u
  })
}

function _() {
  let {
    renderWindow: e
  } = Chunk647438.useContext(Chunk40851.ZP), [t, n] = Chunk647438.useState(module.document.hasFocus());
  return Chunk647438.useEffect(() => {
    let t = () => require(true),
      r = () => require(false);
    return module.addEventListener("focus", exports), module.addEventListener("blur", Chunk951288), () => {
      module.removeEventListener("focus", exports), module.removeEventListener("blur", Chunk951288)
    }
  }, [module]), exports
}

function p(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: r,
    dataBinding: a
  } = e, c = (0, o.useViewModel)(t);
  (0, o.useViewModelInstance)(c);
  let {
    theme: d,
    saturation: f
  } = (0, l.TCT)(), _ = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled), p = i.useRef(null);
  i.useEffect(() => {
    if (null == t || null == t.viewModelInstance || null == a) return;
    let e = r[n];
    Object.entries(a).forEach(n => {
      var r, i, a, o, s, l, c, u;
      let [h, m] = n, g = e[h];
      switch (g) {
        case "color":
          let [E, b, y, O] = m.resolve({
            theme: d,
            saturation: f,
            highContrastModeEnabled: _
          }).rgba();
          null == (i = t.viewModelInstance) || null == (r = i.color(h)) || r.rgba(E, b, y, 255 * O);
          break;
        case "number":
          let v = null == (a = t.viewModelInstance) ? true : a.number(h);
          null != v && (v.value = m);
          break;
        case "boolean":
          let I = null == (o = t.viewModelInstance) ? true : o.boolean(h);
          null != I && (I.value = m);
          break;
        case "trigger":
          m && (null == (s = p.current) ? true : s[h]) !== m && (null == (c = t.viewModelInstance) || null == (l = c.trigger(h)) || l.trigger());
          break;
        case "string":
          let T = null == (u = t.viewModelInstance) ? true : u.string(h);
          null != T && (T.value = m);
          break;
        default:
          console.warn("Unknown property type: ".concat(g))
      }
    }), p.current = a
  }, [a, t, n, r, d, null == t ? true : t.viewModelInstance, f, _])
}
Chunk995803.RuntimeLoader.setWasmUrl(Chunk572721)