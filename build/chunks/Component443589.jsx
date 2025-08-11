/** Chunk was on 1272 **/
/** chunk id: 443589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
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
  Chunk26725 = require("./26725.js"),
  Chunk114959 = require("./114959.js");
let T = {
  width: 14,
  height: 14
};

function P(e) {
  let {
    recipientUser: t,
    giftIntentType: n,
    analyticsPage: l,
    shouldHighlight: P
  } = e, {
    analyticsLocations: j
  } = (0, d.ZP)(), {
    isHovered: x,
    setIsHovered: A,
    onMouseEnter: Z,
    onMouseLeave: w
  } = (0, f.Z)(200, 300), {
    enableEmojiCTA: L
  } = _.w.useExperiment({
    location: "GiftIntentActionButton"
  }, {
    autoTrackExposure: false
  });
  i.useEffect(() => {
    let e = g.Z.getUserAffinity(t.id);
    (0, p.h)({
      name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: s.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: n,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [t, n]);
  let R = i.useCallback(e => {
      "focus" !== e.type && Z()
    }, [Z]),
    D = e => {
      e.stopPropagation();
      let r = g.Z.getUserAffinity(t.id);
      m.default.track(I.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: n,
        affinity: null == r ? true : r.communicationProbability
      }), (0, h.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: t,
        analyticsLocation: (0, E.F)(n).actionButton,
        analyticsLocations: j,
        analyticsObject: {
          page: l,
          section: I.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: I.qAy.BUTTON_CTA,
          objectType: I.Qqv.GIFT
        },
        giftMessage: k()
      })
    },
    k = () => n === v.hX.FRIEND_ANNIVERSARY ? C.intl.formatToPlainString(C.t["L2s/Nz"], {
      numberOfYears: O.Z.getFriendAnniversaryYears(t.id)
    }) : (0, b.Ou)(n),
    M = () => n === v.hX.FRIEND_ANNIVERSARY ? C.intl.string(C.t["4LohBA"]) : (0, b.Ou)(n),
    U = i.useRef(null),
    G = () => L ? (0, r.jsx)(u.P3F, {
      innerRef: U,
      "aria-label": M(),
      onClick: D,
      className: a()(N.actionButton, S.popoutButton, {
        [N.highlight]: P
      }),
      onMouseEnter: R,
      onMouseLeave: w,
      children: (0, r.jsx)(o.animated.div, {
        className: S.spriteContainer,
        children: (0, r.jsx)("div", {
          className: S.sprite
        })
      })
    }) : (0, r.jsx)(c.zx, {
      buttonRef: U,
      onClick: D,
      onMouseEnter: R,
      onMouseLeave: w,
      children: (0, r.jsxs)("div", {
        className: S.pillContentContainer,
        children: [(0, r.jsx)(u.OgN, {
          size: "custom",
          width: T.width,
          height: T.height,
          color: "currentColor"
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          className: S.pillButtonText,
          children: M()
        })]
      })
    });
  return (0, r.jsx)(u.yRy, {
    targetElementRef: U,
    animation: u.yRy.Animation.FADE,
    nudgeAlignIntoViewport: false,
    closeOnScroll: true,
    shouldShow: x,
    position: "right",
    align: "top",
    spacing: 9,
    onRequestClose: () => {
      A(false)
    },
    renderPopout: e => (0, r.jsx)(y.Z, {
      giftIntentType: n,
      premiumGiftIntentCardType: y.U.COACHMARK,
      recipientUser: t,
      onMouseEnter: Z,
      onMouseLeave: w,
      popoutPosition: e.position,
      analyticsPage: l,
      analyticsSection: I.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
      giftIntentSecondaryAction: v.X2.SEND_MESSAGE,
      glow: true
    }),
    children: () => G()
  })
}