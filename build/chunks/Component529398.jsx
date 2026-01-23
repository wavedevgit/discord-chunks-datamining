/** Chunk was on 26747 **/
/** chunk id: 529398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk829219 = require("./829219.js"),
  Chunk890687 = require("./890687.js"),
  Chunk92246 = require("./92246.js"),
  Chunk646764 = require("./646764.jsx"),
  Chunk109174 = require("./109174.jsx"),
  Chunk524728 = require("./524728.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk322956 = require("./322956.js");

function _(e) {
  let {
    quest: t,
    rewardName: n,
    location: r,
    sourceQuestContent: s
  } = e;
  return (0, i.jsxs)("div", {
    className: f.hQ,
    children: [(0, i.jsx)("div", {
      className: f.tE,
      children: (0, i.jsx)(c.A, {
        autoplay: true,
        className: f.Qq,
        learnMoreStyle: null,
        quest: t,
        questContent: r,
        sourceQuestContent: s
      })
    }), (0, i.jsxs)("div", {
      className: f.dD,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: f.R_,
        children: x.intl.string(x.t["0/Yz+Y"])
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: x.intl.format(x.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, i.jsx)(a.Button, {
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
    onClose: c,
    transitionState: x,
    location: f,
    sourceQuestContent: g
  } = e, h = null != (t = (0, l.C5)(a.id)) ? t : a, j = r.useMemo(() => (0, o.f)(h.config), [h]), v = (null == (n = h.userStatus) ? true : n.claimedAt) != null, p = !h.preview && !v, [C, N] = r.useState(p ? "loading" : "claimed");
  r.useEffect(() => {
    if (p) {
      let e = (0, o.$s)(h.config);
      (0, s.Oq)(h.id, e, f).then(() => N("claimed")).catch(() => N("error"))
    }
  }, [h, f, p]);
  let y = "error" === C || null == j;
  return (0, i.jsx)(u.A, {
    onClose: c,
    transitionState: x,
    quest: h,
    sourceQuestContent: g,
    location: m.rE.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === C,
    rewardContentHasError: y,
    rewardContent: y ? null : (0, i.jsx)(d.A, {
      rewardName: j.messages.name,
      children: (0, i.jsx)(_, {
        quest: h,
        rewardName: j.messages.name,
        location: f,
        sourceQuestContent: g
      })
    })
  })
}