/** Chunk was on 37697 **/
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  a = n(793030),
  l = n(823379),
  o = n(216780),
  s = n(448021),
  c = n(405411),
  d = n(215453),
  u = n(796150),
  p = n(24746),
  m = n(669401),
  h = n(388032),
  g = n(168549);

function _(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => {
    var e, n, r;
    return null !== (r = (null !== (n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(o.RF).filter(l.lm)) && void 0 !== r ? r : []
  }, [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: g.aboutContainer,
      children: [(0, r.jsx)(s.Z, {
        application: t,
        carouselItems: n
      }), (0, r.jsx)(p.Z, {
        application: t
      }), (0, r.jsx)(c.Z, {
        application: t
      }), (0, r.jsx)(m.Z, {
        application: t
      }), (0, r.jsx)(d.Z, {
        application: t
      })]
    }), (0, r.jsxs)("div", {
      className: g.informationContainer,
      children: [(0, r.jsx)("div", {
        className: g.divider
      }), (0, r.jsx)(a.X6, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: h.NW.string(h.t["mD+J/v"])
      }), (0, r.jsx)(u.Z, {
        application: t,
        view: "embedded"
      })]
    })]
  })
}