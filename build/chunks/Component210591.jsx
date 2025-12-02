/** Chunk was on 384 **/
/** chunk id: 210591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk253179 = require("./253179.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk937028 = require("./937028.js");

function p(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.row,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: m.rowText,
      children: n
    }), t ? (0, r.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(m.rowIcon, m.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: a()(m.rowIcon, m.rowIconEmpty)
    })]
  })
}

function f(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false), a = t.flatMap(e => e.items.map(e => e.completed)), o = a.filter(e => e).length / a.length, f = 1 === o, h = (0, c.q_F)({
    width: "".concat(100 * o, "%")
  }), b = [g.intl.format(g.t.wtQtXs, {
    promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE
  }), g.intl.format(g.t["0Fo0wf"], {
    caseStudiesUrl: u.iv.CASE_STUDIES
  }), g.intl.format(g.t["7JdzjA"], {
    subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), g.intl.format(g.t.zkXN6I, {
    tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE
  })], x = n ? null : (0, r.jsxs)(c.C3N, {
    children: [!f && t.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.izJ, {}), (0, r.jsx)(c.gNt, {
          label: n,
          children: (0, r.jsx)(c.Kqy, {
            gap: 8,
            children: l.map((e, t) => (0, r.jsx)(p, {
              children: e.description,
              checked: e.completed
            }, t))
          })
        })]
      }, t)
    }), (0, r.jsx)(c.izJ, {}), (0, r.jsx)(c.gNt, {
      label: g.intl.string(g.t.FO0AIS),
      children: (0, r.jsx)(c.Kqy, {
        gap: 8,
        children: b.map((e, t) => (0, r.jsx)("div", {
          className: m.row,
          children: (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, t))
      })
    })]
  });
  return (0, r.jsx)("div", {
    className: m.checklist,
    children: (0, r.jsx)("div", {
      className: m.container,
      children: (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [(0, r.jsxs)(c.P3F, {
          className: m.headerBar,
          onClick: () => l(e => !e),
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            className: m.headerText,
            children: g.intl.string(g.t["2Xbd/G"])
          }), (0, r.jsx)(d.Z, {
            direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
            className: m.headerCaret
          })]
        }), !f && (0, r.jsx)("div", {
          className: m.progressBarOuter,
          children: (0, r.jsx)(s.animated.div, {
            className: m.progressBarInner,
            style: h
          })
        }), x]
      })
    })
  })
}