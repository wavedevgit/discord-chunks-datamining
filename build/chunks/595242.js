/** Chunk was on 1815 **/
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(570140),
  d = n(355467),
  u = n(179360),
  m = n(821849),
  p = n(15640),
  g = n(899667),
  h = n(853872),
  f = n(78839),
  b = n(783739),
  N = n(981631),
  x = n(778893);

function _() {
  i.useEffect(() => {
    c.Z.wait(() => {
      d.jg(), d.tZ(), (0, u.X8)(), (0, m.Y2)(null, null, N.JjL.DISCOVERY), (0, u.tH)(!0)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, l.cj)([f.ZP], () => ({
    hasFetchedSubscriptions: f.ZP.hasFetchedSubscriptions(),
    premiumSubscription: f.ZP.getPremiumTypeSubscription()
  })), n = (0, p.V)(), s = (0, l.e7)([h.Z], () => h.Z.hasFetchedPaymentSources), _ = (0, l.e7)([g.Z], () => g.Z.isFetchingCurrentUserAppliedBoosts);
  return e && n && s && !_ ? (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)("div", {
      className: x.background
    }), (0, r.jsx)("div", {
      className: x.content,
      children: (0, r.jsx)(b.Z, {
        premiumSubscription: t
      })
    })]
  }) : (0, r.jsx)("div", {
    className: a()(x.container, x.loading),
    children: (0, r.jsx)(o.$jN, {})
  })
}