/** Chunk was on 99916 **/
r.d(t, {
  QH: () => f,
  sp: () => m
});
var n = r(200651),
  i = r(192379),
  o = r(120356),
  s = r.n(o),
  l = r(481060),
  c = r(476770),
  a = r(814960),
  u = r(641198);

function d(e) {
  let {
    disabled: t,
    field: r,
    value: o,
    radioItemClassName: c,
    radioItemIconClassName: a,
    onChange: d
  } = e, {
    choices: f
  } = r, m = i.useMemo(() => f.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: s()(u.multipleChoiceIcon, a),
    radioBarClassName: u.multipleChoiceItem
  })), [f, a]);
  return (0, n.jsx)(l.FXm, {
    radioPosition: "right",
    disabled: t,
    options: m,
    value: o,
    onChange: d,
    radioItemClassName: c,
    itemTitleClassName: u.multipleChoiceTitle
  })
}

function f(e) {
  let {
    formField: t
  } = e, r = null != t.response ? t.choices[t.response] : "";
  return (0, n.jsx)(c.CA, {
    title: t.label,
    children: (0, n.jsx)(a.Gi, {
      className: u.disabledFieldBackground,
      value: r,
      disabled: !0
    })
  })
}

function m(e) {
  let {
    formField: t,
    onChange: r
  } = e;
  return (0, n.jsx)(c.hK, {
    title: t.label,
    children: (0, n.jsx)(d, {
      field: t,
      value: t.response,
      onChange: r
    })
  })
}