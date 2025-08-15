/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk535333 = require("./535333.js");

function g(e) {
  let {
    handleTransition: t,
    selectedTab: r
  } = e, {
    searchQuery: g,
    onSetSearchQuery: f
  } = (0, s.S)(), [b, m] = l.useState(""), h = (0, o.sp)();
  return l.useEffect(() => {
    let e = setTimeout(() => {
      f(b)
    }, 250);
    return () => clearTimeout(e)
  }, [b, f]), l.useEffect(() => {
    m(g)
  }, [g]), (0, n.jsx)(a.P3F, {
    ignoreKeyPress: true,
    onClick: () => {
      r !== c.AW.CATALOG && t(c.AW.CATALOG), i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == h ? true : h.sessionId,
        page_section: null == h ? true : h.pageSection,
        page_category: null == h ? true : h.pageCategory,
        page_index: null == h ? true : h.pageIndex,
        page_size: null == h ? true : h.pageSize,
        cta_name: "search bar",
        page_type: r
      })
    },
    children: (0, n.jsx)(a.E1j, {
      size: "sm",
      className: p.searchBar,
      onKeyDown: e => {
        "Enter" === e.key && f(b)
      },
      query: b,
      onChange: m,
      onClear: () => {
        m(""), i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == h ? true : h.sessionId,
          page_section: null == h ? true : h.pageSection,
          page_category: null == h ? true : h.pageCategory,
          page_index: null == h ? true : h.pageIndex,
          page_size: null == h ? true : h.pageSize,
          cta_name: "search bar clear",
          page_type: r
        })
      },
      placeholder: d.intl.string(d.t["hIt/Nj"])
    })
  })
}