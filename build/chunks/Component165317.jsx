/** Chunk was on 75909 **/
/** chunk id: 165317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk836831 = require("./836831.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969937 = require("./969937.js");
let C = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function b(e) {
  var t, n, b, S;
  let {
    tooltipPosition: _
  } = e, {
    quest: y,
    sourceQuestContent: x,
    onClose: j
  } = o.useContext(E.VideoQuestModalContext), {
    enabled: D
  } = u.EO.useConfig({
    location: g.dr.VIDEO_MODAL
  }), [P, T] = o.useState(false), R = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), N = o.useRef(null == (t = y.userStatus) ? true : t.completedAt), [I, A] = o.useState(false), L = (0, m.w8)(y.config), {
    completedRatio: w,
    completedRatioDisplay: k
  } = (0, d.I)(y), M = (null == (n = y.userStatus) ? true : n.completedAt) != null, V = (null == (b = y.userStatus) ? true : b.claimedAt) != null, Z = O.intl.formatToPlainString(M && !V && D ? O.t.NRp4K4 : O.t["12IWP2"], {
    rewardName: L
  });
  o.useEffect(() => {
    var e, t;
    null == N.current && (null == (e = y.userStatus) ? true : e.completedAt) != null && D && A(true), N.current = null == (t = y.userStatus) ? true : t.completedAt
  }, [null == (S = y.userStatus) ? true : S.completedAt, D]);
  let F = (0, v.D)({
      quest: y,
      questContent: c.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: x,
      onClick: j,
      shouldShowShopIfAlreadyClaimed: false
    }),
    B = M && D;
  return (0, r.jsxs)("div", {
    className: h.progressWrapper,
    children: [M && (0, r.jsx)(a.Fmz, {
      importData: C,
      className: h.confetti,
      loop: false,
      autoplay: false,
      shouldAnimate: I && !R
    }), (0, r.jsx)(i.u, {
      position: _,
      text: Z,
      onTooltipShow: () => {
        T(true)
      },
      onTooltipHide: () => {
        T(false)
      },
      children: (0, r.jsx)(a.P3F, {
        className: h.progressCont,
        style: B ? {
          cursor: "pointer"
        } : true,
        onClick: e => {
          B && F(e)
        },
        children: (0, r.jsx)(f.Z, {
          quest: y,
          size: 48,
          percentComplete: w,
          percentCompleteText: P ? k : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(p.Z, {
            className: h.questProgressRewardTile,
            quest: y,
            questContent: c.jn.VIDEO_MODAL,
            autoplay: false,
            sourceQuestContent: x
          })
        })
      })
    })]
  })
}