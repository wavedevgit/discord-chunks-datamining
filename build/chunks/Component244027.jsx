/** Chunk was on web.js **/
/** chunk id: 244027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk569794 = require("./569794.jsx"),
  Chunk930607 = require("./930607.jsx"),
  Chunk647848 = require("./647848.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk210273 = require("./210273.js"),
  Chunk508155 = require("./508155.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333354 = require("./333354.js"),
  Chunk251983 = require("./251983.js");

function m(e) {
  let {
    tier: t,
    isActive: n
  } = e, i = t === f.TVA.TIER_1, c = t === f.TVA.TIER_3, u = t === f.TVA.TIER_1 ? o.v : t === f.TVA.TIER_2 ? s.w : l.H;
  return (0, r.jsxs)("div", {
    className: h.MY,
    children: [(0, r.jsx)("div", {
      className: a()(h.hr, {
        [h.ti]: n,
        [h.YO]: !n,
        [h.JQ]: i,
        [h.Uz]: c
      })
    }), (0, r.jsx)("div", {
      className: a()(h.Zj, {
        [h.jv]: n,
        [h.ip]: t === f.TVA.TIER_1,
        [h.p3]: t === f.TVA.TIER_2,
        [h.wF]: t === f.TVA.TIER_3
      }),
      children: (0, r.jsx)(u, {
        alt: "",
        ariaHidden: true,
        size: 24
      })
    })]
  })
}

function g(e) {
  let {
    guild: t,
    definition: n
  } = e, {
    tier: i,
    perks: o
  } = n, s = t.premiumTier >= i, l = f.M2T[i];
  return (0, r.jsxs)("div", {
    className: a()(h.Nr, {
      [h.Bm]: s,
      [h.c]: !s
    }),
    children: [(0, r.jsx)(m, {
      tier: i,
      isActive: s
    }), (0, r.jsxs)("div", {
      className: h.zI,
      children: [(0, r.jsxs)("div", {
        className: h.$h,
        children: [(0, r.jsx)(c.Heading, {
          className: a()(h.JJ, {
            [h.eX]: !s
          }),
          variant: "heading-xl/semibold",
          color: s ? "text-strong" : true,
          children: p.intl.string(i === f.TVA.TIER_1 ? p.t.nzXtaS : i === f.TVA.TIER_2 ? p.t["h33/uW"] : p.t.BfF6ED)
        }), (0, r.jsxs)("div", {
          className: h.yC,
          children: [(0, r.jsx)(c._Jp, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            children: p.intl.format(p.t["pob/cL"], {
              subscriptions: l
            })
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: h.PJ,
        children: [o.slice(0, 4).map((e, t) => {
          if (null != e.predicate && !e.predicate()) return null;
          let n = (0, u.X)(e.perkIcon);
          return (0, r.jsxs)("div", {
            className: a()(h.bK, {
              [h.o]: !s
            }),
            children: [(0, r.jsx)(n, {
              className: h.kf,
              color: s ? "var(--text-default)" : "currentColor",
              size: "sm"
            }), (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              color: s ? "text-default" : true,
              children: e.getCopy()
            })]
          }, t)
        }), (0, r.jsx)(c.Text, {
          className: h.wx,
          variant: "text-md/medium",
          children: p.intl.string(_.default.nIj3LZ)
        })]
      })]
    })]
  })
}

function E(e) {
  let {
    guild: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(h.iE, n),
    children: d.t.map(e => (0, r.jsx)(g, {
      guild: t,
      definition: e
    }, e.tier))
  })
}