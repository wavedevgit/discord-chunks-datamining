/** Chunk was on 74327 **/
/** chunk id: 885737, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk739010 = require("./739010.js"),
  Chunk393033 = require("./393033.js"),
  Chunk261398 = require("./261398.js"),
  Chunk808224 = require("./808224.jsx"),
  Chunk246505 = require("./246505.jsx"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk299916 = require("./299916.js");

function u(e) {
  var i, n;
  let {
    classification: a,
    isDsaEligible: u = false,
    isSpam: A = false,
    isCoppa: h = false,
    appealIngestionType: j,
    className: _,
    onClose: C,
    onNext: E
  } = e, I = (0, o.e)(), v = null != (i = null == a ? true : a.explainer_link) ? i : "", S = null != a && null != a.flagged_content && a.flagged_content.length > 0, T = (0, c.eu)(null == a ? true : a.description), k = !A && !h && (null == j || j === d.Il.IN_APP), L = null != a && ((0, c._g)(a) || S);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(l.rQ0, {
      "data-migration-pending": true,
      direction: r.A.Direction.VERTICAL,
      className: N.wx,
      separator: false,
      children: [(0, t.jsx)(l.Heading, {
        className: N.DD,
        variant: "heading-xl/semibold",
        children: p.intl.string(p.t["C5q+pW"])
      }), (0, t.jsx)(l.Text, {
        className: N.VA,
        color: "text-default",
        variant: "text-md/normal",
        children: p.intl.string(p.t.URt7VI)
      }), null != C && (0, t.jsx)(l.s_y, {
        "data-migration-pending": true,
        className: N.b,
        onClick: C
      })]
    }), (0, t.jsxs)(l.$mQ, {
      "data-migration-pending": true,
      className: s()(N.jE, !L && N.bQ, _),
      paddingFix: false,
      children: [L && (0, t.jsx)(m.U, {
        flaggedContent: null != (n = a.flagged_content) ? n : []
      }), (0, t.jsx)(l.Text, {
        className: N.l8,
        color: "text-default",
        variant: "text-xs/bold",
        children: p.intl.string(p.t.xsdcxh)
      }), (0, t.jsx)("div", {
        className: N.kU,
        children: (0, t.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: T
        })
      }), h && (0, t.jsx)(x.A, {
        url: g.d$.AGE_VERIFICATION_LINK,
        text: p.intl.string(p.t["gJs+kf"]),
        onClick: () => I(g.ZU.ClickAgeVerificationLink)
      }), A && !h && (0, t.jsx)(x.A, {
        url: g.d$.SPAM_LINK,
        text: p.intl.string(p.t["PaNS+I"]),
        onClick: () => I(g.ZU.ClickSpamWebformLink)
      }), !h && (0, t.jsx)(x.A, {
        text: p.intl.string(p.t["Vtyn/7"]),
        url: v,
        onClick: () => I(g.ZU.ClickLearnMoreLink)
      }), k && u && (0, t.jsx)(l.Text, {
        className: N.C2,
        variant: "text-xs/normal",
        children: p.intl.format(p.t.WMUgCX, {})
      })]
    }), k && (0, t.jsx)(l.jlY, {
      "data-migration-pending": true,
      children: (0, t.jsx)(l.Button, {
        variant: "primary",
        text: p.intl.string(p.t.PDTjLN),
        onClick: E
      })
    })]
  })
}