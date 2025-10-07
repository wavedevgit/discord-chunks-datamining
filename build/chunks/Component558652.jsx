/** Chunk was on 1272 **/
/** chunk id: 558652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk113434 = require("./113434.js"),
  Chunk937797 = require("./937797.js"),
  Chunk264282 = require("./264282.jsx"),
  Chunk78606 = require("./78606.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk872058 = require("./872058.js");
let b = [];

function _() {
  let {
    enabled: e
  } = Chunk937797.$d.useConfig({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), [t, n] = Chunk647438.useState(Chunk46140.yq.SUGGESTED), [_, O] = Chunk647438.useState(b), {
    quests: E,
    isFetchingCurrentQuests: v,
    hasFetched: y
  } = (0, Chunk113434.bA)(Chunk113434.e5.ALL, Chunk647438.useMemo(() => ({
    sortMethod: exports,
    filters: _
  }), [exports, _])), I = Chunk647438.useCallback(() => {
    O(b)
  }, []), S = Chunk647438.useRef(null), C = Chunk647438.useRef(null), T = (0, Chunk843611.TH)(), N = (0, Chunk843611.k6)();
  return Chunk647438.useEffect(() => {
    if ("" !== T.hash && null != S.current && null != C.current) {
      var e, n;
      (exports !== S.current || _ !== C.current) && N.replace((e = function(e) {
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
      }({}, T), n = n = {
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
  }, [exports, _, T, N]), Chunk647438.useEffect(() => {
    module && (Chunk626135.default.track(Chunk981631.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: exports,
      previous_sort_method: S.current
    }), S.current = exports)
  }, [exports, module]), Chunk647438.useEffect(() => {
    var t, n;
    module && (Chunk626135.default.track(Chunk981631.rMx.QUEST_HOME_FILTERS_CHANGED, {
      filters: _.map(e => e.filter),
      previous_filters: null != (n = null == (t = C.current) ? true : exports.map(e => e.filter)) ? require : [],
      num_quests_visible: E.length
    }), C.current = _)
  }, [_, module, E.length]), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
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
          onChange: O,
          optionClassName: Chunk872058.filterSortOption,
          selectedFilters: _
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk710914.Z, {
      quests: E,
      isFetching: v,
      hasFetched: y,
      hasFiltersApplied: _.length > 0,
      onClearFilters: I
    })]
  })
}