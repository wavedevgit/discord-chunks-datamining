/** Chunk was on 65652 **/
/** chunk id: 670199, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk186425 = require("./186425.js");

function h(n) {
  var e, i;
  let {
    classification: a,
    isDsaEligible: h = false,
    isSpam: N = false,
    isCoppa: C = false,
    appealIngestionType: j,
    className: _,
    onClose: E,
    onNext: I
  } = n, v = (0, d.n)(), T = null != (e = null == a ? true : a.explainer_link) ? e : "", S = null != a && null != a.flagged_content && a.flagged_content.length > 0, A = (0, c.c7)(null == a ? true : a.description), k = !N && !C && (null == j || j === o.j4.IN_APP), Z = null != a && ((0, c.FB)(a) || S);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, t.jsx)(l.Heading, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: p.intl.string(p.t["C5q+pW"])
      }), (0, t.jsx)(l.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: p.intl.string(p.t.URt7VI)
      }), null != E && (0, t.jsx)(l.olH, {
        "data-migration-pending": true,
        className: u.closeButton,
        onClick: E
      })]
    }), (0, t.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(u.modalContent, !Z && u.evidenceOffset, _),
      paddingFix: false,
      children: [Z && (0, t.jsx)(m.s, {
        flaggedContent: null != (i = a.flagged_content) ? i : []
      }), (0, t.jsx)(l.Text, {
        className: u.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: p.intl.string(p.t.xsdcxh)
      }), (0, t.jsx)("div", {
        className: u.policyContainer,
        children: (0, t.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: A
        })
      }), C && (0, t.jsx)(x.Z, {
        url: g.sQ.AGE_VERIFICATION_LINK,
        text: p.intl.string(p.t["gJs+kf"]),
        onClick: () => v(g.n0.ClickAgeVerificationLink)
      }), N && !C && (0, t.jsx)(x.Z, {
        url: g.sQ.SPAM_LINK,
        text: p.intl.string(p.t["PaNS+I"]),
        onClick: () => v(g.n0.ClickSpamWebformLink)
      }), !C && (0, t.jsx)(x.Z, {
        text: p.intl.string(p.t["Vtyn/7"]),
        url: T,
        onClick: () => v(g.n0.ClickLearnMoreLink)
      }), k && h && (0, t.jsx)(l.Text, {
        className: u.learnMore,
        variant: "text-xs/normal",
        children: p.intl.format(p.t.WMUgCX, {})
      })]
    }), k && (0, t.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, t.jsx)(l.Button, {
        variant: "primary",
        text: p.intl.string(p.t.PDTjLN),
        onClick: I
      })
    })]
  })
}