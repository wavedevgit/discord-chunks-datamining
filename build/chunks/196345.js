/** Chunk was on 53967 **/
n.d(t, {
  EK: () => d,
  G0: () => E,
  QC: () => f,
  dd: () => I
}), n(388685);
var i = n(200651);
n(192379);
var r = n(120356),
  l = n.n(r),
  o = n(481060),
  s = n(454585),
  a = n(489813),
  u = n(388032),
  c = n(667084);

function d(e) {
  let {
    terms: t,
    channelId: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: l()(c.termsFieldBody, r),
    children: t.map((e, t) => (0, i.jsxs)("div", {
      className: c.termsRow,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: c.termsRowContent,
        children: s.Z.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function E(e) {
  let {
    onChange: t,
    checked: n,
    disabled: r
  } = e;
  return (0, i.jsx)(o.XZJ, {
    size: 20,
    type: o.XZJ.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: r,
    style: {
      borderWidth: 2
    },
    className: c.checkbox,
    children: (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: u.NW.string(u.t["2EXfGB"])
    })
  })
}

function f(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(a.Ih, {
    icon: o.snC,
    text: u.NW.string(u.t["2xbmoK"]),
    meetsRequirement: !!t.response
  })
}
let I = e => {
  let {
    channelId: t,
    formField: n,
    onChange: r
  } = e;
  return (0, i.jsxs)(a.hK, {
    title: u.NW.string(u.t.Q8OFNz),
    children: [(0, i.jsx)(d, {
      className: c.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, i.jsx)(E, {
      onChange: r,
      checked: n.response
    })]
  })
}