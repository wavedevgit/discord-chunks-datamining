/** Chunk was on 99840 **/
t.d(n, {
  BO: () => u,
  QH: () => m,
  sp: () => h
});
var r = t(200651),
  o = t(192379),
  i = t(120356),
  a = t.n(i),
  s = t(481060),
  l = t(489813),
  c = t(707592),
  d = t(471231);

function u(e) {
  let {
    disabled: n,
    field: t,
    value: i,
    radioItemClassName: l,
    radioItemIconClassName: c,
    onChange: u
  } = e, {
    choices: m
  } = t, h = o.useMemo(() => m.map((e, n) => ({
    name: e,
    value: n,
    radioItemIconClassName: a()(d.multipleChoiceIcon, c)
  })), [m, c]);
  return (0, r.jsx)(s.FXm, {
    disabled: n,
    options: h,
    value: i,
    onChange: u,
    radioItemClassName: l,
    withTransparentBackground: !0
  })
}

function m(e) {
  let {
    formField: n
  } = e, t = null != n.response ? n.choices[n.response] : "";
  return (0, r.jsx)(l.hK, {
    title: n.label,
    children: (0, r.jsx)(c.Gi, {
      className: d.fieldBackground,
      value: t,
      disabled: !0
    })
  })
}

function h(e) {
  let {
    formField: n,
    onChange: t
  } = e;
  return (0, r.jsx)(l.hK, {
    title: n.label,
    children: (0, r.jsx)(u, {
      radioItemClassName: d.fieldBackground,
      field: n,
      value: n.response,
      onChange: t
    })
  })
}