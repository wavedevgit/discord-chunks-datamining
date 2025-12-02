/** Chunk was on 1272 **/
/** chunk id: 762500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk795448 = require("./795448.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk934422 = require("./934422.js");

function y(e) {
  let {
    ref: t,
    isFocused: y,
    isActive: I,
    status: C,
    activities: S,
    applicationStream: T,
    isGameRelationship: N,
    isMobile: j,
    onOtherHover: P,
    onClick: x,
    recipientUser: A,
    giftIntentType: Z
  } = e, {
    analyticsLocations: w
  } = (0, o.ZP)(), {
    Component: L
  } = (0, a.V)();
  i.useEffect(() => {
    let e = h.Z.getUserAffinity(A.id);
    (0, c.h)({
      name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
      type: l.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: Z,
        affinity: null == e ? true : e.communicationProbability
      }
    })
  }, [A, Z]);
  let R = e => {
      e.stopPropagation();
      let t = h.Z.getUserAffinity(A.id);
      m.default.track(E.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
        gift_intent_type: Z,
        affinity: null == t ? true : t.communicationProbability
      }), (0, u.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: A,
        analyticsLocations: w,
        analyticsObject: {
          page: E.ZY5.FRIENDS_LIST,
          section: E.jXE.FRIENDS_LIST_FRIEND_ROW,
          object: E.qAy.BUTTON_CTA,
          objectType: E.AnalyticsObjectTypes.GIFT
        },
        giftMessage: D()
      })
    },
    D = () => Z === b.hX.FRIEND_ANNIVERSARY ? O.intl.string(O.t.OrwKgi) : true;
  return (0, r.jsx)(d.Z, {
    ref: t,
    isFocused: y,
    isActive: I,
    user: A,
    onOtherHover: P,
    onClick: x,
    children: e => (0, r.jsxs)("div", {
      className: v.listItemContents,
      children: [(0, r.jsx)(f.Z, {
        user: A,
        status: C,
        isMobile: j,
        subText: (0, r.jsx)(p.Z, {
          hovered: e,
          activities: S,
          applicationStream: T,
          status: C,
          user: A,
          userIgnored: g.Z.isIgnored(A.id)
        }),
        hovered: e,
        showAccountIdentifier: !N && !A.isProvisional
      }), (0, r.jsxs)("div", {
        className: v.actions,
        children: [(0, r.jsx)(s.hU, {
          size: "sm",
          variant: "secondary",
          icon: L,
          "aria-label": O.intl.string(O.t.I61IsE),
          onClick: () => {
            (0, _.PV)(A.id), (0, s.ZDy)(async () => {
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
          text: O.intl.string(O.t.PEjaCx),
          icon: s.OgN,
          "aria-label": O.intl.string(O.t.PEjaCx),
          onClick: R
        })]
      })]
    })
  })
}