/** Chunk was on 99840 **/
t.d(n, {
  jn: () => m,
  lX: () => h
});
var r = t(200651);
t(192379);
var o = t(120356),
  i = t.n(o),
  a = t(481060),
  s = t(476770),
  l = t(592286),
  c = t(388032),
  d = t(234014);

function u(e) {
  let {
    value: n,
    placeholder: t,
    onChange: o,
    disabled: s,
    className: c,
    autofocus: u
  } = e;
  return (0, r.jsx)(a.Kx8, {
    className: i()(d.paragraphFieldBody, c),
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

function m(e) {
  let {
    formField: n
  } = e;
  return (0, r.jsx)(s.CA, {
    title: n.label,
    children: (0, r.jsx)(u, {
      className: d.disabledFieldBackground,
      value: n.response,
      disabled: !0
    })
  })
}

function h(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: o
  } = e;
  return (0, r.jsx)(s.hK, {
    title: n.label,
    children: (0, r.jsx)(u, {
      value: n.response,
      onChange: o,
      autofocus: t,
      placeholder: c.NW.string(c.t["Sqn+Wl"])
    })
  })
}