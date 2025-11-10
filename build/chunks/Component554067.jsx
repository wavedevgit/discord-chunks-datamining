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
  Chunk535333 = require("./535333.js");

function h(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: h,
    onSetSearchQuery: C
  } = (0, u.S)(), [m, _] = l.useState(""), b = (0, c.sp)(), v = (0, i.e7)([a.default], () => a.default.locale);
  return l.useEffect(() => {
    let e = setTimeout(() => {
      C(m)
    }, 250);
    return () => clearTimeout(e)
  }, [m, C]), l.useEffect(() => {
    _(h)
  }, [h]), (0, r.jsx)(s.P3F, {
    ignoreKeyPress: true,
    className: f.searchBar,
    onClick: () => {
      n !== d.AW.CATALOG && t(d.AW.CATALOG), o.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        "Enter" === e.key && C(m)
      },
      query: m,
      onChange: _,
      onClear: () => {
        _(""), o.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == b ? true : b.sessionId,
          page_section: null == b ? true : b.pageSection,
          page_category: null == b ? true : b.pageCategory,
          page_index: null == b ? true : b.pageIndex,
          page_size: null == b ? true : b.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      },
      placeholder: "en-US" === v ? g.intl.string(g.t.arz34K) : g.intl.string(g.t["hIt/Nm"])
    })
  })
}