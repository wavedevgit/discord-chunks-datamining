/** Chunk was on web.js **/
/** chunk id: 158142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk862482 = require("./862482.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk62539 = require("./62539.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk50652 = require("./50652.js");

function f(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: a,
    onPageChange: s
  } = e, [c, u] = i.useState(false), [f, p] = i.useState(null), _ = null != f && f >= 1 && f <= n, h = e => {
    let t = parseInt(e);
    "" === e || isNaN(t) ? p(null) : p(t)
  }, m = e => {
    "Enter" === e.key && null != f && _ && (s(f), u(false), p(null))
  };
  return a ? (0, r.jsx)(l.Heading, {
    className: d.rQ,
    "aria-hidden": true,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : c ? (0, r.jsx)("div", {
    className: d.mF,
    children: (0, r.jsx)(l.ksK, {
      type: "number",
      autoFocus: true,
      value: null == f ? "" : "".concat(f),
      onChange: h,
      onBlur: () => {
        u(false), p(null)
      },
      onKeyUp: m,
      disabled: a
    }, t.key)
  }) : (0, r.jsx)(l.DUT, {
    onClick: () => u(true),
    children: (0, r.jsx)(l.Heading, {
      className: o()(d.hJ, d.rQ),
      "aria-hidden": true,
      variant: "heading-sm/semibold",
      children: "…"
    })
  }, t.key)
}

function p(e) {
  let {
    currentPage: t,
    totalCount: n,
    pageSize: i,
    maxVisiblePages: a,
    disablePaginationGap: p,
    onPageChange: _,
    hideMaxPage: h = false,
    className: m,
    renderPageWrapper: g
  } = e, E = Math.ceil(n / i);

  function y(e) {
    null != _ && _(e)
  }

  function b(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return (0, r.jsxs)(s.$n, {
      className: d.Cp,
      innerClassName: d.MO,
      look: s.$n.Looks.BLANK,
      color: s.$n.Colors.TRANSPARENT,
      onClick: i,
      disabled: n,
      rel: "prev",
      children: [(0, r.jsx)(l.n2b, {
        size: "md",
        color: "currentColor",
        className: d.B7,
        "aria-hidden": true
      }), (0, r.jsx)("span", {
        children: u.intl.string(u.t["13/7kX"])
      })]
    }, t)
  }

  function O(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return (0, r.jsxs)(s.$n, {
      className: d.Cp,
      innerClassName: d.MO,
      look: s.$n.Looks.BLANK,
      color: s.$n.Colors.TRANSPARENT,
      onClick: i,
      disabled: n,
      rel: "next",
      children: [(0, r.jsx)("span", {
        children: u.intl.string(u.t.PDTjLN)
      }), (0, r.jsx)(l._BQ, {
        size: "md",
        color: "currentColor",
        className: d.B7,
        "aria-hidden": true
      })]
    }, t)
  }

  function v(e) {
    return (0, r.jsx)(l.DUT, {
      className: o()(d.hJ, {
        [d.Xs]: e.selected
      }),
      onClick: e.selected ? true : e.navigateToPage,
      "aria-label": u.intl.formatToPlainString(u.t.IGMs8S, {
        pageNumber: e.targetPage
      }),
      "aria-current": e.selected ? "page" : true,
      children: (0, r.jsx)("span", {
        children: e.targetPage
      })
    }, e.key)
  }

  function A(e) {
    let t = v(e);
    return null != g ? g(e, t) : t
  }

  function I(e) {
    return (0, r.jsx)(f, {
      page: e,
      totalPageCount: E,
      disabled: !!p,
      onPageChange: _
    }, e.key)
  }

  function S(e) {
    let {
      pages: t,
      hasMultiplePages: n
    } = e;
    return n ? (0, r.jsx)("div", {
      className: o()(d.Ug, m),
      children: (0, r.jsx)("nav", {
        className: d.DU,
        children: t.map(e => {
          switch (e.type) {
            case c._.BACK:
              return b(e);
            case c._.PAGE:
              return A(e);
            case c._.GAP:
              return I(e);
            case c._.NEXT:
              return O(e);
            default:
              return null
          }
        })
      })
    }) : null
  }
  return (0, r.jsx)(c.J, {
    totalPageCount: E,
    selectedPage: t,
    maxVisiblePages: a,
    hideMaxPage: h,
    onPageChange: y,
    children: S
  })
}