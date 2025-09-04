/** Chunk was on web.js **/
/** chunk id: 931989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk252762 = require("./252762.js"),
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
    dataBinding: b,
    touchScrollEnabled: y = true
  } = e, O = i.useContext(l.Sfi), v = _(), [I, S] = i.useState(true), T = i.useRef(null), {
    rive: A,
    RiveComponent: C
  } = (0, o.useRive)({
    eventTarget: null == f ? true : f.current,
    buffer: t,
    autoplay: n,
    stateMachines: I,
    artboard: h,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != s ? d.L[s] : o.Fit.Cover,
      alignment: null != c ? d.E[c] : o.Alignment.Center
    }),
    isTouchScrollEnabled: y
  });
  i.useImperativeHandle(g, () => ({
    play: () => null == A ? true : A.play(),
    pause: () => null == A ? true : A.pause(),
    stop: () => null == A ? true : A.stop()
  }), [A]), p({
    rive: A,
    artboard: h,
    artboardProperties: E,
    dataBinding: b
  }), i.useEffect(() => {
    if (null != A && "short-loop" === m && O.reducedMotion.enabled) {
      let e = () => {
          A.isPlaying && (T.current = setTimeout(() => {
            A.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(T.current)
        };
      return A.on(o.EventType.Play, e), A.on(o.EventType.Pause, t), A.on(o.EventType.Stop, t), () => {
        A.off(o.EventType.Play, e), A.off(o.EventType.Pause, t), A.off(o.EventType.Stop, t)
      }
    }
  }, [A, m, O.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != A && "layout" === s && (A.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      A.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [A, s]), i.useEffect(() => {
    null != A && null == I && (S(A.stateMachineNames), A.reset({
      stateMachines: A.stateMachineNames,
      autoplay: n,
      artboard: h,
      autoBind: true
    }), A.setupRiveListeners())
  }, [A, n, I, h]);
  let N = i.useRef(0);
  i.useEffect(() => {
    if (null == A) return;
    A.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (N.current = t.data, t.data > 0 && ("halt" === m && O.reducedMotion.enabled && A.isPlaying && A.pause(), A.off(o.EventType.Advance, e)))
    };
    return A.on(o.EventType.Advance, e), () => {
      A.off(o.EventType.Advance, e)
    }
  }, [A, O.reducedMotion.enabled, m]);
  let R = i.useRef(false);
  return i.useEffect(() => {
    if (null != A) return !v && R.current && A.isPlaying && N.current > 0 ? A.pause() : v && !A.isPlaying && R.current && A.play(), () => {
      null != A && v && (R.current = null != A.frameRequestId)
    }
  }, [A, v]), (0, r.jsx)(C, {
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
          let S = null == (u = t.viewModelInstance) ? true : u.string(h);
          null != S && (S.value = m);
          break;
        default:
          console.warn("Unknown property type: ".concat(g))
      }
    }), p.current = a
  }, [a, t, n, r, d, null == t ? true : t.viewModelInstance, f, _])
}
Chunk995803.RuntimeLoader.setWasmUrl(Chunk252762)