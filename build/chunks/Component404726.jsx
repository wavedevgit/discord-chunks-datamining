/** Chunk was on web.js **/
/** chunk id: 404726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => d
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk902778 = require("./902778.js"),
  Chunk948890 = require("./948890.js"),
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
    touchScrollEnabled: T = true,
    dynamicDataBinding: S,
    listenOnDocumentBody: A,
    eventCapture: C
  } = e, N = i.useContext(l.S), R = (0, s.C)(), P = null != (a = null == (t = (n = (0, c.ZF)()).isWindowFocused) ? true : t.call(n)) ? a : R, [D, w] = i.useState(true), x = i.useRef(null), {
    rive: L,
    RiveComponent: M
  } = (0, o.useRive)({
    eventTarget: null == E ? true : E.current,
    buffer: d,
    autoplay: _,
    stateMachines: D,
    artboard: b,
    useOffscreenRenderer: true,
    layout: new o.Layout({
      fit: null != h ? u.M[h] : o.Fit.Cover,
      alignment: null != m ? u.Y[m] : o.Alignment.Center
    }),
    isTouchScrollEnabled: T,
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
    dynamicDataBinding: S
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
    null != L && null == D && (w(L.stateMachineNames), L.reset({
      stateMachines: L.stateMachineNames,
      autoplay: _,
      artboard: b,
      autoBind: true
    }), L.setupRiveListeners())
  }, [L, _, D, b]);
  let k = i.useRef(0);
  i.useEffect(() => {
    if (null == L) return;
    L.play();
    let e = t => {
      null != t.data && "number" == typeof t.data && (k.current = t.data, t.data > 0 && ("halt" === y && N.reducedMotion.enabled && L.isPlaying && L.pause(), L.off(o.EventType.Advance, e)))
    };
    return L.on(o.EventType.Advance, e), () => {
      L.off(o.EventType.Advance, e)
    }
  }, [L, N.reducedMotion.enabled, y]);
  let j = i.useRef(false);
  return i.useEffect(() => {
    if (null != L) return !P && j.current && L.isPlaying && k.current > 0 ? L.pause() : P && !L.isPlaying && j.current && L.play(), () => {
      null != L && P && (j.current = null != L.frameRequestId)
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
    saturation: p
  } = (0, c.ZF)(), {
    highContrastModeEnabled: h
  } = i.useContext(l.S), m = i.useRef(null), g = _();
  i.useEffect(() => {
    let e = new AbortController;
    return async function() {
      if (null == t || null == t.viewModelInstance || null == u) return;
      let i = r[null != n ? n : ""];
      for (let n of Object.entries(u)) {
        var a, o, s, l, c, d, _, E, b;
        if (e.signal.aborted) return;
        let r = n[0],
          u = n[1],
          y = null != u && "object" == typeof u && "type" in u,
          O = y ? u.type : i[r],
          v = y ? u.value : u;
        switch (O) {
          case "color":
            let [I, T, S, A] = v.resolve({
              theme: f,
              saturation: p,
              highContrastModeEnabled: h
            }).rgba();
            null == (o = t.viewModelInstance) || null == (a = o.color(r)) || a.rgba(I, T, S, 255 * A);
            break;
          case "number":
            let C = null == (s = t.viewModelInstance) ? true : s.number(r);
            null != C && (C.value = v);
            break;
          case "boolean":
            let N = null == (l = t.viewModelInstance) ? true : l.boolean(r);
            null != N && (N.value = v);
            break;
          case "trigger":
            null != v && ("boolean" == typeof v ? v : 0 !== v) && (null == (c = m.current) ? true : c[r]) !== v && (null == (_ = t.viewModelInstance) || null == (d = _.trigger(r)) || d.trigger());
            break;
          case "string":
            let R = null == (E = t.viewModelInstance) ? true : E.string(r);
            null != R && (R.value = v);
            break;
          case "image":
            if (null != v) {
              let n = await g(v, e.signal);
              if (e.signal.aborted) return;
              let i = null == (b = t.viewModelInstance) ? true : b.image(r);
              null != i && (i.value = n)
            }
            break;
          default:
            console.warn("Unknown property type: ".concat(O))
        }
      }
    }(), () => {
      e.abort(), m.current = u
    }
  }, [u, t, n, r, f, null == t ? true : t.viewModelInstance, p, h, g])
}

function _() {
  let e = Chunk647438.useRef({});
  return Chunk647438.useCallback(async (t, n) => {
    if ("string" != typeof t) return Promise.resolve(t);
    {
      if (null != e.current[t]) return Promise.resolve(e.current[t]);
      let r = await fetch(t, {
          signal: n
        }),
        i = await r.arrayBuffer(),
        a = await (0, o.decodeImage)(new Uint8Array(i));
      return e.current[t] = a, a
    }
  }, [])
}
Chunk948890.RuntimeLoader.setWasmUrl(Chunk902778)