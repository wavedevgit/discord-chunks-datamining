/** Chunk was on 77025 **/
n.d(t, {
  Q8: () => d,
  jn: () => m,
  lX: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
  l = n.n(i),
  s = n(755721),
  a = n(489813),
  o = n(592286),
  c = n(388032),
  u = n(667084);

function d(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: a,
    className: c,
    autofocus: d
  } = e;
  return (0, r.jsx)(s.iS, {
    className: l()(u.paragraphFieldBody, c),
    maxLength: o.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: a,
    autoFocus: d,
    autosize: !0,
    showRemainingCharacterCount: !a
  })
}

function m(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(a.CA, {
    title: t.label,
    children: (0, r.jsx)(d, {
      className: u.disabledFieldBackground,
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
  return (0, r.jsx)(a.hK, {
    title: t.label,
    children: (0, r.jsx)(d, {
      value: t.response,
      onChange: i,
      autofocus: n,
      placeholder: c.intl.string(c.t["Sqn+Wl"])
    })
  })
}