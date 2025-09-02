/** Chunk was on web.js **/
/** chunk id: 4738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk1561 = require("./1561.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk889963 = require("./889963.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18039 = require("./18039.js");

function _(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: a,
    onPageChange: s
  } = e, [u, d] = i.useState(false), [_, p] = i.useState(null), h = null != _ && _ >= 1 && _ <= n, m = e => {
    let t = parseInt(e);
    if ("" === e || isNaN(t)) return void p(null);
    p(t)
  }, g = e => {
    "Enter" === e.key && null != _ && h && (s(_), d(false), p(null))
  };
  return a ? (0, r.jsx)(c.X6q, {
    className: f.gap,
    "aria-hidden": true,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : u ? (0, r.jsx)("div", {
    className: f.jumpToPageInlineInput,
    children: (0, r.jsx)(c.oil, {
      type: "number",
      autoFocus: true,
      value: null == _ ? "" : "".concat(_),
      onChange: m,
      onBlur: () => {
        d(false), p(null)
      },
      onKeyUp: g,
      disabled: a
    }, t.key)
  }) : (0, r.jsx)(l.P, {
    onClick: () => d(true),
    children: (0, r.jsx)(c.X6q, {
      className: o()(f.roundButton, f.gap),
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
    onPageChange: h,
    hideMaxPage: m = false,
    className: g,
    renderPageWrapper: E
  } = e, b = Math.ceil(n / i);

  function y(e) {
    null != h && h(e)
  }

  function O(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return (0, r.jsxs)(s.zx, {
      className: f.endButton,
      innerClassName: f.endButtonInner,
      look: s.zx.Looks.BLANK,
      color: s.zx.Colors.TRANSPARENT,
      onClick: i,
      disabled: n,
      rel: "prev",
      children: [(0, r.jsx)(c.V7D, {
        size: "md",
        color: "currentColor",
        className: f.iconCaret,
        "aria-hidden": true
      }), (0, r.jsx)("span", {
        children: d.intl.string(d.t["13/7kZ"])
      })]
    }, t)
  }

  function v(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return (0, r.jsxs)(s.zx, {
      className: f.endButton,
      innerClassName: f.endButtonInner,
      look: s.zx.Looks.BLANK,
      color: s.zx.Colors.TRANSPARENT,
      onClick: i,
      disabled: n,
      rel: "next",
      children: [(0, r.jsx)("span", {
        children: d.intl.string(d.t.PDTjLC)
      }), (0, r.jsx)(c.Fbu, {
        size: "md",
        color: "currentColor",
        className: f.iconCaret,
        "aria-hidden": true
      })]
    }, t)
  }

  function I(e) {
    return (0, r.jsx)(l.P, {
      className: o()(f.roundButton, {
        [f.activeButton]: e.selected
      }),
      onClick: e.selected ? true : e.navigateToPage,
      "aria-label": d.intl.formatToPlainString(d.t.IGMs8f, {
        pageNumber: e.targetPage
      }),
      "aria-current": e.selected ? "page" : true,
      children: (0, r.jsx)("span", {
        children: e.targetPage
      })
    }, e.key)
  }

  function S(e) {
    let t = I(e);
    return null != E ? E(e, t) : t
  }

  function T(e) {
    return (0, r.jsx)(_, {
      page: e,
      totalPageCount: b,
      disabled: !!p,
      onPageChange: h
    }, e.key)
  }

  function A(e) {
    let {
      pages: t,
      hasMultiplePages: n
    } = e;
    return n ? (0, r.jsx)("div", {
      className: o()(f.pageControlContainer, g),
      children: (0, r.jsx)("nav", {
        className: f.pageControl,
        children: t.map(e => {
          switch (e.type) {
            case u.s.BACK:
              return O(e);
            case u.s.PAGE:
              return S(e);
            case u.s.GAP:
              return T(e);
            case u.s.NEXT:
              return v(e);
            default:
              return null
          }
        })
      })
    }) : null
  }
  return (0, r.jsx)(u.W, {
    totalPageCount: b,
    selectedPage: t,
    maxVisiblePages: a,
    hideMaxPage: m,
    onPageChange: y,
    children: A
  })
}