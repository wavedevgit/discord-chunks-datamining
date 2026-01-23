/** Chunk was on 59275 **/
/** chunk id: 628979, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    handleTransition: t,
    selectedTab: n,
    isNarrow: s,
    hasText: b
  } = e, {
    searchQuery: h,
    onSetSearchQuery: E
  } = (0, g.v)(), [v, C] = l.useState(""), A = (0, d.uM)(), x = (0, i.bG)([c.default], () => c.default.locale), S = l.useRef(null), [O, y] = l.useState(false);
  l.useEffect(() => {
    let e = setTimeout(() => {
      E(v)
    }, 250);
    return () => clearTimeout(e)
  }, [v, E]), l.useEffect(() => {
    C(h)
  }, [h]), l.useEffect(() => {
    y(s && b)
  }, [s, b]);
  let j = l.useCallback(e => {
      "Enter" === e.key && E(v)
    }, [v, E]),
    T = l.useCallback(e => {
      u.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == A ? true : A.sessionId,
        page_section: null == A ? true : A.pageSection,
        page_category: null == A ? true : A.pageCategory,
        page_index: null == A ? true : A.pageIndex,
        page_size: null == A ? true : A.pageSize,
        cta_name: e,
        page_type: n
      })
    }, [n, A]),
    L = l.useCallback(() => {
      n !== f.G2.CATALOG && t(f.G2.CATALOG), T(f.uY.SEARCH_ICON), y(true), setTimeout(() => {
        var e;
        return null == (e = S.current) ? true : e.focus()
      })
    }, [n, t, T]),
    I = l.useCallback(() => {
      n !== f.G2.CATALOG && t(f.G2.CATALOG), T(f.uY.SEARCH_BAR)
    }, [n, t, T]),
    k = l.useCallback(() => {
      C(""), E(""), T(f.uY.SEARCH_BAR_CLEAR), s && y(false)
    }, [E, T, s]),
    N = l.useCallback(() => {
      s && "" === v && y(false)
    }, [s, v]),
    R = s && !O,
    P = (0, r.jsx)(o.DUT, {
      className: _.qc,
      onClick: L,
      children: (0, r.jsx)(o.$p$, {
        size: "sm",
        color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT
      })
    }),
    B = (0, r.jsx)(o.IWV, {
      size: "sm",
      ref: S,
      onKeyDown: j,
      query: v,
      onChange: C,
      onClear: k,
      onBlur: N,
      placeholder: "en-US" === x ? m.intl.string(m.t.arz34K) : m.intl.string(m.t["hIt/Nm"])
    }),
    w = {
      "--custom-search-bar-width": "".concat(f.rr, "px"),
      "--custom-search-bar-icon-width": "".concat(f.Dy, "px")
    };
  if (R) return (0, r.jsx)("div", {
    style: w,
    children: P
  });
  let D = a()(_.ON, {
    [_.Nz]: O
  });
  return O ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.j8,
      style: w,
      children: P
    }), (0, r.jsx)(o.DUT, {
      className: D,
      style: w,
      onClick: I,
      ignoreKeyPress: true,
      children: B
    })]
  }) : (0, r.jsx)("div", {
    className: D,
    style: w,
    children: (0, r.jsx)(o.DUT, {
      ignoreKeyPress: true,
      onClick: I,
      children: B
    })
  })
}