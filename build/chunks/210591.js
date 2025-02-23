/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120), n(13667), n(390547), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(642128),
  o = n(692547),
  c = n(481060),
  d = n(259580),
  u = n(293810),
  m = n(388032),
  p = n(145337);

function g(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: p.row,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: p.rowText,
      children: n
    }), t ? (0, r.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(p.rowIcon, p.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: a()(p.rowIcon, p.rowIconEmpty)
    })]
  })
}

function h(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(!1), a = t.flatMap(e => e.items.map(e => e.completed)), o = a.filter(e => e).length / a.length, h = 1 === o, f = (0, c.q_F)({
    width: "".concat(100 * o, "%")
  }), b = [m.NW.format(m.t.wtQtXl, {
    promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE
  }), m.NW.format(m.t["0Fo0wc"], {
    caseStudiesUrl: u.iv.CASE_STUDIES
  }), m.NW.format(m.t["7JdzjI"], {
    subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), m.NW.format(m.t.zkXN6O, {
    tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE
  })], x = n ? null : (0, r.jsxs)(r.Fragment, {
    children: [!h && t.map((e, t) => {
      let {
        title: n,
        items: s
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.$i$, {
          className: p.divider
        }), (0, r.jsx)(c.vwX, {
          className: p.categoryTitle,
          children: n
        }), s.map((e, t) => (0, r.jsx)(g, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), (0, r.jsx)(c.$i$, {
      className: p.divider
    }), (0, r.jsx)(c.vwX, {
      className: p.categoryTitle,
      children: m.NW.string(m.t.FO0AIS)
    }), b.map((e, t) => (0, r.jsx)("div", {
      className: p.row,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, t))]
  });
  return (0, r.jsx)("div", {
    className: p.checklist,
    children: (0, r.jsxs)("div", {
      className: p.container,
      children: [(0, r.jsxs)(c.P3F, {
        className: p.headerBar,
        onClick: () => s(e => !e),
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          className: p.headerText,
          children: m.NW.string(m.t["2Xbd/P"])
        }), (0, r.jsx)(d.Z, {
          direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
          className: p.headerCaret
        })]
      }), !h && (0, r.jsx)("div", {
        className: p.progressBarOuter,
        children: (0, r.jsx)(l.animated.div, {
          className: p.progressBarInner,
          style: f
        })
      }), x]
    })
  })
}