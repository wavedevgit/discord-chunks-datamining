/** Chunk was on 53967 **/
n.d(t, {
  BO: () => d,
  QH: () => E,
  sp: () => f
});
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(481060),
  a = n(489813),
  u = n(707592),
  c = n(667084);

function d(e) {
  let {
    disabled: t,
    field: n,
    value: l,
    radioItemClassName: a,
    radioItemIconClassName: u,
    onChange: d
  } = e, {
    choices: E
  } = n, f = r.useMemo(() => E.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: o()(c.multipleChoiceIcon, u),
    radioBarClassName: c.multipleChoiceItem
  })), [E, u]);
  return (0, i.jsx)(s.FXm, {
    radioPosition: "right",
    disabled: t,
    options: f,
    value: l,
    onChange: d,
    radioItemClassName: a,
    itemTitleClassName: c.multipleChoiceTitle
  })
}

function E(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, i.jsx)(a.CA, {
    title: t.label,
    children: (0, i.jsx)(u.Gi, {
      className: c.disabledFieldBackground,
      value: n,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, i.jsx)(a.hK, {
    title: t.label,
    children: (0, i.jsx)(d, {
      field: t,
      value: t.response,
      onChange: n
    })
  })
}