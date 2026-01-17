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
  var t, n, C, b;
  let {
    tooltipPosition: S
  } = e, {
    quest: O,
    sourceQuestContent: _,
    onClose: x
  } = o.useContext(v.VideoQuestModalContext), [y, j] = o.useState(false), P = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), D = o.useRef(null == (t = O.userStatus) ? true : t.completedAt), [T, I] = o.useState(false), N = (0, d.w8)(O.config), {
    completedRatio: w,
    completedRatioDisplay: k
  } = (0, u.I)(O), A = (null == (n = O.userStatus) ? true : n.completedAt) != null, M = (null == (C = O.userStatus) ? true : C.claimedAt) != null, R = g.intl.formatToPlainString(A && !M ? g.t.NRp4K4 : g.t["12IWP2"], {
    rewardName: N
  });
  o.useEffect(() => {
    var e, t;
    null == D.current && (null == (e = O.userStatus) ? true : e.completedAt) != null && I(true), D.current = null == (t = O.userStatus) ? true : t.completedAt
  }, [null == (b = O.userStatus) ? true : b.completedAt]);
  let L = (0, p.D)({
    quest: O,
    questContent: c.jn.QUEST_HOME_DESKTOP,
    sourceQuestContent: _,
    onCloseModal: x,
    shouldShowShopIfAlreadyClaimed: false
  });
  return (0, r.jsxs)("div", {
    className: E.progressWrapper,
    children: [A && (0, r.jsx)(a.Fmz, {
      importData: h,
      className: E.confetti,
      loop: false,
      autoplay: false,
      shouldAnimate: T && !P
    }), (0, r.jsx)(i.u, {
      position: S,
      text: R,
      onTooltipShow: () => {
        j(true)
      },
      onTooltipHide: () => {
        j(false)
      },
      children: (0, r.jsx)(a.P3F, {
        className: E.progressCont,
        style: A ? {
          cursor: "pointer"
        } : true,
        onClick: e => {
          A && L(e)
        },
        children: (0, r.jsx)(m.Z, {
          quest: O,
          size: 48,
          percentComplete: w,
          percentCompleteText: y ? k : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(f.Z, {
            className: E.questProgressRewardTile,
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