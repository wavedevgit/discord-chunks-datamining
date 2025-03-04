/** Chunk was on 27978 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(525654),
  a = n.n(o),
  l = n(442837),
  s = n(893776),
  c = n(493773),
  u = n(129293),
  d = n(388905),
  h = n(108427),
  g = n(981631),
  p = n(388032),
  f = n(802138);

function m(e) {
  return n.g.location.assign(e)
}

function _(e) {
  let {
    location: t,
    transitionTo: o = m
  } = e, [l, _] = i.useState("submitting");

  function b() {
    return "Android" === a().os.family || "iOS" === a().os.family ? null : (0, r.jsx)(d.zx, {
      onClick: () => o(g.Z5c.LOGIN),
      children: p.NW.string(p.t.dKhVQE)
    })
  }
  return ((0, c.ZP)(() => {
    (0, h.e)("authorize_ip");
    let e = (0, u.Z)(t);
    if (null == e) {
      _("failed");
      return
    }(async () => {
      try {
        await s.Z.authorizeIPAddress(e), _("succeeded")
      } catch (e) {
        _("failed")
      }
    })()
  }), "failed" === l) ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(262467),
      className: f.marginBottom20
    }), (0, r.jsx)(d.Dx, {
      className: f.marginBottom8,
      children: p.NW.string(p.t["f/54a2"])
    }), (0, r.jsx)(d.DK, {
      className: f.marginBottom40,
      children: p.NW.string(p.t.i3ehMj)
    }), b()]
  }) : "succeeded" === l ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)("img", {
      alt: "",
      src: n(640356),
      className: f.marginBottom20
    }), (0, r.jsx)(d.Dx, {
      className: f.marginBottom8,
      children: p.NW.string(p.t.iG0SlJ)
    }), (0, r.jsx)(d.DK, {
      className: f.marginBottom40,
      children: p.NW.string(p.t["Elv+qq"])
    }), b()]
  }) : (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, {
      children: p.NW.string(p.t["9exy+f"])
    })]
  })
}
l.ZP.initialize()