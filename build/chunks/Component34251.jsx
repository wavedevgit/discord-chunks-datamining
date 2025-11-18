/** Chunk was on 76418 **/
/** chunk id: 34251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk522144 = require("./522144.js");

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
        color: "header-primary",
        className: x.heading,
        children: f.intl.string(f.t["0/Yz+Y"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
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
  } = e, g = null != (n = (0, l.B4)(a.id)) ? n : a, h = i.useMemo(() => (0, s.K)(g.config), [g]), j = (null == (t = g.userStatus) ? true : t.claimedAt) != null, _ = !g.preview && !j, [v, N] = i.useState(_ ? "loading" : "claimed");
  i.useEffect(() => {
    if (_) {
      let e = (0, s.zG)(g.config);
      (0, o.QB)(g.id, e, x).then(() => N("claimed")).catch(() => N("error"))
    }
  }, [g, x, _]);
  let y = "error" === v || null == h;
  return (0, r.jsx)(d.Z, {
    onClose: c,
    transitionState: f,
    quest: g,
    sourceQuestContent: C,
    location: m.dr.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === v,
    rewardContentHasError: y,
    rewardContent: y ? null : (0, r.jsx)(u.Z, {
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