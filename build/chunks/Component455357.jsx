/** Chunk was on web.js **/
/** chunk id: 455357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fl: () => m,
  kC: () => g,
  x8: () => h
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk261470 = require("./261470.js"),
  Chunk374470 = require("./374470.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let u = 3,
  d = Chunk473749.createContext({
    registerAsset: () => () => {},
    unregisterAsset: () => {},
    hasError: false,
    isLoading: true
  });

function f(e) {
  return (0, o.kK)(e, HTMLImageElement) ? e.complete : (0, o.kK)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, o.kK)(e, HTMLDivElement) || true
}

function p(e) {
  return (0, o.kK)(e, HTMLImageElement) ? "load" : (0, o.kK)(e, HTMLVideoElement) ? "canplaythrough" : ((0, o.kK)(e, HTMLDivElement), "load")
}

function _(e) {
  var t, n;
  return (0, o.kK)(e, HTMLImageElement) ? e.getAttribute("src") : (0, o.kK)(e, HTMLVideoElement) ? null != (n = null == (t = e.querySelectorAll("source")[0]) ? true : t.getAttribute("src")) ? n : "video" : ((0, o.kK)(e, HTMLDivElement), e.tagName)
}

function h(e) {
  let {
    children: t,
    isPreview: n = false,
    source: h,
    questId: m,
    listenForSourceError: g = false,
    retrySourceLoadOnError: E = false
  } = e, [b, y] = i.useState(false), [O, v] = i.useState(new Set), [S, I] = i.useState(false), T = i.useRef(false);
  i.useEffect(() => {
    let e = new Set;
    for (let t of O) f(t) || e.add(t);
    e.size !== O.size && v(e)
  }, [O]);
  let C = i.useCallback(e => {
      let {
        assetNode: t,
        nodeId: r,
        errorPrefix: i,
        errorMessage: a
      } = e;
      if (n || null == h) return;
      let u = (0, o.kK)(t, HTMLVideoElement) ? t.networkState : true;
      s.default.track(c.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: h,
        quest_id: m,
        asset_id: _(t),
        video_network_state: u
      }), l.Z.captureException(Error("".concat(i, ": ").concat(null != a ? "".concat(a, ", ") : "").concat(_(t), ", ").concat(r)), {
        tags: {
          source: h
        }
      }), y(true)
    }, [n, h, m]),
    A = i.useCallback(e => {
      v(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    N = i.useCallback((e, t) => {
      I(true);
      let n = p(e),
        r = new AbortController,
        i = new a.Z;

      function s() {
        i.succeed(), A(e), e.removeEventListener(n, s)
      }

      function l(n) {
        d(), A(e), C({
          assetNode: e,
          nodeId: t,
          errorPrefix: "Error loading asset",
          errorMessage: "message" in n ? n.message : null
        })
      }

      function c(t) {
        if (E && i.fails < u && (0, o.kK)(e, HTMLVideoElement)) return void i.fail(() => {
          e.load()
        });
        l(t)
      }
      if (f(e) || (v(t => {
          let n = new Set(t);
          return n.add(e), n
        }), e.addEventListener(n, s)), e.addEventListener("error", l, {
          signal: r.signal
        }), g && (0, o.kK)(e, HTMLVideoElement)) {
        let t = e.querySelectorAll("source"),
          n = t[t.length - 1];
        null == n || n.addEventListener("error", c, {
          signal: r.signal
        })
      }

      function d() {
        if (i.cancel(), r.abort(), e.removeEventListener(n, s), e.removeEventListener("error", l), g && (0, o.kK)(e, HTMLVideoElement)) {
          let t = e.querySelectorAll("source"),
            n = t[t.length - 1];
          null == n || n.removeEventListener("error", c)
        }
      }
      return d
    }, [C, A, g, E]),
    P = i.useMemo(() => O.size > 0 || !S, [S, O]);
  i.useEffect(() => {
    P || (T.current = true)
  }, [P]);
  let w = i.useMemo(() => ({
    registerAsset: N,
    unregisterAsset: A,
    hasError: b,
    isLoading: P && !T.current
  }), [N, A, b, P]);
  return (0, r.jsx)(d.Provider, {
    value: w,
    children: t
  })
}

function m(e) {
  let {
    id: t,
    children: n
  } = e, {
    registerAsset: r,
    unregisterAsset: a
  } = i.useContext(d), o = i.useRef(null);
  return i.useEffect(() => {
    let e, n = o.current;
    return null != n && (e = r(n, t)), () => {
      null == e || e(), null != n && a(n)
    }
  }, [r, a, t]), n(o)
}

function g() {
  let {
    hasError: e,
    isLoading: t
  } = i.useContext(d);
  return {
    hasError: e,
    isLoading: t
  }
}