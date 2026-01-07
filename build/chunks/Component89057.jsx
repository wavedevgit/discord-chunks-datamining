/** Chunk was on web.js **/
/** chunk id: 89057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vq: () => y,
  c8: () => b,
  oQ: () => O
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk211242 = require("./211242.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk859228 = require("./859228.js"),
  Chunk51125 = require("./51125.js"),
  Chunk47268 = require("./47268.js");

function E(e) {
  let {
    className: t
  } = e, n = (0, c.ZP)(), i = (0, s.wj)(n) ? h : g;
  return (0, r.jsxs)("div", {
    className: a()(m.container, t),
    children: [(0, r.jsx)(l.Heading, {
      className: m.header,
      variant: "heading-xl/semibold",
      children: _.intl.string(_.t.vwMEHS)
    }), (0, r.jsxs)(l.Text, {
      className: m.description,
      variant: "text-md/normal",
      color: "text-default",
      children: [(0, r.jsx)("p", {
        children: _.intl.string(_.t.fev8MQ)
      }), (0, r.jsx)("p", {
        children: _.intl.format(_.t.IHxEJU, {
          helpdeskArticle: d.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, r.jsx)("img", {
      src: i,
      className: m.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function b() {
  return (0, r.jsx)(E, {
    className: m.settings
  })
}

function y(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.xBx, {
      className: m.blockedPaymentsModalHeader,
      justify: u.Z.Justify.END,
      "data-migration-pending": true,
      children: (0, r.jsx)(l.olH, {
        onClick: t,
        "data-migration-pending": true
      })
    }), (0, r.jsx)(l.hzk, {
      className: m.blockedPaymentsModalContent,
      "data-migration-pending": true,
      children: (0, r.jsx)(E, {
        className: m.modal
      })
    })]
  })
}

function O(e) {
  let {
    className: t
  } = e;
  return (0, f.Q)() ? (0, r.jsxs)(l.Zbd, {
    className: a()(m.blockedPaymentsWarning, t),
    type: l.Zbd.Types.CUSTOM,
    children: [(0, r.jsx)(l.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: m.blockedPaymentsWarningIcon,
      color: o.Z.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: _.intl.format(_.t.NYkcCh, {
        helpdeskArticle: d.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}