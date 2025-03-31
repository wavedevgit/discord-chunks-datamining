/** Chunk was on 99840 **/
t.d(n, {
  Gi: () => c,
  YJ: () => d,
  zY: () => u
});
var r = t(200651);
t(192379);
var o = t(481060),
  i = t(476770),
  a = t(592286),
  s = t(388032),
  l = t(234014);

function c(e) {
  let {
    value: n,
    placeholder: t,
    onChange: i,
    disabled: s,
    autofocus: l,
    className: c
  } = e;
  return (0, r.jsx)(o.oil, {
    inputClassName: c,
    maxLength: a.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: i,
    disabled: s,
    autoFocus: l
  })
}

function d(e) {
  let {
    formField: n
  } = e;
  return (0, r.jsx)(i.CA, {
    title: n.label,
    children: (0, r.jsx)(o.Kx8, {
      className: l.disabledFieldBackground,
      value: n.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function u(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: o
  } = e;
  return (0, r.jsx)(i.hK, {
    title: n.label,
    children: (0, r.jsx)(c, {
      onChange: o,
      value: n.response,
      autofocus: t,
      placeholder: s.NW.string(s.t["Sqn+Wl"])
    })
  })
}