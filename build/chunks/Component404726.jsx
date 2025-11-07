/** Chunk was on web.js **/
/** chunk id: 404726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk943239 = require("./943239.js"),
  Chunk995803 = require("./995803.js"),
  Chunk150677 = require("./150677.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk405404 = require("./405404.js");

function d(e) {
  var t, n, a;
  let {
    buffer: d,
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
    touchScrollEnabled: S = true,
    dynamicDataBinding: T,
    listenOnDocumentBody: A,
    eventCapture: C
  } = e, N = i.useContext(l.S), R = (0, s.C)(), P = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? true : t.call(n)) ? a : R, [w, D] = i.useState(true), x = i.useRef(null), {
    rive: L,
    RiveComponent: M
  } = (0, o.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: d,
    autoplay: _,
    stateMachines: w,
    artboard: b,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != h ? u.M[h] : o.Fit.Cover,
      alignment: null != m ? u.Y[m] : o.Alignment.Center
    }),
    isTouchScrollEnabled: S,
    listenOnDocumentBody: A,
    eventCapture: C
  });
  i.useImperativeHandle(O, () => ({
    play: () => null == L ? true : L.play(),
    pause: () => null == L ? true : L.pause(),
    stop: () => null == L ? true : L.stop()
  }), [L]), f({
    rive: L,
    artboard: b,
    artboardProperties: v,
    dataBinding: I,
    dynamicDataBinding: T
  }), i.useEffect(() => {
    if (null != L && "short-loop" === y && N.reducedMotion.enabled) {
      let e = () => {
          L.isPlaying && (x.current = setTimeout(() => {
            L.pause()
          }, 5e3))
        },
        t = () => {
          clearTimeout(x.current)
        };
      return L.on(o.EventType.Play, e), L.on(o.EventType.Pause, t), L.on(o.EventType.Stop, t), () => {
        L.off(o.EventType.Play, e), L.off(o.EventType.Pause, t), L.off(o.EventType.Stop, t)
      }
    }
  }, [L, y, N.reducedMotion.enabled]), i.useLayoutEffect(() => {
    null != L && "layout" === h && (L.resizeDrawingSurfaceToCanvas(), setTimeout(() => {
      L.resizeDrawingSurfaceToCanvas()
    }, 100))
  }, [L, h]), i.useEffect(() => {
    null != L && null == w && (D(L.stateMachineNames), L.reset({
      stateMachines: L.stateMachineNames,
      autoplay: _,
      artboard: b,
      autoBind: true
    }), L.setupRiveListeners())
  }, [L, _, w, b]);
  let j = i.useRef(0);
  i.useEffect(() => {
    if (null == L) return;
    L.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (j.current = t.data, t.data > 0 && ("halt" === y && N.reducedMotion.enabled && L.isPlaying && L.pause(), L.off(o.EventType.Advance, e)))
    };
    return L.on(o.EventType.Advance, e), () => {
      L.off(o.EventType.Advance, e)
    }
  }, [L, N.reducedMotion.enabled, y]);
  let k = i.useRef(false);
  return i.useEffect(() => {
    if (null != L) return !P && k.current && L.isPlaying && j.current > 0 ? L.pause() : P && !L.isPlaying && k.current && L.play(), () => {
      null != L && P && (k.current = null != L.frameRequestId)
    }
  }, [L, P]), (0, r.jsx)(M, {
    className: p,
    style: g
  })
}

function f(e) {
  let {
    rive: t,
    artboard: n,
    artboardProperties: r,
    dataBinding: a,
    dynamicDataBinding: s
  } = e, u = null != s ? s : a, d = (0, o.useViewModel)(t);
  (0, o.useViewModelInstance)(d);
  let {
    theme: f,
    saturation: _
  } = (0, c.ZF)(), {
    highContrastModeEnabled: p
  } = i.useContext(l.S), h = i.useRef(null);
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
          let S = null == (a = t.viewModelInstance) ? true : a.number(d);
          null != S && (S.value = b);
          break;
        case "boolean":
          let T = null == (o = t.viewModelInstance) ? true : o.boolean(d);
          null != T && (T.value = b);
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