/** Chunk was on 76418 **/
/** chunk id: 34251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22095 = require("./22095.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk679789 = require("./679789.js");

function x(e) {
  let {
    quest: t,
    rewardName: n,
    location: i,
    sourceQuestContent: o
  } = e;
  return (0, r.jsxs)("div", {
    className: f.contentContainer,
    children: [(0, r.jsx)("div", {
      className: f.rewardTileContainer,
      children: (0, r.jsx)(c.Z, {
        autoplay: true,
        className: f.rewardTile,
        learnMoreStyle: null,
        quest: t,
        questContent: i,
        location: m.dr.INGAME_REWARD_MODAL,
        sourceQuestContent: o
      })
    }), (0, r.jsxs)("div", {
      className: f.copyContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: f.heading,
        children: b.intl.string(b.t["0/Yz+Y"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: b.intl.format(b.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, r.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t.OD6Tvf),
      disabled: true,
      fullWidth: true
    })]
  })
}

function p(e) {
  var t, n;
  let {
    initialQuest: a,
    onClose: c,
    transitionState: b,
    location: f,
    sourceQuestContent: p
  } = e, C = null != (n = (0, s.B4)(a.id)) ? n : a, g = i.useMemo(() => (0, l.K)(C.config), [C]), h = (null == (t = C.userStatus) ? true : t.claimedAt) != null, j = !C.preview && !h, [v, N] = i.useState(j ? "loading" : "claimed");
  i.useEffect(() => {
    if (j) {
      let e = (0, l.zG)(C.config);
      (0, o.QB)(C.id, e, f).then(() => N("claimed")).catch(() => N("error"))
    }
  }, [C, f, j]);
  let y = "error" === v || null == g;
  return (0, r.jsx)(d.Z, {
    onClose: c,
    transitionState: b,
    quest: C,
    sourceQuestContent: p,
    location: m.dr.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === v,
    rewardContentHasError: y,
    rewardContent: y ? null : (0, r.jsx)(u.Z, {
      rewardName: g.messages.name,
      children: (0, r.jsx)(x, {
        quest: C,
        rewardName: g.messages.name,
        location: f,
        sourceQuestContent: p
      })
    })
  })
}