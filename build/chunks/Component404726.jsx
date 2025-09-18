/** Chunk was on web.js **/
/** chunk id: 404726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk943239 = require("./943239.js"),
  Chunk995803 = require("./995803.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk405404 = require("./405404.js");

function u(e) {
  let {
    buffer: t,
    autoplay: n = true,
    className: a,
    fit: l,
    alignment: u,
    style: _,
    eventTargetRef: p,
    artboard: h,
    withReducedMotion: m = "halt",
    ref: g,
    artboardProperties: E,
    dataBinding: b,
    touchScrollEnabled: y = true,
    dynamicDataBinding: O,
    listenOnDocumentBody: v,
    eventCapture: I
  } = e, T = i.useContext(s.S), S = d(), [A, C] = i.useState(true), N = i.useRef(null), {
    rive: R,
    RiveComponent: P
  } = (0, o.useRive)({
    eventTarget: null == p ? true : p.current,
    buffer: t,
    autoplay: n,
    stateMachines: A,
    artboard: h,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != l ? c.M[l] : o.Fit.Cover,
      alignment: null != u ? c.Y[u] : o.Alignment.Center
    }),
    isTouchScrollEnabled: y,
    listenOnDocumentBody: v,
    eventCapture: I
  });
  i.useImperativeHandle(g, () => ({
    play: () => null == R ? true : R.play(),
    pause: () => null == R ? true : R.pause(),
    stop: () => null == R ? true : R.stop()
  }), [R]), f({
    rive: R,
    artboard: h,
    artboardProperties: E,
    dataBinding: b,
    dynamicDataBinding: O
  }), i.useEffect(() => {
    if (null != R && "short-loop" === m && T.reducedMotion.enabled) {
      let e = () => {
          R.isPlaying && (N.current = setTimeout(() => {
            R.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(N.current)
        };
      return R.on(o.EventType.Play, e), R.on(o.EventType.Pause, t), R.on(o.EventType.Stop, t), () => {
        R.off(o.EventType.Play, e), R.off(o.EventType.Pause, t), R.off(o.EventType.Stop, t)
      }
    }
  }, [R, m, T.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != R && "layout" === l && (R.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      R.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [R, l]), i.useEffect(() => {
    null != R && null == A && (C(R.stateMachineNames), R.reset({
      stateMachines: R.stateMachineNames,
      autoplay: n,
      artboard: h,
      autoBind: true
    }), R.setupRiveListeners())
  }, [R, n, A, h]);
  let w = i.useRef(0);
  i.useEffect(() => {
    if (null == R) return;
    R.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (w.current = t.data, t.data > 0 && ("halt" === m && T.reducedMotion.enabled && R.isPlaying && R.pause(), R.off(o.EventType.Advance, e)))
    };
    return R.on(o.EventType.Advance, e), () => {
      R.off(o.EventType.Advance, e)
    }
  }, [R, T.reducedMotion.enabled, m]);
  let D = i.useRef(false);
  return i.useEffect(() => {
    if (null != R) return !S && D.current && R.isPlaying && w.current > 0 ? R.pause() : S && !R.isPlaying && D.current && R.play(), () => {
      null != R && S && (D.current = null != R.frameRequestId)
    }
  }, [R, S]), (0, r.jsx)(P, {
    className: a,
    style: _
  })
}

function d() {
  let e = window,
    [t, n] = Chunk647438.useState(module.document.hasFocus());
  return Chunk647438.useEffect(() => {
    let t = () => require(true),
      r = () => require(false);
    return module.addEventListener("focus", exports), module.addEventListener("blur", Chunk951288), () => {
      module.removeEventListener("focus", exports), module.removeEventListener("blur", Chunk951288)
    }
  }, [module]), exports
}

function f(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: r,
    dataBinding: a,
    dynamicDataBinding: c
  } = e, u = null != c ? c : a, d = (0, o.useViewModel)(t);
  (0, o.useViewModelInstance)(d);
  let {
    theme: f,
    saturation: _
  } = (0, l.ZF)(), {
    highContrastModeEnabled: p
  } = i.useContext(s.S), h = i.useRef(null);
  i.useEffect(() => {
    if (null == t || null == t.viewModelInstance || null == u) return;
    let e = r[null != n ? n : ""];
    Object.entries(u).forEach(n => {
      var r, i, a, o, s, l, c, u;
      let [d, m] = n, g = "object" == typeof m && "type" in m, E = g ? m.type : e[d], b = g ? m.value : m;
      switch (E) {
        case "color":
          let [y, O, v, I] = b.resolve({
            theme: f,
            saturation: _,
            highContrastModeEnabled: p
          }).rgba();
          null == (i = t.viewModelInstance) || null == (r = i.color(d)) || r.rgba(y, O, v, 255 * I);
          break;
        case "number":
          let T = null == (a = t.viewModelInstance) ? true : a.number(d);
          null != T && (T.value = b);
          break;
        case "boolean":
          let S = null == (o = t.viewModelInstance) ? true : o.boolean(d);
          null != S && (S.value = b);
          break;
        case "trigger":
          null != b && ("boolean" == typeof b ? b : 0 !== b) && (null == (s = h.current) ? true : s[d]) !== b && (null == (c = t.viewModelInstance) || null == (l = c.trigger(d)) || l.trigger());
          break;
        case "string":
          let A = null == (u = t.viewModelInstance) ? true : u.string(d);
          null != A && (A.value = b);
          break;
        default:
          console.warn("Unknown property type: ".concat(E))
      }
    }), h.current = u
  }, [u, t, n, r, f, null == t ? true : t.viewModelInstance, _, p])
}
Chunk995803.RuntimeLoader.setWasmUrl(Chunk943239)