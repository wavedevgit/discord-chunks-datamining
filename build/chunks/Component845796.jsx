/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk811847 = require("./811847.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk259163 = require("./259163.js"),
  Chunk868090 = require("./868090.js");
let v = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, Chunk501431.S)(), a = (0, Chunk381585.sp)(), v = (0, Chunk811847.B)("CollectiblesSortSelect"), E = require(), S = Chunk473749.useMemo(() => Chunk215023.aP.filter(e => e.sortType !== i.E.RELEVANCE || E), [E]), _ = Chunk473749.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === i.E.RECENCY ? {
      label: m.intl.string(m.t["51Bhiz"]),
      value: "recent"
    } : t === i.E.PRICE ? n === s.F.ASC ? {
      label: m.intl.string(m.t.m8RVU2),
      value: "price-asc"
    } : {
      label: m.intl.string(m.t.zBwQJO),
      value: "price-desc"
    } : t === i.E.RELEVANCE ? {
      label: m.intl.string(m.t["XoeT/z"]),
      value: "relevance"
    } : {
      label: m.intl.string(m.t.Y68e5p),
      value: "popularity"
    }
  }, []), O = Chunk473749.useCallback(e => ({
    recent: {
      sortType: i.E.RECENCY,
      sortDirection: s.F.DESC
    },
    "price-asc": {
      sortType: i.E.PRICE,
      sortDirection: s.F.ASC
    },
    "price-desc": {
      sortType: i.E.PRICE,
      sortDirection: s.F.DESC
    },
    popularity: {
      sortType: i.E.POPULARITY,
      sortDirection: s.F.DESC
    },
    relevance: {
      sortType: i.E.RELEVANCE,
      sortDirection: s.F.DESC
    }
  })[e], []), x = Chunk473749.useCallback(e => {
    let n = _(O(e));
    u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == a ? true : a.sessionId,
      page_section: null == a ? true : a.pageSection,
      page_category: null == a ? true : a.pageCategory,
      page_index: null == a ? true : a.pageIndex,
      page_size: null == a ? true : a.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(O(e))
  }, [Chunk120356, _, O, exports]), y = _(module);
  return (0, Chunk54381.jsx)("div", {
    className: o()(Chunk259163.container, {
      [Chunk868090.customCursors]: v
    }),
    children: (0, Chunk54381.jsx)(Chunk199849.B6, {
      options: S.map(_),
      select: x,
      isSelected: e => e === y.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: o()({
        [Chunk868090.customCursors]: v
      })
    })
  })
}