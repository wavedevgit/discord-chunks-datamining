/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk811847 = require("./811847.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk182668 = require("./182668.js"),
  Chunk219588 = require("./219588.js");
let b = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, Chunk501431.S)(), i = (0, Chunk381585.sp)(), b = (0, Chunk811847.B)("CollectiblesSortSelect"), v = require(), x = Chunk473749.useMemo(() => Chunk215023.aP.filter(e => e.sortType !== s.E.RELEVANCE || v), [v]), E = Chunk473749.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === s.E.RECENCY ? {
      label: C.intl.string(C.t["51Bhiz"]),
      value: "recent"
    } : t === s.E.PRICE ? n === o.F.ASC ? {
      label: C.intl.string(C.t.m8RVU2),
      value: "price-asc"
    } : {
      label: C.intl.string(C.t.zBwQJO),
      value: "price-desc"
    } : t === s.E.RELEVANCE ? {
      label: C.intl.string(C.t["XoeT/z"]),
      value: "relevance"
    } : {
      label: C.intl.string(C.t.Y68e5p),
      value: "popularity"
    }
  }, []), O = Chunk473749.useCallback(e => ({
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
  })[e], []), S = Chunk473749.useCallback(e => {
    let n = E(O(e));
    u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == i ? true : i.sessionId,
      page_section: null == i ? true : i.pageSection,
      page_category: null == i ? true : i.pageCategory,
      page_index: null == i ? true : i.pageIndex,
      page_size: null == i ? true : i.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(O(e))
  }, [Chunk120356, E, O, exports]), y = E(module);
  return (0, Chunk54381.jsx)("div", {
    className: a()(Chunk182668.container, {
      [Chunk219588.customCursors]: b
    }),
    children: (0, Chunk54381.jsx)(Chunk481060.PhF, {
      options: x.map(E),
      select: S,
      isSelected: e => e === y.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: a()({
        [Chunk219588.customCursors]: b
      })
    })
  })
}