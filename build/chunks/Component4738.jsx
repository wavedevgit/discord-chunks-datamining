/** Chunk was on web.js **/
/** chunk id: 4738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk889963 = require("./889963.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18039 = require("./18039.js");

function f(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: a,
    onPageChange: s
  } = e, [c, u] = i.useState(false), [f, p] = i.useState(null), _ = null != f && f >= 1 && f <= n, m = e => {
    let t = parseInt(e);
    if ("" === e || isNaN(t)) return void p(null);
    p(t)
  }, h = e => {
    "Enter" === e.key && null != f && _ && (s(f), u(false), p(null))
  };
  return a ? (0, r.jsx)(l.Heading, {
    className: d.gap,
    "aria-hidden": true,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : c ? (0, r.jsx)("div", {
    className: d.jumpToPageInlineInput,
    children: (0, r.jsx)(l.oil, {
      type: "number",
      autoFocus: true,
      value: null == f ? "" : "".concat(f),
      onChange: m,
      onBlur: () => {
        u(false), p(null)
      },
      onKeyUp: h,
      disabled: a
    }, t.key)
  }) : (0, r.jsx)(l.P3F, {
    onClick: () => u(true),
    children: (0, r.jsx)(l.Heading, {
      className: o()(d.roundButton, d.gap),
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
    hideMaxPage: m = false,
    className: h,
    renderPageWrapper: g
  } = e, E = Math.ceil(n / i);

  function b(e) {
    null != _ && _(e)
  }

  function y(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return (0, r.jsxs)(s.Button, {
      className: d.endButton,
      innerClassName: d.endButtonInner,
      look: s.Button.Looks.BLANK,
      color: s.Button.Colors.TRANSPARENT,
      onClick: i,
      disabled: n,
      rel: "prev",
      children: [(0, r.jsx)(l.V7D, {
        size: "md",
        color: "currentColor",
        className: d.iconCaret,
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
    return (0, r.jsxs)(s.Button, {
      className: d.endButton,
      innerClassName: d.endButtonInner,
      look: s.Button.Looks.BLANK,
      color: s.Button.Colors.TRANSPARENT,
      onClick: i,
      disabled: n,
      rel: "next",
      children: [(0, r.jsx)("span", {
        children: u.intl.string(u.t.PDTjLN)
      }), (0, r.jsx)(l.Fbu, {
        size: "md",
        color: "currentColor",
        className: d.iconCaret,
        "aria-hidden": true
      })]
    }, t)
  }

  function v(e) {
    return (0, r.jsx)(l.P3F, {
      className: o()(d.roundButton, {
        [d.activeButton]: e.selected
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

  function S(e) {
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

  function T(e) {
    let {
      pages: t,
      hasMultiplePages: n
    } = e;
    return n ? (0, r.jsx)("div", {
      className: o()(d.pageControlContainer, h),
      children: (0, r.jsx)("nav", {
        className: d.pageControl,
        children: t.map(e => {
          switch (e.type) {
            case c.s.BACK:
              return y(e);
            case c.s.PAGE:
              return S(e);
            case c.s.GAP:
              return I(e);
            case c.s.NEXT:
              return O(e);
            default:
              return null
          }
        })
      })
    }) : null
  }
  return (0, r.jsx)(c.W, {
    totalPageCount: E,
    selectedPage: t,
    maxVisiblePages: a,
    hideMaxPage: m,
    onPageChange: b,
    children: T
  })
}