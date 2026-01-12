/** Chunk was on web.js **/
/** chunk id: 674701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
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
  Chunk479446 = require("./479446.js"),
  Chunk909917 = require("./909917.jsx"),
  Chunk441623 = require("./441623.js"),
  Chunk317271 = require("./317271.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk558741 = require("./558741.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    giftIntentType: t,
    recipientUser: a,
    onMouseEnter: P,
    onMouseLeave: w,
    popoutPosition: x,
    analyticsPage: L,
    analyticsSection: j,
    glow: M,
    innerRef: k
  } = e, U = (0, l.e7)([E.default], () => E.default.getCurrentUser()), {
    analyticsLocations: G
  } = (0, p.ZP)(f.Z.PREMIUM_GIFT_INTENT_CARD), Z = (0, l.e7)([v.ZP], () => v.ZP.getFriendAnniversaryYears(a.id)), {
    Component: F
  } = (0, c.V)(), B = (0, g.ao)({
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
        num_friend_anniversaries: v.ZP.getFriendAnniversaries().length
      }
    })
  }, [t]);
  let V = () => t === I.hX.FRIEND_ANNIVERSARY ? A.intl.string(A.t.CeQIwZ) : (0, y.Ou)(t),
    H = () => t === I.hX.FRIEND_ANNIVERSARY ? A.intl.formatToPlainString(A.t.PpG27s, {
      numberOfYears: Z
    }) : (0, y.Ou)(t),
    Y = () => t === I.hX.FRIEND_ANNIVERSARY ? A.intl.string(A.t.PEjaCx) : (0, y.Ou)(t),
    W = e => {
      e.stopPropagation();
      let n = h.Z.getUserAffinity(a.id);
      b.default.track(T.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: t,
        affinity: null == n ? true : n.dmProbability,
        location_stack: G
      });
      let r = (0, S.F)(t);
      B ? (0, O.Z)({
        giftRecipient: a,
        analyticsLocations: G,
        analyticsLocation: r.chat,
        analyticsObject: {
          page: L,
          section: j,
          object: T.qAy.BUTTON_CTA,
          objectType: T.AnalyticsObjectTypes.GIFT
        }
      }) : (0, m.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: a,
        analyticsLocation: r.chat,
        analyticsLocations: G,
        analyticsObject: {
          page: L,
          section: j,
          object: T.qAy.BUTTON_CTA,
          objectType: T.AnalyticsObjectTypes.GIFT
        }
      })
    };
  return (0, r.jsx)("div", {
    ref: k,
    className: o()(N.content, {
      [N.outerGlow]: M
    }),
    onMouseEnter: P,
    onMouseLeave: w,
    children: (0, r.jsxs)("div", {
      className: o()(N.innerContent, {
        [N.innerGlow]: M
      }),
      children: [(0, r.jsxs)("div", {
        className: N.subContent,
        children: [(0, r.jsxs)("div", {
          className: N.avatars,
          children: [(0, r.jsx)(d.Z, {
            className: N.recipientUserAvatar,
            user: a,
            "aria-label": a.username,
            size: C.EF.SIZE_56
          }), null != U && (0, r.jsx)(d.Z, {
            className: N.currentUserAvatar,
            user: U,
            "aria-label": a.username,
            size: C.EF.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: N.textContainer,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            lineClamp: 3,
            children: V()
          }), (0, r.jsxs)("div", {
            className: N.subHeaderContainer,
            children: [(0, r.jsx)(u.iFz, {
              size: "xxs"
            }), (0, r.jsx)(u.Text, {
              className: N.subHeaderText,
              variant: "text-xs/normal",
              color: "text-subtle",
              lineClamp: 1,
              children: H()
            })]
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: N.buttonContainer,
        children: [(0, r.jsx)(u.hU, {
          size: "sm",
          variant: "secondary",
          icon: F,
          "aria-label": A.intl.string(A.t.I61IsE),
          onClick: e => {
            e.stopPropagation(), b.default.track(T.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
              gift_intent_type: t,
              cta_type: "send_message",
              location_stack: G
            }), (0, u.ZDy)(async () => {
              let {
                default: e
              } = await n.e("5890").then(n.bind(n, 171793));
              return n => (0, r.jsx)(e, D(R({}, n), {
                giftIntentType: t,
                analyticsLocationHistory: G
              }))
            })
          }
        }), (0, r.jsx)(u.Button, {
          size: "sm",
          variant: "expressive",
          text: Y(),
          icon: u.OgN,
          "aria-label": Y(),
          onClick: W
        })]
      }), null != x && (0, r.jsx)("div", {
        className: o()(N.connector, {
          [N.leftPopoutConnector]: "left" === x,
          [N.rightPopoutConnector]: "right" === x
        })
      })]
    })
  })
}