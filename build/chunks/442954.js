/** Chunk was on 93886 **/
n.d(t, {
  Z: () => p
}), n(230036), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(481060),
  l = n(138464),
  o = n(585483),
  s = n(246992),
  c = n(981631),
  d = n(710662),
  u = n(536465);

function m(e) {
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
}
let h = {
  PremiumSubscriptionAprilMarketingDecoModal: async () => {
    let {
      default: e
    } = await n.e("18327").then(n.bind(n, 731433));
    return t => (0, r.jsx)(e, m({}, t))
  },
  PremiumSubscriptionMarketingErrorModal: async () => {
    let {
      default: e
    } = await n.e("76025").then(n.bind(n, 393185));
    return t => (0, r.jsx)(e, m({}, t))
  },
  CollectiblesExpiryModal: async () => {
    let {
      default: e
    } = await n.e("77370").then(n.bind(n, 83950));
    return t => (0, r.jsx)(e, m({}, t))
  },
  SelectionModal: async () => {
    let {
      default: e
    } = await n.e("74824").then(n.bind(n, 817357));
    return t => (0, r.jsx)(e, m({}, t))
  }
};

function p() {
  let e = a.useMemo(() => Object.keys(h).map(e => ({
      label: e,
      value: e
    })).sort((e, t) => e.label.localeCompare(t.label)), []),
    [t, n] = a.useState(e[0].value);
  return (0, r.jsx)(i.zJl, {
    className: d.panel,
    children: (0, r.jsxs)("div", {
      className: u.panelInner,
      children: [(0, r.jsxs)("section", {
        className: u.section,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, r.jsxs)("div", {
          className: u.inputRow,
          children: [(0, r.jsx)(i.PhF, {
            className: u.input,
            options: e,
            isSelected: e => t === e,
            serialize: e => e,
            select: e => n(e),
            popoutLayerContext: s.O$
          }), (0, r.jsx)(i.zxk, {
            onClick: () => (0, i.ZDy)(h[t]),
            children: "Open"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: u.section,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: "Wow moment"
        }), (0, r.jsx)("div", {
          className: u.inputRow,
          children: (0, r.jsx)(i.zxk, {
            onClick: () => {
              (0, l.H)(!0), o.S.dispatch(c.CkL.PREMIUM_SUBSCRIPTION_CREATED)
            },
            children: "Open"
          })
        })]
      })]
    })
  })
}