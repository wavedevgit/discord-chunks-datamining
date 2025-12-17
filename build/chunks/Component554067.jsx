/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk973638 = require("./973638.js");

function b(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: b,
    onSetSearchQuery: m
  } = (0, u.S)(), [C, h] = l.useState(""), v = (0, c.sp)(), E = (0, a.e7)([s.default], () => s.default.locale);
  return l.useEffect(() => {
    let e = setTimeout(() => {
      m(C)
    }, 250);
    return () => clearTimeout(e)
  }, [C, m]), l.useEffect(() => {
    h(b)
  }, [b]), (0, r.jsx)(o.P3F, {
    ignoreKeyPress: true,
    className: p.searchBar,
    onClick: () => {
      n !== d.AW.CATALOG && t(d.AW.CATALOG), i.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == v ? true : v.sessionId,
        page_section: null == v ? true : v.pageSection,
        page_category: null == v ? true : v.pageCategory,
        page_index: null == v ? true : v.pageIndex,
        page_size: null == v ? true : v.pageSize,
        cta_name: "search bar",
        page_type: n
      })
    },
    children: (0, r.jsx)(o.E1j, {
      size: "sm",
      onKeyDown: e => {
        "Enter" === e.key && m(C)
      },
      query: C,
      onChange: h,
      onClear: () => {
        h(""), i.default.track(f.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == v ? true : v.sessionId,
          page_section: null == v ? true : v.pageSection,
          page_category: null == v ? true : v.pageCategory,
          page_index: null == v ? true : v.pageIndex,
          page_size: null == v ? true : v.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      },
      placeholder: "en-US" === E ? g.intl.string(g.t.arz34K) : g.intl.string(g.t["hIt/Nm"])
    })
  })
}