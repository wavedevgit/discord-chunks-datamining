/** Chunk was on 99840 **/
t.d(n, {
  Gi: () => d,
  YJ: () => u,
  zY: () => m
});
var r = t(200651);
t(192379);
var o = t(120356),
  i = t.n(o),
  a = t(481060),
  s = t(489813),
  l = t(592286),
  c = t(471231);

function d(e) {
  let {
    value: n,
    placeholder: t,
    onChange: o,
    disabled: s,
    autofocus: d,
    className: u
  } = e;
  return (0, r.jsx)(a.oil, {
    inputClassName: i()(c.textInputFieldBodyInput, u),
    maxLength: l.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: o,
    disabled: s,
    autoFocus: d
  })
}

function u(e) {
  let {
    formField: n
  } = e;
  return (0, r.jsx)(s.hK, {
    title: n.label,
    children: (0, r.jsx)(a.Kx8, {
      className: i()(c.textInputFieldBodyInput, c.fieldBackground),
      value: n.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function m(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: o
  } = e;
  return (0, r.jsx)(s.hK, {
    title: n.label,
    children: (0, r.jsx)(d, {
      className: c.fieldBackground,
      onChange: o,
      value: n.response,
      autofocus: t
    })
  })
}