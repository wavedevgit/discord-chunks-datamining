/** Chunk was on 95140 **/
t.d(n, {
  Gi: () => u,
  YJ: () => d,
  zY: () => p
});
var l = t(255367);
t(73800);
var i = t(755721),
  a = t(481060),
  o = t(489813),
  r = t(592286),
  s = t(388032),
  c = t(667084);

function u(e) {
  let {
    value: n,
    placeholder: t,
    onChange: a,
    disabled: o,
    autofocus: s,
    className: c
  } = e;
  return (0, l.jsx)(i.Is, {
    inputClassName: c,
    maxLength: r.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: a,
    disabled: o,
    autoFocus: s
  })
}

function d(e) {
  let {
    formField: n
  } = e;
  return (0, l.jsx)(o.CA, {
    title: n.label,
    children: (0, l.jsx)(a.Kx8, {
      className: c.disabledFieldBackground,
      value: n.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function p(e) {
  let {
    formField: n,
    autofocus: t,
    onChange: i
  } = e;
  return (0, l.jsx)(o.hK, {
    title: n.label,
    children: (0, l.jsx)(u, {
      onChange: i,
      value: n.response,
      autofocus: t,
      placeholder: s.intl.string(s.t["Sqn+Wl"])
    })
  })
}