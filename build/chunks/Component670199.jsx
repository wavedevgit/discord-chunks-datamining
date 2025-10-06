/** Chunk was on 65652 **/
/** chunk id: 670199, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk428687 = require("./428687.js");

function _(e) {
  var n, t;
  let {
    classification: a,
    isDsaEligible: _ = false,
    isSpam: h = false,
    isCoppa: C = false,
    appealIngestionType: N,
    className: j,
    onClose: I,
    onNext: T
  } = e, E = (0, c.n)(), v = null != (n = null == a ? true : a.explainer_link) ? n : "", f = null != a && null != a.flagged_content && a.flagged_content.length > 0, k = (0, d.c7)(null == a ? true : a.description), S = !h && !C && (null == N || N === o.j4.IN_APP), A = null != a && ((0, d.FB)(a) || f);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: g.header,
      separator: false,
      children: [(0, i.jsx)(l.X6q, {
        className: g.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["C5q+pa"])
      }), (0, i.jsx)(l.Text, {
        className: g.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.intl.string(u.t.URt7VF)
      }), null != I && (0, i.jsx)(l.olH, {
        "data-migration-pending": true,
        className: g.closeButton,
        onClick: I
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(g.modalContent, !A && g.evidenceOffset, j),
      paddingFix: false,
      children: [A && (0, i.jsx)(m.s, {
        flaggedContent: null != (t = a.flagged_content) ? t : []
      }), (0, i.jsx)(l.Text, {
        className: g.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: u.intl.string(u.t.xsdcxs)
      }), (0, i.jsx)("div", {
        className: g.policyContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: k
        })
      }), C && (0, i.jsx)(x.Z, {
        url: p.sQ.AGE_VERIFICATION_LINK,
        text: u.intl.string(u.t["gJs+kZ"]),
        onClick: () => E(p.n0.ClickAgeVerificationLink)
      }), h && !C && (0, i.jsx)(x.Z, {
        url: p.sQ.SPAM_LINK,
        text: u.intl.string(u.t["PaNS+P"]),
        onClick: () => E(p.n0.ClickSpamWebformLink)
      }), !C && (0, i.jsx)(x.Z, {
        text: u.intl.string(u.t["Vtyn//"]),
        url: v,
        onClick: () => E(p.n0.ClickLearnMoreLink)
      }), S && _ && (0, i.jsx)(l.Text, {
        className: g.learnMore,
        variant: "text-xs/normal",
        children: u.intl.format(u.t.WMUgCQ, {})
      })]
    }), S && (0, i.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: u.intl.string(u.t.PDTjLC),
        onClick: T
      })
    })]
  })
}