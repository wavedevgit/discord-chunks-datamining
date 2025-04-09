/** Chunk was on 95140 **/
n.d(t, {
  Gi: () => u,
  YJ: () => d,
  zY: () => p
});
var i = n(200651);
n(192379);
var l = n(120356),
  r = n.n(l),
  o = n(481060),
  a = n(489813),
  c = n(592286),
  s = n(667084);

function u(e) {
  let {
    value: t,
    placeholder: n,
    onChange: l,
    disabled: a,
    autofocus: u,
    className: d
  } = e;
  return (0, i.jsx)(o.oil, {
    inputClassName: r()(s.textInputFieldBodyInput, d),
    maxLength: c.tL,
    value: null != t ? t : "",
    placeholder: n,
    onChange: l,
    disabled: a,
    autoFocus: u
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(a.hK, {
    title: t.label,
    children: (0, i.jsx)(o.Kx8, {
      className: r()(s.textInputFieldBodyInput, s.fieldBackground),
      value: t.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function p(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: l
  } = e;
  return (0, i.jsx)(a.hK, {
    title: t.label,
    children: (0, i.jsx)(u, {
      className: s.fieldBackground,
      onChange: l,
      value: t.response,
      autofocus: n
    })
  })
}