/** Chunk was on 95140 **/
t.d(n, {
  Gi: () => c,
  YJ: () => d,
  zY: () => u
});
var i = t(200651);
t(192379);
var l = t(481060),
  a = t(489813),
  o = t(592286),
  r = t(388032),
  s = t(679808);

function c(e) {
  let {
    value: n,
    placeholder: t,
    onChange: a,
    disabled: r,
    autofocus: s,
    className: c
  } = e;
  return (0, i.jsx)(l.oil, {
    inputClassName: c,
    maxLength: o.tL,
    value: null != n ? n : "",
    placeholder: t,
    onChange: a,
    disabled: r,
    autoFocus: s
  })
}

function d(e) {
  let {
    formField: n
  } = e;
  return (0, i.jsx)(a.CA, {
    title: n.label,
    children: (0, i.jsx)(l.Kx8, {
      className: s.disabledFieldBackground,
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
    onChange: l
  } = e;
  return (0, i.jsx)(a.hK, {
    title: n.label,
    children: (0, i.jsx)(c, {
      onChange: l,
      value: n.response,
      autofocus: t,
      placeholder: r.NW.string(r.t["Sqn+Wl"])
    })
  })
}