/** Chunk was on 75909 **/
/** chunk id: 165317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk937797 = require("./937797.js"),
  Chunk472144 = require("./472144.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk969227 = require("./969227.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk559072 = require("./559072.js");
let b = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function S(e) {
  var t, n, S, C;
  let {
    tooltipPosition: y
  } = e, {
    quest: _,
    sourceQuestContent: x,
    onClose: j
  } = o.useContext(E.VideoQuestModalContext), {
    enabled: D
  } = m.EO.useConfig({
    location: g.dr.VIDEO_MODAL
  }), [P, T] = o.useState(false), R = (0, l.e7)([s.Z], () => s.Z.useReducedMotion), I = o.useRef(null == (t = _.userStatus) ? true : t.completedAt), [N, A] = o.useState(false), w = (0, d.w8)(_.config), {
    completedRatio: k,
    completedRatioDisplay: M
  } = (0, c.I)(_), L = (null == (n = _.userStatus) ? true : n.completedAt) != null, V = (null == (S = _.userStatus) ? true : S.claimedAt) != null, Z = O.intl.formatToPlainString(L && !V && D ? O.t.NRp4K4 : O.t["12IWP2"], {
    rewardName: w
  });
  o.useEffect(() => {
    var e, t;
    null == I.current && (null == (e = _.userStatus) ? true : e.completedAt) != null && D && A(true), I.current = null == (t = _.userStatus) ? true : t.completedAt
  }, [null == (C = _.userStatus) ? true : C.completedAt, D]);
  let F = (0, v.D)({
      quest: _,
      questContent: u.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: x,
      onClick: j,
      shouldShowShopIfAlreadyClaimed: false
    }),
    B = L && D;
  return (0, r.jsxs)("div", {
    className: h.progressWrapper,
    children: [L && (0, r.jsx)(a.Fmz, {
      importData: b,
      className: h.confetti,
      loop: false,
      autoplay: false,
      shouldAnimate: N && !R
    }), (0, r.jsx)(i.u, {
      position: y,
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
          quest: _,
          size: 48,
          percentComplete: k,
          percentCompleteText: P ? M : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(p.Z, {
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