/** Chunk was on 99916 **/
r.d(t, {
  Gi: () => a,
  YJ: () => u,
  zY: () => d
});
var n = r(200651);
r(192379);
var i = r(481060),
  o = r(476770),
  s = r(592286),
  l = r(388032),
  c = r(641198);

function a(e) {
  let {
    value: t,
    placeholder: r,
    onChange: o,
    disabled: l,
    autofocus: c,
    className: a
  } = e;
  return (0, n.jsx)(i.oil, {
    inputClassName: a,
    maxLength: s.tL,
    value: null != t ? t : "",
    placeholder: r,
    onChange: o,
    disabled: l,
    autoFocus: c
  })
}

function u(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(o.CA, {
    title: t.label,
    children: (0, n.jsx)(i.Kx8, {
      className: c.disabledFieldBackground,
      value: t.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function d(e) {
  let {
    formField: t,
    autofocus: r,
    onChange: i
  } = e;
  return (0, n.jsx)(o.hK, {
    title: t.label,
    children: (0, n.jsx)(a, {
      onChange: i,
      value: t.response,
      autofocus: r,
      placeholder: l.NW.string(l.t["Sqn+Wl"])
    })
  })
}