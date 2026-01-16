/** Chunk was on 45620 **/
/** chunk id: 554067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function h(e) {
  let {
    handleTransition: t,
    selectedTab: n,
    isNarrow: a,
    hasText: h
  } = e, {
    searchQuery: C,
    onSetSearchQuery: E
  } = (0, f.S)(), [v, x] = l.useState(""), S = (0, d.sp)(), O = (0, i.e7)([c.default], () => c.default.locale), _ = l.useRef(null), [y, j] = l.useState(false);
  l.useEffect(() => {
    let e = setTimeout(() => {
      E(v)
    }, 250);
    return () => clearTimeout(e)
  }, [v, E]), l.useEffect(() => {
    x(C)
  }, [C]), l.useEffect(() => {
    j(a && h)
  }, [a, h]);
  let k = l.useCallback(e => {
      "Enter" === e.key && E(v)
    }, [v, E]),
    T = l.useCallback(e => {
      u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == S ? true : S.sessionId,
        page_section: null == S ? true : S.pageSection,
        page_category: null == S ? true : S.pageCategory,
        page_index: null == S ? true : S.pageIndex,
        page_size: null == S ? true : S.pageSize,
        cta_name: e,
        page_type: n
      })
    }, [n, S]),
    I = l.useCallback(() => {
      n !== g.AW.CATALOG && t(g.AW.CATALOG), T(g.Dh.SEARCH_ICON), j(true), setTimeout(() => {
        var e;
        return null == (e = _.current) ? true : e.focus()
      })
    }, [n, t, T]),
    L = l.useCallback(() => {
      n !== g.AW.CATALOG && t(g.AW.CATALOG), T(g.Dh.SEARCH_BAR)
    }, [n, t, T]),
    A = l.useCallback(() => {
      x(""), E(""), T(g.Dh.SEARCH_BAR_CLEAR), a && j(false)
    }, [E, T, a]),
    B = l.useCallback(() => {
      a && "" === v && j(false)
    }, [a, v]),
    N = a && !y,
    R = (0, r.jsx)(o.P3F, {
      className: m.searchIcon,
      onClick: I,
      children: (0, r.jsx)(o._Ve, {
        size: "sm",
        color: o.TVs.colors.INTERACTIVE_ICON_DEFAULT
      })
    }),
    P = (0, r.jsx)(o.E1j, {
      size: "sm",
      ref: _,
      onKeyDown: k,
      query: v,
      onChange: x,
      onClear: A,
      onBlur: B,
      placeholder: "en-US" === O ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"])
    }),
    w = {
      "--custom-search-bar-width": "".concat(g.Cs, "px"),
      "--custom-search-bar-icon-width": "".concat(g.wf, "px")
    };
  if (N) return (0, r.jsx)("div", {
    style: w,
    children: R
  });
  let Z = s()(m.searchBar, {
    [m.searchFloating]: y
  });
  return y ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.searchIconContainerHidden,
      style: w,
      children: R
    }), (0, r.jsx)(o.P3F, {
      className: Z,
      style: w,
      onClick: L,
      ignoreKeyPress: true,
      children: P
    })]
  }) : (0, r.jsx)("div", {
    className: Z,
    style: w,
    children: (0, r.jsx)(o.P3F, {
      ignoreKeyPress: true,
      onClick: L,
      children: P
    })
  })
}