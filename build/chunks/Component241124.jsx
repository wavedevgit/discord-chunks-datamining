/** Chunk was on web.js **/
/** chunk id: 241124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gk: () => g,
  Sn: () => m,
  jY: () => h
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158390 = require("./158390.js"),
  Chunk621466 = require("./621466.js"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");
let u = 3,
  d = Chunk64700.createContext({
    registerAsset: () => () => {},
    unregisterAsset: () => {},
    hasError: false,
    isLoading: true
  });

function f(e) {
  return (0, s.vq)(e, HTMLImageElement) ? e.complete : (0, s.vq)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, s.vq)(e, HTMLDivElement) || true
}

function p(e) {
  return (0, s.vq)(e, HTMLImageElement) ? "load" : (0, s.vq)(e, HTMLVideoElement) ? "canplaythrough" : ((0, s.vq)(e, HTMLDivElement), "load")
}

function _(e) {
  var t, n;
  return (0, s.vq)(e, HTMLImageElement) ? e.getAttribute("src") : (0, s.vq)(e, HTMLVideoElement) ? null != (t = null == (n = e.querySelectorAll("source")[0]) ? true : n.getAttribute("src")) ? t : "video" : ((0, s.vq)(e, HTMLDivElement), e.tagName)
}

function h(e) {
  let {
    children: t,
    isPreview: n = false,
    source: h,
    questId: m,
    listenForSourceError: g = false,
    retrySourceLoadOnError: E = false
  } = e, [b, y] = i.useState(false), [O, A] = i.useState(new Set), [v, S] = i.useState(false), I = i.useRef(false);
  i.useEffect(() => {
    let e = new Set;
    for (let t of O) f(t) || e.add(t);
    e.size !== O.size && A(e)
  }, [O]);
  let T = i.useCallback(e => {
      let {
        assetNode: t,
        nodeId: r,
        errorPrefix: i,
        errorMessage: a
      } = e;
      if (n || null == h) return;
      let u = (0, s.vq)(t, HTMLVideoElement) ? t.networkState : true;
      o.default.track(c.HAw.QUEST_ASSET_LOADING_FAILURE, {
        source: h,
        quest_id: m,
        asset_id: _(t),
        video_network_state: u
      }), l.A.captureException(Error("".concat(i, ": ").concat(null != a ? "".concat(a, ", ") : "").concat(_(t), ", ").concat(r)), {
        tags: {
          source: h
        }
      }), y(true)
    }, [n, h, m]),
    C = i.useCallback(e => {
      A(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    N = i.useCallback((e, t) => {
      S(true);
      let n = p(e),
        r = new AbortController,
        i = new a.A;

      function o() {
        i.succeed(), C(e), e.removeEventListener(n, o)
      }

      function l(n) {
        d(), C(e), T({
          assetNode: e,
          nodeId: t,
          errorPrefix: "Error loading asset",
          errorMessage: "message" in n ? n.message : null
        })
      }

      function c(t) {
        E && i.fails < u && (0, s.vq)(e, HTMLVideoElement) ? i.fail(() => {
          e.load()
        }) : l(t)
      }
      if (f(e) || (A(t => {
          let n = new Set(t);
          return n.add(e), n
        }), e.addEventListener(n, o)), e.addEventListener("error", l, {
          signal: r.signal
        }), g && (0, s.vq)(e, HTMLVideoElement)) {
        let t = e.querySelectorAll("source"),
          n = t[t.length - 1];
        null == n || n.addEventListener("error", c, {
          signal: r.signal
        })
      }

      function d() {
        if (i.cancel(), r.abort(), e.removeEventListener(n, o), e.removeEventListener("error", l), g && (0, s.vq)(e, HTMLVideoElement)) {
          let t = e.querySelectorAll("source"),
            n = t[t.length - 1];
          null == n || n.removeEventListener("error", c)
        }
      }
      return d
    }, [T, C, g, E]),
    R = i.useMemo(() => O.size > 0 || !v, [v, O]);
  i.useEffect(() => {
    R || (I.current = true)
  }, [R]);
  let w = i.useMemo(() => ({
    registerAsset: N,
    unregisterAsset: C,
    hasError: b,
    isLoading: R && !I.current
  }), [N, C, b, R]);
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
  } = i.useContext(d), s = i.useRef(null);
  return i.useEffect(() => {
    let e, n = s.current;
    return null != n && (e = r(n, t)), () => {
      null == e || e(), null != n && a(n)
    }
  }, [r, a, t]), n(s)
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