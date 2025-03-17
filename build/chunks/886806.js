/** Chunk was on 27978 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(893776),
  c = n(493773),
  u = n(129293),
  d = n(388905),
  p = n(17894),
  h = n(108427),
  g = n(626135),
  m = n(981631),
  _ = n(388032),
  f = n(507442),
  b = n(802138);

function x(e) {
  n.g.location.assign(e)
}

function N(e) {
  let {
    location: t,
    transitionTo: o = x
  } = e, [s, N] = i.useState("submitting"), v = i.useRef(void 0);
  (0, c.ZP)(() => {
    (0, h.e)("verify_email");
    let e = (0, u.Z)(t);
    if (null == e) {
      N("failed");
      return
    }(async () => {
      try {
        let t = await l.Z.verify(e);
        N("succeeded"), v.current = t
      } catch (e) {
        N("failed")
      }
    })()
  });
  let E = i.useCallback(() => {
      o(m.Z5c.LOGIN)
    }, [o]),
    I = i.useCallback(() => {
      g.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: v.current
      }), (0, p.Z)("verify_email")
    }, []);
  return "failed" === s ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Ee, {
      src: n(375673),
      className: a()(f.image, b.marginBottom20)
    }), (0, r.jsx)(d.Dx, {
      className: b.marginBottom8,
      children: _.NW.string(_.t.PCgG39)
    }), (0, r.jsx)(d.DK, {
      className: b.marginBottom40,
      children: _.NW.string(_.t.tQpeAw)
    }), (0, r.jsx)(d.zx, {
      onClick: E,
      children: _.NW.string(_.t.dKhVQE)
    })]
  }) : "succeeded" === s ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Ee, {
      src: n(73962),
      className: a()(f.image, b.marginBottom20)
    }), (0, r.jsx)(d.Dx, {
      className: b.marginBottom40,
      children: _.NW.string(_.t.dAfGb2)
    }), (0, r.jsx)(d.zx, {
      onClick: I,
      children: _.NW.string(_.t.uJWIj4)
    })]
  }) : (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Ee, {
      src: n(892235),
      className: a()(f.image, b.marginBottom20)
    }), (0, r.jsx)(d.Dx, {
      className: b.marginBottom8,
      children: _.NW.string(_.t["0c8+5u"])
    }), (0, r.jsx)(d.DK, {
      className: b.marginBottom40,
      children: _.NW.string(_.t.ULTCBA)
    }), (0, r.jsx)(d.zx, {
      submitting: !0,
      color: d.zx.Colors.PRIMARY
    })]
  })
}
s.ZP.initialize()