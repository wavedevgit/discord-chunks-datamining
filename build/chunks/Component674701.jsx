/** Chunk was on web.js **/
/** chunk id: 674701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk114101 = require("./114101.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk479446 = require("./479446.js"),
  Chunk909917 = require("./909917.jsx"),
  Chunk441623 = require("./441623.js"),
  Chunk317271 = require("./317271.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk558741 = require("./558741.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let {
    giftIntentType: t,
    recipientUser: a,
    onMouseEnter: R,
    onMouseLeave: D,
    popoutPosition: L,
    analyticsPage: j,
    analyticsSection: M,
    glow: k,
    innerRef: U
  } = e, G = (0, l.e7)([E.default], () => E.default.getCurrentUser()), {
    analyticsLocations: Z
  } = (0, p.ZP)(f.Z.PREMIUM_GIFT_INTENT_CARD), F = (0, l.e7)([S.ZP], () => S.ZP.getFriendAnniversaryYears(a.id)), {
    Component: B
  } = (0, c.V)(), V = (0, g.ao)({
    location: "gift-intent-card",
    isGift: true,
    giftRecipient: a
  });
  i.useEffect(() => {
    (0, _.h)({
      name: s.ImpressionNames.GIFT_INTENT_CARD,
      type: s.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: t,
        num_friend_anniversaries: S.ZP.getFriendAnniversaries().length
      }
    })
  }, [t]);
  let H = () => t === T.hX.FRIEND_ANNIVERSARY ? N.intl.string(N.t.CeQIwZ) : (0, O.Ou)(t),
    Y = () => t === T.hX.FRIEND_ANNIVERSARY ? N.intl.formatToPlainString(N.t.PpG27s, {
      numberOfYears: F
    }) : (0, O.Ou)(t),
    W = () => t === T.hX.FRIEND_ANNIVERSARY ? N.intl.formatToPlainString(N.t.W7AF4C, {
      friendUserName: y.ZP.getName(a)
    }) : (0, O.Ou)(t),
    K = e => {
      e.stopPropagation();
      let n = h.Z.getUserAffinity(a.id);
      b.default.track(C.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: t,
        affinity: null == n ? true : n.dmProbability,
        location_stack: Z
      });
      let r = (0, I.F)(t);
      V ? (0, v.Z)({
        giftRecipient: a,
        analyticsLocations: Z,
        analyticsLocation: r.chat,
        analyticsObject: {
          page: j,
          section: M,
          object: C.qAy.BUTTON_CTA,
          objectType: C.AnalyticsObjectTypes.GIFT
        }
      }) : (0, m.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: a,
        analyticsLocation: r.chat,
        analyticsLocations: Z,
        analyticsObject: {
          page: j,
          section: M,
          object: C.qAy.BUTTON_CTA,
          objectType: C.AnalyticsObjectTypes.GIFT
        }
      })
    };
  return (0, r.jsx)("div", {
    ref: U,
    className: o()(P.content, {
      [P.outerGlow]: k
    }),
    onMouseEnter: R,
    onMouseLeave: D,
    children: (0, r.jsxs)("div", {
      className: o()(P.innerContent, {
        [P.innerGlow]: k
      }),
      children: [(0, r.jsxs)("div", {
        className: P.subContent,
        children: [(0, r.jsxs)("div", {
          className: P.avatars,
          children: [(0, r.jsx)(d.Z, {
            className: P.recipientUserAvatar,
            user: a,
            "aria-label": a.username,
            size: A.EF.SIZE_56
          }), null != G && (0, r.jsx)(d.Z, {
            className: P.currentUserAvatar,
            user: G,
            "aria-label": a.username,
            size: A.EF.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: P.textContainer,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            lineClamp: 3,
            children: H()
          }), (0, r.jsxs)("div", {
            className: P.subHeaderContainer,
            children: [(0, r.jsx)(u.iFz, {
              size: "xxs"
            }), (0, r.jsx)(u.Text, {
              className: P.subHeaderText,
              variant: "text-xs/normal",
              color: "text-subtle",
              lineClamp: 1,
              children: Y()
            })]
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: P.buttonContainer,
        children: [(0, r.jsx)(u.hU, {
          size: "sm",
          variant: "secondary",
          icon: B,
          "aria-label": N.intl.string(N.t.I61IsE),
          onClick: e => {
            e.stopPropagation(), b.default.track(C.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
              gift_intent_type: t,
              cta_type: "send_message",
              location_stack: Z
            }), (0, u.ZDy)(async () => {
              let {
                default: e
              } = await n.e("5890").then(n.bind(n, 171793));
              return n => (0, r.jsx)(e, x(w({}, n), {
                giftIntentType: t,
                analyticsLocationHistory: Z
              }))
            })
          }
        }), (0, r.jsx)(u.Button, {
          size: "sm",
          variant: "expressive",
          text: W(),
          icon: u.OgN,
          "aria-label": W(),
          onClick: K
        })]
      }), null != L && (0, r.jsx)("div", {
        className: o()(P.connector, {
          [P.leftPopoutConnector]: "left" === L,
          [P.rightPopoutConnector]: "right" === L
        })
      })]
    })
  })
}