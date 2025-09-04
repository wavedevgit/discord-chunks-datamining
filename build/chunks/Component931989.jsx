/** Chunk was on web.js **/
/** chunk id: 931989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk572721 = require("./572721.js"),
  Chunk995803 = require("./995803.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk912811 = require("./912811.js");

function _(e) {
  let {
    buffer: t,
    autoplay: n = true,
    className: a,
    fit: l,
    alignment: u,
    style: d,
    eventTargetRef: _,
    artboard: m,
    withReducedMotion: g = "halt",
    ref: E,
    artboardProperties: b,
    dataBinding: y
  } = e, O = i.useContext(c.Sfi), v = p(), [I, S] = i.useState(true), T = i.useRef(null), {
    rive: A,
    RiveComponent: C
  } = (0, o.useRive)({
    eventTarget: null == _ ? true : _.current,
    buffer: t,
    autoplay: n,
    stateMachines: I,
    artboard: m,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != l ? f.L[l] : o.Fit.Cover,
      alignment: null != u ? f.E[u] : o.Alignment.Center
    }),
    shouldDisableRiveListeners: s.Em || s.tq
  });
  i.useImperativeHandle(E, () => ({
    play: () => null == A ? true : A.play(),
    pause: () => null == A ? true : A.pause(),
    stop: () => null == A ? true : A.stop()
  }), [A]), h({
    rive: A,
    artboard: m,
    artboardProperties: b,
    dataBinding: y
  }), i.useEffect(() => {
    if (null != A && "short-loop" === g && O.reducedMotion.enabled) {
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
  }, [A, g, O.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != A && "layout" === l && (A.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      A.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [A, l]), i.useEffect(() => {
    null != A && null == I && (S(A.stateMachineNames), A.reset({
      stateMachines: A.stateMachineNames,
      autoplay: n,
      artboard: m,
      autoBind: true
    }), A.setupRiveListeners())
  }, [A, n, I, m]);
  let N = i.useRef(0);
  i.useEffect(() => {
    if (null == A) return;
    A.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (N.current = t.data, t.data > 0 && ("halt" === g && O.reducedMotion.enabled && A.isPlaying && A.pause(), A.off(o.EventType.Advance, e)))
    };
    return A.on(o.EventType.Advance, e), () => {
      A.off(o.EventType.Advance, e)
    }
  }, [A, O.reducedMotion.enabled, g]);
  let R = i.useRef(false);
  return i.useEffect(() => {
    if (null != A) return !v && R.current && A.isPlaying && N.current > 0 ? A.pause() : v && !A.isPlaying && R.current && A.play(), () => {
      null != A && v && (R.current = null != A.frameRequestId)
    }
  }, [A, v]), (0, r.jsx)(C, {
    className: a,
    style: d
  })
}

function p() {
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

function h(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: r,
    dataBinding: a
  } = e, s = (0, o.useViewModel)(t);
  (0, o.useViewModelInstance)(s);
  let {
    theme: u,
    saturation: f
  } = (0, c.TCT)(), _ = (0, l.e7)([d.Z], () => d.Z.isHighContrastModeEnabled), p = i.useRef(null);
  i.useEffect(() => {
    if (null == t || null == t.viewModelInstance || null == a) return;
    let e = r[n];
    Object.entries(a).forEach(n => {
      var r, i, a, o, s, l, c, d;
      let [h, m] = n, g = e[h];
      switch (g) {
        case "color":
          let [E, b, y, O] = m.resolve({
            theme: u,
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
          let S = null == (d = t.viewModelInstance) ? true : d.string(h);
          null != S && (S.value = m);
          break;
        default:
          console.warn("Unknown property type: ".concat(g))
      }
    }), p.current = a
  }, [a, t, n, r, u, null == t ? true : t.viewModelInstance, f, _])
}
Chunk995803.RuntimeLoader.setWasmUrl(Chunk572721)