/** Chunk was on 59275 **/
/** chunk id: 628979, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk365491 = require("./365491.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk450331 = require("./450331.js");

function h(e) {
  let {
    handleTransition: t,
    selectedTab: l,
    isNarrow: s,
    hasText: h
  } = e, {
    searchQuery: E,
    onSetSearchQuery: v
  } = (0, f.v)(), [A, x] = r.useState(""), S = (0, d.uM)(), C = (0, i.bG)([c.default], () => c.default.locale), O = r.useRef(null), [_, y] = r.useState(false);
  r.useEffect(() => {
    let e = setTimeout(() => {
      v(A)
    }, 250);
    return () => clearTimeout(e)
  }, [A, v]), r.useEffect(() => {
    x(E)
  }, [E]), r.useEffect(() => {
    y(s && h)
  }, [s, h]);
  let j = r.useCallback(e => {
      "Enter" === e.key && v(A)
    }, [A, v]),
    L = r.useCallback(e => {
      u.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == S ? true : S.sessionId,
        page_section: null == S ? true : S.pageSection,
        page_category: null == S ? true : S.pageCategory,
        page_index: null == S ? true : S.pageIndex,
        page_size: null == S ? true : S.pageSize,
        cta_name: e,
        page_type: l
      })
    }, [l, S]),
    T = r.useCallback(() => {
      l !== b.G2.CATALOG && t(b.G2.CATALOG), L(b.uY.SEARCH_ICON), y(true), setTimeout(() => {
        var e;
        return null == (e = O.current) ? true : e.focus()
      })
    }, [l, t, L]),
    I = r.useCallback(() => {
      l !== b.G2.CATALOG && t(b.G2.CATALOG), L(b.uY.SEARCH_BAR)
    }, [l, t, L]),
    N = r.useCallback(() => {
      x(""), v(""), L(b.uY.SEARCH_BAR_CLEAR), s && y(false)
    }, [v, L, s]),
    k = r.useCallback(() => {
      s && "" === A && y(false)
    }, [s, A]),
    R = s && !_,
    P = (0, n.jsx)(o.DUT, {
      className: p.qc,
      onClick: T,
      children: (0, n.jsx)(o.$p$, {
        size: "sm",
        color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT
      })
    }),
    D = (0, n.jsx)(o.IWV, {
      size: "sm",
      ref: O,
      onKeyDown: j,
      query: A,
      onChange: x,
      onClear: N,
      onBlur: k,
      placeholder: "en-US" === C ? m.intl.string(m.t.arz34K) : m.intl.string(m.t["hIt/Nm"])
    }),
    w = {
      "--custom-search-bar-width": "".concat(b.rr, "px"),
      "--custom-search-bar-icon-width": "".concat(b.Dy, "px")
    };
  if (R) return (0, n.jsx)("div", {
    style: w,
    children: P
  });
  let B = a()(p.ON, {
    [p.Nz]: _
  });
  return _ ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: p.j8,
      style: w,
      children: P
    }), (0, n.jsx)(o.DUT, {
      className: B,
      style: w,
      onClick: I,
      ignoreKeyPress: true,
      children: D
    })]
  }) : (0, n.jsx)("div", {
    className: B,
    style: w,
    children: (0, n.jsx)(o.DUT, {
      ignoreKeyPress: true,
      onClick: I,
      children: D
    })
  })
}