/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(289393),
  d = n(723047),
  u = n(727843),
  m = n(587431),
  p = n(86126),
  g = n(880193),
  h = n(516448),
  f = n(975331),
  b = n(231610),
  x = n(388032),
  j = n(255180),
  N = n(740841);

function v(e) {
  var t, n;
  let {
    allSubscriptionListings: s,
    priceTiers: v,
    loading: _,
    error: O,
    handlePublishTier: y,
    onDeleteEditState: C
  } = e, {
    editStateId: I
  } = (0, u.N)(), E = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListing(I)), S = (0, d.mY)(), T = i.useMemo(() => {
    let e = s.filter(e => e.id !== I).map(e => {
      var t;
      return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
    });
    return null == v ? void 0 : v.filter(t => !e.includes(t))
  }, [s, I, v]), P = null == E, w = null !== (t = null == E ? void 0 : E.published) && void 0 !== t && t, R = null !== (n = null == E ? void 0 : E.archived) && void 0 !== n && n;
  return (0, r.jsxs)("div", {
    className: N.body,
    children: [null != O && (0, r.jsx)(m.Z, {
      children: O.getAnyErrorMessage()
    }), !w && !S && !R && (0, r.jsxs)("div", {
      className: N.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          className: N.publishListingInfoHeader,
          children: x.NW.string(x.t.WOlcS0)
        }), (0, r.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          children: x.NW.string(x.t.rMulDQ)
        })]
      }), (0, r.jsx)(o.ua7, {
        shouldShow: P,
        tooltipClassName: j.autoWidth,
        text: x.NW.string(x.t.v7lRIi),
        children: e => {
          var t, n;
          return (0, r.jsx)(o.zxk, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            disabled: P,
            color: o.zxk.Colors.CUSTOM,
            wrapperClassName: j.autoWidth,
            className: a()(N.publishButton, j.autoWidth),
            onClick: y,
            submitting: _,
            children: x.NW.string(x.t.Lj6R5u)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    }), (0, r.jsx)(g.Z, {
      priceTiers: T
    }), (0, r.jsx)(h.Z, {
      allSubscriptionListings: s
    }), (0, r.jsx)(f.Z, {}), (0, r.jsx)(b.Z, {}), (0, r.jsx)(p.Z, {
      onDeleteEditState: C
    })]
  })
}