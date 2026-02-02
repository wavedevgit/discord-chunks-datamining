/** Chunk was on 23628 **/
/** chunk id: 440891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk92246 = require("./92246.js"),
  Chunk453384 = require("./453384.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk793683 = require("./793683.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk500271 = require("./500271.js");
let g = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function h(e) {
  var t, n, h, y;
  let {
    tooltipPosition: O
  } = e, {
    quest: S,
    sourceQuestContent: _,
    onClose: C
  } = l.useContext(v.VideoQuestModalContext), [x, A] = l.useState(false), j = (0, o.bG)([a.A], () => a.A.useReducedMotion), T = l.useRef(null == (t = S.userStatus) ? true : t.completedAt), [D, w] = l.useState(false), N = (0, d.mq)(S.config), {
    completedRatio: P,
    completedRatioDisplay: I
  } = (0, u.O9)(S), L = (null == (n = S.userStatus) ? true : n.completedAt) != null, R = (null == (h = S.userStatus) ? true : h.claimedAt) != null, k = b.intl.formatToPlainString(L && !R ? b.t.NRp4K4 : b.t["12IWP2"], {
    rewardName: N
  });
  l.useEffect(() => {
    var e, t;
    null == T.current && (null == (e = S.userStatus) ? true : e.completedAt) != null && w(true), T.current = null == (t = S.userStatus) ? true : t.completedAt
  }, [null == (y = S.userStatus) ? true : y.completedAt]);
  let M = (0, m.v)({
    quest: S,
    questContent: c.uF.QUEST_HOME_DESKTOP,
    sourceQuestContent: _,
    onCloseModal: C,
    shouldShowShopIfAlreadyClaimed: false
  });
  return (0, r.jsxs)("div", {
    className: E.Tr,
    children: [L && (0, r.jsx)(s.akl, {
      importData: g,
      className: E.t_,
      loop: false,
      autoplay: false,
      shouldAnimate: D && !j
    }), (0, r.jsx)(i.m, {
      position: O,
      text: k,
      onTooltipShow: () => {
        A(true)
      },
      onTooltipHide: () => {
        A(false)
      },
      children: (0, r.jsx)(s.DUT, {
        className: E.md,
        style: L ? {
          cursor: "pointer"
        } : true,
        onClick: e => {
          L && M(e)
        },
        children: (0, r.jsx)(p.A, {
          quest: S,
          size: 48,
          percentComplete: P,
          percentCompleteText: x ? I : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(f.A, {
            className: E.vt,
            quest: S,
            questContent: c.uF.VIDEO_MODAL,
            autoplay: false,
            sourceQuestContent: _
          })
        })
      })
    })]
  })
}