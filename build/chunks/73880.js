/** Chunk was on 77025 **/
n.d(t, {
  Q8: () => u,
  jn: () => m,
  lX: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
  l = n.n(i),
  o = n(481060),
  s = n(489813),
  a = n(592286),
  c = n(388032),
  d = n(667084);

function u(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: s,
    className: c,
    autofocus: u
  } = e;
  return (0, r.jsx)(o.Kx8, {
    className: l()(d.paragraphFieldBody, c),
    maxLength: a.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: s,
    autoFocus: u,
    autosize: !0,
    showRemainingCharacterCount: !s
  })
}

function m(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(s.CA, {
    title: t.label,
    children: (0, r.jsx)(u, {
      className: d.disabledFieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: i
  } = e;
  return (0, r.jsx)(s.hK, {
    title: t.label,
    children: (0, r.jsx)(u, {
      value: t.response,
      onChange: i,
      autofocus: n,
      placeholder: c.intl.string(c.t["Sqn+Wl"])
    })
  })
}