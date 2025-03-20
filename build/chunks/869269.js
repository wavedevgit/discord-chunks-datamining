/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => x
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(289393),
  c = n(723047),
  d = n(727843),
  u = n(587431),
  g = n(86126),
  f = n(880193),
  m = n(516448),
  p = n(975331),
  h = n(231610),
  C = n(388032),
  b = n(174032),
  v = n(333706);

function x(e) {
  var t, n;
  let {
    allSubscriptionListings: s,
    priceTiers: x,
    loading: N,
    error: j,
    handlePublishTier: E,
    onDeleteEditState: I
  } = e, {
    editStateId: O
  } = (0, d.N)(), y = (0, l.e7)([A.Z], () => A.Z.getSubscriptionListing(O)), w = (0, c.mY)(), P = i.useMemo(() => {
    let e = s.filter(e => e.id !== O).map(e => {
      var t;
      return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
    });
    return null == x ? void 0 : x.filter(t => !e.includes(t))
  }, [s, O, x]), B = null == y, D = null !== (t = null == y ? void 0 : y.published) && void 0 !== t && t, T = null !== (n = null == y ? void 0 : y.archived) && void 0 !== n && n;
  return (0, r.jsxs)("div", {
    className: v.body,
    children: [null != j && (0, r.jsx)(u.Z, {
      children: j.getAnyErrorMessage()
    }), !D && !w && !T && (0, r.jsxs)("div", {
      className: v.publishListing,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          className: v.publishListingInfoHeader,
          children: C.NW.string(C.t.WOlcS0)
        }), (0, r.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          children: C.NW.string(C.t.rMulDQ)
        })]
      }), (0, r.jsx)(o.ua7, {
        shouldShow: B,
        tooltipClassName: b.autoWidth,
        text: C.NW.string(C.t.v7lRIi),
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
            disabled: B,
            color: o.zxk.Colors.CUSTOM,
            wrapperClassName: b.autoWidth,
            className: a()(v.publishButton, b.autoWidth),
            onClick: E,
            submitting: N,
            children: C.NW.string(C.t.Lj6R5u)
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
    }), (0, r.jsx)(f.Z, {
      priceTiers: P
    }), (0, r.jsx)(m.Z, {
      allSubscriptionListings: s
    }), (0, r.jsx)(p.Z, {}), (0, r.jsx)(h.Z, {}), (0, r.jsx)(g.Z, {
      onDeleteEditState: I
    })]
  })
}