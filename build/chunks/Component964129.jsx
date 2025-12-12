/** Chunk was on 97158 **/
/** chunk id: 964129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22095 = require("./22095.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk187546 = require("./187546.jsx"),
  Chunk285910 = require("./285910.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk772052 = require("./772052.js");

function p(e) {
  let {
    quest: t,
    rewardName: n,
    location: i,
    sourceQuestContent: o
  } = e;
  return (0, r.jsxs)("div", {
    className: x.contentContainer,
    children: [(0, r.jsx)("div", {
      className: x.rewardTileContainer,
      children: (0, r.jsx)(c.Z, {
        autoplay: true,
        className: x.rewardTile,
        learnMoreStyle: null,
        quest: t,
        questContent: i,
        location: m.dr.INGAME_REWARD_MODAL,
        sourceQuestContent: o
      })
    }), (0, r.jsxs)("div", {
      className: x.copyContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: x.heading,
        children: f.intl.string(f.t["0/Yz+Y"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: f.intl.format(f.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, r.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(f.t.OD6Tvf),
      disabled: true,
      fullWidth: true
    })]
  })
}

function C(e) {
  var t, n;
  let {
    initialQuest: a,
    onClose: c,
    transitionState: f,
    location: x,
    sourceQuestContent: C
  } = e, g = null != (n = (0, s.B4)(a.id)) ? n : a, h = i.useMemo(() => (0, l.K)(g.config), [g]), _ = (null == (t = g.userStatus) ? true : t.claimedAt) != null, j = !g.preview && !_, [v, N] = i.useState(j ? "loading" : "claimed");
  i.useEffect(() => {
    if (j) {
      let e = (0, l.zG)(g.config);
      (0, o.QB)(g.id, e, x).then(() => N("claimed")).catch(() => N("error"))
    }
  }, [g, x, j]);
  let y = "error" === v || null == h;
  return (0, r.jsx)(u.Z, {
    onClose: c,
    transitionState: f,
    quest: g,
    sourceQuestContent: C,
    location: m.dr.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === v,
    rewardContentHasError: y,
    rewardContent: y ? null : (0, r.jsx)(d.Z, {
      rewardName: h.messages.name,
      children: (0, r.jsx)(p, {
        quest: g,
        rewardName: h.messages.name,
        location: x,
        sourceQuestContent: C
      })
    })
  })
}