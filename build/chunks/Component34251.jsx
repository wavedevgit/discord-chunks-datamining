/** Chunk was on 76418 **/
/** chunk id: 34251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk566078 = require("./566078.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258910 = require("./258910.js");

function C(e) {
  let {
    quest: t,
    rewardName: n,
    location: i,
    sourceQuestContent: o
  } = e;
  return (0, r.jsxs)("div", {
    className: h.contentContainer,
    children: [(0, r.jsx)("div", {
      className: h.rewardTileContainer,
      children: (0, r.jsx)(u.Z, {
        autoplay: true,
        className: h.rewardTile,
        learnMoreStyle: null,
        quest: t,
        questContent: i,
        location: p.dr.INGAME_REWARD_MODAL,
        sourceQuestContent: o
      })
    }), (0, r.jsxs)("div", {
      className: h.copyContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: h.heading,
        children: x.intl.string(x.t["0/Yz+Y"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: x.intl.format(x.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, r.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: x.intl.string(x.t.OD6Tvf),
      disabled: true,
      fullWidth: true
    })]
  })
}

function g(e) {
  var t, n;
  let {
    initialQuest: a,
    onClose: u,
    transitionState: x,
    location: h,
    sourceQuestContent: g
  } = e, _ = null != (n = (0, l.B4)(a.id)) ? n : a, j = i.useMemo(() => (0, s.K)(_.config), [_]), v = (null == (t = _.userStatus) ? true : t.claimedAt) != null, y = !_.preview && !v, [N, b] = i.useState(y ? "loading" : "claimed");
  i.useEffect(() => {
    if (y) {
      let e = d.r.build(_.config),
        t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : c.y$.CROSS_PLATFORM;
      (0, o.QB)(_.id, t, h).then(() => b("claimed")).catch(() => b("error"))
    }
  }, [_, h, y]);
  let w = "error" === N || null == j;
  return (0, r.jsx)(m.Z, {
    onClose: u,
    transitionState: x,
    quest: _,
    sourceQuestContent: g,
    location: p.dr.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === N,
    rewardContentHasError: w,
    rewardContent: w ? null : (0, r.jsx)(f.Z, {
      rewardName: j.messages.name,
      children: (0, r.jsx)(C, {
        quest: _,
        rewardName: j.messages.name,
        location: h,
        sourceQuestContent: g
      })
    })
  })
}