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
  Chunk897619 = require("./897619.js");

function p(e) {
  let {
    quest: t,
    rewardName: n,
    location: r,
    sourceQuestContent: o
  } = e;
  return (0, a.jsxs)("div", {
    className: x.contentContainer,
    children: [(0, a.jsx)("div", {
      className: x.rewardTileContainer,
      children: (0, a.jsx)(c.Z, {
        autoplay: true,
        className: x.rewardTile,
        learnMoreStyle: null,
        quest: t,
        questContent: r,
        location: m.dr.INGAME_REWARD_MODAL,
        sourceQuestContent: o
      })
    }), (0, a.jsxs)("div", {
      className: x.copyContainer,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: x.heading,
        children: f.intl.string(f.t["0/Yz+Y"])
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: f.intl.format(f.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, a.jsx)(i.Button, {
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
    initialQuest: i,
    onClose: c,
    transitionState: f,
    location: x,
    sourceQuestContent: C
  } = e, g = null != (n = (0, s.B4)(i.id)) ? n : i, h = r.useMemo(() => (0, l.K)(g.config), [g]), j = (null == (t = g.userStatus) ? true : t.claimedAt) != null, b = !g.preview && !j, [v, N] = r.useState(b ? "loading" : "claimed");
  r.useEffect(() => {
    if (b) {
      let e = (0, l.zG)(g.config);
      (0, o.QB)(g.id, e, x).then(() => N("claimed")).catch(() => N("error"))
    }
  }, [g, x, b]);
  let _ = "error" === v || null == h;
  return (0, a.jsx)(u.Z, {
    onClose: c,
    transitionState: f,
    quest: g,
    sourceQuestContent: C,
    location: m.dr.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === v,
    rewardContentHasError: _,
    rewardContent: _ ? null : (0, a.jsx)(d.Z, {
      rewardName: h.messages.name,
      children: (0, a.jsx)(p, {
        quest: g,
        rewardName: h.messages.name,
        location: x,
        sourceQuestContent: C
      })
    })
  })
}