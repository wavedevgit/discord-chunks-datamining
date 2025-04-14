/** Chunk was on 96408 **/
o.d(n, {
  Gi: () => d,
  YJ: () => s,
  zY: () => _
});
var a = o(200651);
o(192379);
var t = o(481060),
  r = o(489813),
  i = o(592286),
  c = o(388032),
  l = o(667084);

function d(e) {
  let {
    value: n,
    placeholder: o,
    onChange: r,
    disabled: c,
    autofocus: l,
    className: d
  } = e;
  return (0, a.jsx)(t.oil, {
    inputClassName: d,
    maxLength: i.tL,
    value: null != n ? n : "",
    placeholder: o,
    onChange: r,
    disabled: c,
    autoFocus: l
  })
}

function s(e) {
  let {
    formField: n
  } = e;
  return (0, a.jsx)(r.CA, {
    title: n.label,
    children: (0, a.jsx)(t.Kx8, {
      className: l.disabledFieldBackground,
      value: n.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function _(e) {
  let {
    formField: n,
    autofocus: o,
    onChange: t
  } = e;
  return (0, a.jsx)(r.hK, {
    title: n.label,
    children: (0, a.jsx)(d, {
      onChange: t,
      value: n.response,
      autofocus: o,
      placeholder: c.NW.string(c.t["Sqn+Wl"])
    })
  })
}