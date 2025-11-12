/** Chunk was on 1272 **/
/** chunk id: 443589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk579185 = require("./579185.js"),
  Chunk752048 = require("./752048.js"),
  Chunk626135 = require("./626135.js"),
  Chunk479446 = require("./479446.js"),
  Chunk441623 = require("./441623.js"),
  Chunk317271 = require("./317271.js"),
  Chunk674701 = require("./674701.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  let {
    recipientUser: t,
    giftIntentType: n,
    analyticsPage: O
  } = e, {
    analyticsLocations: y
  } = (0, s.ZP)(), {
    isHovered: v,
    setIsHovered: I,
    onMouseEnter: C,
    onMouseLeave: S
  } = (0, u.Z)(200, 300);
  i.useEffect(() => {
    let e = d.Z.getUserAffinity(t.id);
    (0, o.h)({
      name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: l.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: n,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [t, n]);
  let T = e => {
      e.stopPropagation();
      let r = d.Z.getUserAffinity(t.id);
      p.default.track(b.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: n,
        affinity: null == r ? true : r.communicationProbability
      }), (0, c.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: t,
        analyticsLocation: (0, g.F)(n).actionButton,
        analyticsLocations: y,
        analyticsObject: {
          page: O,
          section: b.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: b.qAy.BUTTON_CTA,
          objectType: b.AnalyticsObjectTypes.GIFT
        },
        giftMessage: N()
      })
    },
    N = () => n === _.hX.FRIEND_ANNIVERSARY ? E.intl.formatToPlainString(E.t["L2s/N3"], {
      numberOfYears: h.Z.getFriendAnniversaryYears(t.id)
    }) : (0, f.Ou)(n),
    j = i.useRef(null);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: j,
    animation: a.yRy.Animation.FADE,
    nudgeAlignIntoViewport: false,
    scrollBehavior: "close",
    shouldShow: v,
    position: "right",
    align: "top",
    spacing: 9,
    onRequestClose: () => {
      I(false)
    },
    renderPopout: e => (0, r.jsx)(m.Z, {
      giftIntentType: n,
      premiumGiftIntentCardType: m.U.COACHMARK,
      recipientUser: t,
      onMouseEnter: C,
      onMouseLeave: S,
      popoutPosition: e.position,
      analyticsPage: O,
      analyticsSection: b.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
      giftIntentSecondaryAction: _.X2.SEND_MESSAGE,
      glow: true
    }),
    children: () => (0, r.jsx)(a.hU, {
      icon: a.OgN,
      "aria-label": n === _.hX.FRIEND_ANNIVERSARY ? E.intl.string(E.t["4LohBA"]) : (0, f.Ou)(n),
      onClick: T
    })
  })
}