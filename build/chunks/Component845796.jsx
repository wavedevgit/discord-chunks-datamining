/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let C = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, Chunk501431.S)(), a = (0, Chunk381585.sp)(), C = (0, Chunk642909.G)("CollectiblesSortSelect"), E = require(), S = Chunk647438.useMemo(() => Chunk215023.aP.filter(e => e.sortType !== i.E.RELEVANCE || E), [E]), O = Chunk647438.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === i.E.RECENCY ? {
      label: h.intl.string(h.t["51Bhi4"]),
      value: "recent"
    } : t === i.E.PRICE ? n === o.F.ASC ? {
      label: h.intl.string(h.t.m8RVU1),
      value: "price-asc"
    } : {
      label: h.intl.string(h.t.zBwQJC),
      value: "price-desc"
    } : t === i.E.RELEVANCE ? {
      label: h.intl.string(h.t["XoeT//"]),
      value: "relevance"
    } : {
      label: h.intl.string(h.t.Y68e5u),
      value: "popularity"
    }
  }, []), v = Chunk647438.useCallback(e => ({
    recent: {
      sortType: i.E.RECENCY,
      sortDirection: o.F.DESC
    },
    "price-asc": {
      sortType: i.E.PRICE,
      sortDirection: o.F.ASC
    },
    "price-desc": {
      sortType: i.E.PRICE,
      sortDirection: o.F.DESC
    },
    popularity: {
      sortType: i.E.POPULARITY,
      sortDirection: o.F.DESC
    },
    relevance: {
      sortType: i.E.RELEVANCE,
      sortDirection: o.F.DESC
    }
  })[e], []), x = Chunk647438.useCallback(e => {
    let n = O(v(e));
    u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == a ? true : a.sessionId,
      page_section: null == a ? true : a.pageSection,
      page_category: null == a ? true : a.pageCategory,
      page_index: null == a ? true : a.pageIndex,
      page_size: null == a ? true : a.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(v(e))
  }, [Chunk120356, O, v, exports]), y = O(module);
  return (0, Chunk951288.jsx)("div", {
    className: s()(Chunk182668.container, {
      [Chunk345213.shopTakeOver]: C
    }),
    children: (0, Chunk951288.jsx)(Chunk481060.PhF, {
      options: S.map(O),
      select: x,
      isSelected: e => e === y.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: s()({
        [Chunk345213.shopTakeOver]: C
      })
    })
  })
}