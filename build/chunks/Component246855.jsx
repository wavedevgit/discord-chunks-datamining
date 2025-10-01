/** Chunk was on 74560 **/
/** chunk id: 246855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
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
  Chunk651353 = require("./651353.js"),
  Chunk201284 = require("./201284.js");

function A(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(o.Z, {
    className: t,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    children: (0, r.jsx)("source", {
      src: y.Z,
      type: "video/webm"
    })
  })
}

function N() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk651353.orbsContainer,
    children: [(0, Chunk951288.jsx)(A, {
      className: Chunk651353.centerOrb
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk651353.smallOrbContainer,
      children: [(0, Chunk951288.jsx)(A, {
        className: Chunk651353.smallOrb
      }), (0, Chunk951288.jsx)(A, {
        className: Chunk651353.smallOrb
      }), (0, Chunk951288.jsx)(A, {
        className: Chunk651353.smallOrb
      }), (0, Chunk951288.jsx)(A, {
        className: Chunk651353.smallOrb
      })]
    })]
  })
}

function x(e) {
  let {
    onClose: t,
    orbsEarned: n,
    orbsBalance: a
  } = e, o = async () => {
    (0, c.Y)({
      pageType: g.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: g.jXE.ORBS_REWARD_MODAL,
      ctaObject: g.qAy.CTA_TO_ORBS_SHOP
    }), await t(), (0, s.mK)({
      openInLayer: false,
      tab: E.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: l.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, r.jsxs)("div", {
    className: b.contentContainer,
    children: [(0, r.jsx)(N, {}), (0, r.jsxs)("div", {
      className: b.copyContainer,
      children: [(0, r.jsxs)("div", {
        className: b.heading,
        children: [(0, r.jsx)(u.M, {
          shouldUseThemeColor: true,
          className: b.orbsIcon
        }), (0, r.jsx)(i.X6q, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: R.intl.format(R.t["/UTD6e"], {
            orbsEarned: n
          })
        })]
      }), null != a ? (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: R.intl.format(R.t.g4t9a2, {
          orbsBalance: a
        })
      }) : null]
    }), (0, r.jsx)(i.zxk, {
      variant: "secondary",
      size: "sm",
      text: R.intl.string(R.t.WYchdX),
      onClick: o,
      fullWidth: true
    })]
  })
}

function v(e) {
  var t;
  let {
    quest: n,
    onClose: i,
    transitionState: l,
    sourceQuestContent: s,
    location: o
  } = e, c = (null == (t = n.userStatus) ? true : t.claimedAt) != null, {
    balance: u,
    error: g
  } = (0, d.A)(), E = (0, _.LM)(n.config), [b, y] = a.useState(c ? "success" : "loading");
  a.useEffect(() => {
    c || "loading" !== b || (0, h.QB)(n.id, m.y$.CROSS_PLATFORM, o).then(() => y("success")).catch(() => y("error"))
  }, [n.id, c, b, o]);
  let A = "error" === b || null == E || null == u && null != g;
  return (0, r.jsx)(C.Z, {
    onClose: i,
    transitionState: l,
    quest: n,
    sourceQuestContent: s,
    location: f.dr.ORBS_REWARD_MODAL,
    isRewardContentLoading: "loading" === b || null == u && null == g,
    rewardContentHasError: A,
    rewardContent: A ? null : (0, r.jsx)(p.Z, {
      rewardName: R.intl.string(R.t.Lmysvb),
      children: (0, r.jsx)(x, {
        onClose: i,
        orbsEarned: E,
        orbsBalance: u
      })
    })
  })
}