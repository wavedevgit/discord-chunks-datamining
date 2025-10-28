/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk182668 = require("./182668.js"),
  Chunk345213 = require("./345213.js");
let b = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, Chunk501431.S)(), i = (0, Chunk381585.sp)(), b = (0, Chunk642909.G)("CollectiblesSortSelect"), v = require(), E = Chunk647438.useMemo(() => Chunk215023.aP.filter(e => e.sortType !== a.E.RELEVANCE || v), [v]), x = Chunk647438.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === a.E.RECENCY ? {
      label: h.intl.string(h.t["51Bhiz"]),
      value: "recent"
    } : t === a.E.PRICE ? n === s.F.ASC ? {
      label: h.intl.string(h.t.m8RVU2),
      value: "price-asc"
    } : {
      label: h.intl.string(h.t.zBwQJO),
      value: "price-desc"
    } : t === a.E.RELEVANCE ? {
      label: h.intl.string(h.t["XoeT/z"]),
      value: "relevance"
    } : {
      label: h.intl.string(h.t.Y68e5p),
      value: "popularity"
    }
  }, []), O = Chunk647438.useCallback(e => ({
    recent: {
      sortType: a.E.RECENCY,
      sortDirection: s.F.DESC
    },
    "price-asc": {
      sortType: a.E.PRICE,
      sortDirection: s.F.ASC
    },
    "price-desc": {
      sortType: a.E.PRICE,
      sortDirection: s.F.DESC
    },
    popularity: {
      sortType: a.E.POPULARITY,
      sortDirection: s.F.DESC
    },
    relevance: {
      sortType: a.E.RELEVANCE,
      sortDirection: s.F.DESC
    }
  })[e], []), S = Chunk647438.useCallback(e => {
    let n = x(O(e));
    u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == i ? true : i.sessionId,
      page_section: null == i ? true : i.pageSection,
      page_category: null == i ? true : i.pageCategory,
      page_index: null == i ? true : i.pageIndex,
      page_size: null == i ? true : i.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(O(e))
  }, [Chunk120356, x, O, exports]), y = x(module);
  return (0, Chunk951288.jsx)("div", {
    className: o()(Chunk182668.container, {
      [Chunk345213.shopTakeOver]: b
    }),
    children: (0, Chunk951288.jsx)(Chunk481060.PhF, {
      options: E.map(x),
      select: S,
      isSelected: e => e === y.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: o()({
        [Chunk345213.shopTakeOver]: b
      })
    })
  })
}