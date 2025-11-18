/** Chunk was on web.js **/
/** chunk id: 674701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => L,
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk957825 = require("./957825.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk553517 = require("./553517.js"),
  L = function(e) {
    return e.SYSTEM_MESSAGE = "system_message", e.COACHMARK = "coachmark", e
  }({});

function x(e) {
  let {
    giftIntentType: t,
    premiumGiftIntentCardType: n,
    recipientUser: a,
    onMouseEnter: L,
    onMouseLeave: x,
    popoutPosition: M,
    analyticsPage: k,
    analyticsSection: j,
    glow: U,
    giftIntentSecondaryAction: G
  } = e, B = (0, l.e7)([y.default], () => y.default.getCurrentUser()), {
    analyticsLocations: Z
  } = (0, h.ZP)(), F = (0, l.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(a.id));
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
  let V = () => t === C.hX.FRIEND_ANNIVERSARY ? D.intl.formatToPlainString(D.t.rtRr04, {
      friendUserName: v.ZP.getName(a)
    }) : (0, I.Ou)(t),
    H = () => t === C.hX.FRIEND_ANNIVERSARY ? D.intl.formatToPlainString(D.t.PpG27s, {
      numberOfYears: F
    }) : (0, I.Ou)(t),
    Y = () => {
      switch (G) {
        case C.X2.VIEW_ALL:
          return D.intl.string(D.t.WkxniM);
        case C.X2.SEND_MESSAGE:
          return D.intl.string(D.t.I61IsE);
        default:
          return
      }
    },
    W = () => t === C.hX.FRIEND_ANNIVERSARY ? D.intl.string(D.t.OrwKgi) : (0, I.Ou)(t),
    K = e => {
      e.stopPropagation();
      let r = (0, A.F)(t);
      (0, b.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: a,
        analyticsLocation: "system_message" === n ? r.chat : r.actionButtonCoachmark,
        analyticsLocations: Z,
        analyticsObject: {
          page: k,
          section: j,
          object: N.qAy.BUTTON_CTA,
          objectType: N.AnalyticsObjectTypes.GIFT
        },
        giftMessage: W()
      })
    },
    z = e => {
      e.stopPropagation(), O.default.track(N.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
        gift_intent_type: t,
        cta_type: G
      }), G === C.X2.VIEW_ALL ? _.Z.transitionToSection(N.pJs.ALL, {
        explicit: true
      }) : G === C.X2.SEND_MESSAGE && ((0, T.PV)(a.id), f.Z.openPrivateChannel({
        recipientIds: a.id
      }).then(() => {
        setTimeout(() => {
          (0, E.PG)(R.X1.GIF, g.Ie.NORMAL), setTimeout(() => {
            (0, E.ql)(D.intl.string(D.t.jrtJi4), true)
          }, 50)
        }, 100)
      }))
    },
    q = "coachmark" === n,
    X = q ? w.innerContentCoachmark : w.innerContent,
    Q = q ? w.recipientUserAvatarCoachmark : w.recipientUserAvatar,
    J = q ? w.currentUserAvatarCoachmark : w.currentUserAvatar,
    $ = q ? "header-primary" : "always-white",
    ee = q ? w.subHeaderTextCoachmark : w.subHeaderText,
    et = q ? u.zx.Colors.BRAND : u.zx.Colors.WHITE,
    en = q ? c.Z.colors.WHITE : c.Z.colors.BG_BRAND,
    er = q ? w.buttonTextPrimaryCoachmark : w.buttonTextPrimary,
    ei = q ? w.buttonSecondaryCoachmark : w.buttonSecondary,
    ea = q ? w.buttonTextSecondaryCoachmark : w.buttonTextSecondary;
  return (0, r.jsx)("div", {
    className: o()(w.content, {
      [w.outerGlow]: U,
      [w.contentCoachmark]: q
    }),
    onMouseEnter: L,
    onMouseLeave: x,
    children: (0, r.jsxs)("div", {
      className: o()(X, {
        [w.innerGlow]: U
      }),
      children: [(0, r.jsxs)("div", {
        className: w.subContent,
        children: [(0, r.jsxs)("div", {
          className: w.avatars,
          children: [(0, r.jsx)(p.Z, {
            className: Q,
            user: a,
            "aria-label": a.username,
            size: P.EF.SIZE_56
          }), null != B && (0, r.jsx)(p.Z, {
            className: J,
            user: B,
            "aria-label": a.username,
            size: P.EF.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: w.textContainer,
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
        className: w.buttonContainer,
        children: [null != G && (0, r.jsx)(u.zx, {
          "data-migration-pending": true,
          className: o()(w.button, ei),
          onClick: z,
          size: u.zx.Sizes.MEDIUM,
          color: u.zx.Colors.CUSTOM,
          look: u.zx.Looks.OUTLINED,
          children: (0, r.jsx)("div", {
            className: w.buttonContentContainer,
            children: (0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              className: o()(w.buttonText, ea),
              children: Y()
            })
          })
        }), (0, r.jsx)(u.zx, {
          "data-migration-pending": true,
          className: w.button,
          onClick: K,
          size: u.zx.Sizes.MEDIUM,
          color: et,
          children: (0, r.jsxs)("div", {
            className: w.buttonContentContainer,
            children: [(0, r.jsx)(d.OgN, {
              color: en,
              size: "custom",
              width: "14",
              height: "14"
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/medium",
              className: o()(w.buttonText, er),
              children: D.intl.string(D.t["wg/30i"])
            })]
          })
        })]
      }), null != M && (0, r.jsx)("div", {
        className: o()(w.connector, {
          [w.leftPopoutConnector]: "left" === M,
          [w.rightPopoutConnector]: "right" === M
        })
      })]
    })
  })
}