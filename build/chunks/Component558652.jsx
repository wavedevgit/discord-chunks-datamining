/** Chunk was on 1272 **/
/** chunk id: 558652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk264282 = require("./264282.jsx"),
  Chunk78606 = require("./78606.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk937018 = require("./937018.js");
let h = [];

function g() {
  let [e, t] = Chunk473749.useState(Chunk46140.yq.SUGGESTED), [n, g] = Chunk473749.useState(h), {
    quests: m,
    isFetchingCurrentQuests: _,
    hasFetched: b
  } = (0, Chunk113434.bA)(Chunk113434.e5.ALL, Chunk473749.useMemo(() => ({
    sortMethod: module,
    filters: require
  }), [module, require])), E = Chunk473749.useCallback(() => {
    g(h)
  }, []), O = Chunk473749.useRef(null), y = Chunk473749.useRef(null), v = (0, Chunk828700.TH)(), I = (0, Chunk828700.k6)();
  return Chunk473749.useEffect(() => {
    if ("" !== v.hash && null != O.current && null != y.current) {
      var t, r;
      (module !== O.current || require !== y.current) && I.replace((t = function(e) {
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
      }({}, v), r = r = {
        hash: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(Chunk54381)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(Chunk54381)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), exports))
    }
  }, [module, require, v, I]), Chunk473749.useEffect(() => {
    O.current = module
  }, [module]), Chunk473749.useEffect(() => {
    y.current = require
  }, [require]), (0, Chunk113434.SU)({
    selectedSortMethod: module,
    selectedFilters: require,
    numQuestsVisible: m.length
  }), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk937018.headingWrapper,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/medium",
        children: Chunk388032.intl.string(Chunk388032.t.giYD00)
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk937018.headingControls,
        children: [(0, Chunk54381.jsx)(Chunk78606.Z, {
          onChange: exports,
          optionClassName: Chunk937018.filterSortOption,
          selectedSortMethod: module
        }), (0, Chunk54381.jsx)(Chunk264282.Z, {
          onChange: g,
          selectedFilters: require
        })]
      })]
    }), (0, Chunk54381.jsx)(Chunk710914.Z, {
      quests: m,
      isFetching: _,
      hasFetched: b,
      hasFiltersApplied: require.length > 0,
      onClearFilters: E
    })]
  })
}