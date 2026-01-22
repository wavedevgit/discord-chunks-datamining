/** Chunk was on 47841 **/
/** chunk id: 328031, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk106467 = require("./106467.js");

function b(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: g.nM,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "interactive-text-active",
      className: g.qg,
      children: n
    }), t ? (0, r.jsx)(o.yr3, {
      size: "md",
      color: "currentColor",
      secondaryColor: c.A.unsafe_rawColors.WHITE.css,
      className: s()(g.aL, g.xp)
    }) : (0, r.jsx)("div", {
      className: s()(g.aL, g.VL)
    })]
  })
}

function m(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false), s = t.flatMap(e => e.items.map(e => e.completed)), c = s.filter(e => e).length / s.length, m = 1 === c, p = (0, o.zhh)({
    width: "".concat(100 * c, "%")
  }), x = [f.intl.format(f.t.wtQtXs, {
    promoPageGuideUrl: u.P7.PROMO_PAGE_GUIDE
  }), f.intl.format(f.t["0Fo0wf"], {
    caseStudiesUrl: u.P7.CASE_STUDIES
  }), f.intl.format(f.t["7JdzjA"], {
    subscriptionOfferingGuideUrl: u.P7.SUBSCRIPTION_OFFERING_GUIDE
  }), f.intl.format(f.t.zkXN6I, {
    tierStructureGuideUrl: u.P7.TIER_STRUCTURE_GUIDE
  })], h = n ? null : (0, r.jsxs)(o.nVY, {
    children: [!m && t.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(o.cGx, {}), (0, r.jsx)(o.D0$, {
          label: n,
          children: (0, r.jsx)(o.BJc, {
            gap: 8,
            children: l.map((e, t) => (0, r.jsx)(b, {
              children: e.description,
              checked: e.completed
            }, t))
          })
        })]
      }, t)
    }), (0, r.jsx)(o.cGx, {}), (0, r.jsx)(o.D0$, {
      label: f.intl.string(f.t.FO0AIS),
      children: (0, r.jsx)(o.BJc, {
        gap: 8,
        children: x.map((e, t) => (0, r.jsx)("div", {
          className: g.nM,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, t))
      })
    })]
  });
  return (0, r.jsx)("div", {
    className: g.D4,
    children: (0, r.jsx)("div", {
      className: g.kL,
      children: (0, r.jsxs)(o.BJc, {
        gap: 16,
        children: [(0, r.jsxs)(o.DUT, {
          className: g.jr,
          onClick: () => l(e => !e),
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: g.TK,
            children: f.intl.string(f.t["2Xbd/G"])
          }), (0, r.jsx)(d.A, {
            direction: n ? d.A.Directions.DOWN : d.A.Directions.UP,
            className: g.D
          })]
        }), !m && (0, r.jsx)("div", {
          className: g.ux,
          children: (0, r.jsx)(a.animated.div, {
            className: g.zZ,
            style: p
          })
        }), h]
      })
    })
  })
}