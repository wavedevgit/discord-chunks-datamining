/** Chunk was on 13323 **/
n.d(t, {
  Z: () => u
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  o = n(313201),
  l = n(36703),
  c = n(555428);
let d = (0, o.hQ)();

function u(e) {
  let {
    volume: t,
    title: n,
    description: i,
    label: o,
    onVolumeChange: u,
    refreshStyles: m = !1
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(c.soundboardRow, {
      [c.refresh]: m
    }),
    children: [(0, r.jsx)("div", {
      className: c.soundboardColumn,
      children: (0, r.jsx)(a.xJW, {
        title: n,
        children: (0, r.jsx)(a.R94, {
          children: i
        })
      })
    }), (0, r.jsx)("div", {
      className: c.soundboardColumn,
      children: (0, r.jsx)(a.xJW, {
        title: o,
        titleId: d,
        children: (0, r.jsx)(a.iRW, {
          initialValue: (0, l.P)(t),
          maxValue: 100,
          onValueRender: e => "".concat(e.toFixed(0), "%"),
          onValueChange: u,
          "aria-labelledby": d
        })
      })
    })]
  })
}