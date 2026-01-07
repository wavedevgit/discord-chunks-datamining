/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let E = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, f.S)(), a = (0, d.sp)(), E = (0, g.B)("CollectiblesSortSelect"), v = n(), S = l.useMemo(() => b.aP.filter(e => e.sortType !== i.E.RELEVANCE || v), [v]), _ = l.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === i.E.RECENCY ? {
      label: m.intl.string(m.t["51Bhiz"]),
      value: "recent"
    } : t === i.E.PRICE ? n === o.F.ASC ? {
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
  }, []), x = l.useCallback(e => ({
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
  })[e], []), O = l.useCallback(e => {
    let n = _(x(e));
    u.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == a ? true : a.sessionId,
      page_section: null == a ? true : a.pageSection,
      page_category: null == a ? true : a.pageCategory,
      page_index: null == a ? true : a.pageIndex,
      page_size: null == a ? true : a.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(x(e))
  }, [a, _, x, t]), y = _(e);
  return (0, r.jsx)("div", {
    className: s()(h.container, {
      [C.customCursors]: E
    }),
    children: (0, r.jsx)(c.B6, {
      options: S.map(_),
      select: O,
      isSelected: e => e === y.value,
      serialize: e => e,
      popoutWidth: 224,
      popoutClassName: s()({
        [C.customCursors]: E
      })
    })
  })
}