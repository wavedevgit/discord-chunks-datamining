/** Chunk was on 74560 **/
/** chunk id: 246855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
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
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561549 = require("./561549.js"),
  Chunk201284 = require("./201284.js");

function E(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(l.Z, {
    className: t,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    children: (0, r.jsx)("source", {
      src: j.Z,
      type: "video/webm"
    })
  })
}

function v() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk561549.orbsContainer,
    children: [(0, Chunk951288.jsx)(E, {
      className: Chunk561549.centerOrb
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk561549.smallOrbContainer,
      children: [(0, Chunk951288.jsx)(E, {
        className: Chunk561549.smallOrb
      }), (0, Chunk951288.jsx)(E, {
        className: Chunk561549.smallOrb
      }), (0, Chunk951288.jsx)(E, {
        className: Chunk561549.smallOrb
      }), (0, Chunk951288.jsx)(E, {
        className: Chunk561549.smallOrb
      })]
    })]
  })
}

function N(e) {
  let {
    onClose: t,
    orbsEarned: n,
    orbsBalance: a
  } = e, l = async () => {
    (0, c.Y)({
      pageType: x.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: x.jXE.ORBS_REWARD_MODAL,
      ctaObject: x.qAy.CTA_TO_ORBS_SHOP
    }), await t(), (0, o.mK)({
      openInLayer: false,
      tab: g.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: s.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, r.jsxs)("div", {
    className: y.contentContainer,
    children: [(0, r.jsx)(v, {}), (0, r.jsxs)("div", {
      className: y.copyContainer,
      children: [(0, r.jsxs)("div", {
        className: y.heading,
        children: [(0, r.jsx)(u.M, {
          shouldUseThemeColor: true,
          className: y.orbsIcon
        }), (0, r.jsx)(i.X6q, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: b.intl.format(b.t["/UTD6e"], {
            orbsEarned: n
          })
        })]
      }), null != a ? (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: b.intl.format(b.t.g4t9a2, {
          orbsBalance: a
        })
      }) : null]
    }), (0, r.jsx)(i.zxk, {
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t.WYchdX),
      onClick: l,
      fullWidth: true
    })]
  })
}

function R(e) {
  var t;
  let {
    quest: n,
    onClose: i,
    transitionState: s,
    sourceQuestContent: o,
    location: l
  } = e, c = (null == (t = n.userStatus) ? true : t.claimedAt) != null, {
    balance: u,
    error: x
  } = (0, d.A)(), g = (0, m.LM)(n.config), [y, j] = a.useState(c ? "success" : "loading");
  a.useEffect(() => {
    c || "loading" !== y || (0, p.QB)(n.id, _.y$.CROSS_PLATFORM, l).then(() => j("success")).catch(() => j("error"))
  }, [n.id, c, y, l]);
  let E = "error" === y || null == g || null == u && null != x;
  return (0, r.jsx)(f.Z, {
    onClose: i,
    transitionState: s,
    quest: n,
    sourceQuestContent: o,
    location: h.dr.ORBS_REWARD_MODAL,
    isRewardContentLoading: "loading" === y || null == u && null == x,
    rewardContentHasError: E,
    rewardContent: E ? null : (0, r.jsx)(C.Z, {
      rewardName: b.intl.string(b.t.Lmysvb),
      children: (0, r.jsx)(N, {
        onClose: i,
        orbsEarned: g,
        orbsBalance: u
      })
    })
  })
}