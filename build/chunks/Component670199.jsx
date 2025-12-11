/** Chunk was on 65652 **/
/** chunk id: 670199, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk420418 = require("./420418.js");

function h(n) {
  var t, e;
  let {
    classification: a,
    isDsaEligible: h = false,
    isSpam: N = false,
    isCoppa: C = false,
    appealIngestionType: j,
    className: _,
    onClose: E,
    onNext: I
  } = n, v = (0, d.n)(), T = null != (t = null == a ? true : a.explainer_link) ? t : "", S = null != a && null != a.flagged_content && a.flagged_content.length > 0, A = (0, c.c7)(null == a ? true : a.description), k = !N && !C && (null == j || j === o.j4.IN_APP), Z = null != a && ((0, c.FB)(a) || S);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: r.Z.Direction.VERTICAL,
      className: p.header,
      separator: false,
      children: [(0, i.jsx)(l.Heading, {
        className: p.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["C5q+pW"])
      }), (0, i.jsx)(l.Text, {
        className: p.subtitle,
        color: "text-default",
        variant: "text-md/normal",
        children: u.intl.string(u.t.URt7VI)
      }), null != E && (0, i.jsx)(l.olH, {
        "data-migration-pending": true,
        className: p.closeButton,
        onClick: E
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: s()(p.modalContent, !Z && p.evidenceOffset, _),
      paddingFix: false,
      children: [Z && (0, i.jsx)(m.s, {
        flaggedContent: null != (e = a.flagged_content) ? e : []
      }), (0, i.jsx)(l.Text, {
        className: p.optionHeader,
        color: "text-default",
        variant: "text-xs/bold",
        children: u.intl.string(u.t.xsdcxh)
      }), (0, i.jsx)("div", {
        className: p.policyContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: A
        })
      }), C && (0, i.jsx)(x.Z, {
        url: g.sQ.AGE_VERIFICATION_LINK,
        text: u.intl.string(u.t["gJs+kf"]),
        onClick: () => v(g.n0.ClickAgeVerificationLink)
      }), N && !C && (0, i.jsx)(x.Z, {
        url: g.sQ.SPAM_LINK,
        text: u.intl.string(u.t["PaNS+I"]),
        onClick: () => v(g.n0.ClickSpamWebformLink)
      }), !C && (0, i.jsx)(x.Z, {
        text: u.intl.string(u.t["Vtyn/7"]),
        url: T,
        onClick: () => v(g.n0.ClickLearnMoreLink)
      }), k && h && (0, i.jsx)(l.Text, {
        className: p.learnMore,
        variant: "text-xs/normal",
        children: u.intl.format(u.t.WMUgCX, {})
      })]
    }), k && (0, i.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)(l.Button, {
        variant: "primary",
        text: u.intl.string(u.t.PDTjLN),
        onClick: I
      })
    })]
  })
}