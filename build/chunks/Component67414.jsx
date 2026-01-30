/** Chunk was on 64935 **/
/** chunk id: 67414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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

function C(e) {
  let {
    giftIntentType: t,
    recipientUser: C,
    analyticsPage: I,
    analyticsSection: S,
    innerRef: T
  } = e, N = (0, a.bG)([g.default], () => g.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, u.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD), w = (0, a.bG)([A.Ay], () => A.Ay.getFriendAnniversaryYears(C.id)), R = (0, f.tA)({
    location: "gift-intent-card",
    isGift: true,
    giftRecipient: C
  });
  i.useEffect(() => {
    (0, d.x)({
      name: l.ImpressionNames.GIFT_INTENT_CARD,
      type: l.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: t,
        num_friend_anniversaries: A.Ay.getFriendAnniversaries().length
      }
    })
  }, [t]);
  let D = () => t === v.np.FRIEND_ANNIVERSARY ? E.intl.string(E.t.ilhtIa) : (0, h.yE)(t);
  return (0, r.jsx)("div", {
    ref: T,
    className: j.Qs,
    children: (0, r.jsxs)("div", {
      className: j.gx,
      children: [(0, r.jsxs)("div", {
        className: j.ou,
        children: [(0, r.jsxs)("div", {
          className: j.HD,
          children: [(0, r.jsx)(o.A, {
            className: j.A6,
            user: C,
            "aria-label": C.username,
            size: O._3.SIZE_56
          }), null != N && (0, r.jsx)(o.A, {
            className: j.GM,
            user: N,
            "aria-label": C.username,
            size: O._3.SIZE_24
          })]
        }), (0, r.jsxs)("div", {
          className: j.FS,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            lineClamp: 3,
            children: t === v.np.FRIEND_ANNIVERSARY ? E.intl.string(E.t.CeQIwZ) : (0, h.yE)(t)
          }), (0, r.jsxs)("div", {
            className: j.jA,
            children: [(0, r.jsx)(s.$yI, {
              size: "xs"
            }), (0, r.jsx)(s.Text, {
              className: j.Tm,
              variant: "text-md/normal",
              color: "text-subtle",
              lineClamp: 1,
              children: t === v.np.FRIEND_ANNIVERSARY ? E.intl.formatToPlainString(E.t.PpG27s, {
                numberOfYears: w
              }) : (0, h.yE)(t)
            })]
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: j.UD,
        children: [(0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          text: E.intl.string(E.t.nffuyb),
          "aria-label": E.intl.string(E.t.nffuyb),
          onClick: e => {
            e.stopPropagation(), _.default.track(x.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
              gift_intent_type: t,
              cta_type: "send_message",
              location_stack: P
            }), (0, s.mMO)(async () => {
              let {
                default: e
              } = await n.e("95501").then(n.bind(n, 367516));
              return n => {
                var i, l;
                return (0, r.jsx)(e, (i = function(e) {
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
                }({}, n), l = l = {
                  giftIntentType: t,
                  analyticsLocationHistory: P
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(l)).forEach(function(e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                }), i))
              }
            })
          }
        }), (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "expressive",
          text: D(),
          icon: s.okO,
          "aria-label": D(),
          onClick: e => {
            e.stopPropagation();
            let n = m.A.getUserAffinity(C.id);
            _.default.track(x.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
              gift_intent_type: t,
              affinity: null == n ? true : n.dmProbability,
              location_stack: P
            });
            let r = (0, y.$)(t);
            R ? (0, b.A)({
              giftRecipient: C,
              analyticsLocations: P,
              analyticsLocation: r.chat,
              analyticsObject: {
                page: I,
                section: S,
                object: x.ZSU.BUTTON_CTA,
                objectType: x.AnalyticsObjectTypes.GIFT
              }
            }) : (0, p.A)({
              isGift: true,
              initialPlanId: null,
              giftRecipient: C,
              analyticsLocation: r.chat,
              analyticsLocations: P,
              analyticsObject: {
                page: I,
                section: S,
                object: x.ZSU.BUTTON_CTA,
                objectType: x.AnalyticsObjectTypes.GIFT
              }
            })
          }
        })]
      })]
    })
  })
}