/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120), n(13667), n(390547), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(642128),
  o = n(692547),
  A = n(481060),
  c = n(259580),
  d = n(293810),
  u = n(388032),
  g = n(820279);

function f(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: g.row,
    children: [(0, r.jsx)(A.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: g.rowText,
      children: n
    }), t ? (0, r.jsx)(A.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(g.rowIcon, g.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: a()(g.rowIcon, g.rowIconEmpty)
    })]
  })
}

function m(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(!1), a = t.flatMap(e => e.items.map(e => e.completed)), o = a.filter(e => e).length / a.length, m = 1 === o, p = (0, A.q_F)({
    width: "".concat(100 * o, "%")
  }), h = [u.NW.format(u.t.wtQtXl, {
    promoPageGuideUrl: d.iv.PROMO_PAGE_GUIDE
  }), u.NW.format(u.t["0Fo0wc"], {
    caseStudiesUrl: d.iv.CASE_STUDIES
  }), u.NW.format(u.t["7JdzjI"], {
    subscriptionOfferingGuideUrl: d.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), u.NW.format(u.t.zkXN6O, {
    tierStructureGuideUrl: d.iv.TIER_STRUCTURE_GUIDE
  })], C = n ? null : (0, r.jsxs)(r.Fragment, {
    children: [!m && t.map((e, t) => {
      let {
        title: n,
        items: s
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(A.$i$, {
          className: g.divider
        }), (0, r.jsx)(A.vwX, {
          className: g.categoryTitle,
          children: n
        }), s.map((e, t) => (0, r.jsx)(f, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), (0, r.jsx)(A.$i$, {
      className: g.divider
    }), (0, r.jsx)(A.vwX, {
      className: g.categoryTitle,
      children: u.NW.string(u.t.FO0AIS)
    }), h.map((e, t) => (0, r.jsx)("div", {
      className: g.row,
      children: (0, r.jsx)(A.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, t))]
  });
  return (0, r.jsx)("div", {
    className: g.checklist,
    children: (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsxs)(A.P3F, {
        className: g.headerBar,
        onClick: () => s(e => !e),
        children: [(0, r.jsx)(A.X6q, {
          variant: "heading-md/semibold",
          className: g.headerText,
          children: u.NW.string(u.t["2Xbd/P"])
        }), (0, r.jsx)(c.Z, {
          direction: n ? c.Z.Directions.DOWN : c.Z.Directions.UP,
          className: g.headerCaret
        })]
      }), !m && (0, r.jsx)("div", {
        className: g.progressBarOuter,
        children: (0, r.jsx)(l.animated.div, {
          className: g.progressBarInner,
          style: p
        })
      }), C]
    })
  })
}