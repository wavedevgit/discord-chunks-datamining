/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
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

function f(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: f,
    onSetSearchQuery: p
  } = (0, i.S)(), [m, h] = l.useState(""), _ = (0, o.sp)();
  return l.useEffect(() => {
    let e = setTimeout(() => {
      p(m)
    }, 250);
    return () => clearTimeout(e)
  }, [m, p]), l.useEffect(() => {
    h(f)
  }, [f]), (0, r.jsx)(a.P3F, {
    ignoreKeyPress: true,
    onClick: () => {
      n !== c.AW.CATALOG && t(c.AW.CATALOG), s.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == _ ? true : _.sessionId,
        page_section: null == _ ? true : _.pageSection,
        page_category: null == _ ? true : _.pageCategory,
        page_index: null == _ ? true : _.pageIndex,
        page_size: null == _ ? true : _.pageSize,
        cta_name: "search bar",
        page_type: n
      })
    },
    children: (0, r.jsx)(a.E1j, {
      size: "sm",
      className: g.searchBar,
      onKeyDown: e => {
        "Enter" === e.key && p(m)
      },
      query: m,
      onChange: h,
      onClear: () => {
        h(""), s.default.track(u.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == _ ? true : _.sessionId,
          page_section: null == _ ? true : _.pageSection,
          page_category: null == _ ? true : _.pageCategory,
          page_index: null == _ ? true : _.pageIndex,
          page_size: null == _ ? true : _.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      },
      placeholder: d.intl.string(d.t["hIt/Nj"])
    })
  })
}