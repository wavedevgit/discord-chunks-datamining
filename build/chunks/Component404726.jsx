/** Chunk was on web.js **/
/** chunk id: 404726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk252762 = require("./252762.js"),
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
    dynamicDataBinding: O
  } = e, v = i.useContext(s.S), I = d(), [T, S] = i.useState(true), A = i.useRef(null), {
    rive: C,
    RiveComponent: N
  } = (0, o.useRive)({
    eventTarget: null == p ? true : p.current,
    buffer: t,
    autoplay: n,
    stateMachines: T,
    artboard: h,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != l ? c.M[l] : o.Fit.Cover,
      alignment: null != u ? c.Y[u] : o.Alignment.Center
    }),
    isTouchScrollEnabled: y
  });
  i.useImperativeHandle(g, () => ({
    play: () => null == C ? true : C.play(),
    pause: () => null == C ? true : C.pause(),
    stop: () => null == C ? true : C.stop()
  }), [C]), f({
    rive: C,
    artboard: h,
    artboardProperties: E,
    dataBinding: b,
    dynamicDataBinding: O
  }), i.useEffect(() => {
    if (null != C && "short-loop" === m && v.reducedMotion.enabled) {
      let e = () => {
          C.isPlaying && (A.current = setTimeout(() => {
            C.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(A.current)
        };
      return C.on(o.EventType.Play, e), C.on(o.EventType.Pause, t), C.on(o.EventType.Stop, t), () => {
        C.off(o.EventType.Play, e), C.off(o.EventType.Pause, t), C.off(o.EventType.Stop, t)
      }
    }
  }, [C, m, v.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != C && "layout" === l && (C.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      C.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [C, l]), i.useEffect(() => {
    null != C && null == T && (S(C.stateMachineNames), C.reset({
      stateMachines: C.stateMachineNames,
      autoplay: n,
      artboard: h,
      autoBind: true
    }), C.setupRiveListeners())
  }, [C, n, T, h]);
  let R = i.useRef(0);
  i.useEffect(() => {
    if (null == C) return;
    C.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (R.current = t.data, t.data > 0 && ("halt" === m && v.reducedMotion.enabled && C.isPlaying && C.pause(), C.off(o.EventType.Advance, e)))
    };
    return C.on(o.EventType.Advance, e), () => {
      C.off(o.EventType.Advance, e)
    }
  }, [C, v.reducedMotion.enabled, m]);
  let P = i.useRef(false);
  return i.useEffect(() => {
    if (null != C) return !I && P.current && C.isPlaying && R.current > 0 ? C.pause() : I && !C.isPlaying && P.current && C.play(), () => {
      null != C && I && (P.current = null != C.frameRequestId)
    }
  }, [C, I]), (0, r.jsx)(N, {
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
Chunk995803.RuntimeLoader.setWasmUrl(Chunk252762)