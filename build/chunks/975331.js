/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(481060),
  o = n(313201),
  A = n(584825),
  c = n(723047),
  d = n(727843),
  u = n(290348),
  g = n(518470),
  f = n(22902),
  m = n(783454),
  p = n(388032),
  h = n(174032);

function C() {
  var e;
  let {
    editStateId: t
  } = (0, d.N)(), [n, s] = u.TT(t), [C, b] = u.F2(t), v = (0, A.oC)(t), {
    options: x
  } = (0, f.Z)(null !== (e = null == v ? void 0 : v.active_trial) && void 0 !== e ? e : null), N = (0, g.Z)(), j = null != n, E = i.useCallback(e => {
    let t = x.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), s(e ? t.value : null)
  }, [s, x]), I = (0, c.mY)(), O = (0, o.Dt)(), y = (0, o.Dt)();
  return (0, r.jsxs)(m.Z, {
    title: p.NW.string(p.t["6antoq"]),
    description: p.NW.string(p.t.urVijY),
    children: [(0, r.jsx)(l.j7V, {
      onChange: (e, t) => E(e),
      value: j,
      disabled: I,
      hideBorder: !0,
      children: p.NW.string(p.t["+hTmdX"])
    }), (0, r.jsxs)(l.hjN, {
      title: p.NW.string(p.t.m1KuWV),
      titleId: O,
      disabled: !j || I,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: h.formDescription,
        disabled: !j || I,
        children: p.NW.string(p.t.NB9NLC)
      }), (0, r.jsx)(l.LZC, {
        size: 8
      }), (0, r.jsx)(l.q4e, {
        "aria-labelledby": O,
        options: x,
        className: h.formInput,
        placeholder: p.NW.string(p.t.WZG1BQ),
        value: n,
        onChange: s,
        maxVisibleItems: 5,
        isDisabled: !j || I,
        look: l.qQH.CUSTOM
      })]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsxs)(l.hjN, {
      title: p.NW.string(p.t["/JD9oa"]),
      titleId: y,
      disabled: !j || I,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: h.formDescription,
        disabled: !j || I,
        children: p.NW.string(p.t.Cg5eBg)
      }), (0, r.jsx)(l.q4e, {
        "aria-labelledby": y,
        options: N,
        className: h.formInput,
        value: C,
        onChange: b,
        maxVisibleItems: 5,
        isDisabled: !j || I,
        look: l.qQH.CUSTOM
      })]
    })]
  })
}