/** Chunk was on 1272 **/
/** chunk id: 558652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./35282.js"), require("./388685.js"), require("./704826.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823379 = require("./823379.js"),
  Chunk624138 = require("./624138.js"),
  Chunk113434 = require("./113434.js"),
  Chunk264282 = require("./264282.jsx"),
  Chunk78606 = require("./78606.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk395995 = require("./395995.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk872058 = require("./872058.js");
let _ = [],
  b = Chunk113434.tR.SORT,
  E = Chunk113434.tR.FILTER;

function O() {
  let [e, t] = (0, Chunk395995.P)(), n = Chunk473749.useMemo(() => {
    var t, n;
    return null !== (n = module.get(b), t = (0, Chunk624138.Ew)(require) ? null : Object.values(Chunk46140.yq).find(e => e === n) || null) && true !== exports ? exports : Chunk46140.yq.SUGGESTED
  }, [module]), O = Chunk473749.useMemo(() => {
    var t;
    return null != (t = function(e) {
      if ((0, o.Ew)(e)) return null;
      let t = e.split(",").map(e => (0, h.fI)(e)).filter(s.lm);
      return t.length > 0 ? t : null
    }(module.get(E))) ? exports : _
  }, [module]), y = Chunk473749.useCallback(e => {
    t({
      [b]: e
    })
  }, [exports]), v = Chunk473749.useCallback(e => {
    t({
      [E]: 0 === e.length ? null : e.map(e => {
        let {
          filter: t
        } = e;
        return t
      }).join(",")
    })
  }, [exports]), {
    quests: I,
    excludedQuests: C,
    isFetchingCurrentQuests: S,
    hasFetched: T
  } = (0, Chunk113434.bA)(Chunk113434.e5.ALL, Chunk473749.useMemo(() => ({
    sortMethod: require,
    filters: O
  }), [require, O])), N = Chunk473749.useCallback(() => {
    v(_)
  }, [v]), j = Chunk473749.useRef(null), P = Chunk473749.useRef(null), x = (0, Chunk828700.TH)(), A = (0, Chunk828700.k6)();
  return Chunk473749.useEffect(() => {
    if ("" !== x.hash && null != j.current && null != P.current) {
      var e, t;
      (require !== j.current || O !== P.current) && A.replace((e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, x), t = t = {
        hash: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module))
    }
  }, [require, O, x, A]), Chunk473749.useEffect(() => {
    j.current = require
  }, [require]), Chunk473749.useEffect(() => {
    P.current = O
  }, [O]), (0, Chunk113434.SU)({
    selectedSortMethod: require,
    selectedFilters: O,
    numQuestsVisible: I.length
  }), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk872058.headingWrapper,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/medium",
        children: Chunk388032.intl.string(Chunk388032.t.giYD00)
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk872058.headingControls,
        children: [(0, Chunk54381.jsx)(Chunk78606.Z, {
          onChange: y,
          optionClassName: Chunk872058.filterSortOption,
          selectedSortMethod: require
        }), (0, Chunk54381.jsx)(Chunk264282.Z, {
          onChange: v,
          selectedFilters: O
        })]
      })]
    }), (0, Chunk54381.jsx)(Chunk710914.Z, {
      quests: I,
      excludedQuests: C,
      isFetching: S,
      hasFetched: T,
      hasFiltersApplied: O.length > 0,
      onClearFilters: N
    })]
  })
}