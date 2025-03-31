/** Chunk was on 99840 **/
t.d(n, {
  Q8: () => d,
  jn: () => u,
  lX: () => m
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
    className: d,
    autofocus: u
  } = e;
  return (0, r.jsx)(a.Kx8, {
    className: i()(c.paragraphFieldBody, d),
    maxLength: l.RS,
    value: null != n ? n : "",
    placeholder: null != t ? t : "",
    onChange: o,
    disabled: s,
    autoFocus: u,
    autosize: !0,
    showRemainingCharacterCount: !s
  })
}

function u(e) {
  let {
    formField: n
  } = e;
  return (0, r.jsx)(s.hK, {
    title: n.label,
    children: (0, r.jsx)(d, {
      className: c.fieldBackground,
      value: n.response,
      disabled: !0
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
      value: n.response,
      onChange: o,
      autofocus: t
    })
  })
}