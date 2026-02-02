/** Chunk was on 21738 **/
/** chunk id: 777426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3203 = require("./3203.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk414711 = require("./414711.jsx"),
  Chunk187696 = require("./187696.jsx"),
  Chunk723690 = require("./723690.jsx"),
  Chunk21119 = require("./21119.js"),
  Chunk594832 = require("./594832.js"),
  Chunk994500 = require("./994500.js"),
  Chunk954571 = require("./954571.js"),
  Chunk404036 = require("./404036.jsx"),
  Chunk45787 = require("./45787.js"),
  Chunk275759 = require("./275759.js"),
  Chunk652215 = require("./652215.js");
require("./646363.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk847295 = require("./847295.js");

function T(e) {
  let {
    ref: t,
    isFocused: l,
    isActive: T,
    status: j,
    activities: x,
    applicationStream: P,
    isGameRelationship: w,
    isMobile: L,
    isVR: R,
    onOtherHover: D,
    onClick: M,
    recipientUser: k,
    giftIntentType: U
  } = e, {
    analyticsLocations: G
  } = (0, p.Ay)(d.A.PREMIUM_GIFT_INTENT_FRIEND_ROW), {
    Component: V
  } = (0, c.V)(), B = (0, o.bG)([v.Ay], () => v.Ay.getFriendAnniversaryYears(k.id)), H = (0, b.tA)({
    location: "gift-intent-friend-row",
    isGift: true,
    giftRecipient: k
  });
  i.useEffect(() => {
    let e = _.A.getUserAffinity(k.id);
    (0, h.x)({
      name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: s.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: U,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [k, U]);
  let F = e => {
    e.stopPropagation();
    let t = _.A.getUserAffinity(k.id);
    O.default.track(S.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
      gift_intent_type: U,
      affinity: null == t ? true : t.dmProbability,
      location_stack: G
    }), H ? (0, y.A)({
      giftRecipient: k,
      analyticsLocations: G,
      analyticsLocation: S.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
      analyticsObject: {
        page: S.liQ.FRIENDS_LIST,
        section: S.JJy.FRIENDS_LIST_FRIEND_ROW,
        object: S.ZSU.BUTTON_CTA,
        objectType: S.AnalyticsObjectTypes.GIFT
      }
    }) : (0, g.A)({
      isGift: true,
      initialPlanId: null,
      giftRecipient: k,
      analyticsLocations: G,
      analyticsLocation: S.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
      analyticsObject: {
        page: S.liQ.FRIENDS_LIST,
        section: S.JJy.FRIENDS_LIST_FRIEND_ROW,
        object: S.ZSU.BUTTON_CTA,
        objectType: S.AnalyticsObjectTypes.GIFT
      }
    })
  };
  return (0, r.jsx)(m.A, {
    ref: t,
    isFocused: l,
    isActive: T,
    user: k,
    onOtherHover: D,
    onClick: M,
    height: 72,
    children: e => (0, r.jsxs)("div", {
      className: a()(N.a4, N.Z$),
      children: [(0, r.jsx)(A.A, {
        className: N.Cv,
        user: k,
        status: j,
        isMobile: L,
        isVR: R,
        subText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.A, {
            hovered: e,
            activities: x,
            applicationStream: P,
            status: j,
            user: k,
            userIgnored: E.A.isIgnored(k.id)
          }), (0, r.jsxs)("div", {
            className: N.K3,
            children: [(0, r.jsx)(u.$yI, {
              size: "xxs",
              color: "currentColor"
            }), (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: C.intl.formatToPlainString(C.t.S3fdq7, {
                numberOfYears: B
              })
            })]
          })]
        }),
        hovered: e,
        showAccountIdentifier: !w && !k.isProvisional
      }), (0, r.jsxs)("div", {
        className: N.o1,
        children: [(0, r.jsx)(u.K0, {
          size: "sm",
          variant: "secondary",
          icon: V,
          "aria-label": C.intl.string(C.t.I61IsE),
          onClick: () => {
            O.default.track(S.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
              gift_intent_type: U,
              cta_type: "send_message",
              location_stack: G
            }), (0, I.xs)(k.id), (0, u.mMO)(async () => {
              let {
                default: e
              } = await n.e("95501").then(n.bind(n, 367516));
              return t => {
                var n, i;
                return (0, r.jsx)(e, (n = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      var r;
                      r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[t] = r
                    })
                  }
                  return e
                }({}, t), i = i = {
                  giftIntentType: null != U ? U : true,
                  analyticsLocationHistory: G
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
              }
            })
          }
        }), (0, r.jsx)(u.Button, {
          size: "sm",
          text: C.intl.string(C.t.PEjaCx),
          icon: u.okO,
          "aria-label": C.intl.string(C.t.PEjaCx),
          onClick: F
        })]
      })]
    })
  })
}