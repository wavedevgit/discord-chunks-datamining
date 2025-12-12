/** Chunk was on web.js **/
/** chunk id: 455357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fl: () => _,
  kC: () => m,
  x8: () => p
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let c = Chunk473749.createContext({
  registerAsset: () => () => {},
  unregisterAsset: () => {},
  hasError: false,
  isLoading: true
});

function u(e) {
  return (0, a.kK)(e, HTMLImageElement) ? e.complete : (0, a.kK)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, a.kK)(e, HTMLDivElement) || true
}

function d(e) {
  return (0, a.kK)(e, HTMLImageElement) ? "load" : (0, a.kK)(e, HTMLVideoElement) ? "canplaythrough" : ((0, a.kK)(e, HTMLDivElement), "load")
}

function f(e) {
  var t, n;
  return (0, a.kK)(e, HTMLImageElement) ? e.getAttribute("src") : (0, a.kK)(e, HTMLVideoElement) ? null != (n = null == (t = e.querySelectorAll("source")[0]) ? true : t.getAttribute("src")) ? n : "video" : ((0, a.kK)(e, HTMLDivElement), e.tagName)
}

function p(e) {
  let {
    children: t,
    isPreview: n = false,
    source: p,
    questId: _,
    listenForSourceError: m = false
  } = e, [h, g] = i.useState(false), [E, b] = i.useState(new Set), [y, O] = i.useState(false), v = i.useRef(false);
  i.useEffect(() => {
    let e = new Set;
    for (let t of E) u(t) || e.add(t);
    e.size !== E.size && b(e)
  }, [E]);
  let S = i.useCallback(e => {
      let {
        assetNode: t,
        nodeId: r,
        errorPrefix: i,
        errorMessage: c
      } = e;
      if (n || null == p) return;
      let u = (0, a.kK)(t, HTMLVideoElement) ? t.networkState : true;
      o.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: p,
        quest_id: _,
        asset_id: f(t),
        video_network_state: u
      }), s.Z.captureException(Error("".concat(i, ": ").concat(null != c ? "".concat(c, ", ") : "").concat(f(t), ", ").concat(r)), {
        tags: {
          source: p
        }
      }), g(true)
    }, [n, p, _]),
    I = i.useCallback(e => {
      b(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    T = i.useCallback((e, t) => {
      O(true);
      let n = d(e),
        r = new AbortController;

      function i() {
        I(e), e.removeEventListener(n, i)
      }

      function o(n) {
        s(), I(e), S({
          assetNode: e,
          nodeId: t,
          errorPrefix: "Error loading asset",
          errorMessage: "message" in n ? n.message : null
        })
      }
      if (u(e) || (b(t => {
          let n = new Set(t);
          return n.add(e), n
        }), e.addEventListener(n, i)), e.addEventListener("error", o, {
          signal: r.signal
        }), (0, a.kK)(e, HTMLVideoElement) && m) {
        let t = e.querySelectorAll("source"),
          n = t[t.length - 1];
        null == n || n.addEventListener("error", o, {
          signal: r.signal
        })
      }

      function s() {
        if (r.abort(), e.removeEventListener(n, i), e.removeEventListener("error", o), (0, a.kK)(e, HTMLVideoElement) && m) {
          let t = e.querySelectorAll("source"),
            n = t[t.length - 1];
          null == n || n.removeEventListener("error", o)
        }
      }
      return s
    }, [S, I, m]),
    C = i.useMemo(() => E.size > 0 || !y, [y, E]);
  i.useEffect(() => {
    C || (v.current = true)
  }, [C]);
  let A = i.useMemo(() => ({
    registerAsset: T,
    unregisterAsset: I,
    hasError: h,
    isLoading: C && !v.current
  }), [T, I, h, C]);
  return (0, r.jsx)(c.Provider, {
    value: A,
    children: t
  })
}

function _(e) {
  let {
    id: t,
    children: n
  } = e, {
    registerAsset: r,
    unregisterAsset: a
  } = i.useContext(c), o = i.useRef(null);
  return i.useEffect(() => {
    let e, n = o.current;
    return null != n && (e = r(n, t)), () => {
      null == e || e(), null != n && a(n)
    }
  }, [r, a, t]), n(o)
}

function m() {
  let {
    hasError: e,
    isLoading: t
  } = Chunk473749.useContext(c);
  return {
    hasError: module,
    isLoading: exports
  }
}