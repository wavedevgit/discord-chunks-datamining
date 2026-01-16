/** Chunk was on 75909 **/
/** chunk id: 165317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk836831 = require("./836831.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969937 = require("./969937.js");
let h = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));

function C(e) {
  var t, n, C, S;
  let {
    tooltipPosition: b
  } = e, {
    quest: O,
    sourceQuestContent: _,
    onClose: y
  } = o.useContext(v.VideoQuestModalContext), [x, j] = o.useState(false), P = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), D = o.useRef(null == (t = O.userStatus) ? true : t.completedAt), [T, R] = o.useState(false), N = (0, d.w8)(O.config), {
    completedRatio: I,
    completedRatioDisplay: A
  } = (0, u.I)(O), w = (null == (n = O.userStatus) ? true : n.completedAt) != null, L = (null == (C = O.userStatus) ? true : C.claimedAt) != null, k = E.intl.formatToPlainString(w && !L ? E.t.NRp4K4 : E.t["12IWP2"], {
    rewardName: N
  });
  o.useEffect(() => {
    var e, t;
    null == D.current && (null == (e = O.userStatus) ? true : e.completedAt) != null && R(true), D.current = null == (t = O.userStatus) ? true : t.completedAt
  }, [null == (S = O.userStatus) ? true : S.completedAt]);
  let M = (0, p.D)({
    quest: O,
    questContent: c.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: _,
    onCloseModal: y,
    shouldShowShopIfAlreadyClaimed: false
  });
  return (0, r.jsxs)("div", {
    className: g.progressWrapper,
    children: [w && (0, r.jsx)(a.Fmz, {
      importData: h,
      className: g.confetti,
      loop: false,
      autoplay: false,
      shouldAnimate: T && !P
    }), (0, r.jsx)(i.u, {
      position: b,
      text: k,
      onTooltipShow: () => {
        j(true)
      },
      onTooltipHide: () => {
        j(false)
      },
      children: (0, r.jsx)(a.P3F, {
        className: g.progressCont,
        style: w ? {
          cursor: "pointer"
        } : true,
        onClick: e => {
          w && M(e)
        },
        children: (0, r.jsx)(m.Z, {
          quest: O,
          size: 48,
          percentComplete: I,
          percentCompleteText: x ? A : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(f.Z, {
            className: g.questProgressRewardTile,
            quest: O,
            questContent: c.jn.VIDEO_MODAL,
            autoplay: false,
            sourceQuestContent: _
          })
        })
      })
    })]
  })
}