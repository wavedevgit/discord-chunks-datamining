/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk55918 = require("./55918.js");

function h(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: h,
    onSetSearchQuery: m
  } = (0, u.S)(), [_, C] = l.useState(""), b = (0, c.sp)(), E = (0, a.e7)([i.default], () => i.default.locale);
  return l.useEffect(() => {
    let e = setTimeout(() => {
      m(_)
    }, 250);
    return () => clearTimeout(e)
  }, [_, m]), l.useEffect(() => {
    C(h)
  }, [h]), (0, r.jsx)(s.P3F, {
    ignoreKeyPress: true,
    className: p.searchBar,
    onClick: () => {
      n !== d.AW.CATALOG && t(d.AW.CATALOG), o.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == b ? true : b.sessionId,
        page_section: null == b ? true : b.pageSection,
        page_category: null == b ? true : b.pageCategory,
        page_index: null == b ? true : b.pageIndex,
        page_size: null == b ? true : b.pageSize,
        cta_name: "search bar",
        page_type: n
      })
    },
    children: (0, r.jsx)(s.E1j, {
      size: "sm",
      onKeyDown: e => {
        "Enter" === e.key && m(_)
      },
      query: _,
      onChange: C,
      onClear: () => {
        C(""), o.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == b ? true : b.sessionId,
          page_section: null == b ? true : b.pageSection,
          page_category: null == b ? true : b.pageCategory,
          page_index: null == b ? true : b.pageIndex,
          page_size: null == b ? true : b.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      },
      placeholder: "en-US" === E ? f.intl.string(f.t.arz34O) : f.intl.string(f.t["hIt/Nj"])
    })
  })
}