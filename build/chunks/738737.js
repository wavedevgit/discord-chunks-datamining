/** Chunk was on 68051 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
  a = n(987209),
  o = n(107998),
  l = n(981631);

function s(e) {
  let {
    initialPlanId: t,
    activeSubscription: s,
    trialId: c,
    trialFooterMessageOverride: d,
    onClose: u,
    analyticsObject: p,
    analyticsLocation: m,
    analyticsLocations: f,
    analyticsSubscriptionType: h,
    renderHeader: g,
    renderPurchaseConfirmation: _,
    planGroup: b,
    reviewWarningMessage: v,
    skuId: y
  } = e;
  (0, i.ZDy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, 563132)), {
      PaymentModal: i
    } = await Promise.resolve().then(n.bind(n, 791785)), {
      STEPS: l
    } = await Promise.all([n.e("8016"), n.e("17938"), n.e("54433"), n.e("31914")]).then(n.bind(n, 7305));
    return n => {
      var x, E, {
          onClose: O
        } = n,
        j = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(n, ["onClose"]);
      return (0, r.jsx)(e, {
        activeSubscription: s,
        stepConfigs: l,
        skuIDs: [y],
        children: (0, r.jsx)(o.c1, {
          children: (0, r.jsx)(a.KB, {
            children: (0, r.jsx)(i, (x = function(e) {
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
            }({}, j), E = E = {
              initialPlanId: t,
              onClose: e => {
                O(), null == u || u(e)
              },
              analyticsLocations: f,
              analyticsObject: p,
              analyticsLocation: m,
              analyticsSubscriptionType: h,
              skuId: y,
              renderHeader: g,
              renderPurchaseConfirmation: _,
              planGroup: b,
              trialId: c,
              trialFooterMessageOverride: d,
              reviewWarningMessage: v
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(E)).forEach(function(e) {
              Object.defineProperty(x, e, Object.getOwnPropertyDescriptor(E, e))
            }), x))
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == u || u(!1)
    },
    onCloseRequest: l.dG4
  })
}