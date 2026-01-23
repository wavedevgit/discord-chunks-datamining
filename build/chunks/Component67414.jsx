/** Chunk was on web.js **/
/** chunk id: 67414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk21119 = require("./21119.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk242874 = require("./242874.js"),
  Chunk404036 = require("./404036.jsx"),
  Chunk275759 = require("./275759.js"),
  Chunk51501 = require("./51501.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk989712 = require("./989712.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  let {
    giftIntentType: t,
    recipientUser: T,
    analyticsPage: N,
    analyticsSection: R,
    innerRef: P
  } = e, D = (0, s.bG)([h.default], () => h.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, u.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), L = (0, s.bG)([y.Ay], () => y.Ay.getFriendAnniversaryYears(T.id)), j = (0, _.tA)({
    location: "gift-intent-card",
    isGift: true,
    giftRecipient: T
  });
  i.useEffect(() => {
    (0, d.x)({
      name: a.ImpressionNames.GIFT_INTENT_CARD,
      type: a.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: t,
        num_friend_anniversaries: y.Ay.getFriendAnniversaries().length
      }
    })
  }, [t]);
  let M = () => t === O.np.FRIEND_ANNIVERSARY ? I.intl.string(I.t.CeQIwZ) : (0, g.yE)(t),
    k = () => t === O.np.FRIEND_ANNIVERSARY ? I.intl.formatToPlainString(I.t.PpG27s, {
      numberOfYears: L
    }) : (0, g.yE)(t),
    U = () => t === O.np.FRIEND_ANNIVERSARY ? I.intl.string(I.t.ilhtIa) : (0, g.yE)(t),
    G = e => {
      e.stopPropagation();
      let n = p.A.getUserAffinity(T.id);
      m.default.track(v.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: t,
        affinity: null == n ? true : n.dmProbability,
        location_stack: x
      });
      let r = (0, b.$)(t);
      j ? (0, E.A)({
        giftRecipient: T,
        analyticsLocations: x,
        analyticsLocation: r.chat,
        analyticsObject: {
          page: N,
          section: R,
          object: v.ZSU.BUTTON_CTA,
          objectType: v.AnalyticsObjectTypes.GIFT
        }
      }) : (0, f.A)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: T,
        analyticsLocation: r.chat,
        analyticsLocations: x,
        analyticsObject: {
          page: N,
          section: R,
          object: v.ZSU.BUTTON_CTA,
          objectType: v.AnalyticsObjectTypes.GIFT
        }
      })
    };
  return (0, r.jsx)("div", {
    ref: P,
    className: S.Qs,
    children: (0, r.jsxs)("div", {
      className: S.gx,
      children: [(0, r.jsxs)("div", {
        className: S.ou,
        children: [(0, r.jsxs)("div", {
          className: S.HD,
          children: [(0, r.jsx)(l.A, {
            className: S.A6,
            user: T,
            "aria-label": T.username,
            size: A._3.SIZE_56
          }), null != D && (0, r.jsx)(l.A, {
            className: S.GM,
            user: D,
            "aria-label": T.username,
            size: A._3.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: S.FS,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            lineClamp: 3,
            children: M()
          }), (0, r.jsxs)("div", {
            className: S.jA,
            children: [(0, r.jsx)(o.$yI, {
              size: "xs"
            }), (0, r.jsx)(o.Text, {
              className: S.Tm,
              variant: "text-md/normal",
              color: "text-subtle",
              lineClamp: 1,
              children: k()
            })]
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: S.UD,
        children: [(0, r.jsx)(o.Button, {
          size: "sm",
          variant: "secondary",
          text: I.intl.string(I.t.nffuyb),
          "aria-label": I.intl.string(I.t.nffuyb),
          onClick: e => {
            e.stopPropagation(), m.default.track(v.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
              gift_intent_type: t,
              cta_type: "send_message",
              location_stack: x
            }), (0, o.mMO)(async () => {
              let {
                default: e
              } = await n.e("95501").then(n.bind(n, 367516));
              return n => (0, r.jsx)(e, w(C({}, n), {
                giftIntentType: t,
                analyticsLocationHistory: x
              }))
            })
          }
        }), (0, r.jsx)(o.Button, {
          size: "sm",
          variant: "expressive",
          text: U(),
          icon: o.okO,
          "aria-label": U(),
          onClick: G
        })]
      })]
    })
  })
}