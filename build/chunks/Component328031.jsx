/** Chunk was on 39048 **/
/** chunk id: 328031, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk106467 = require("./106467.js");

function p(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.nM,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "interactive-text-active",
      className: m.qg,
      children: n
    }), t ? (0, r.jsx)(c.yr3, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
      className: s()(m.aL, m.xp)
    }) : (0, r.jsx)("div", {
      className: s()(m.aL, m.VL)
    })]
  })
}

function f(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false), s = t.flatMap(e => e.items.map(e => e.completed)), o = s.filter(e => e).length / s.length, f = 1 === o, h = (0, c.zhh)({
    width: "".concat(100 * o, "%")
  }), b = [g.intl.format(g.t.wtQtXs, {
    promoPageGuideUrl: u.P7.PROMO_PAGE_GUIDE
  }), g.intl.format(g.t["0Fo0wf"], {
    caseStudiesUrl: u.P7.CASE_STUDIES
  }), g.intl.format(g.t["7JdzjA"], {
    subscriptionOfferingGuideUrl: u.P7.SUBSCRIPTION_OFFERING_GUIDE
  }), g.intl.format(g.t.zkXN6I, {
    tierStructureGuideUrl: u.P7.TIER_STRUCTURE_GUIDE
  })], x = n ? null : (0, r.jsxs)(c.nVY, {
    children: [!f && t.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(c.cGx, {}), (0, r.jsx)(c.D0$, {
          label: n,
          children: (0, r.jsx)(c.BJc, {
            gap: 8,
            children: l.map((e, t) => (0, r.jsx)(p, {
              children: e.description,
              checked: e.completed
            }, t))
          })
        })]
      }, t)
    }), (0, r.jsx)(c.cGx, {}), (0, r.jsx)(c.D0$, {
      label: g.intl.string(g.t.FO0AIS),
      children: (0, r.jsx)(c.BJc, {
        gap: 8,
        children: b.map((e, t) => (0, r.jsx)("div", {
          className: m.nM,
          children: (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, t))
      })
    })]
  });
  return (0, r.jsx)("div", {
    className: m.D4,
    children: (0, r.jsx)("div", {
      className: m.kL,
      children: (0, r.jsxs)(c.BJc, {
        gap: 16,
        children: [(0, r.jsxs)(c.DUT, {
          className: m.jr,
          onClick: () => l(e => !e),
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            className: m.TK,
            children: g.intl.string(g.t["2Xbd/G"])
          }), (0, r.jsx)(d.A, {
            direction: n ? d.A.Directions.DOWN : d.A.Directions.UP,
            className: m.D
          })]
        }), !f && (0, r.jsx)("div", {
          className: m.ux,
          children: (0, r.jsx)(a.animated.div, {
            className: m.zZ,
            style: h
          })
        }), x]
      })
    })
  })
}