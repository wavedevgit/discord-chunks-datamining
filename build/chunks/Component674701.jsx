/** Chunk was on web.js **/
/** chunk id: 674701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => L,
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk529103 = require("./529103.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk541716 = require("./541716.js"),
  Chunk28546 = require("./28546.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk479446 = require("./479446.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk317271 = require("./317271.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk182294 = require("./182294.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587862 = require("./587862.js"),
  L = function(e) {
    return e.SYSTEM_MESSAGE = "system_message", e.COACHMARK = "coachmark", e
  }({});

function x(e) {
  let {
    giftIntentType: t,
    premiumGiftIntentCardType: n,
    recipientUser: o,
    onMouseEnter: L,
    onMouseLeave: x,
    popoutPosition: M,
    analyticsPage: k,
    analyticsSection: j,
    glow: U,
    giftIntentSecondaryAction: G
  } = e, B = (0, l.e7)([y.default], () => y.default.getCurrentUser()), {
    analyticsLocations: Z
  } = (0, h.ZP)(), F = (0, l.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(o.id));
  i.useEffect(() => {
    (0, m.h)({
      name: s.ImpressionNames.GIFT_INTENT_CARD,
      type: s.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: t,
        type: n,
        num_friend_anniversaries: S.Z.getFriendAnniversaries().length
      }
    })
  }, [t, n]);
  let V = () => t === N.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.BWJvAA, {
      friendUserName: v.ZP.getName(o)
    }) : (0, I.Ou)(t),
    H = () => t === N.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.S3fdq6, {
      numberOfYears: F
    }) : (0, I.Ou)(t),
    Y = () => {
      switch (G) {
        case N.X2.VIEW_ALL:
          return w.intl.string(w.t.WkxniI);
        case N.X2.SEND_MESSAGE:
          return w.intl.string(w.t.I61IsL);
        default:
          return
      }
    },
    W = () => t === N.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t["L2s/Nz"], {
      numberOfYears: F
    }) : (0, I.Ou)(t),
    K = e => {
      e.stopPropagation();
      let r = (0, A.F)(t);
      (0, b.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: o,
        analyticsLocation: "system_message" === n ? r.chat : r.actionButtonCoachmark,
        analyticsLocations: Z,
        analyticsObject: {
          page: k,
          section: j,
          object: C.qAy.BUTTON_CTA,
          objectType: C.Qqv.GIFT
        },
        giftMessage: W()
      })
    },
    z = e => {
      e.stopPropagation(), O.default.track(C.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
        gift_intent_type: t,
        cta_type: G
      }), G === N.X2.VIEW_ALL ? _.Z.transitionToSection(C.pJs.ALL, {
        explicit: true
      }) : G === N.X2.SEND_MESSAGE && ((0, T.PV)(o.id), f.Z.openPrivateChannel({
        recipientIds: o.id
      }).then(() => {
        setTimeout(() => {
          (0, E.PG)(P.X1.GIF, g.Ie.NORMAL), setTimeout(() => {
            (0, E.ql)(w.intl.string(w.t.jrtJi4), true)
          }, 50)
        }, 100)
      }))
    },
    q = "coachmark" === n,
    X = q ? D.innerContentCoachmark : D.innerContent,
    Q = q ? D.recipientUserAvatarCoachmark : D.recipientUserAvatar,
    J = q ? D.currentUserAvatarCoachmark : D.currentUserAvatar,
    $ = q ? "header-primary" : "always-white",
    ee = q ? D.subHeaderTextCoachmark : D.subHeaderText,
    et = q ? u.zx.Colors.BRAND : u.zx.Colors.WHITE,
    en = q ? c.Z.colors.WHITE : c.Z.colors.BG_BRAND,
    er = q ? D.buttonTextPrimaryCoachmark : D.buttonTextPrimary,
    ei = q ? D.buttonSecondaryCoachmark : D.buttonSecondary,
    eo = q ? D.buttonTextSecondaryCoachmark : D.buttonTextSecondary;
  return (0, r.jsx)("div", {
    className: a()(D.content, {
      [D.outerGlow]: U,
      [D.contentCoachmark]: q
    }),
    onMouseEnter: L,
    onMouseLeave: x,
    children: (0, r.jsxs)("div", {
      className: a()(X, {
        [D.innerGlow]: U
      }),
      children: [(0, r.jsxs)("div", {
        className: D.subContent,
        children: [(0, r.jsxs)("div", {
          className: D.avatars,
          children: [(0, r.jsx)(p.Z, {
            className: Q,
            user: o,
            "aria-label": o.username,
            size: R.EF.SIZE_56
          }), null != B && (0, r.jsx)(p.Z, {
            className: J,
            user: B,
            "aria-label": o.username,
            size: R.EF.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: D.textContainer,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            color: $,
            lineClamp: 3,
            children: V()
          }), (0, r.jsx)(d.Text, {
            className: ee,
            variant: "text-sm/normal",
            children: H()
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: D.buttonContainer,
        children: [null != G && (0, r.jsx)(u.zx, {
          className: a()(D.button, ei),
          onClick: z,
          size: u.zx.Sizes.MEDIUM,
          color: u.zx.Colors.CUSTOM,
          look: u.zx.Looks.OUTLINED,
          children: (0, r.jsx)("div", {
            className: D.buttonContentContainer,
            children: (0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              className: a()(D.buttonText, eo),
              children: Y()
            })
          })
        }), (0, r.jsx)(u.zx, {
          className: D.button,
          onClick: K,
          size: u.zx.Sizes.MEDIUM,
          color: et,
          children: (0, r.jsxs)("div", {
            className: D.buttonContentContainer,
            children: [(0, r.jsx)(d.OgN, {
              color: en,
              size: "custom",
              width: "14",
              height: "14"
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              className: a()(D.buttonText, er),
              children: w.intl.string(w.t["wg/30t"])
            })]
          })
        })]
      }), null != M && (0, r.jsx)("div", {
        className: a()(D.connector, {
          [D.leftPopoutConnector]: "left" === M,
          [D.rightPopoutConnector]: "right" === M
        })
      })]
    })
  })
}