/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk675997 = require("./675997.js"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk841952 = require("./841952.js"),
  Chunk138954 = require("./138954.js");
let v = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: r
  } = (0, Chunk501431.S)(), a = (0, Chunk381585.sp)(), {
    enableShopTakeOver: v
  } = Chunk675997.Z.useConfig({
    location: "CollectiblesSortSelect"
  }), O = require(), C = Chunk73800.useMemo(() => Chunk215023.aP.filter(e => e.sortType !== s.E.RELEVANCE || O), [O]), E = Chunk73800.useCallback(e => {
    let {
      sortType: t,
      sortDirection: r
    } = e;
    return t === s.E.RECENCY ? {
      label: h.intl.string(h.t["51Bhi4"]),
      value: "recent"
    } : t === s.E.PRICE ? r === o.F.ASC ? {
      label: h.intl.string(h.t.m8RVU1),
      value: "price-asc"
    } : {
      label: h.intl.string(h.t.zBwQJC),
      value: "price-desc"
    } : t === s.E.RELEVANCE ? {
      label: h.intl.string(h.t["XoeT//"]),
      value: "relevance"
    } : {
      label: h.intl.string(h.t.Y68e5u),
      value: "popularity"
    }
  }, []), S = Chunk73800.useCallback(e => ({
    recent: {
      sortType: s.E.RECENCY,
      sortDirection: o.F.DESC
    },
    "price-asc": {
      sortType: s.E.PRICE,
      sortDirection: o.F.ASC
    },
    "price-desc": {
      sortType: s.E.PRICE,
      sortDirection: o.F.DESC
    },
    popularity: {
      sortType: s.E.POPULARITY,
      sortDirection: o.F.DESC
    },
    relevance: {
      sortType: s.E.RELEVANCE,
      sortDirection: o.F.DESC
    }
  })[e], []), y = Chunk73800.useCallback(e => {
    let r = E(S(e));
    u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == a ? true : a.sessionId,
      page_section: null == a ? true : a.pageSection,
      page_category: null == a ? true : a.pageCategory,
      page_index: null == a ? true : a.pageIndex,
      page_size: null == a ? true : a.pageSize,
      cta_name: "sort by ".concat(r.label.toLowerCase()),
      page_type: "catalog"
    }), t(S(e))
  }, [Chunk120356, E, S, exports]), x = E(module);
  return (0, Chunk255367.jsx)("div", {
    className: i()({
      [Chunk138954.shopTakeOver]: v
    }),
    children: (0, Chunk255367.jsx)(Chunk481060.PhF, {
      look: Chunk481060.qQH.CUSTOM,
      className: Chunk841952.custom,
      options: C.map(E),
      select: y,
      isSelected: e => e === x.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: i()({
        [Chunk138954.shopTakeOver]: v
      })
    })
  })
}