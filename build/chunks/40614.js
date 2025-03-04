/** Chunk was on 53494 **/
n.d(t, {
  V: () => c
});
var r = n(200651),
  i = n(481060),
  o = n(695346),
  l = n(316496),
  a = n(388032),
  s = n(930565);
let c = e => {
  let {
    onClick: t
  } = e, {
    rtcPopoutEnabled: n
  } = (0, l.S)("not sharing link"), c = o.G6.useSetting();
  return !n || c ? null : (0, r.jsx)(i.P3F, {
    onClick: t,
    className: s.container,
    children: (0, r.jsxs)(i.Text, {
      variant: "text-xs/medium",
      className: s.text,
      color: "header-secondary",
      children: [(0, r.jsx)(i.kZF, {
        size: "xxs",
        color: "currentColor",
        className: s.iconEye
      }), a.NW.string(a.t.jfrLLS)]
    })
  })
}