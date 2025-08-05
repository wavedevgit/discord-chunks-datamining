/** Chunk was on 77025 **/
n.d(t, {
  EK: () => d,
  G0: () => m,
  QC: () => f,
  dd: () => h
}), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
  l = n.n(i),
  s = n(481060),
  a = n(454585),
  o = n(489813),
  c = n(388032),
  u = n(667084);

function d(e) {
  let {
    terms: t,
    channelId: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: l()(u.termsFieldBody, i),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: u.termsRow,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: u.termsRowContent,
        children: a.Z.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function m(e) {
  let {
    onChange: t,
    checked: n,
    disabled: i
  } = e;
  return (0, r.jsx)(s.XZJ, {
    size: 24,
    type: s.XZJ.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: i,
    style: {
      borderWidth: 2
    },
    className: u.checkbox,
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: c.intl.string(c.t["2EXfGB"])
    })
  })
}

function f(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(o.Ih, {
    icon: s.snC,
    text: c.intl.string(c.t["2xbmoK"]),
    meetsRequirement: !!t.response
  })
}
let h = e => {
  let {
    channelId: t,
    formField: n,
    onChange: i
  } = e;
  return (0, r.jsxs)(o.hK, {
    title: c.intl.string(c.t.Q8OFNz),
    children: [(0, r.jsx)(d, {
      className: u.disabledFieldBackground,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(m, {
      onChange: i,
      checked: n.response
    })]
  })
}