/** Chunk was on 99840 **/
t.d(n, {
  QH: () => m,
  sp: () => h
});
var r = t(200651),
  o = t(192379),
  i = t(120356),
  a = t.n(i),
  s = t(481060),
  l = t(476770),
  c = t(814960),
  d = t(234014);

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
    radioItemIconClassName: a()(d.multipleChoiceIcon, c),
    radioBarClassName: d.multipleChoiceItem
  })), [m, c]);
  return (0, r.jsx)(s.FXm, {
    radioPosition: "right",
    disabled: n,
    options: h,
    value: i,
    onChange: u,
    radioItemClassName: l,
    itemTitleClassName: d.multipleChoiceTitle
  })
}

function m(e) {
  let {
    formField: n
  } = e, t = null != n.response ? n.choices[n.response] : "";
  return (0, r.jsx)(l.CA, {
    title: n.label,
    children: (0, r.jsx)(c.Gi, {
      className: d.disabledFieldBackground,
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
      field: n,
      value: n.response,
      onChange: t
    })
  })
}