/** Chunk was on web.js **/
/** chunk id: 78826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fl: () => p,
  d7: () => h,
  p: () => _
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk374470 = require("./374470.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let c = Chunk647438.createContext({
  registerAsset: () => {},
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

function _(e) {
  let {
    children: t,
    isPreview: n = false,
    source: a,
    questId: _
  } = e, [p, h] = i.useState(false), [m, g] = i.useState(new Set), [E, b] = i.useState(false), y = i.useRef(false);
  i.useEffect(() => {
    let e = new Set;
    for (let t of m) u(t) || e.add(t);
    e.size !== m.size && g(e)
  }, [m]);
  let O = i.useCallback(e => {
      let {
        assetNode: t,
        nodeId: r,
        errorPrefix: i,
        errorMessage: c
      } = e;
      n || null == a || (o.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: a,
        quest_id: _,
        asset_id: f(t)
      }), s.Z.captureException(Error("".concat(i, ": ").concat(null != c ? "".concat(c, ", ") : "").concat(f(t), ", ").concat(r)), {
        tags: {
          source: a
        }
      }), h(true))
    }, [n, a, _]),
    v = i.useCallback(e => {
      g(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    I = i.useCallback((e, t) => {
      if (b(true), u(e)) return;
      g(t => {
        let n = new Set(t);
        return n.add(e), n
      });
      let n = d(e);

      function r() {
        v(e), e.removeEventListener(n, r)
      }

      function i(n) {
        v(e), O({
          assetNode: e,
          nodeId: t,
          errorPrefix: "Error loading asset",
          errorMessage: "message" in n ? n.message : null
        }), e.removeEventListener("error", i)
      }
      e.addEventListener(n, r), e.addEventListener("error", i)
    }, [O, v]),
    T = i.useMemo(() => m.size > 0 || !E, [E, m]);
  i.useEffect(() => {
    T || (y.current = true)
  }, [T]);
  let S = i.useMemo(() => ({
    registerAsset: I,
    unregisterAsset: v,
    hasError: p,
    isLoading: T && !y.current
  }), [I, v, p, T]);
  return (0, r.jsx)(c.Provider, {
    value: S,
    children: t
  })
}

function p(e) {
  let {
    id: t,
    children: n
  } = e, {
    registerAsset: r,
    unregisterAsset: a
  } = i.useContext(c), o = i.useRef(null);
  return i.useEffect(() => {
    let e = o.current;
    return null != e && r(e, t), () => {
      null != e && a(e)
    }
  }, [r, a, t]), n(o)
}

function h() {
  let {
    hasError: e,
    isLoading: t
  } = Chunk647438.useContext(c);
  return {
    hasError: module,
    isLoading: exports
  }
}