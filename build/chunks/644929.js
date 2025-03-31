/** Chunk was on 99840 **/
t.d(n, {
  QC: () => h,
  dd: () => p
}), t(47120);
var r = t(200651);
t(192379);
var o = t(120356),
  i = t.n(o),
  a = t(481060),
  s = t(454585),
  l = t(476770),
  c = t(388032),
  d = t(234014);

function u(e) {
  let {
    terms: n,
    channelId: t,
    className: o
  } = e;
  return (0, r.jsx)("div", {
    className: i()(d.termsFieldBody, o),
    children: n.map((e, n) => (0, r.jsxs)("div", {
      className: d.termsRow,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(n + 1, ".")
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: d.termsRowContent,
        children: s.Z.parseGuildVerificationFormRule(e, !0, {
          channelId: t
        })
      })]
    }, "term-".concat(n)))
  })
}

function m(e) {
  let {
    onChange: n,
    checked: t,
    disabled: o
  } = e;
  return (0, r.jsx)(a.XZJ, {
    size: 24,
    type: a.XZJ.Types.INVERTED,
    value: t,
    onChange: n,
    disabled: o,
    style: {
      borderWidth: 2
    },
    className: d.checkbox,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: c.NW.string(c.t["2EXfGB"])
    })
  })
}

function h(e) {
  let {
    formField: n
  } = e;
  return (0, r.jsx)(l.Ih, {
    icon: a.snC,
    text: c.NW.string(c.t["2xbmoK"]),
    meetsRequirement: !!n.response
  })
}
let p = e => {
  let {
    channelId: n,
    formField: t,
    onChange: o
  } = e;
  return (0, r.jsxs)(l.hK, {
    title: c.NW.string(c.t.Q8OFNz),
    children: [(0, r.jsx)(u, {
      className: d.disabledFieldBackground,
      terms: t.values,
      channelId: n
    }), (0, r.jsx)(m, {
      onChange: o,
      checked: t.response
    })]
  })
}