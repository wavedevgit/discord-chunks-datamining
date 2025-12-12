/** Chunk was on 1272 **/
/** chunk id: 762500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk617015 = require("./617015.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk934422 = require("./934422.js");

function P(e) {
  let {
    ref: t,
    isFocused: l,
    isActive: P,
    status: x,
    activities: A,
    applicationStream: Z,
    isGameRelationship: w,
    isMobile: L,
    onOtherHover: R,
    onClick: D,
    recipientUser: M,
    giftIntentType: k
  } = e, {
    analyticsLocations: U
  } = (0, d.ZP)(), {
    Component: G
  } = (0, c.V)(), B = (0, o.e7)([I.ZP], () => I.ZP.getFriendAnniversaryYears(M.id)), H = (0, b.ao)({
    location: "gift-intent-friend-row",
    isGift: true,
    giftRecipient: M
  });
  i.useEffect(() => {
    let e = _.Z.getUserAffinity(M.id);
    (0, p.h)({
      name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: s.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: k,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [M, k]);
  let V = e => {
      e.stopPropagation();
      let t = _.Z.getUserAffinity(M.id);
      O.default.track(S.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: k,
        affinity: null == t ? true : t.communicationProbability
      }), H ? (0, v.Z)({
        giftRecipient: M,
        analyticsLocations: U,
        analyticsLocation: S.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
          page: S.ZY5.FRIENDS_LIST,
          section: S.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: S.qAy.BUTTON_CTA,
          objectType: S.AnalyticsObjectTypes.GIFT
        },
        giftMessage: F()
      }) : (0, f.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: M,
        analyticsLocations: U,
        analyticsLocation: S.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        analyticsObject: {
          page: S.ZY5.FRIENDS_LIST,
          section: S.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: S.qAy.BUTTON_CTA,
          objectType: S.AnalyticsObjectTypes.GIFT
        },
        giftMessage: F()
      })
    },
    F = () => k === C.hX.FRIEND_ANNIVERSARY ? N.intl.string(N.t.OrwKgi) : true;
  return (0, r.jsx)(g.Z, {
    ref: t,
    isFocused: l,
    isActive: P,
    user: M,
    onOtherHover: R,
    onClick: D,
    height: T.fJ,
    children: e => (0, r.jsxs)("div", {
      className: a()(j.listItemContents, j.friendAnniversaryRow),
      children: [(0, r.jsx)(m.Z, {
        className: j.userInfoCentered,
        user: M,
        status: x,
        isMobile: L,
        subText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(h.Z, {
            hovered: e,
            activities: A,
            applicationStream: Z,
            status: x,
            user: M,
            userIgnored: E.Z.isIgnored(M.id)
          }), (0, r.jsxs)("div", {
            className: j.anniversarySubtext,
            children: [(0, r.jsx)(u.iFz, {
              size: "xxs",
              color: "currentColor"
            }), (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: N.intl.formatToPlainString(N.t.S3fdq7, {
                numberOfYears: B
              })
            })]
          })]
        }),
        hovered: e,
        showAccountIdentifier: !w && !M.isProvisional
      }), (0, r.jsxs)("div", {
        className: j.actions,
        children: [(0, r.jsx)(u.hU, {
          size: "sm",
          variant: "secondary",
          icon: G,
          "aria-label": N.intl.string(N.t.I61IsE),
          onClick: () => {
            (0, y.PV)(M.id), (0, u.ZDy)(async () => {
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
        }), (0, r.jsx)(u.Button, {
          size: "sm",
          text: N.intl.string(N.t.PEjaCx),
          icon: u.OgN,
          "aria-label": N.intl.string(N.t.PEjaCx),
          onClick: V
        })]
      })]
    })
  })
}