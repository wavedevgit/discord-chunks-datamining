/** Chunk was on 26747 **/
/** chunk id: 529398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
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

function h(e) {
  let {
    quest: t,
    rewardName: n,
    location: i,
    sourceQuestContent: r
  } = e;
  return (0, s.jsxs)("div", {
    className: f.hQ,
    children: [(0, s.jsx)("div", {
      className: f.tE,
      children: (0, s.jsx)(d.A, {
        autoplay: true,
        className: f.Qq,
        learnMoreStyle: null,
        quest: t,
        questContent: i,
        sourceQuestContent: r
      })
    }), (0, s.jsxs)("div", {
      className: f.dD,
      children: [(0, s.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: f.R_,
        children: x.intl.string(x.t["0/Yz+Y"])
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: x.intl.format(x.t["v1u/zq"], {
          rewardName: n
        })
      })]
    }), (0, s.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: x.intl.string(x.t.OD6Tvf),
      disabled: true,
      fullWidth: true
    })]
  })
}

function j(e) {
  var t, n;
  let {
    initialQuest: a,
    onClose: d,
    transitionState: x,
    location: f,
    sourceQuestContent: j
  } = e, g = null != (t = (0, l.C5)(a.id)) ? t : a, v = i.useMemo(() => (0, c.f)(g.config), [g]), N = (null == (n = g.userStatus) ? true : n.claimedAt) != null, b = !g.preview && !N, [p, _] = i.useState(b ? "loading" : "claimed");
  i.useEffect(() => {
    if (b) {
      let e = (0, c.$s)(g.config);
      (0, r.Oq)(g.id, e, f).then(() => _("claimed")).catch(() => _("error"))
    }
  }, [g, f, b]);
  let y = "error" === p || null == v;
  return (0, s.jsx)(u.A, {
    onClose: d,
    transitionState: x,
    quest: g,
    sourceQuestContent: j,
    location: m.rE.INGAME_REWARD_MODAL,
    isRewardContentLoading: "loading" === p,
    rewardContentHasError: y,
    rewardContent: y ? null : (0, s.jsx)(o.A, {
      rewardName: v.messages.name,
      children: (0, s.jsx)(h, {
        quest: g,
        rewardName: v.messages.name,
        location: f,
        sourceQuestContent: j
      })
    })
  })
}