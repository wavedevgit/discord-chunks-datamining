/** Chunk was on 27978 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  l = n(600164),
  s = n(388905),
  c = n(572265),
  u = n(455812);

function d(e) {
  let {
    value: t,
    onChange: n,
    subText: i,
    muted: d,
    marginTopStyle: h
  } = e;
  return (0, r.jsx)(l.Z, {
    className: null != h ? h : u.marginTop20,
    align: l.Z.Align.CENTER,
    children: (0, r.jsx)(a.XZJ, {
      value: t,
      type: a.XZJ.Types.INVERTED,
      onChange: (e, t) => n(t),
      className: c.checkbox,
      children: (0, r.jsx)(s.i_, {
        className: o()({
          [c.subText]: !d
        }),
        children: i
      })
    })
  })
}