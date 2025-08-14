/** Chunk was on 40725 **/
/** chunk id: 210591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
      className: a()(g.rowIcon, g.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: a()(g.rowIcon, g.rowIconEmpty)
    })]
  })
}

function h(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false), a = t.flatMap(e => e.items.map(e => e.completed)), o = a.filter(e => e).length / a.length, h = 1 === o, f = (0, c.q_F)({
    width: "".concat(100 * o, "%")
  }), b = [m.intl.format(m.t.wtQtXl, {
    promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE
  }), m.intl.format(m.t["0Fo0wc"], {
    caseStudiesUrl: u.iv.CASE_STUDIES
  }), m.intl.format(m.t["7JdzjI"], {
    subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), m.intl.format(m.t.zkXN6O, {
    tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE
  })], x = n ? null : (0, r.jsxs)(r.Fragment, {
    children: [!h && t.map((e, t) => {
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
    }), b.map((e, t) => (0, r.jsx)("div", {
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
      }), !h && (0, r.jsx)("div", {
        className: g.progressBarOuter,
        children: (0, r.jsx)(s.animated.div, {
          className: g.progressBarInner,
          style: f
        })
      }), x]
    })
  })
}