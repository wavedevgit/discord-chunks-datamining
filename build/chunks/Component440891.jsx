/** Chunk was on 23628 **/
/** chunk id: 440891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let h = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function b(e) {
  var t, n, b, y;
  let {
    tooltipPosition: O
  } = e, {
    quest: S,
    sourceQuestContent: _,
    onClose: C
  } = l.useContext(v.VideoQuestModalContext), [x, A] = l.useState(false), j = (0, o.bG)([a.A], () => a.A.useReducedMotion), T = l.useRef(null == (t = S.userStatus) ? true : t.completedAt), [D, w] = l.useState(false), N = (0, d.mq)(S.config), {
    completedRatio: P,
    completedRatioDisplay: I
  } = (0, u.O9)(S), L = (null == (n = S.userStatus) ? true : n.completedAt) != null, R = (null == (b = S.userStatus) ? true : b.claimedAt) != null, M = E.intl.formatToPlainString(L && !R ? E.t.NRp4K4 : E.t["12IWP2"], {
    rewardName: N
  });
  l.useEffect(() => {
    var e, t;
    null == T.current && (null == (e = S.userStatus) ? true : e.completedAt) != null && w(true), T.current = null == (t = S.userStatus) ? true : t.completedAt
  }, [null == (y = S.userStatus) ? true : y.completedAt]);
  let k = (0, p.v)({
    quest: S,
    questContent: c.uF.QUEST_HOME_DESKTOP,
    sourceQuestContent: _,
    onCloseModal: C,
    shouldShowShopIfAlreadyClaimed: false
  });
  return (0, r.jsxs)("div", {
    className: g.Tr,
    children: [L && (0, r.jsx)(s.akl, {
      importData: h,
      className: g.t_,
      loop: false,
      autoplay: false,
      shouldAnimate: D && !j
    }), (0, r.jsx)(i.m, {
      position: O,
      text: M,
      onTooltipShow: () => {
        A(true)
      },
      onTooltipHide: () => {
        A(false)
      },
      children: (0, r.jsx)(s.DUT, {
        className: g.md,
        style: L ? {
          cursor: "pointer"
        } : true,
        onClick: e => {
          L && k(e)
        },
        children: (0, r.jsx)(f.A, {
          quest: S,
          size: 48,
          percentComplete: P,
          percentCompleteText: x ? I : true,
          percentCompleteTextVariant: "text-sm/medium",
          children: (0, r.jsx)(m.A, {
            className: g.vt,
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