/** Chunk was on 76418 **/
/** chunk id: 34251, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => x
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

function h(e) {
  let {
    quest: n,
    rewardName: t,
    location: r,
    sourceQuestContent: s
  } = e;
  return (0, a.jsxs)("div", {
    className: f.contentContainer,
    children: [(0, a.jsx)("div", {
      className: f.rewardTileContainer,
      children: (0, a.jsx)(d.Z, {
        autoplay: true,
        className: f.rewardTile,
        learnMoreStyle: null,
        quest: n,
        questContent: r,
        location: p.dr.INGAME_REWARD_MODAL,
        sourceQuestContent: s
      })
    }), (0, a.jsxs)("div", {
      className: f.copyContainer,
      children: [(0, a.jsx)(i.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: f.heading,
        children: C.intl.string(C.t["0/Yz+f"])
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: C.intl.format(C.t["v1u/zs"], {
          rewardName: t
        })
      })]
    }), (0, a.jsx)(i.zxk, {
      variant: "secondary",
      size: "sm",
      text: C.intl.string(C.t.OD6Tvb),
      disabled: true,
      fullWidth: true
    })]
  })
}

function x(e) {
  var n;
  let {
    quest: t,
    onClose: i,
    transitionState: d,
    location: p,
    sourceQuestContent: C
  } = e, f = r.useMemo(() => (0, s.K)(t.config), [t]), x = (null == (n = t.userStatus) ? true : n.claimedAt) != null, _ = !t.preview && !x, [g, v] = r.useState(_ ? "loading" : "claimed");
  r.useEffect(() => {
    if (_) {
      let e = c.r.build(t.config),
        n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : l.y$.CROSS_PLATFORM;
      (0, o.QB)(t.id, n, p).then(() => v("claimed")).catch(() => v("error"))
    }
  }, [t, p, _]);
  let j = "error" === g || null == f;
  return "loading" === g || j ? null : (0, a.jsx)(u.Z, {
    onClose: i,
    transitionState: d,
    quest: t,
    sourceQuestContent: C,
    rewardContent: (0, a.jsx)(m.Z, {
      rewardName: f.messages.name,
      children: (0, a.jsx)(h, {
        quest: t,
        rewardName: f.messages.name,
        location: p,
        sourceQuestContent: C
      })
    })
  })
}