/** Chunk was on 95140 **/
t.d(n, {
  Gi: () => s,
  YJ: () => d,
  zY: () => u
});
var l = t(255367);
t(73800);
var i = t(481060),
  a = t(489813),
  o = t(592286),
  r = t(388032),
  c = t(667084);

function s(e) {
  let {
    value: n,
    placeholder: t,
    onChange: a,
    disabled: r,
    autofocus: c,
    className: s
  } = e;
  return (0, l.jsx)(i.oil, {
    inputClassName: s,
    maxLength: o.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: a,
    disabled: r,
    autoFocus: c
  })
}

function d(e) {
  let {
    formField: n
  } = e;
  return (0, l.jsx)(a.CA, {
    title: n.label,
    children: (0, l.jsx)(i.Kx8, {
      className: c.disabledFieldBackground,
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
    onChange: i
  } = e;
  return (0, l.jsx)(a.hK, {
    title: n.label,
    children: (0, l.jsx)(s, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: r.intl.string(r.t["Sqn+Wl"])
    })
  })
}