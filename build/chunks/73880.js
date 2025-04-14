/** Chunk was on 53967 **/
n.d(t, {
  Q8: () => d,
  jn: () => E,
  lX: () => f
});
var i = n(200651);
n(192379);
var r = n(120356),
  l = n.n(r),
  o = n(481060),
  s = n(489813),
  a = n(592286),
  u = n(388032),
  c = n(667084);

function d(e) {
  let {
    value: t,
    placeholder: n,
    onChange: r,
    disabled: s,
    className: u,
    autofocus: d
  } = e;
  return (0, i.jsx)(o.Kx8, {
    className: l()(c.paragraphFieldBody, u),
    maxLength: a.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: r,
    disabled: s,
    autoFocus: d,
    autosize: !0,
    showRemainingCharacterCount: !s
  })
}

function E(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(s.CA, {
    title: t.label,
    children: (0, i.jsx)(d, {
      className: c.disabledFieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: r
  } = e;
  return (0, i.jsx)(s.hK, {
    title: t.label,
    children: (0, i.jsx)(d, {
      value: t.response,
      onChange: r,
      autofocus: n,
      placeholder: u.NW.string(u.t["Sqn+Wl"])
    })
  })
}