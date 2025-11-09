/** Chunk was on 1272 **/
/** chunk id: 443589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk579185 = require("./579185.js"),
  Chunk752048 = require("./752048.js"),
  Chunk626135 = require("./626135.js"),
  Chunk479446 = require("./479446.js"),
  Chunk522558 = require("./522558.js"),
  Chunk441623 = require("./441623.js"),
  Chunk317271 = require("./317271.js"),
  Chunk674701 = require("./674701.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3254 = require("./3254.js"),
  Chunk952602 = require("./952602.js");

function N(e) {
  let {
    recipientUser: t,
    giftIntentType: n,
    analyticsPage: l,
    shouldHighlight: N
  } = e, {
    analyticsLocations: j
  } = (0, d.ZP)(), {
    isHovered: P,
    setIsHovered: x,
    onMouseEnter: A,
    onMouseLeave: Z
  } = (0, h.Z)(200, 300), {
    enableEmojiCTA: w
  } = b.w.useExperiment({
    location: "GiftIntentActionButton"
  }, {
    autoTrackExposure: false
  });
  i.useEffect(() => {
    let e = g.Z.getUserAffinity(t.id);
    (0, p.h)({
      name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: o.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: n,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [t, n]);
  let L = i.useCallback(e => {
      "focus" !== e.type && A()
    }, [A]),
    R = e => {
      e.stopPropagation();
      let r = g.Z.getUserAffinity(t.id);
      m.default.track(I.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: n,
        affinity: null == r ? true : r.communicationProbability
      }), (0, f.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: t,
        analyticsLocation: (0, O.F)(n).actionButton,
        analyticsLocations: j,
        analyticsObject: {
          page: l,
          section: I.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: I.qAy.BUTTON_CTA,
          objectType: I.AnalyticsObjectTypes.GIFT
        },
        giftMessage: D()
      })
    },
    D = () => n === v.hX.FRIEND_ANNIVERSARY ? C.intl.formatToPlainString(C.t["L2s/N3"], {
      numberOfYears: E.Z.getFriendAnniversaryYears(t.id)
    }) : (0, _.Ou)(n),
    M = () => n === v.hX.FRIEND_ANNIVERSARY ? C.intl.string(C.t["4LohBA"]) : (0, _.Ou)(n),
    k = i.useRef(null);
  return (0, r.jsx)(u.yRy, {
    targetElementRef: k,
    animation: u.yRy.Animation.FADE,
    nudgeAlignIntoViewport: false,
    scrollBehavior: "close",
    shouldShow: P,
    position: "right",
    align: "top",
    spacing: 9,
    onRequestClose: () => {
      x(false)
    },
    renderPopout: e => (0, r.jsx)(y.Z, {
      giftIntentType: n,
      premiumGiftIntentCardType: y.U.COACHMARK,
      recipientUser: t,
      onMouseEnter: A,
      onMouseLeave: Z,
      popoutPosition: e.position,
      analyticsPage: l,
      analyticsSection: I.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
      giftIntentSecondaryAction: v.X2.SEND_MESSAGE,
      glow: true
    }),
    children: () => w ? (0, r.jsx)(u.P3F, {
      innerRef: k,
      "aria-label": M(),
      onClick: R,
      className: a()(T.actionButton, S.popoutButton, {
        [T.highlight]: N
      }),
      onMouseEnter: L,
      onMouseLeave: Z,
      children: (0, r.jsx)(s.animated.div, {
        className: S.spriteContainer,
        children: (0, r.jsx)("div", {
          className: S.sprite
        })
      })
    }) : (0, r.jsx)(c.zx, {
      "data-migration-pending": true,
      buttonRef: k,
      onClick: R,
      onMouseEnter: L,
      onMouseLeave: Z,
      children: (0, r.jsxs)("div", {
        className: S.pillContentContainer,
        children: [(0, r.jsx)(u.OgN, {
          size: "custom",
          width: 14,
          height: 14,
          color: "currentColor"
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          className: S.pillButtonText,
          children: M()
        })]
      })
    })
  })
}