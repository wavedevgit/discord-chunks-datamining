/** Chunk was on 1272 **/
/** chunk id: 762500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk114101 = require("./114101.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk417183 = require("./417183.jsx"),
  Chunk825682 = require("./825682.jsx"),
  Chunk170245 = require("./170245.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk602733 = require("./602733.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk909917 = require("./909917.jsx"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk617015 = require("./617015.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk756853 = require("./756853.js");

function x(e) {
  let {
    ref: t,
    isFocused: l,
    isActive: x,
    status: A,
    activities: Z,
    applicationStream: w,
    isGameRelationship: L,
    isMobile: R,
    onOtherHover: D,
    onClick: M,
    recipientUser: k,
    giftIntentType: U
  } = e, {
    analyticsLocations: G
  } = (0, p.ZP)(d.Z.PREMIUM_GIFT_INTENT_FRIEND_ROW), {
    Component: B
  } = (0, c.V)(), H = (0, s.e7)([C.ZP], () => C.ZP.getFriendAnniversaryYears(k.id)), V = (0, E.ao)({
    location: "gift-intent-friend-row",
    isGift: true,
    giftRecipient: k
  });
  i.useEffect(() => {
    let e = _.Z.getUserAffinity(k.id);
    (0, f.h)({
      name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: o.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: U,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [k, U]);
  let F = e => {
      e.stopPropagation();
      let t = _.Z.getUserAffinity(k.id);
      v.default.track(T.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: U,
        affinity: null == t ? true : t.dmProbability,
        location_stack: G
      }), V ? (0, y.Z)({
        giftRecipient: k,
        analyticsLocations: G,
        analyticsLocation: T.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
          page: T.ZY5.FRIENDS_LIST,
          section: T.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: T.qAy.BUTTON_CTA,
          objectType: T.AnalyticsObjectTypes.GIFT
        },
        giftMessage: z()
      }) : (0, g.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: k,
        analyticsLocations: G,
        analyticsLocation: T.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
          page: T.ZY5.FRIENDS_LIST,
          section: T.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: T.qAy.BUTTON_CTA,
          objectType: T.AnalyticsObjectTypes.GIFT
        },
        giftMessage: z()
      })
    },
    z = () => U === S.hX.FRIEND_ANNIVERSARY ? j.intl.string(j.t.OrwKgi) : true;
  return (0, r.jsx)(m.Z, {
    ref: t,
    isFocused: l,
    isActive: x,
    user: k,
    onOtherHover: D,
    onClick: M,
    height: N.fJ,
    children: e => (0, r.jsxs)("div", {
      className: a()(P.listItemContents, P.friendAnniversaryRow),
      children: [(0, r.jsx)(b.Z, {
        className: P.userInfoCentered,
        user: k,
        status: A,
        isMobile: R,
        subText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(h.Z, {
            hovered: e,
            activities: Z,
            applicationStream: w,
            status: A,
            user: k,
            userIgnored: O.Z.isIgnored(k.id)
          }), (0, r.jsxs)("div", {
            className: P.anniversarySubtext,
            children: [(0, r.jsx)(u.iFz, {
              size: "xxs",
              color: "currentColor"
            }), (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: j.intl.formatToPlainString(j.t.S3fdq7, {
                numberOfYears: H
              })
            })]
          })]
        }),
        hovered: e,
        showAccountIdentifier: !L && !k.isProvisional
      }), (0, r.jsxs)("div", {
        className: P.actions,
        children: [(0, r.jsx)(u.hU, {
          size: "sm",
          variant: "secondary",
          icon: B,
          "aria-label": j.intl.string(j.t.I61IsE),
          onClick: () => {
            v.default.track(T.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
              gift_intent_type: U,
              cta_type: "send_message",
              location_stack: G
            }), (0, I.PV)(k.id), (0, u.ZDy)(async () => {
              let {
                default: e
              } = await n.e("5890").then(n.bind(n, 171793));
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
          text: j.intl.string(j.t.PEjaCx),
          icon: u.OgN,
          "aria-label": j.intl.string(j.t.PEjaCx),
          onClick: F
        })]
      })]
    })
  })
}