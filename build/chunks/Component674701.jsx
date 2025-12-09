/** Chunk was on web.js **/
/** chunk id: 674701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk479446 = require("./479446.js"),
  Chunk441623 = require("./441623.js"),
  Chunk317271 = require("./317271.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk553517 = require("./553517.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function C(e) {
  let {
    giftIntentType: t,
    recipientUser: a,
    onMouseEnter: T,
    onMouseLeave: C,
    popoutPosition: N,
    analyticsPage: P,
    analyticsSection: R,
    glow: D,
    innerRef: w
  } = e, x = (0, l.e7)([m.default], () => m.default.getCurrentUser()), {
    analyticsLocations: L
  } = (0, f.ZP)(), j = (0, l.e7)([E.ZP], () => E.ZP.getFriendAnniversaryYears(a.id)), {
    Component: M
  } = (0, c.V)();
  i.useEffect(() => {
    (0, p.h)({
      name: s.ImpressionNames.GIFT_INTENT_CARD,
      type: s.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: t,
        num_friend_anniversaries: E.ZP.getFriendAnniversaries().length
      }
    })
  }, [t]);
  let k = () => t === y.hX.FRIEND_ANNIVERSARY ? S.intl.string(S.t.CeQIwZ) : (0, g.Ou)(t),
    U = () => t === y.hX.FRIEND_ANNIVERSARY ? S.intl.formatToPlainString(S.t.PpG27s, {
      numberOfYears: j
    }) : (0, g.Ou)(t),
    G = () => t === y.hX.FRIEND_ANNIVERSARY ? S.intl.formatToPlainString(S.t.W7AF4C, {
      friendUserName: h.ZP.getName(a)
    }) : (0, g.Ou)(t),
    Z = () => t === y.hX.FRIEND_ANNIVERSARY ? S.intl.string(S.t.OrwKgi) : (0, g.Ou)(t),
    B = e => {
      e.stopPropagation();
      let n = (0, b.F)(t);
      (0, _.Z)({
        isGift: true,
        initialPlanId: null,
        giftRecipient: a,
        analyticsLocation: n.chat,
        analyticsLocations: L,
        analyticsObject: {
          page: P,
          section: R,
          object: O.qAy.BUTTON_CTA,
          objectType: O.AnalyticsObjectTypes.GIFT
        },
        giftMessage: Z()
      })
    };
  return (0, r.jsx)("div", {
    ref: w,
    className: o()(I.content, {
      [I.outerGlow]: D
    }),
    onMouseEnter: T,
    onMouseLeave: C,
    children: (0, r.jsxs)("div", {
      className: o()(I.innerContent, {
        [I.innerGlow]: D
      }),
      children: [(0, r.jsxs)("div", {
        className: I.subContent,
        children: [(0, r.jsxs)("div", {
          className: I.avatars,
          children: [(0, r.jsx)(d.Z, {
            className: I.recipientUserAvatar,
            user: a,
            "aria-label": a.username,
            size: v.EF.SIZE_56
          }), null != x && (0, r.jsx)(d.Z, {
            className: I.currentUserAvatar,
            user: x,
            "aria-label": a.username,
            size: v.EF.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: I.textContainer,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            lineClamp: 3,
            children: k()
          }), (0, r.jsxs)("div", {
            className: I.subHeaderContainer,
            children: [(0, r.jsx)(u.iFz, {
              size: "xxs"
            }), (0, r.jsx)(u.Text, {
              className: I.subHeaderText,
              variant: "text-xs/normal",
              color: "text-subtle",
              lineClamp: 1,
              children: U()
            })]
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: I.buttonContainer,
        children: [(0, r.jsx)(u.hU, {
          size: "sm",
          variant: "secondary",
          icon: M,
          "aria-label": S.intl.string(S.t.I61IsE),
          onClick: () => {
            (0, u.ZDy)(async () => {
              let {
                default: e
              } = await n.e("5890").then(n.bind(n, 171793));
              return t => (0, r.jsx)(e, A({}, t))
            })
          }
        }), (0, r.jsx)(u.Button, {
          size: "sm",
          variant: "expressive",
          text: G(),
          icon: u.OgN,
          "aria-label": G(),
          onClick: B
        })]
      }), null != N && (0, r.jsx)("div", {
        className: o()(I.connector, {
          [I.leftPopoutConnector]: "left" === N,
          [I.rightPopoutConnector]: "right" === N
        })
      })]
    })
  })
}