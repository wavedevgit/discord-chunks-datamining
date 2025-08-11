/** Chunk was on 65652 **/
/** chunk id: 670199, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk531441 = require("./531441.js"),
  Chunk788080 = require("./788080.js"),
  Chunk548647 = require("./548647.js"),
  Chunk696375 = require("./696375.jsx"),
  Chunk97568 = require("./97568.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk91463 = require("./91463.js");

function h(e) {
  var n, t;
  let {
    classification: a,
    isDsaEligible: h = false,
    isSpam: g = false,
    isCoppa: C = false,
    appealIngestionType: N,
    className: j,
    onClose: I,
    onNext: E
  } = e, T = (0, d.n)(), v = null != (n = null == a ? true : a.explainer_link) ? n : "", f = null != a && null != a.flagged_content && a.flagged_content.length > 0, S = (0, c.c7)(null == a ? true : a.description), k = !g && !C && (null == N || N === o.j4.IN_APP), A = null != a && ((0, c.FB)(a) || f);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: _.header,
      separator: false,
      children: [(0, i.jsx)(l.X6q, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["C5q+pa"])
      }), (0, i.jsx)(l.Text, {
        className: _.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.intl.string(u.t.URt7VF)
      }), null != I && (0, i.jsx)(l.olH, {
        className: _.closeButton,
        onClick: I
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(_.modalContent, !A && _.evidenceOffset, j),
      paddingFix: false,
      children: [A && (0, i.jsx)(m.s, {
        flaggedContent: null != (t = a.flagged_content) ? t : []
      }), (0, i.jsx)(l.Text, {
        className: _.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: u.intl.string(u.t.xsdcxs)
      }), (0, i.jsx)("div", {
        className: _.policyContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: S
        })
      }), C && (0, i.jsx)(x.Z, {
        url: p.sQ.AGE_VERIFICATION_LINK,
        text: u.intl.string(u.t["gJs+kZ"]),
        onClick: () => T(p.n0.ClickAgeVerificationLink)
      }), g && !C && (0, i.jsx)(x.Z, {
        url: p.sQ.SPAM_LINK,
        text: u.intl.string(u.t["PaNS+P"]),
        onClick: () => T(p.n0.ClickSpamWebformLink)
      }), !C && (0, i.jsx)(x.Z, {
        text: u.intl.string(u.t["Vtyn//"]),
        url: v,
        onClick: () => T(p.n0.ClickLearnMoreLink)
      }), k && h && (0, i.jsx)(l.Text, {
        className: _.learnMore,
        variant: "text-xs/normal",
        children: u.intl.format(u.t.WMUgCQ, {})
      })]
    }), k && (0, i.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: u.intl.string(u.t.PDTjLC),
        onClick: E
      })
    })]
  })
}