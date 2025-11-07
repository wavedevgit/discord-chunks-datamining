/** Chunk was on 32249 **/
/** chunk id: 768003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk566078 = require("./566078.js"),
  Chunk472144 = require("./472144.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk969227 = require("./969227.js"),
  Chunk536687 = require("./536687.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk835338 = require("./835338.js");
let b = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function S(e) {
  var t, n, S, y;
  let {
    tooltipPosition: C
  } = e, {
    quest: _,
    sourceQuestContent: x,
    onClose: j
  } = o.useContext(E.VideoQuestModalContext), {
    enabled: T
  } = d.EO.useConfig({
    location: g.dr.VIDEO_MODAL
  }), [D, P] = o.useState(false), R = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), I = o.useRef(null == (t = _.userStatus) ? true : t.completedAt), [N, w] = o.useState(false), {
    completedRatio: A,
    completedRatioDisplay: k
  } = (0, c.I)(_), L = o.useMemo(() => m.r.build(_.config).defaultRewardName, [_]), M = (null == (n = _.userStatus) ? true : n.completedAt) != null, V = (null == (S = _.userStatus) ? true : S.claimedAt) != null, Z = O.intl.formatToPlainString(M && !V && T ? O.t.NRp4K4 : O.t["12IWP2"], {
    rewardName: L
  });
  o.useEffect(() => {
    var e, t;
    null == I.current && (null == (e = _.userStatus) ? true : e.completedAt) != null && T && w(true), I.current = null == (t = _.userStatus) ? true : t.completedAt
  }, [null == (y = _.userStatus) ? true : y.completedAt, T]);
  let F = (0, v.D)({
      quest: _,
      questContent: u.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: x,
      onClick: j,
      shouldShowShopIfAlreadyClaimed: false
    }),
    B = M && T;
  return (0, r.jsxs)("div", {
    className: h.progressWrapper,
    children: [M && (0, r.jsx)(a.Fmz, {
      importData: b,
      className: h.confetti,
      loop: false,
      autoplay: false,
      shouldAnimate: N && !R
    }), (0, r.jsx)(i.u, {
      position: C,
      text: Z,
      onTooltipShow: () => {
        P(true)
      },
      onTooltipHide: () => {
        P(false)
      },
      children: (0, r.jsx)(a.P3F, {
        className: h.progressCont,
        style: B ? {
          cursor: "pointer"
        } : true,
        onClick: e => {
          B && F(e)
        },
        children: (0, r.jsx)(p.Z, {
          quest: _,
          size: 48,
          percentComplete: A,
          percentCompleteText: D ? k : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(f.Z, {
            className: h.questProgressRewardTile,
            quest: _,
            questContent: u.jn.VIDEO_MODAL,
            autoplay: false,
            location: g.dr.VIDEO_MODAL,
            sourceQuestContent: x
          })
        })
      })
    })]
  })
}