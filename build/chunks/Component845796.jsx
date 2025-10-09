/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  } = (0, Chunk501431.S)(), s = (0, Chunk381585.sp)(), b = (0, Chunk642909.G)("CollectiblesSortSelect"), E = require(), S = Chunk647438.useMemo(() => Chunk215023.aP.filter(e => e.sortType !== o.E.RELEVANCE || E), [E]), v = Chunk647438.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === o.E.RECENCY ? {
      label: h.intl.string(h.t["51Bhi4"]),
      value: "recent"
    } : t === o.E.PRICE ? n === a.F.ASC ? {
      label: h.intl.string(h.t.m8RVU1),
      value: "price-asc"
    } : {
      label: h.intl.string(h.t.zBwQJC),
      value: "price-desc"
    } : t === o.E.RELEVANCE ? {
      label: h.intl.string(h.t["XoeT//"]),
      value: "relevance"
    } : {
      label: h.intl.string(h.t.Y68e5u),
      value: "popularity"
    }
  }, []), x = Chunk647438.useCallback(e => ({
    recent: {
      sortType: o.E.RECENCY,
      sortDirection: a.F.DESC
    },
    "price-asc": {
      sortType: o.E.PRICE,
      sortDirection: a.F.ASC
    },
    "price-desc": {
      sortType: o.E.PRICE,
      sortDirection: a.F.DESC
    },
    popularity: {
      sortType: o.E.POPULARITY,
      sortDirection: a.F.DESC
    },
    relevance: {
      sortType: o.E.RELEVANCE,
      sortDirection: a.F.DESC
    }
  })[e], []), O = Chunk647438.useCallback(e => {
    let n = v(x(e));
    u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == s ? true : s.sessionId,
      page_section: null == s ? true : s.pageSection,
      page_category: null == s ? true : s.pageCategory,
      page_index: null == s ? true : s.pageIndex,
      page_size: null == s ? true : s.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(x(e))
  }, [Chunk120356, v, x, exports]), y = v(module);
  return (0, Chunk951288.jsx)("div", {
    className: i()(Chunk182668.container, {
      [Chunk345213.shopTakeOver]: b
    }),
    children: (0, Chunk951288.jsx)(Chunk481060.PhF, {
      options: S.map(v),
      select: O,
      isSelected: e => e === y.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: i()({
        [Chunk345213.shopTakeOver]: b
      })
    })
  })
}