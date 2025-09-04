/** Chunk was on 1272 **/
/** chunk id: 558652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let m = [];

function b() {
  let {
    enabled: e
  } = Chunk937797.$d.useConfig({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), [t, n] = Chunk647438.useState(Chunk46140.yq.SUGGESTED), [b, _] = Chunk647438.useState(m), {
    quests: O,
    isFetchingCurrentQuests: E
  } = (0, Chunk113434.bA)(Chunk113434.e5.ALL, Chunk647438.useMemo(() => ({
    sortMethod: exports,
    filters: b
  }), [exports, b])), y = Chunk647438.useCallback(() => {
    _(m)
  }, []);
  return Chunk647438.useEffect(() => {
    module && Chunk626135.default.track(Chunk981631.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: exports
    })
  }, [exports, module]), Chunk647438.useEffect(() => {
    module && Chunk626135.default.track(Chunk981631.rMx.QUEST_HOME_FILTERS_CHANGED, {
      filters: b.map(e => e.filter),
      num_quests_visible: O.length
    })
  }, [b, module, O.length]), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
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
          onChange: _,
          optionClassName: Chunk872058.filterSortOption,
          selectedFilters: b
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk710914.Z, {
      quests: O,
      isFetching: E,
      hasFiltersApplied: b.length > 0,
      onClearFilters: y
    })]
  })
}