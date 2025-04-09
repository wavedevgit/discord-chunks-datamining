/** Chunk was on 53967 **/
n.d(t, {
  Q8: () => c,
  jn: () => d,
  lX: () => E
});
var i = n(200651);
n(192379);
var r = n(120356),
  l = n.n(r),
  o = n(481060),
  s = n(489813),
  a = n(592286),
  u = n(667084);

function c(e) {
  let {
    value: t,
    placeholder: n,
    onChange: r,
    disabled: s,
    className: c,
    autofocus: d
  } = e;
  return (0, i.jsx)(o.Kx8, {
    className: l()(u.paragraphFieldBody, c),
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

function d(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(s.hK, {
    title: t.label,
    children: (0, i.jsx)(c, {
      className: u.fieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function E(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: r
  } = e;
  return (0, i.jsx)(s.hK, {
    title: t.label,
    children: (0, i.jsx)(c, {
      className: u.fieldBackground,
      value: t.response,
      onChange: r,
      autofocus: n
    })
  })
}