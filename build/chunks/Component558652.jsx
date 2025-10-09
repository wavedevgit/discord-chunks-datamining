/** Chunk was on 1272 **/
/** chunk id: 558652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk937797 = require("./937797.js"),
  Chunk264282 = require("./264282.jsx"),
  Chunk78606 = require("./78606.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk872058 = require("./872058.js");
let g = [];

function m() {
  let {
    enabled: e
  } = Chunk937797.$d.useConfig({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), [t, n] = Chunk647438.useState(Chunk46140.yq.SUGGESTED), [m, b] = Chunk647438.useState(g), {
    quests: _,
    isFetchingCurrentQuests: O,
    hasFetched: E
  } = (0, Chunk113434.bA)(Chunk113434.e5.ALL, Chunk647438.useMemo(() => ({
    sortMethod: exports,
    filters: m
  }), [exports, m])), y = Chunk647438.useCallback(() => {
    b(g)
  }, []), v = Chunk647438.useRef(null), I = Chunk647438.useRef(null), S = (0, Chunk843611.TH)(), C = (0, Chunk843611.k6)();
  return Chunk647438.useEffect(() => {
    if ("" !== S.hash && null != v.current && null != I.current) {
      var e, n;
      (exports !== v.current || m !== I.current) && C.replace((e = function(e) {
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
      }({}, S), n = n = {
        hash: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(require)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(require)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), module))
    }
  }, [exports, m, S, C]), Chunk647438.useEffect(() => {
    v.current = exports
  }, [exports]), Chunk647438.useEffect(() => {
    I.current = m
  }, [m]), (0, Chunk113434.SU)({
    selectedSortMethod: exports,
    selectedFilters: m,
    numQuestsVisible: _.length
  }), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [module && (0, Chunk951288.jsxs)("div", {
      className: Chunk872058.headingWrapper,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/medium",
        children: Chunk388032.intl.string(Chunk388032.t.giYD09)
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk872058.headingControls,
        children: [(0, Chunk951288.jsx)(Chunk78606.Z, {
          onChange: require,
          optionClassName: Chunk872058.filterSortOption,
          selectedSortMethod: exports
        }), (0, Chunk951288.jsx)(Chunk264282.Z, {
          onChange: b,
          optionClassName: Chunk872058.filterSortOption,
          selectedFilters: m
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk710914.Z, {
      quests: _,
      isFetching: O,
      hasFetched: E,
      hasFiltersApplied: m.length > 0,
      onClearFilters: y
    })]
  })
}