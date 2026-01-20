/** Chunk was on web.js **/
/** chunk id: 181813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk995638 = require("./995638.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk468208 = require("./468208.js"),
  Chunk165299 = require("./165299.js"),
  Chunk703656 = require("./703656.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk375527 = require("./375527.js"),
  Chunk631452 = require("./631452.jsx"),
  Chunk713422 = require("./713422.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk416145 = require("./416145.js"),
  Chunk618435 = require("./618435.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk608262 = require("./608262.js"),
  Chunk900303 = require("./900303.js"),
  Chunk989448 = require("./989448.js");
let w = Chunk63063.Z.getArticleURL(Chunk981631.BhN.ORBS_REWARDS_FAQ),
  R = 720;

function D(e, t, n) {
  let i = e.program_current_state,
    a = null != e.next_reward_date && "" !== e.next_reward_date ? (0, o.default)(new Date(e.next_reward_date), new Date) : null,
    s = null == e ? true : e.total_rewarded_from_program;
  switch (i) {
    case _.g.ACTIVE:
      if (null == a || a < 0) return null;
      return {
        displayTotalLifetimeRewards: null != s, displayProgressBar: true, actionButton: (0, r.jsx)(c.zxk, {
          text: C.intl.string(T.default.BxjHiu),
          variant: t ? "overlay-primary" : "secondary",
          onClick: () => (0, h.uL)(I.Z5.COLLECTIBLES_SHOP_WITH_TAB(S.AW.ORBS))
        }), headerText: C.intl.format(T.default.cfE8Oh, {
          days: Math.max(1, a)
        }), subheaderText: C.intl.format(T.default.JCLEQp, {
          orbsCount: n,
          helpdeskArticle: w
        })
      };
    case _.g.PAYMENT_PROCESSING:
      return {
        displayTotalLifetimeRewards: false, displayProgressBar: false, actionButton: (0, r.jsx)(c.zxk, {
          text: C.intl.string(T.default.KVCfnE),
          variant: t ? "overlay-primary" : "secondary",
          onClick: () => (0, g.openUserSettings)(m.n.BILLING_PANEL, {
            section: v.oAB.BILLING
          })
        }), headerText: C.intl.string(T.default.uuZJXR), subheaderText: C.intl.format(T.default.dkeEV7, {
          helpdeskArticle: w
        })
      };
    case _.g.PAYMENT_ERROR:
      return {
        displayTotalLifetimeRewards: null != s, displayProgressBar: false, actionButton: (0, r.jsx)(c.zxk, {
          text: C.intl.string(T.default.KVCfnE),
          variant: "critical-secondary",
          onClick: () => (0, g.openUserSettings)(m.n.BILLING_PANEL, {
            section: v.oAB.BILLING
          })
        }), headerText: C.intl.string(T.default["+O9Asn"]), subheaderText: C.intl.format(T.default.nWKEBZ, {
          helpdeskArticle: w
        })
      };
    case _.g.PROGRAM_ROLLBACK:
      return {
        displayTotalLifetimeRewards: null != s, displayProgressBar: null != a, actionButton: (0, r.jsx)(c.zxk, {
          text: C.intl.string(T.default["wLAd/+"]),
          variant: t ? "overlay-primary" : "secondary",
          onClick: () => (0, h.uL)(I.Z5.COLLECTIBLES_SHOP_WITH_TAB(S.AW.ORBS))
        }), headerText: C.intl.string(T.default.zF0HnJ), subheaderText: C.intl.format(T.default["5tzNTa"], {
          helpdeskArticle: w
        })
      };
    case _.g.PREMIUM_CHURNING:
      return {
        displayTotalLifetimeRewards: null != s, displayProgressBar: null != a, actionButton: (0, r.jsx)(c.zxk, {
          text: C.intl.string(T.default.FToh6D),
          variant: t ? "overlay-primary" : "secondary",
          icon: c.SrA,
          onClick: () => (0, g.openUserSettings)(m.n.BILLING_PANEL, {
            section: v.oAB.BILLING
          })
        }), headerText: C.intl.string(T.default.ISnOet), subheaderText: C.intl.format(T.default.agletO, {
          orbsCount: n,
          helpdeskArticle: w
        })
      };
    default:
      return null
  }
}
let x = e => {
  let {
    className: t
  } = e, {
    passesGeneralUIInvariant: n,
    programReward: i
  } = (0, s.cj)([p.Z], () => ({
    passesGeneralUIInvariant: p.Z.passesGeneralUIInvariant(_.f.NITRO),
    programReward: p.Z.getRewardForProgram(_.f.NITRO)
  })), o = (0, d.Z)("(min-width: ".concat(R, "px)")), {
    orbsRewardAmount: h
  } = (0, b.er)("PremiumTenureRewardsOrbsCard");
  if (!n || null == i) return null;
  let m = D(i, o, h);
  if (null == m) return null;
  let {
    displayTotalLifetimeRewards: g,
    displayProgressBar: E,
    actionButton: v,
    headerText: S,
    subheaderText: I
  } = m;
  return (0, r.jsxs)("div", {
    className: a()(A.baseContainer, t),
    children: [(0, r.jsx)("div", {
      className: A.betaBadge,
      children: (0, r.jsx)(c.Cts, {
        type: "beta",
        variant: "expressive"
      })
    }), (0, r.jsxs)(y.Z, {
      cardType: u.sje.CUSTOM,
      cardClassName: A.card,
      children: [(0, r.jsx)(f.Z, {
        muted: true,
        autoPlay: true,
        playsInline: true,
        loop: true,
        className: A.video,
        src: N.Z
      }), (0, r.jsxs)("div", {
        className: A.bannerImageContainer,
        children: [(0, r.jsx)("img", {
          src: P.Z,
          className: A.bannerImage,
          alt: "",
          "aria-hidden": true
        }), (0, r.jsx)("div", {
          className: A.stackedGradientOverlay
        })]
      }), (0, r.jsxs)("div", {
        className: A.textContainer,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-xxl/bold",
          className: A.heading,
          children: S
        }), (0, r.jsx)(c.xvT, {
          variant: "text-md/medium",
          className: A.bodyText,
          children: I
        }), E && (0, r.jsx)(O.Z, {
          className: A.progressContainer
        }), g && (0, r.jsxs)("div", {
          className: A.totalLifetimeRewardsContainer,
          children: [(0, r.jsx)(c.xvT, {
            variant: "text-md/medium",
            className: A.bodyText,
            children: C.intl.string(T.default["/1mWUn"])
          }), (0, r.jsx)(c.aQr, {
            size: "sm",
            color: l.Z.colors.TEXT_DEFAULT.css
          }), (0, r.jsx)(c.xvT, {
            variant: "text-md/medium",
            className: A.bodyText,
            children: i.total_rewarded_from_program
          })]
        }), (0, r.jsx)("div", {
          className: A.actionButtonContainer,
          children: (0, r.jsx)(c.hE2, {
            children: v
          })
        })]
      })]
    })]
  })
}