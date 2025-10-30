/** Chunk was on 76418 **/
/** chunk id: 34251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk497505 = require("./497505.js"),
  Chunk566078 = require("./566078.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk522144 = require("./522144.js");

function C(e) {
  let {
    quest: t,
    rewardName: n,
    location: a,
    sourceQuestContent: s
  } = e;
  return (0, r.jsxs)("div", {
    className: x.contentContainer,
    children: [(0, r.jsx)("div", {
      className: x.rewardTileContainer,
      children: (0, r.jsx)(d.Z, {
        autoplay: true,
        className: x.rewardTile,
        learnMoreStyle: null,
        quest: t,
        questContent: a,
        location: p.dr.INGAME_REWARD_MODAL,
        sourceQuestContent: s
      })
    }), (0, r.jsxs)("div", {
      className: x.copyContainer,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: x.heading,
        children: f.intl.string(f.t["0/Yz+Y"])
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: f.intl.format(f.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, r.jsx)(i.Button, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(f.t.OD6Tvf),
      disabled: true,
      fullWidth: true
    })]
  })
}

function g(e) {
  var t;
  let {
    quest: n,
    onClose: i,
    transitionState: d,
    location: f,
    sourceQuestContent: x
  } = e, g = a.useMemo(() => (0, s.K)(n.config), [n]), h = (null == (t = n.userStatus) ? true : t.claimedAt) != null, _ = !n.preview && !h, [j, v] = a.useState(_ ? "loading" : "claimed");
  a.useEffect(() => {
    if (_) {
      let e = c.r.build(n.config),
        t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : l.y$.CROSS_PLATFORM;
      (0, o.QB)(n.id, t, f).then(() => v("claimed")).catch(() => v("error"))
    }
  }, [n, f, _]);
  let N = "error" === j || null == g;
  return (0, r.jsx)(u.Z, {
    onClose: i,
    transitionState: d,
    quest: n,
    sourceQuestContent: x,
    location: p.dr.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === j,
    rewardContentHasError: N,
    rewardContent: N ? null : (0, r.jsx)(m.Z, {
      rewardName: g.messages.name,
      children: (0, r.jsx)(C, {
        quest: n,
        rewardName: g.messages.name,
        location: f,
        sourceQuestContent: x
      })
    })
  })
}