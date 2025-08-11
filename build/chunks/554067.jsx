/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk234209 = require("./234209.js");

function g(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: g,
    onSetSearchQuery: f
  } = (0, s.S)(), [b, h] = l.useState(""), m = (0, o.sp)();
  return l.useEffect(() => {
    let e = setTimeout(() => {
      f(b)
    }, 250);
    return () => clearTimeout(e)
  }, [b, f]), l.useEffect(() => {
    h(g)
  }, [g]), <a.P3F ignoreKeyPress={true} onClick={() => {
      n !== c.AW.CATALOG && t(c.AW.CATALOG), i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == m ? true : m.sessionId,
        page_section: null == m ? true : m.pageSection,
        page_category: null == m ? true : m.pageCategory,
        page_index: null == m ? true : m.pageIndex,
        page_size: null == m ? true : m.pageSize,
        cta_name: "search bar",
        page_type: n
      })
    }}><a.E1j size={"sm"} className={p.searchBar} onKeyDown={e => {
        "Enter" === e.key && f(b)
      }} query={b} onChange={h} onClear={() => {
        h(""), i.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == m ? true : m.sessionId,
          page_section: null == m ? true : m.pageSection,
          page_category: null == m ? true : m.pageCategory,
          page_index: null == m ? true : m.pageIndex,
          page_size: null == m ? true : m.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      }} placeholder={d.intl.string(d.t["hIt/Nj"])} /></a.P3F>
}