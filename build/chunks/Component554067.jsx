/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: p,
    onSetSearchQuery: f
  } = (0, o.S)(), [m, _] = l.useState(""), h = (0, i.sp)();
  return l.useEffect(() => {
    let e = setTimeout(() => {
      f(m)
    }, 250);
    return () => clearTimeout(e)
  }, [m, f]), l.useEffect(() => {
    _(p)
  }, [p]), (0, r.jsx)(a.P3F, {
    ignoreKeyPress: true,
    onClick: () => {
      n !== c.AW.CATALOG && t(c.AW.CATALOG), s.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == h ? true : h.sessionId,
        page_section: null == h ? true : h.pageSection,
        page_category: null == h ? true : h.pageCategory,
        page_index: null == h ? true : h.pageIndex,
        page_size: null == h ? true : h.pageSize,
        cta_name: "search bar",
        page_type: n
      })
    },
    children: (0, r.jsx)(a.E1j, {
      size: "sm",
      className: g.searchBar,
      onKeyDown: e => {
        "Enter" === e.key && f(m)
      },
      query: m,
      onChange: _,
      onClear: () => {
        _(""), s.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == h ? true : h.sessionId,
          page_section: null == h ? true : h.pageSection,
          page_category: null == h ? true : h.pageCategory,
          page_index: null == h ? true : h.pageIndex,
          page_size: null == h ? true : h.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      },
      placeholder: d.intl.string(d.t["hIt/Nj"])
    })
  })
}