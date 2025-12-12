/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk535333 = require("./535333.js");

function m(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: m,
    onSetSearchQuery: C
  } = (0, u.S)(), [h, _] = l.useState(""), b = (0, c.sp)(), v = (0, o.e7)([s.default], () => s.default.locale);
  return l.useEffect(() => {
    let e = setTimeout(() => {
      C(h)
    }, 250);
    return () => clearTimeout(e)
  }, [h, C]), l.useEffect(() => {
    _(m)
  }, [m]), (0, r.jsx)(i.P3F, {
    ignoreKeyPress: true,
    className: p.searchBar,
    onClick: () => {
      n !== d.AW.CATALOG && t(d.AW.CATALOG), a.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == b ? true : b.sessionId,
        page_section: null == b ? true : b.pageSection,
        page_category: null == b ? true : b.pageCategory,
        page_index: null == b ? true : b.pageIndex,
        page_size: null == b ? true : b.pageSize,
        cta_name: "search bar",
        page_type: n
      })
    },
    children: (0, r.jsx)(i.E1j, {
      size: "sm",
      onKeyDown: e => {
        "Enter" === e.key && C(h)
      },
      query: h,
      onChange: _,
      onClear: () => {
        _(""), a.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == b ? true : b.sessionId,
          page_section: null == b ? true : b.pageSection,
          page_category: null == b ? true : b.pageCategory,
          page_index: null == b ? true : b.pageIndex,
          page_size: null == b ? true : b.pageSize,
          cta_name: "search bar clear",
          page_type: n
        })
      },
      placeholder: "en-US" === v ? f.intl.string(f.t.arz34K) : f.intl.string(f.t["hIt/Nm"])
    })
  })
}