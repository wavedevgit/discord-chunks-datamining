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
  } = (0, f.S)(), [v, S] = l.useState(""), _ = (0, d.sp)(), x = (0, o.e7)([c.default], () => c.default.locale), O = l.useRef(null), [y, k] = l.useState(false);
  l.useEffect(() => {
    let e = setTimeout(() => {
      E(v)
    }, 250);
    return () => clearTimeout(e)
  }, [v, E]), l.useEffect(() => {
    S(C)
  }, [C]), l.useEffect(() => {
    k(a && h)
  }, [a, h]);
  let T = l.useCallback(e => {
      "Enter" === e.key && E(v)
    }, [v, E]),
    j = l.useCallback(e => {
      u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == _ ? true : _.sessionId,
        page_section: null == _ ? true : _.pageSection,
        page_category: null == _ ? true : _.pageCategory,
        page_index: null == _ ? true : _.pageIndex,
        page_size: null == _ ? true : _.pageSize,
        cta_name: e,
        page_type: n
      })
    }, [n, _]),
    L = l.useCallback(() => {
      n !== g.AW.CATALOG && t(g.AW.CATALOG), j(g.Dh.SEARCH_ICON), k(true), setTimeout(() => {
        var e;
        return null == (e = O.current) ? true : e.focus()
      })
    }, [n, t, j]),
    I = l.useCallback(() => {
      n !== g.AW.CATALOG && t(g.AW.CATALOG), j(g.Dh.SEARCH_BAR)
    }, [n, t, j]),
    A = l.useCallback(() => {
      S(""), E(""), j(g.Dh.SEARCH_BAR_CLEAR), a && k(false)
    }, [E, j, a]),
    B = l.useCallback(() => {
      a && "" === v && k(false)
    }, [a, v]),
    N = a && !y,
    R = (0, r.jsx)(i.P3F, {
      className: m.searchIcon,
      onClick: L,
      children: (0, r.jsx)(i._Ve, {
        size: "sm",
        color: i.TVs.colors.INTERACTIVE_ICON_DEFAULT
      })
    }),
    P = (0, r.jsx)(i.E1j, {
      size: "sm",
      ref: O,
      onKeyDown: T,
      query: v,
      onChange: S,
      onClear: A,
      onBlur: B,
      placeholder: "en-US" === x ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"])
    }),
    Z = {
      "--custom-search-bar-width": "".concat(g.Cs, "px"),
      "--custom-search-bar-icon-width": "".concat(g.wf, "px")
    };
  if (N) return (0, r.jsx)("div", {
    style: Z,
    children: R
  });
  let w = s()(m.searchBar, {
    [m.searchFloating]: y
  });
  return y ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.searchIconContainerHidden,
      style: Z,
      children: R
    }), (0, r.jsx)(i.P3F, {
      className: w,
      style: Z,
      onClick: I,
      ignoreKeyPress: true,
      children: P
    })]
  }) : (0, r.jsx)("div", {
    className: w,
    style: Z,
    children: (0, r.jsx)(i.P3F, {
      ignoreKeyPress: true,
      onClick: I,
      children: P
    })
  })
}