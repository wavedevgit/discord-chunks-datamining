/** Chunk was on web.js **/
/** chunk id: 343547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk892227 = require("./892227.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk749082 = require("./749082.jsx"),
  Chunk385243 = require("./385243.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk901123 = require("./901123.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk785619 = require("./785619.js"),
  Chunk909340 = require("./909340.js"),
  Chunk455482 = require("./455482.js");
let w = Chunk975571.A.getArticleURL(Chunk652215.MVz.ORBS_REWARDS_FAQ),
  R = 720;

function P(e, t) {
  let n = e.program_current_state,
    i = null != e.next_reward_date && "" !== e.next_reward_date ? (0, s.default)(new Date(e.next_reward_date), new Date) : null,
    a = null == e ? true : e.total_rewarded_from_program;
  switch (n) {
    case _.L.ACTIVE:
      if (null == i || i < 0) return null;
      return {
        displayTotalLifetimeRewards: null != a, displayProgressBar: true, actionButton: (0, r.jsx)(c.$nd, {
          text: S.intl.string(I.default.BxjHiu),
          variant: t ? "overlay-primary" : "secondary",
          onClick: () => (0, h.pX)(A.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS))
        }), headerText: S.intl.format(I.default.cfE8Oh, {
          days: Math.max(1, i)
        }), subheaderText: S.intl.format(I.default["53tWRt"], {
          helpdeskArticle: w
        })
      };
    case _.L.PAYMENT_PROCESSING:
      return {
        displayTotalLifetimeRewards: false, displayProgressBar: false, actionButton: (0, r.jsx)(c.$nd, {
          text: S.intl.string(I.default.KVCfnE),
          variant: t ? "overlay-primary" : "secondary",
          onClick: () => (0, g.openUserSettings)(m.X.BILLING_PANEL, {
            section: O.nc_.BILLING
          })
        }), headerText: S.intl.string(I.default.uuZJXR), subheaderText: S.intl.format(I.default.dkeEV7, {
          helpdeskArticle: w
        })
      };
    case _.L.PAYMENT_ERROR:
      return {
        displayTotalLifetimeRewards: null != a, displayProgressBar: false, actionButton: (0, r.jsx)(c.$nd, {
          text: S.intl.string(I.default.KVCfnE),
          variant: "critical-secondary",
          onClick: () => (0, g.openUserSettings)(m.X.BILLING_PANEL, {
            section: O.nc_.BILLING
          })
        }), headerText: S.intl.string(I.default["+O9Asn"]), subheaderText: S.intl.format(I.default.nWKEBZ, {
          helpdeskArticle: w
        })
      };
    case _.L.PROGRAM_ROLLBACK:
      return {
        displayTotalLifetimeRewards: null != a, displayProgressBar: null != i, actionButton: (0, r.jsx)(c.$nd, {
          text: S.intl.string(I.default["wLAd/+"]),
          variant: t ? "overlay-primary" : "secondary",
          onClick: () => (0, h.pX)(A.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS))
        }), headerText: S.intl.string(I.default.zF0HnJ), subheaderText: S.intl.format(I.default["5tzNTa"], {
          helpdeskArticle: w
        })
      };
    case _.L.PREMIUM_CHURNING:
      return {
        displayTotalLifetimeRewards: null != a, displayProgressBar: null != i, actionButton: (0, r.jsx)(c.$nd, {
          text: S.intl.string(I.default.FToh6D),
          variant: t ? "overlay-primary" : "secondary",
          icon: c.tvc,
          onClick: () => (0, g.openUserSettings)(m.X.BILLING_PANEL, {
            section: O.nc_.BILLING
          })
        }), headerText: S.intl.string(I.default.ISnOet), subheaderText: S.intl.format(I.default["vjaRZ/"], {
          helpdeskArticle: w
        })
      };
    default:
      return null
  }
}
let D = e => {
  let {
    className: t
  } = e, {
    passesGeneralUIInvariant: n,
    programReward: i
  } = (0, o.cf)([p.A], () => ({
    passesGeneralUIInvariant: p.A.passesGeneralUIInvariant(_.W.NITRO),
    programReward: p.A.getRewardForProgram(_.W.NITRO)
  })), s = (0, d.A)("(min-width: ".concat(R, "px)"));
  if (!n || null == i) return null;
  let h = P(i, s);
  if (null == h) return null;
  let {
    displayTotalLifetimeRewards: m,
    displayProgressBar: g,
    actionButton: E,
    headerText: O,
    subheaderText: v
  } = h;
  return (0, r.jsxs)("div", {
    className: a()(T.Hc, t),
    children: [(0, r.jsx)("div", {
      className: T.aZ,
      children: (0, r.jsx)(c.Exy, {
        type: "beta",
        variant: "expressive"
      })
    }), (0, r.jsxs)(y.A, {
      cardType: u.sl2.CUSTOM,
      cardClassName: T.Nr,
      children: [(0, r.jsx)(f.A, {
        muted: true,
        autoPlay: true,
        playsInline: true,
        loop: true,
        className: T.Ki,
        src: C.A
      }), (0, r.jsxs)("div", {
        className: T.zK,
        children: [(0, r.jsx)("img", {
          src: N.A,
          className: T._e,
          alt: "",
          "aria-hidden": true
        }), (0, r.jsx)("div", {
          className: T.mR
        })]
      }), (0, r.jsxs)("div", {
        className: T.FS,
        children: [(0, r.jsx)(c.DZT, {
          variant: "heading-xxl/bold",
          className: T.R_,
          children: O
        }), (0, r.jsx)(c.EYj, {
          variant: "text-md/medium",
          className: T.G3,
          children: v
        }), g && (0, r.jsx)(b.A, {
          className: T.L$
        }), m && (0, r.jsxs)("div", {
          className: T.fB,
          children: [(0, r.jsx)(c.EYj, {
            variant: "text-md/medium",
            className: T.G3,
            children: S.intl.string(I.default["/1mWUn"])
          }), (0, r.jsx)(c.Cp8, {
            size: "sm",
            color: l.A.colors.TEXT_DEFAULT.css
          }), (0, r.jsx)(c.EYj, {
            variant: "text-md/medium",
            className: T.G3,
            children: i.total_rewarded_from_program
          })]
        }), (0, r.jsx)("div", {
          className: T.WT,
          children: (0, r.jsx)(c.e2v, {
            children: E
          })
        })]
      })]
    })]
  })
}