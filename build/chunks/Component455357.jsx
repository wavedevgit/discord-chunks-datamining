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
  registerAsset: () => {},
  unregisterAsset: () => {},
  hasError: false,
  isLoading: true
});

function u(e) {
  return (0, o.kK)(e, HTMLImageElement) ? e.complete : (0, o.kK)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, o.kK)(e, HTMLDivElement) || true
}

function d(e) {
  return (0, o.kK)(e, HTMLImageElement) ? "load" : (0, o.kK)(e, HTMLVideoElement) ? "canplaythrough" : ((0, o.kK)(e, HTMLDivElement), "load")
}

function f(e) {
  var t, n;
  return (0, o.kK)(e, HTMLImageElement) ? e.getAttribute("src") : (0, o.kK)(e, HTMLVideoElement) ? null != (n = null == (t = e.querySelectorAll("source")[0]) ? true : t.getAttribute("src")) ? n : "video" : ((0, o.kK)(e, HTMLDivElement), e.tagName)
}

function p(e) {
  let {
    children: t,
    isPreview: n = false,
    source: o,
    questId: p
  } = e, [_, m] = i.useState(false), [h, g] = i.useState(new Set), [E, b] = i.useState(false), y = i.useRef(false);
  i.useEffect(() => {
    let e = new Set;
    for (let t of h) u(t) || e.add(t);
    e.size !== h.size && g(e)
  }, [h]);
  let O = i.useCallback(e => {
      let {
        assetNode: t,
        nodeId: r,
        errorPrefix: i,
        errorMessage: c
      } = e;
      n || null == o || (a.default.track(l.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: o,
        quest_id: p,
        asset_id: f(t)
      }), s.Z.captureException(Error("".concat(i, ": ").concat(null != c ? "".concat(c, ", ") : "").concat(f(t), ", ").concat(r)), {
        tags: {
          source: o
        }
      }), m(true))
    }, [n, o, p]),
    v = i.useCallback(e => {
      g(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    S = i.useCallback((e, t) => {
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
    I = i.useMemo(() => h.size > 0 || !E, [E, h]);
  i.useEffect(() => {
    I || (y.current = true)
  }, [I]);
  let T = i.useMemo(() => ({
    registerAsset: S,
    unregisterAsset: v,
    hasError: _,
    isLoading: I && !y.current
  }), [S, v, _, I]);
  return (0, r.jsx)(c.Provider, {
    value: T,
    children: t
  })
}

function _(e) {
  let {
    id: t,
    children: n
  } = e, {
    registerAsset: r,
    unregisterAsset: o
  } = i.useContext(c), a = i.useRef(null);
  return i.useEffect(() => {
    let e = a.current;
    return null != e && r(e, t), () => {
      null != e && o(e)
    }
  }, [r, o, t]), n(a)
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