/** Chunk was on web.js **/
/** chunk id: 459793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kb: () => O,
  oO: () => b,
  uK: () => y
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk86379 = require("./86379.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk389797 = require("./389797.js"),
  Chunk270516 = require("./270516.js"),
  Chunk480540 = require("./480540.js");

function E(e) {
  let {
    className: t
  } = e, n = (0, c.Ay)(), i = (0, s.Mw)(n) ? m : g;
  return (0, r.jsxs)("div", {
    className: a()(h.kL, t),
    children: [(0, r.jsx)(l.Heading, {
      className: h.wx,
      variant: "heading-xl/semibold",
      children: _.intl.string(_.t.vwMEHS)
    }), (0, r.jsxs)(l.Text, {
      className: h.h_,
      variant: "text-md/normal",
      color: "text-default",
      children: [(0, r.jsx)("p", {
        children: _.intl.string(_.t.fev8MQ)
      }), (0, r.jsx)("p", {
        children: _.intl.format(_.t.IHxEJU, {
          helpdeskArticle: d.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, r.jsx)("img", {
      src: i,
      className: h.j0,
      alt: "Blocked Payments"
    })]
  })
}

function y() {
  return (0, r.jsx)(E, {
    className: h.W0
  })
}

function b(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.rQ0, {
      className: h.Oy,
      justify: u.A.Justify.END,
      "data-migration-pending": true,
      children: (0, r.jsx)(l.s_y, {
        onClick: t,
        "data-migration-pending": true
      })
    }), (0, r.jsx)(l.$mQ, {
      className: h.Gv,
      "data-migration-pending": true,
      children: (0, r.jsx)(E, {
        className: h.yl
      })
    })]
  })
}

function O(e) {
  let {
    className: t
  } = e;
  return (0, f.H)() ? (0, r.jsxs)(l.ZpM, {
    className: a()(h.ek, t),
    type: l.ZpM.Types.CUSTOM,
    children: [(0, r.jsx)(l.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: h.XJ,
      color: o.A.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: _.intl.format(_.t.NYkcCh, {
        helpdeskArticle: d.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}