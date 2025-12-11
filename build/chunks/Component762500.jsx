/** Chunk was on 1272 **/
/** chunk id: 762500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk114101 = require("./114101.jsx"),
  Chunk481060 = require("./481060.js"),
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
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk934422 = require("./934422.js");

function C(e) {
  let {
    ref: t,
    isFocused: C,
    isActive: S,
    status: T,
    activities: N,
    applicationStream: j,
    isGameRelationship: P,
    isMobile: x,
    onOtherHover: A,
    onClick: Z,
    recipientUser: w,
    giftIntentType: L
  } = e, {
    analyticsLocations: R
  } = (0, o.ZP)(), {
    Component: D
  } = (0, a.V)(), M = (0, h.ao)({
    location: "gift-intent-friend-row",
    isGift: true,
    giftRecipient: w
  });
  i.useEffect(() => {
    let e = g.Z.getUserAffinity(w.id);
    (0, c.h)({
      name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: l.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: L,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [w, L]);
  let k = e => {
      e.stopPropagation();
      let t = g.Z.getUserAffinity(w.id);
      _.default.track(v.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: L,
        affinity: null == t ? true : t.communicationProbability
      }), M ? (0, b.Z)({
        giftRecipient: w,
        analyticsLocations: R,
        analyticsLocation: v.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
          page: v.ZY5.FRIENDS_LIST,
          section: v.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: v.qAy.BUTTON_CTA,
          objectType: v.AnalyticsObjectTypes.GIFT
        },
        giftMessage: U()
      }) : (0, u.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: w,
        analyticsLocations: R,
        analyticsLocation: v.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
          page: v.ZY5.FRIENDS_LIST,
          section: v.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: v.qAy.BUTTON_CTA,
          objectType: v.AnalyticsObjectTypes.GIFT
        },
        giftMessage: U()
      })
    },
    U = () => L === O.hX.FRIEND_ANNIVERSARY ? y.intl.string(y.t.OrwKgi) : true;
  return (0, r.jsx)(d.Z, {
    ref: t,
    isFocused: C,
    isActive: S,
    user: w,
    onOtherHover: A,
    onClick: Z,
    children: e => (0, r.jsxs)("div", {
      className: I.listItemContents,
      children: [(0, r.jsx)(f.Z, {
        user: w,
        status: T,
        isMobile: x,
        subText: (0, r.jsx)(p.Z, {
          hovered: e,
          activities: N,
          applicationStream: j,
          status: T,
          user: w,
          userIgnored: m.Z.isIgnored(w.id)
        }),
        hovered: e,
        showAccountIdentifier: !P && !w.isProvisional
      }), (0, r.jsxs)("div", {
        className: I.actions,
        children: [(0, r.jsx)(s.hU, {
          size: "sm",
          variant: "secondary",
          icon: D,
          "aria-label": y.intl.string(y.t.I61IsE),
          onClick: () => {
            (0, E.PV)(w.id), (0, s.ZDy)(async () => {
              let {
                default: e
              } = await n.e("5890").then(n.bind(n, 171793));
              return t => (0, r.jsx)(e, function(e) {
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
              }({}, t))
            })
          }
        }), (0, r.jsx)(s.Button, {
          size: "sm",
          text: y.intl.string(y.t.PEjaCx),
          icon: s.OgN,
          "aria-label": y.intl.string(y.t.PEjaCx),
          onClick: k
        })]
      })]
    })
  })
}