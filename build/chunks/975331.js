/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(481060),
  o = n(313201),
  c = n(584825),
  d = n(723047),
  u = n(727843),
  m = n(290348),
  p = n(518470),
  g = n(22902),
  h = n(783454),
  f = n(388032),
  b = n(255180);

function x() {
  var e;
  let {
    editStateId: t
  } = (0, u.N)(), [n, s] = m.TT(t), [x, j] = m.F2(t), N = (0, c.oC)(t), {
    options: v
  } = (0, g.Z)(null !== (e = null == N ? void 0 : N.active_trial) && void 0 !== e ? e : null), _ = (0, p.Z)(), O = null != n, y = i.useCallback(e => {
    let t = v.find(e => e.isDefault);
    a()(null != t, "Missing default trial duartion option"), s(e ? t.value : null)
  }, [s, v]), C = (0, d.mY)(), I = (0, o.Dt)(), E = (0, o.Dt)();
  return (0, r.jsxs)(h.Z, {
    title: f.NW.string(f.t["6antoq"]),
    description: f.NW.string(f.t.urVijY),
    children: [(0, r.jsx)(l.j7V, {
      onChange: (e, t) => y(e),
      value: O,
      disabled: C,
      hideBorder: !0,
      children: f.NW.string(f.t["+hTmdX"])
    }), (0, r.jsxs)(l.hjN, {
      title: f.NW.string(f.t.m1KuWV),
      titleId: I,
      disabled: !O || C,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: b.formDescription,
        disabled: !O || C,
        children: f.NW.string(f.t.NB9NLC)
      }), (0, r.jsx)(l.LZC, {
        size: 8
      }), (0, r.jsx)(l.q4e, {
        "aria-labelledby": I,
        options: v,
        className: b.formInput,
        placeholder: f.NW.string(f.t.WZG1BQ),
        value: n,
        onChange: s,
        maxVisibleItems: 5,
        isDisabled: !O || C,
        look: l.qQH.CUSTOM
      })]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsxs)(l.hjN, {
      title: f.NW.string(f.t["/JD9oa"]),
      titleId: E,
      disabled: !O || C,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: b.formDescription,
        disabled: !O || C,
        children: f.NW.string(f.t.Cg5eBg)
      }), (0, r.jsx)(l.q4e, {
        "aria-labelledby": E,
        options: _,
        className: b.formInput,
        value: x,
        onChange: j,
        maxVisibleItems: 5,
        isDisabled: !O || C,
        look: l.qQH.CUSTOM
      })]
    })]
  })
}