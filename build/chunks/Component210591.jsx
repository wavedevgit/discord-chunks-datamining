/** Chunk was on 27087 **/
/** chunk id: 210591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk351761 = require("./351761.js");

function p(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: g.row,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: g.rowText,
      children: n
    }), t ? (0, r.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: s()(g.rowIcon, g.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: s()(g.rowIcon, g.rowIconEmpty)
    })]
  })
}

function f(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false), s = t.flatMap(e => e.items.map(e => e.completed)), o = s.filter(e => e).length / s.length, f = 1 === o, h = (0, c.q_F)({
    width: "".concat(100 * o, "%")
  }), x = [m.intl.format(m.t.wtQtXl, {
    promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE
  }), m.intl.format(m.t["0Fo0wc"], {
    caseStudiesUrl: u.iv.CASE_STUDIES
  }), m.intl.format(m.t["7JdzjI"], {
    subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), m.intl.format(m.t.zkXN6O, {
    tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE
  })], b = n ? null : (0, r.jsxs)(r.Fragment, {
    children: [!f && t.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.$i$, {
          className: g.divider
        }), (0, r.jsx)(c.vwX, {
          className: g.categoryTitle,
          children: n
        }), l.map((e, t) => (0, r.jsx)(p, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), (0, r.jsx)(c.$i$, {
      className: g.divider
    }), (0, r.jsx)(c.vwX, {
      className: g.categoryTitle,
      children: m.intl.string(m.t.FO0AIS)
    }), x.map((e, t) => (0, r.jsx)("div", {
      className: g.row,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, t))]
  });
  return (0, r.jsx)("div", {
    className: g.checklist,
    children: (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsxs)(c.P3F, {
        className: g.headerBar,
        onClick: () => l(e => !e),
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          className: g.headerText,
          children: m.intl.string(m.t["2Xbd/P"])
        }), (0, r.jsx)(d.Z, {
          direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
          className: g.headerCaret
        })]
      }), !f && (0, r.jsx)("div", {
        className: g.progressBarOuter,
        children: (0, r.jsx)(a.animated.div, {
          className: g.progressBarInner,
          style: h
        })
      }), b]
    })
  })
}