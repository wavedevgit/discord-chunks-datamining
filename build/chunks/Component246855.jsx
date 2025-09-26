/** Chunk was on 74560 **/
/** chunk id: 246855, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk43747 = require("./43747.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk497505 = require("./497505.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561549 = require("./561549.js"),
  Chunk201284 = require("./201284.js");

function y(e) {
  let {
    className: n
  } = e;
  return (0, a.jsx)(c.Z, {
    className: n,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    children: (0, a.jsx)("source", {
      src: b.Z,
      type: "video/webm"
    })
  })
}

function A() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk561549.orbsContainer,
    children: [(0, Chunk951288.jsx)(y, {
      className: Chunk561549.centerOrb
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk561549.smallOrbContainer,
      children: [(0, Chunk951288.jsx)(y, {
        className: Chunk561549.smallOrb
      }), (0, Chunk951288.jsx)(y, {
        className: Chunk561549.smallOrb
      }), (0, Chunk951288.jsx)(y, {
        className: Chunk561549.smallOrb
      }), (0, Chunk951288.jsx)(y, {
        className: Chunk561549.smallOrb
      })]
    })]
  })
}

function N(e) {
  let {
    onClose: n,
    orbsEarned: t,
    orbsBalance: r
  } = e, c = async () => {
    (0, o.Y)({
      pageType: E.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: E.jXE.ORBS_REWARD_MODAL,
      ctaObject: E.qAy.CTA_TO_ORBS_SHOP
    }), await n(), (0, s.mK)({
      openInLayer: false,
      tab: p.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: l.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, a.jsxs)("div", {
    className: f.contentContainer,
    children: [(0, a.jsx)(A, {}), (0, a.jsxs)("div", {
      className: f.copyContainer,
      children: [(0, a.jsxs)("div", {
        className: f.heading,
        children: [(0, a.jsx)(u.M, {
          shouldUseThemeColor: true,
          className: f.orbsIcon
        }), (0, a.jsx)(i.X6q, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: g.intl.format(g.t["/UTD6e"], {
            orbsEarned: t
          })
        })]
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: g.intl.format(g.t.g4t9a2, {
          orbsBalance: r
        })
      })]
    }), (0, a.jsx)(i.zxk, {
      variant: "secondary",
      size: "sm",
      text: g.intl.string(g.t.WYchdX),
      onClick: c,
      fullWidth: true
    })]
  })
}

function x(e) {
  var n;
  let {
    quest: t,
    onClose: i,
    transitionState: l,
    sourceQuestContent: s,
    location: c
  } = e, o = (null == (n = t.userStatus) ? true : n.claimedAt) != null, {
    balance: u,
    error: E
  } = (0, d.A)(), p = (0, _.LM)(t.config), [f, b] = r.useState(o ? "success" : "loading");
  r.useEffect(() => {
    o || "loading" !== f || (0, h.QB)(t.id, m.y$.CROSS_PLATFORM, c).then(() => b("success")).catch(() => b("error"))
  }, [t.id, o, f, c]);
  let y = "loading" === f || null == u && null == E,
    A = "error" === f || null == p || null == u && null != E;
  return y || A ? null : (0, a.jsx)(C.Z, {
    onClose: i,
    transitionState: l,
    quest: t,
    sourceQuestContent: s,
    rewardContent: (0, a.jsx)(R.Z, {
      rewardName: g.intl.string(g.t.Lmysvb),
      children: (0, a.jsx)(N, {
        onClose: i,
        orbsEarned: p,
        orbsBalance: u
      })
    })
  })
}